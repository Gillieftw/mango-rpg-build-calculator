"use client"

import { useState, useEffect } from "react"
import { __allStatNames } from "@/app/data/talent_data"
import stat_data from "../data/stat_data"
import rune_data from "../data/rune_data"

interface Affix {
  stat: string
  value: number
}

type RuneSelection = {
  rune: string
  count: number
}

interface Slot {
  name: string
  type: string
  mainstat: string
  mainstat_value: number
  affixes: Affix[]
  enabled: boolean
}

const STORAGE_KEY_SLOTS = "EquipmentSlots"
const STORAGE_KEY_ENABLED = "EnabledEquipment"
const STORAGE_KEY_RUNES = "SelectedRunes"

const runeTiers = ["Low", "Middle", "High", "Legacy", "Divine"] as const

type RuneTier = typeof runeTiers[number]

const initialSlot = (): Slot => ({
  name: "",
  type: "",
  mainstat: "",
  mainstat_value: 0,
  affixes: Array.from({ length: 8 }, () => ({ stat: "", value: 0 })),
  enabled: false
})

const initialRuneSelection = (): RuneSelection => ({
  rune: "",
  count: 1
})

const emptyRuneSet = (): Record<RuneTier, RuneSelection[]> => {
  const result: Partial<Record<RuneTier, RuneSelection[]>> = {}
  for (const tier of runeTiers) {
    result[tier] = []
  }
  return result as Record<RuneTier, RuneSelection[]>
}

export default function EquipmentPage() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [slots, setSlots] = useState<Slot[]>([])
  const [selectedRunes, setSelectedRunes] = useState<Record<RuneTier, RuneSelection[]>>(emptyRuneSet())

  useEffect(() => {
    const storedSlots = localStorage.getItem(STORAGE_KEY_SLOTS)
    try {
      const parsed = storedSlots ? JSON.parse(storedSlots) : Array.from({ length: 8 }, initialSlot)
      setSlots(parsed)
    } catch {
      setSlots(Array.from({ length: 8 }, initialSlot))
    }

    const storedRunes = localStorage.getItem(STORAGE_KEY_RUNES)
    try {
      const parsed = storedRunes ? JSON.parse(storedRunes) : {}
      const filled: Record<RuneTier, RuneSelection[]> = emptyRuneSet()
      for (const tier of runeTiers) {
        filled[tier] = Array.isArray(parsed[tier]) ? parsed[tier] : []
      }
      setSelectedRunes(filled)
    } catch {
      setSelectedRunes(emptyRuneSet())
    }

    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated && slots.length > 0) {
      localStorage.setItem(STORAGE_KEY_SLOTS, JSON.stringify(slots))
      const enabledIndices = slots.map((slot, i) => slot.enabled ? i : null).filter(i => i !== null)
      localStorage.setItem(STORAGE_KEY_ENABLED, JSON.stringify(enabledIndices))
    }
  }, [slots, isHydrated])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY_RUNES, JSON.stringify(selectedRunes))
    }
  }, [selectedRunes, isHydrated])

  const addAffixRow = (slotIndex: number) => {
    const updated = [...slots]
    updated[slotIndex] = {
      ...updated[slotIndex],
      affixes: [...updated[slotIndex].affixes, { stat: "", value: 0 }]
    }
    setSlots(updated)
  }

  const addSlot = () => {
    setSlots([...slots, initialSlot()])
  }

  const toggleSlot = (index: number) => {
    setSlots(slots.map((slot, i) => i === index ? { ...slot, enabled: !slot.enabled } : slot))
  }

  const updateSlot = (index: number, field: string, value: string | number) => {
    const updated = slots.map((slot, i) => {
      if (i !== index) return slot
      const updatedSlot = { ...slot }
      if (field.startsWith("affix_")) {
        const [, affixIndexStr, affixField] = field.split("_")
        const affixIndex = parseInt(affixIndexStr, 10)
        updatedSlot.affixes = [...slot.affixes]
        updatedSlot.affixes[affixIndex] = {
          ...updatedSlot.affixes[affixIndex],
          [affixField]: value
        }
      } else {
        if (field in updatedSlot) {
          (updatedSlot[field as keyof Slot] as typeof value) = value
        }
      }
      return updatedSlot
    })
    setSlots(updated)
  }

  const addRuneRow = (tier: RuneTier) => {
    setSelectedRunes(prev => {
      const updated = { ...prev }
      updated[tier] = [...updated[tier], initialRuneSelection()]
      return updated
    })
  }

  const removeRuneRow = (tier: RuneTier, index: number) => {
    setSelectedRunes(prev => {
      const updated = { ...prev }
      const tierList = [...updated[tier]]
      tierList.splice(index, 1)
      updated[tier] = tierList
      return updated
    })
  }

  const updateRuneSelection = (tier: RuneTier, index: number, field: keyof RuneSelection, value: string | number) => {
    const updated = { ...selectedRunes }
    const tierList = [...updated[tier]]
    tierList[index] = { ...tierList[index], [field]: value }
    updated[tier] = tierList
    setSelectedRunes(updated)
  }

  const runesByTier = (tier: string) =>
    Object.entries(rune_data)
      .filter(([, rune]) => rune.tier === tier)
      .map(([name]) => name)

  const typeOptions = ["Helm", "Armor", "Amulet", "Ring", "Weapon", "Runeshard", "Tarot"]

  if (!isHydrated) return <div className="p-4 text-sm text-gray-600">Loading equipment editor...</div>

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold">Equipment Editor</h1>

      {/* Rune Editor */}
      <div className="space-y-8">
        {runeTiers.map(tier => (
          <div key={tier}>
            <h2 className="text-lg font-semibold">{tier} Tier Runes</h2>
            <table className="table-fixed border-collapse w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Rune</th>
                  <th className="border px-2 py-1">Count</th>
                  <th className="border px-2 py-1">Description</th>
                </tr>
              </thead>
              <tbody>
                {selectedRunes[tier].map((selection, idx) => (
                  <tr key={idx}>
                    <td className="border px-2 py-1">
                      <select
                        value={selection.rune}
                        onChange={e => updateRuneSelection(tier, idx, "rune", e.target.value)}
                        className="w-full border px-1"
                      >
                        <option value="">Select Rune</option>
                        {runesByTier(tier).map(runeName => (
                          <option key={runeName} value={runeName}>
                            {runeName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border px-2 py-1 flex gap-2 items-center">
                      <input
                        type="number"
                        value={selection.count}
                        min={1}
                        onChange={e => updateRuneSelection(tier, idx, "count", +e.target.value)}
                        className="w-full border px-1"
                      />
                      <button
                        type="button"
                        onClick={() => removeRuneRow(tier, idx)}
                        className="px-2 py-0.5 bg-red-400 text-white text-xs rounded"
                      >
                        ✕
                      </button>
                    </td>
                    <td className="border px-2 py-1">
                      {selection.rune && rune_data[selection.rune]
                        ? rune_data[selection.rune].description
                        : ""}
                    </td>
                  </tr>
                ))}
            </tbody>
            </table>
            <div className="mt-2">
              <button
                onClick={() => addRuneRow(tier)}
                className="px-3 py-1 bg-blue-400 text-white rounded"
              >
                + Add Rune
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Equipment Slots */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-4 items-start">
        {slots.map((slot, idx) => (
          <div
            key={idx}
            onClick={() => toggleSlot(idx)}
            className={`border rounded p-2 text-left cursor-pointer transition flex-shrink-0 ${
              slot.enabled ? "bg-green-100" : "bg-gray-100 opacity-50"
            }`}
          >
            <h2 className="font-semibold mb-2">Slot {idx + 1}</h2>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  value={slot.name}
                  onChange={e => updateSlot(idx, "name", e.target.value)}
                  className="w-full border px-1"
                  onClick={e => e.stopPropagation()}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Type</label>
                <select
                  value={slot.type}
                  onChange={e => updateSlot(idx, "type", e.target.value)}
                  className="w-full border px-1"
                  onClick={e => e.stopPropagation()}
                >
                  <option value="">Select</option>
                  {typeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <div className="flex gap-2 items-end">
                  <select
                    value={slot.mainstat}
                    onChange={e => updateSlot(idx, "mainstat", e.target.value)}
                    className="w-1/2 border px-1"
                    onClick={e => e.stopPropagation()}
                  >
                    <option value="">Main Stat</option>
                    {stat_data.Mainstats.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={slot.mainstat_value}
                    onChange={e => updateSlot(idx, "mainstat_value", +e.target.value)}
                    className="w-1/2 border px-1"
                    onClick={e => e.stopPropagation()}
                  />
                </div>
              </div>
            </div>
            <table className="table-fixed border border-collapse text-sm w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Affix</th>
                  <th className="border px-2 py-1">Value</th>
                </tr>
              </thead>
              <tbody>
                {slot.affixes.map((affix, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">
                      <select
                        value={affix.stat}
                        onChange={e => updateSlot(idx, `affix_${i}_stat`, e.target.value)}
                        className="w-full border px-1"
                        onClick={e => e.stopPropagation()}
                      >
                        <option value="">Select</option>
                        {__allStatNames.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="number"
                        value={affix.value}
                        onChange={e => updateSlot(idx, `affix_${i}_value`, +e.target.value)}
                        className="w-full border px-1"
                        onClick={e => e.stopPropagation()}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-2">
              <button
                onClick={e => {
                  e.stopPropagation()
                  addAffixRow(idx)
                }}
                className="w-full px-2 py-1 bg-blue-400 text-white rounded"
              >
                + Add Affix
              </button>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center w-full max-w-md border-dashed border-2 border-gray-400 rounded p-4">
          <button onClick={addSlot} className="px-4 py-1 bg-blue-500 text-white rounded">Add Slot</button>
        </div>
      </div>
    </div>
  )
}
