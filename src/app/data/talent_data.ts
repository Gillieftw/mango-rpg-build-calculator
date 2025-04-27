export type Talent = {
    category: string
    PreReq: Array<string>
    Tag: string
    BlockedTag: string
    gold: number
    exp: number
    tp_spent: number
    total_level: number
    class_levels: {
        tank_levels: number
        warrior_levels: number
        caster_levels: number
        healer_levels: number
    }
    description: string
    stats: Record<string, number>
    conversions: Array<{
        source: string
        ratio: number
        resulting_stat: string
    }>
}

function computeColumnWidths(data: Record<string, Talent>): string[] {
    console.log("Computing talent_data column widths")
    const headers = [
        "Name", "PreReq", "Tag", "BlockedTag",
        "Gold", "Exp", "TP", "Lvl",
        "Tank", "Warrior", "Caster", "Healer",
        "Description"
    ]
    const longest = headers.map(h => h.length)

    for (const [name, t] of Object.entries(data)) {
        const values = [
            name,
            Array.isArray(t.PreReq) ? t.PreReq.join(", ") : t.PreReq,
            t.Tag,
            t.BlockedTag,
            String(t.gold),
            String(t.exp),
            String(t.tp_spent),
            String(t.total_level),
            String(t.class_levels.tank_levels),
            String(t.class_levels.warrior_levels),
            String(t.class_levels.caster_levels),
            String(t.class_levels.healer_levels),
            t.description
        ]
        values.forEach((v, i) => {
            longest[i] = Math.max(longest[i], v.length)
        })
    }

    return longest.map(chLen => `${Math.ceil(chLen * 8 + 32)}px`)
}

const talent_data: Record<string, Talent> = {
    "Slash Training 1": {
        "category": "basic",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Increased Slash Damage",
        "stats": {
            "Slash%": 0.05
        },
        "conversions": []
    },
    "Slash Training 2": {
        "category": "basic",
        "PreReq": ["Slash Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Increased Slash Damage",
        "stats": {
            "Slash%": 0.05
        },
        "conversions": []
    },
    "Slash Mastery": {
        "category": "basic",
        "PreReq": ["Slash Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Increased Slash Damage",
        "stats": {
            "Slash%": 0.1
        },
        "conversions": []
    },
    "Pierce Training 1": {
        "category": "basic",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Pierce Training 2": {
        "category": "basic",
        "PreReq": ["Pierce Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Pierce Mastery": {
        "category": "basic",
        "PreReq": ["Pierce Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Pierce Damage",
        "stats": {
            "Pierce%": 0.1
        },
        "conversions": []
    },
    "Blunt Training 1": {
        "category": "basic",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Blunt Damage",
        "stats": {
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Blunt Training 2": {
        "category": "basic",
        "PreReq": ["Blunt Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Blunt Damage",
        "stats": {
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Blunt Mastery": {
        "category": "basic",
        "PreReq": ["Blunt Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Blunt Damage",
        "stats": {
            "Blunt%": 0.1
        },
        "conversions": []
    },
    "Vanguard 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% ATK",
        "stats": {
            "ATK%": 0.04
        },
        "conversions": []
    },
    "Vanguard 2": {
        "category": "tank",
        "PreReq": ["Vanguard 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% ATK",
        "stats": {
            "ATK%": 0.04
        },
        "conversions": []
    },
    "Vanguard's Will": {
        "category": "tank",
        "PreReq": ["Vanguard 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% ATK, +20 ATK",
        "stats": {
            "ATK%": 0.04,
            "ATK": 20
        },
        "conversions": []
    },
    "Defense Training 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% DEF",
        "stats": {
            "DEF%": 0.04
        },
        "conversions": []
    },
    "Defense Training 2": {
        "category": "tank",
        "PreReq": ["Defense Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% DEF",
        "stats": {
            "DEF%": 0.04
        },
        "conversions": []
    },
    "Tank Initiate": {
        "category": "tank",
        "PreReq": ["Defense Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% DEF",
        "stats": {
            "DEF%": 0.08
        },
        "conversions": []
    },
    "Tank Basic Training 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 DEF",
        "stats": {
            "DEF": 5
        },
        "conversions": []
    },
    "Tank Basic Training 2": {
        "category": "tank",
        "PreReq": ["Tank Basic Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 DEF",
        "stats": {
            "DEF": 8
        },
        "conversions": []
    },
    "Tank Basic Workout": {
        "category": "tank",
        "PreReq": ["Tank Basic Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 1,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 DEF",
        "stats": {
            "DEF": 12
        },
        "conversions": []
    },
    "Frontliner 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% DEF, +1% ATK",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.01
        },
        "conversions": []
    },
    "Frontliner 2": {
        "category": "tank",
        "PreReq": ["Frontliner 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% DEF, +1% ATK",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.01
        },
        "conversions": []
    },
    "Frontline Mastery": {
        "category": "tank",
        "PreReq": ["Frontliner 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% DEF, +4% ATK",
        "stats": {
            "DEF%": 0.08,
            "ATK%": 0.04
        },
        "conversions": []
    },
    "Fortitude 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Fortitude 2": {
        "category": "tank",
        "PreReq": ["Fortitude 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Fortitude Mastery": {
        "category": "tank",
        "PreReq": ["Fortitude 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% DEF, +8 DEF",
        "stats": {
            "DEF%": 0.08
        },
        "conversions": []
    },
    "Tank Body Augment 1": {
        "category": "tank",
        "PreReq": ["Tank Basic Workout"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 DEF, +3 ATK",
        "stats": {
            "ATK": 3,
            "DEF": 5
        },
        "conversions": []
    },
    "Tank Body Augment 2": {
        "category": "tank",
        "PreReq": ["Tank Body Augment 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 DEF, +5 ATK",
        "stats": {
            "DEF": 8,
            "ATK": 5
        },
        "conversions": []
    },
    "Tank Body Training": {
        "category": "tank",
        "PreReq": ["Tank Body Augment 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 DEF, +8 ATK",
        "stats": {
            "DEF": 12,
            "ATK": 8
        },
        "conversions": []
    },
    "Protector of War": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 1",
        "BlockedTag": "DEF Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Resist to Blunt/Slash/Pierce",
        "stats": {
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Blunt Res%": 0.1
        },
        "conversions": []
    },
    "War Protector 1": {
        "category": "tank",
        "PreReq": ["Protector of War"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% DEF",
        "stats": {
            "DEF%": 0.08
        },
        "conversions": []
    },
    "War Protector 2": {
        "category": "tank",
        "PreReq": ["War Protector 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "War Protector 3": {
        "category": "tank",
        "PreReq": ["War Protector 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Protector of Magic": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 1",
        "BlockedTag": "DEF Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Resist to Fire/Earth/Water",
        "stats": {
            "Fire Res%": 0.1,
            "Water Res%": 0.1,
            "Earth Res%": 0.1
        },
        "conversions": []
    },
    "Magic Protector 1": {
        "category": "tank",
        "PreReq": ["Protector of Magic"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Resist to Lightning/Wind, +6% DEF",
        "stats": {
            "DEF%": 0.06,
            "Lightning Res%": 0.1,
            "Wind Res%": 0.1
        },
        "conversions": []
    },
    "Magic Protector 2": {
        "category": "tank",
        "PreReq": ["Magic Protector 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Magic Protector 3": {
        "category": "tank",
        "PreReq": ["Magic Protector 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Protector of Divinity": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 1",
        "BlockedTag": "DEF Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Resist to Negative/Holy",
        "stats": {
            "Neg Res%": 0.1,
            "Holy Res%": 0.1
        },
        "conversions": []
    },
    "Divinity Protector 1": {
        "category": "tank",
        "PreReq": ["Protector of Divinity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Resist to Toxic, +6% DEF",
        "stats": {
            "DEF%": 0.06,
            "Toxic Res%": 0.1
        },
        "conversions": []
    },
    "Divinity Protector 2": {
        "category": "tank",
        "PreReq": ["Divinity Protector 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Divinity Protector 3": {
        "category": "tank",
        "PreReq": ["Divinity Protector 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 8,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Intimidation 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Threat Gained",
        "stats": {
            "Threat%": 0.05
        },
        "conversions": []
    },
    "Intimidation 2": {
        "category": "tank",
        "PreReq": ["Intimidation 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Threat Gained",
        "stats": {
            "Threat%": 0.05
        },
        "conversions": []
    },
    "Intimidation Mastery": {
        "category": "tank",
        "PreReq": ["Intimidation 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Threat Gained",
        "stats": {
            "Threat%": 0.1
        },
        "conversions": []
    },
    "Tank Adv Training 1": {
        "category": "tank",
        "PreReq": ["Tank Body Training"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 DEF, +6 ATK",
        "stats": {
            "DEF": 8,
            "ATK": 6
        },
        "conversions": []
    },
    "Tank Adv Training 2": {
        "category": "tank",
        "PreReq": ["Tank ADV Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 DEF, +9 ATK",
        "stats": {
            "DEF": 12,
            "ATK": 9
        },
        "conversions": []
    },
    "Tank Adv Body": {
        "category": "tank",
        "PreReq": ["Tank ADV Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+16 DEF, +12 ATK",
        "stats": {
            "DEF": 16,
            "ATK": 12
        },
        "conversions": []
    },
    "Shield Lord": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 2",
        "BlockedTag": "DEF Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% DEF",
        "stats": {
            "DEF%": 0.18
        },
        "conversions": []
    },
    "Shield Lord 1": {
        "category": "tank",
        "PreReq": ["Shield Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Shield Lord 2": {
        "category": "tank",
        "PreReq": ["Shield Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Shield Lord 3": {
        "category": "tank",
        "PreReq": ["Shield Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% DEF",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Protector Lord": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 2",
        "BlockedTag": "DEF Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +10% Heal",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Protector Lord 1": {
        "category": "tank",
        "PreReq": ["Protector Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% DEF, +4% Heal",
        "stats": {
            "DEF%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Protector Lord 2": {
        "category": "tank",
        "PreReq": ["Protector Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% DEF, +4% Heal",
        "stats": {
            "DEF%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Protector Lord 3": {
        "category": "tank",
        "PreReq": ["Protector Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% DEF, +4% Heal",
        "stats": {
            "DEF%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Knight Lord": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 2",
        "BlockedTag": "DEF Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +10% ATK, +10% MATK",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.1,
            "MATK%": 0.1
        },
        "conversions": []
    },
    "Knight Lord 1": {
        "category": "tank",
        "PreReq": ["Knight Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Def, +4% ATK, +4% MATK",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04
        },
        "conversions": []
    },
    "Knight Lord 2": {
        "category": "tank",
        "PreReq": ["Knight Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Def, +4% ATK, +4% MATK",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04
        },
        "conversions": []
    },
    "Knight Lord 3": {
        "category": "tank",
        "PreReq": ["Knight Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 15,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Def, +4% ATK, +4% MATK",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04
        },
        "conversions": []
    },
    "Inner Will 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP",
        "stats": {
            "MP": 10
        },
        "conversions": []
    },
    "Inner Will 2": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP",
        "stats": {
            "MP": 10
        },
        "conversions": []
    },
    "Inner Will 3": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP",
        "stats": {
            "MP": 10
        },
        "conversions": []
    },
    "Hero's Will 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +50 HP",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Hero's Will 2": {
        "category": "tank",
        "PreReq": ["Hero's Will 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +50 HP",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Undying Hero": {
        "category": "tank",
        "PreReq": ["Hero's Will 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +100 HP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Scorn 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05
        },
        "conversions": []
    },
    "Scorn 2": {
        "category": "tank",
        "PreReq": ["Scorn 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05
        },
        "conversions": []
    },
    "Insult Master": {
        "category": "tank",
        "PreReq": ["Scorn 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Crit Chance, +20% Crit Damage",
        "stats": {
            "Crit Chance%": 0.05,
            "Crit DMG%": 0.2
        },
        "conversions": []
    },
    "Aggression 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Threat Gained",
        "stats": {
            "Threat%": 0.05
        },
        "conversions": []
    },
    "Aggression 2": {
        "category": "tank",
        "PreReq": ["Aggression 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Threat Gained",
        "stats": {
            "Threat%": 0.05
        },
        "conversions": []
    },
    "Aggression Mastery": {
        "category": "tank",
        "PreReq": ["Aggression 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Threat Gained",
        "stats": {
            "Threat%": 0.1
        },
        "conversions": []
    },
    "Tank Hero Training 1": {
        "category": "tank",
        "PreReq": ["Tank ADV Body"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 DEF, +9 ATK",
        "stats": {
            "DEF": 12,
            "ATK": 9
        },
        "conversions": []
    },
    "Tank Hero Training 2": {
        "category": "tank",
        "PreReq": ["Tank Hero Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 DEF, +12 ATK",
        "stats": {
            "DEF": 15,
            "ATK": 12
        },
        "conversions": []
    },
    "Tank Hero Body": {
        "category": "tank",
        "PreReq": ["Tank Hero Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF, +15 ATK, +1.5% HP Regen, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25
        },
        "conversions": []
    },
    "Shield Hero": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 3",
        "BlockedTag": "DEF Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF",
        "stats": {
            "DEF%": 0.25
        },
        "conversions": []
    },
    "Blade Reflector": {
        "category": "tank",
        "PreReq": ["Shield Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Resist",
        "stats": {
            "Slash Res%": 0.2
        },
        "conversions": []
    },
    "Thrust Reflector": {
        "category": "tank",
        "PreReq": ["Shield Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Resist",
        "stats": {
            "Pierce Res%": 0.2
        },
        "conversions": []
    },
    "Tremor Reflector": {
        "category": "tank",
        "PreReq": ["Shield Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Resist",
        "stats": {
            "Blunt Res%": 0.2
        },
        "conversions": []
    },
    "Prismatic Hero": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 3",
        "BlockedTag": "DEF Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +10% Heal",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Flame Prism": {
        "category": "tank",
        "PreReq": ["Prismatic Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Fire Resist",
        "stats": {
            "Fire Res%": 0.2
        },
        "conversions": []
    },
    "Frost Prism": {
        "category": "tank",
        "PreReq": ["Prismatic Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Water Resist",
        "stats": {
            "Water Res%": 0.2
        },
        "conversions": []
    },
    "Stone Prism": {
        "category": "tank",
        "PreReq": ["Prismatic Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Earth Resist",
        "stats": {
            "Earth Res%": 0.2
        },
        "conversions": []
    },
    "Storm Prism": {
        "category": "tank",
        "PreReq": ["Prismatic Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Lightning Resist",
        "stats": {
            "Lightning Res%": 0.2
        },
        "conversions": []
    },
    "Gale Prism": {
        "category": "tank",
        "PreReq": ["Prismatic Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Wind Resist",
        "stats": {
            "Wind Res%": 0.2
        },
        "conversions": []
    },
    "War Hero": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 3",
        "BlockedTag": "DEF Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +10% ATK, +10% MATK",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.1,
            "MATK%": 0.1
        },
        "conversions": []
    },
    "Armed Warfare": {
        "category": "tank",
        "PreReq": ["War Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% DEF, +20% ATK",
        "stats": {
            "DEF%": 0.08,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Magical Warfare": {
        "category": "tank",
        "PreReq": ["War Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% DEF, +20% MATK",
        "stats": {
            "DEF%": 0.08,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Combined Arms": {
        "category": "tank",
        "PreReq": ["War Hero"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% DEF, +15% ATK, +15% MATK",
        "stats": {
            "DEF%": 0.08,
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Unbreaking Will 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +3% DEF",
        "stats": {
            "DEF%": 0.03
        },
        "conversions": []
    },
    "Unbreaking Will 2": {
        "category": "tank",
        "PreReq": ["Unbreaking Will 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +3% DEF",
        "stats": {
            "DEF%": 0.03
        },
        "conversions": []
    },
    "The Determinator": {
        "category": "tank",
        "PreReq": ["Unbreaking Will 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +6% DEF, +750 HP",
        "stats": {
            "DEF%": 0.06
        },
        "conversions": []
    },
    "Demigod's Blood 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +200 HP",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Demigod's Blood 2": {
        "category": "tank",
        "PreReq": ["Demigod's Blood 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +200 HP",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Undying Demigod": {
        "category": "tank",
        "PreReq": ["Demigod's Blood 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +500 HP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Mockery 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% Crit Chance",
        "stats": {
            "Crit Chance%": 0.06
        },
        "conversions": []
    },
    "Mockery 2": {
        "category": "tank",
        "PreReq": ["Mockery 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% Crit Chance",
        "stats": {
            "Crit Chance%": 0.06
        },
        "conversions": []
    },
    "Gift of Tongues": {
        "category": "tank",
        "PreReq": ["Mockery 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% Crit Chance, +40% Crit Damage",
        "stats": {
            "Crit Chance%": 0.06,
            "Crit DMG%": 0.4
        },
        "conversions": []
    },
    "Pressure 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Threat Gained",
        "stats": {
            "Threat%": 0.05
        },
        "conversions": []
    },
    "Pressure 2": {
        "category": "tank",
        "PreReq": ["Pressure 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Threat Gained",
        "stats": {
            "Threat%": 0.05
        },
        "conversions": []
    },
    "Pressure Mastery": {
        "category": "tank",
        "PreReq": ["Pressure 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Threat Gained",
        "stats": {
            "Threat%": 0.1
        },
        "conversions": []
    },
    "Paragon of Life": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 4",
        "BlockedTag": "DEF Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +500 HP",
        "stats": {
            "DEF%": 0.25
        },
        "conversions": []
    },
    "Paragon's Blood": {
        "category": "tank",
        "PreReq": ["Paragon of Life"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +500 HP",
        "stats": {
            "DEF%": 0.12
        },
        "conversions": []
    },
    "Paragon's Steel": {
        "category": "tank",
        "PreReq": ["Paragon of Life"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Physical Resist",
        "stats": {
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Blunt Res%": 0.1
        },
        "conversions": []
    },
    "Paragon's Endurance": {
        "category": "tank",
        "PreReq": ["Paragon of Life"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF",
        "stats": {
            "DEF%": 0.2
        },
        "conversions": []
    },
    "Paragon of War": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 4",
        "BlockedTag": "DEF Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% ATK, +15% MATK",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Paragon's Blade": {
        "category": "tank",
        "PreReq": ["Paragon of War"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +20% ATK",
        "stats": {
            "DEF%": 0.12,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Paragon's Magic": {
        "category": "tank",
        "PreReq": ["Paragon of War"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +20% MATK",
        "stats": {
            "DEF%": 0.12,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Paragon's Luck": {
        "category": "tank",
        "PreReq": ["Paragon of War"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +4% Crit Chance, +20% Crit Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.2,
            "DEF%": 0.12
        },
        "conversions": []
    },
    "Paragon of Courage": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 4",
        "BlockedTag": "DEF Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +10 MP, +15% Heal",
        "stats": {
            "DEF%": 0.2
        },
        "conversions": []
    },
    "Paragon's Bravery": {
        "category": "tank",
        "PreReq": ["Paragon of Courage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +400 HP",
        "stats": {
            "DEF%": 0.12
        },
        "conversions": []
    },
    "Paragon's Will": {
        "category": "tank",
        "PreReq": ["Paragon of Courage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +10 MP",
        "stats": {
            "DEF%": 0.12
        },
        "conversions": []
    },
    "Paragon's Wisdom": {
        "category": "tank",
        "PreReq": ["Paragon of Courage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +30% Heal",
        "stats": {
            "DEF%": 0.12,
            "HEAL%": 0.3
        },
        "conversions": []
    },
    "Heimdall's Blessing 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +5% DEF, +300 HP",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Heimdall's Blessing 2": {
        "category": "tank",
        "PreReq": ["Heimdall's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +5% DEF, +300 HP",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Avatar of Heimdall": {
        "category": "tank",
        "PreReq": ["Heimdall's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +10% DEF, +750 HP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Vidar's Blessing 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +15% ATK, +30 ATK",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Vidar's Blessing 2": {
        "category": "tank",
        "PreReq": ["Vidar's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +15% ATK, +30 ATK",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Avatar of Vidar": {
        "category": "tank",
        "PreReq": ["Vidar's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +20% ATK, +40 ATK",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Bragi's Blessing 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% Crit Chance",
        "stats": {
            "Crit Chance%": 0.06
        },
        "conversions": []
    },
    "Bragi's Blessing 2": {
        "category": "tank",
        "PreReq": ["Bragi's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% Crit Chance",
        "stats": {
            "Crit Chance%": 0.06
        },
        "conversions": []
    },
    "Avatar of Bragi": {
        "category": "tank",
        "PreReq": ["Bragi's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% Crit Chance, +60% Crit Damage",
        "stats": {
            "Crit Chance%": 0.06,
            "Crit DMG%": 0.6
        },
        "conversions": []
    },
    "God of Eternity": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 5",
        "BlockedTag": "DEF Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +300 HP",
        "stats": {
            "DEF%": 0.25
        },
        "conversions": []
    },
    "Eternal Life": {
        "category": "tank",
        "PreReq": ["God of Eternity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +450 HP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Eternal Shield": {
        "category": "tank",
        "PreReq": ["God of Eternity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF",
        "stats": {
            "DEF%": 0.25
        },
        "conversions": []
    },
    "Eternal Spirit": {
        "category": "tank",
        "PreReq": ["God of Eternity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +10% DEF",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "God of Vengeance": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 5",
        "BlockedTag": "DEF Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% ATK, +20% MATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Curse of War": {
        "category": "tank",
        "PreReq": ["God of Vengeance"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +20% ATK",
        "stats": {
            "DEF%": 0.12,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Curse of Power": {
        "category": "tank",
        "PreReq": ["God of Vengeance"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +20% MATK",
        "stats": {
            "DEF%": 0.12,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Curse of Hatred": {
        "category": "tank",
        "PreReq": ["God of Vengeance"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +4% Crit Chance, +40% Crit Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.4,
            "DEF%": 0.12
        },
        "conversions": []
    },
    "God of Protection": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 5",
        "BlockedTag": "DEF Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Spirit of Life": {
        "category": "tank",
        "PreReq": ["God of Protection"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +450 HP, +6 MP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Spirit of Energy": {
        "category": "tank",
        "PreReq": ["God of Protection"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +16 MP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Spirit of Protection": {
        "category": "tank",
        "PreReq": ["God of Protection"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 70,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +40% Heal",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.4
        },
        "conversions": []
    },
    "Saga of Hercules 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +500 HP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Saga of Hercules 2": {
        "category": "tank",
        "PreReq": ["Saga of Hercules 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +500 HP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Strength of Hercules": {
        "category": "tank",
        "PreReq": ["Saga of Hercules 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+16% DEF, +900 HP",
        "stats": {
            "DEF%": 0.16
        },
        "conversions": []
    },
    "Saga of Ajax 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +20% ATK, +25 ATK",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Saga of Ajax 2": {
        "category": "tank",
        "PreReq": ["Saga of Ajax 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +20% ATK, +25 ATK",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Ravages of Ajax": {
        "category": "tank",
        "PreReq": ["Saga of Ajax 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +35% ATK, +50 ATK",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.35
        },
        "conversions": []
    },
    "Saga of Theseus 1": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Saga of Theseus 2": {
        "category": "tank",
        "PreReq": ["Saga of Theseus 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Call of Theseus": {
        "category": "tank",
        "PreReq": ["Saga of Theseus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +4% Crit Chance, +50% Crit Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.5,
            "DEF%": 0.1
        },
        "conversions": []
    },
    "Mark of Hephaestus": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 6",
        "BlockedTag": "DEF Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% DEF, +450 HP",
        "stats": {
            "DEF%": 0.3
        },
        "conversions": []
    },
    "Aegis of Perseus": {
        "category": "tank",
        "PreReq": ["Mark of Hephaestus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Fire, Lightning, and Wind Resist",
        "stats": {
            "Fire Res%": 0.1,
            "Lightning Res%": 0.1,
            "Wind Res%": 0.1
        },
        "conversions": []
    },
    "The Golden Fleece": {
        "category": "tank",
        "PreReq": ["Mark of Hephaestus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Earth, Water, and Holy Resist",
        "stats": {
            "Water Res%": 0.1,
            "Earth Res%": 0.1,
            "Holy Res%": 0.1
        },
        "conversions": []
    },
    "The Nemean Hide": {
        "category": "tank",
        "PreReq": ["Mark of Hephaestus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Physical Resist",
        "stats": {
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Blunt Res%": 0.1
        },
        "conversions": []
    },
    "Mark of Ares": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 6",
        "BlockedTag": "DEF Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +25% ATK, +25% MATK",
        "stats": {
            "DEF%": 0.25,
            "ATK%": 0.25,
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Spear of Achilles": {
        "category": "tank",
        "PreReq": ["Mark of Ares"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +50% ATK",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.5
        },
        "conversions": []
    },
    "Bolt of Zeus": {
        "category": "tank",
        "PreReq": ["Mark of Ares"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +50% MATK, +15% Void Damage",
        "stats": {
            "DEF%": 0.15,
            "MATK%": 0.5,
            "Void%": 0.15
        },
        "conversions": []
    },
    "Sword of Peleus": {
        "category": "tank",
        "PreReq": ["Mark of Ares"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +4% Crit Chance, +60% Crit Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.6,
            "DEF%": 0.15
        },
        "conversions": []
    },
    "Mark of Athena": {
        "category": "tank",
        "PreReq": [""],
        "Tag": "DEF Path 6",
        "BlockedTag": "DEF Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +25% Heal",
        "stats": {
            "DEF%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "The Baetylus": {
        "category": "tank",
        "PreReq": ["Mark of Athena"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +60% Heal",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.6
        },
        "conversions": []
    },
    "The Kibisis": {
        "category": "tank",
        "PreReq": ["Mark of Athena"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +16 MP, +1200 HP",
        "stats": {
            "DEF%": 0.15
        },
        "conversions": []
    },
    "The Palladium": {
        "category": "tank",
        "PreReq": ["Mark of Athena"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 85,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +10% Negative Resist, +10% Void Resist",
        "stats": {
            "DEF%": 0.25,
            "Neg Res%": 0.1,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Shield Archon": {
        "category": "tank",
        "PreReq": ["DEF Path 2"],
        "Tag": "DefArchon",
        "BlockedTag": "DefArchon",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +10% Void Damage, +5% Max HP Multiplier",
        "stats": {
            "DEF%": 0.15,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Shield Archon 1": {
        "category": "tank",
        "PreReq": ["Shield Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +5% Void Penetration, -3% Global Damage",
        "stats": {
            "DEF%": 0.15,
            "Void Pen%": 0.05
        },
        "conversions": []
    },
    "Shield Archon 2": {
        "category": "tank",
        "PreReq": ["Shield Archon 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +5% Void Penetration, -3% Global Damage",
        "stats": {
            "DEF%": 0.15,
            "Void Pen%": 0.05
        },
        "conversions": []
    },
    "Shield Archon 3": {
        "category": "tank",
        "PreReq": ["Shield Archon 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +20% Threat Bonus, +5% Max HP Multiplier",
        "stats": {
            "DEF%": 0.25,
            "Threat%": 0.2
        },
        "conversions": []
    },
    "Protector Archon": {
        "category": "tank",
        "PreReq": ["DEF Path 2"],
        "Tag": "DefArchon",
        "BlockedTag": "DefArchon",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +15% Heal, +0.5% HP Regen Rate",
        "stats": {
            "DEF%": 0.05,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Protector Archon 1": {
        "category": "tank",
        "PreReq": ["Protector Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +10% Heal, +2% Global Heal Effect",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Protector Archon 2": {
        "category": "tank",
        "PreReq": ["Protector Archon 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +10% Heal, +2% Global Heal Effect",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Protector Archon 3": {
        "category": "tank",
        "PreReq": ["Protector Archon 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +2% Global Heal Effect, +1% HP Regen Rate",
        "stats": {
            "DEF%": 0.15
        },
        "conversions": []
    },
    "Knight Archon": {
        "category": "tank",
        "PreReq": ["DEF Path 2"],
        "Tag": "DefArchon",
        "BlockedTag": "DefArchon",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +30% ATK, +30% MATK, +30% Crit Damage",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.3,
            "MATK%": 0.3
        },
        "conversions": []
    },
    "Knight Archon 1": {
        "category": "tank",
        "PreReq": ["Knight Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +15% ATK, +15% MATK",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Knight Archon 2": {
        "category": "tank",
        "PreReq": ["Knight Archon 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +15% ATK, +15% MATK",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Knight Archon 3": {
        "category": "tank",
        "PreReq": ["Knight Archon 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +2% Global Damage, Conversion 10% DEF to ATK and MATK",
        "stats": {
            "DEF%": 0.2
        },
        "conversions": [
            {
                "source": "DEF",
                "ratio": 0.1,
                "resulting_stat": "atk"
            },
            {
                "source": "DEF",
                "ratio": 0.1,
                "resulting_stat": "matk"
            }
        ]
    },
    "Lady's Blessing 1": {
        "category": "tank",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +10% Physical Resist",
        "stats": {
            "Global DEF%": 0.01,
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Blunt Res%": 0.1
        },
        "conversions": []
    },
    "Lady's Blessing 2": {
        "category": "tank",
        "PreReq": ["Lady's Blessing 1", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +10% Elemental Resist",
        "stats": {
            "Fire Res%": 0.1,
            "Water Res%": 0.1,
            "Lightning Res%": 0.1,
            "Wind Res%": 0.1,
            "Earth Res%": 0.1,
            "Toxic Res%": 0.1
        },
        "conversions": []
    },
    "Protection of Galatine": {
        "category": "tank",
        "PreReq": ["Lady's Blessing 2", "DeathGodBlessing"],
        "Tag": "Tank125",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +10% Divine Resist",
        "stats": {
            "Neg Res%": 0.1,
            "Holy Res%": 0.1
        },
        "conversions": []
    },
    "Heroic Valour 1": {
        "category": "tank",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +6% Threat Gained",
        "stats": {
            "Threat%": 0.06
        },
        "conversions": []
    },
    "Heroic Valour 2": {
        "category": "tank",
        "PreReq": ["Heroic Valour 1", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +6% Threat Gained",
        "stats": {
            "Threat%": 0.06
        },
        "conversions": []
    },
    "Strength of Beowulf": {
        "category": "tank",
        "PreReq": ["Heroic Valour 2", "DeathGodBlessing"],
        "Tag": "Tank125",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +18% Threat Gained",
        "stats": {
            "Threat%": 0.18
        },
        "conversions": []
    },
    "Strange Wyrd 1": {
        "category": "tank",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +8% Void Damage",
        "stats": {
            "Void%": 0.08
        },
        "conversions": []
    },
    "Strange Wyrd 2": {
        "category": "tank",
        "PreReq": ["Strange Wyrd 1", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +8% Void Damage",
        "stats": {
            "Void%": 0.08
        },
        "conversions": []
    },
    "Riastrad of Cuchulainn": {
        "category": "tank",
        "PreReq": ["Strange Wyrd 2", "DeathGodBlessing"],
        "Tag": "Tank125",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +8% Void Penetration",
        "stats": {
            "Void Pen%": 0.08
        },
        "conversions": []
    },
    "Emptiness of Thought": {
        "category": "tank",
        "PreReq": ["Tank125"],
        "Tag": "Tank125Cap",
        "BlockedTag": "Tank125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% Threat Gained, +10% Void Penetration, +20% Void Damage",
        "stats": {
            "Void%": 0.2,
            "Void Pen%": 0.1,
            "Threat%": 0.4
        },
        "conversions": []
    },
    "Lernaean Blood": {
        "category": "tank",
        "PreReq": ["Tank125"],
        "Tag": "Tank125Cap",
        "BlockedTag": "Tank125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2.5% HP Regen, +10% Max HP Multiplier",
        "stats": {
            "HP Regen%": 0.025,
            "Max HP Multiplier%": 0.1
        },
        "conversions": []
    },
    "Morrigan's Guardianship": {
        "category": "tank",
        "PreReq": ["Tank125"],
        "Tag": "Tank125Cap",
        "BlockedTag": "Tank125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global Damage, 35% of DEF converted to Healpower",
        "stats": {
            "Global DMG%": 0.02,
        },
        "conversions": []
    },
    "Star Sands of Dawn": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +3% Max HP Multi, -2% xVoid DMG",
        "stats": {
            "Global DEF%": 0.01,
            "Max HP Multiplier%": 0.03,
            "xVoid%": -0.02
        },
        "conversions": []
    },
    "Star Sands of Horizon": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +3% Max HP Multi, -5% Global ATK",
        "stats": {
            "Global DEF%": 0.01,
            "Max HP Multiplier%": 0.03,
            "Global ATK%": -0.05
        },
        "conversions": []
    },
    "Star Sands of Twilight": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +3% Max HP Multi, -5% Global MATK",
        "stats": {
            "Global DEF%": 0.01,
            "Max HP Multiplier%": 0.03,
            "Global MATK%": -0.05
        },
        "conversions": []
    },
    "Time Shard of Akonoteth": {
        "category": "tank",
        "PreReq": ["T_AeonShard"],
        "Tag": "T_AeonCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global DEF, +6% Max HP Multi",
        "stats": {
            "Global DEF%": 0.02,
            "Max HP Multiplier%": 0.06
        },
        "conversions": []
    },
    "Star Light of Ego": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +6% xVoid DMG, +6% Threat Gain",
        "stats": {
            "Threat%": 0.06
        },
        "conversions": []
    },
    "Star Light of Desire": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +8% xVoid DMG, -9% Max HP Multi, +12% Threat Gain",
        "stats": {
            "Threat%": 0.12
        },
        "conversions": []
    },
    "Star Light of Spirit": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +4% xVoid Pen, -9% Max HP Multi, +12% Threat Gain",
        "stats": {
            "Threat%": 0.12
        },
        "conversions": []
    },
    "Soul Shard of Akonoteth": {
        "category": "tank",
        "PreReq": ["T_InfinityShard"],
        "Tag": "T_InfinityCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global DEF, +3% xVoid DMG",
        "stats": {
            "Global DEF%": 0.02,
            "xVoid%": 0.03
        },
        "conversions": []
    },
    "Star Gem of Protons": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +10% Physical Resist",
        "stats": {
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Blunt Res%": 0.1
        },
        "conversions": []
    },
    "Star Gem of Electrons": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +10% Elemental Resist",
        "stats": {
            "Fire Res%": 0.1,
            "Water Res%": 0.1,
            "Lightning Res%": 0.1,
            "Wind Res%": 0.1,
            "Earth Res%": 0.1,
            "Toxic Res%": 0.1
        },
        "conversions": []
    },
    "Star Gem of Neutrons": {
        "category": "tank",
        "PreReq": ["PrimalEssence"],
        "Tag": "T_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global DEF, +10% Divine Resist",
        "stats": {
            "Neg Res%": 0.1,
            "Holy Res%": 0.1
        },
        "conversions": []
    },
    "Space Shard of Akonoteth": {
        "category": "tank",
        "PreReq": ["T_CosmicShard"],
        "Tag": "T_CosmicCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global DEF, +5% All Resist",
        "stats": {
            "Slash Res%": 0.05,
            "Pierce Res%": 0.05,
            "Blunt Res%": 0.05,
            "Fire Res%": 0.05,
            "Water Res%": 0.05,
            "Lightning Res%": 0.05,
            "Wind Res%": 0.05,
            "Earth Res%": 0.05,
            "Toxic Res%": 0.05,
            "Neg Res%": 0.05,
            "Holy Res%": 0.05,
            "Void Res%": 0.05
        },
        "conversions": []
    },
    "Time Shard of Mogdrolo'toth": {
        "category": "tank",
        "PreReq": ["T_StarGodHeart", "StarEssence"],
        "Tag": "T175 Shard",
        "BlockedTag": "T175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1.5% HP Regen, +5% Max HP Multi, Temp HP Start of 15% Max HP",
        "stats": {
            "HP Regen%": 0.015,
            "Max HP Multiplier%": 0.05,
            "Temp HP%": 0.15
        },
        "conversions": []
    },
    "Soul Shard of Mogdrolo'toth": {
        "category": "tank",
        "PreReq": ["T_StarGodHeart", "StarEssence"],
        "Tag": "T175 Shard",
        "BlockedTag": "T175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% xVoid Pen, Conversion 50% Resvoid to Elevoid",
        "stats": {
            "xVoid Pen%": 0.02
        },
        "conversions": [
            {
                "source": "Void Res%",
                "ratio": 0.5,
                "resulting_stat": "Void%"
            }
        ]
    },
    "Space Shard of Mogdrolo'toth": {
        "category": "tank",
        "PreReq": ["T_StarGodHeart", "StarEssence"],
        "Tag": "T175 Shard",
        "BlockedTag": "T175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global DEF, +5% All Resist",
        "stats": {
            "Slash Res%": 0.05,
            "Pierce Res%": 0.05,
            "Blunt Res%": 0.05,
            "Fire Res%": 0.05,
            "Water Res%": 0.05,
            "Lightning Res%": 0.05,
            "Wind Res%": 0.05,
            "Earth Res%": 0.05,
            "Toxic Res%": 0.05,
            "Neg Res%": 0.05,
            "Holy Res%": 0.05,
            "Void Res%": 0.05
        },
        "conversions": []
    },
    "Time Core of Mogdrolo'toth": {
        "category": "tank",
        "PreReq": ["T175 Shard"],
        "Tag": "T175 Core",
        "BlockedTag": "T175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-25% Max HP Multi, Temp HP Start of 100% Max HP.",
        "stats": {
            "Max HP Multiplier%": -0.25,
            "Temp HP%": 1.0
        },
        "conversions": []
    },
    "Soul Core of Mogdrolo'toth": {
        "category": "tank",
        "PreReq": ["T175 Shard"],
        "Tag": "T175 Core",
        "BlockedTag": "T175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "Conversion 50% Resvoid to Elevoid, Penalty 12% Resvoid to All Res",
        "stats": {},
        "conversions": [
            {
                "source": "Void Res%",
                "ratio": 0.5,
                "resulting_stat": "Void%"
            },
            {
                "source": "Void Res%",
                "ratio": -0.12,
                "resulting_stat": "All Res%"
            }
        ]
    },
    "Space Core of Mogdrolo'toth": {
        "category": "tank",
        "PreReq": ["T175 Shard"],
        "Tag": "T175 Core",
        "BlockedTag": "T175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-40% Global DEF, +75% All Resist",
        "stats": {
            "Slash Res%": 0.75,
            "Pierce Res%": 0.75,
            "Blunt Res%": 0.75,
            "Fire Res%": 0.75,
            "Water Res%": 0.75,
            "Lightning Res%": 0.75,
            "Wind Res%": 0.75,
            "Earth Res%": 0.75,
            "Toxic Res%": 0.75,
            "Neg Res%": 0.75,
            "Holy Res%": 0.75,
            "Void Res%": 0.75
        },
        "conversions": []
    },
    "Sealed Core of Mogdrolo'toth": {
        "category": "tank",
        "PreReq": ["T175 Shard"],
        "Tag": "T175 Core",
        "BlockedTag": "T175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 175,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global DEF, +4% xVoid DMG, +5% Max HP Multi",
        "stats": {
            "Global DEF%": 0.02,
            "xVoid%": 0.04,
            "Max HP Multiplier%": 0.05
        },
        "conversions": []
    },
    "Resolve 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Resolve 2": {
        "category": "warrior",
        "PreReq": ["Resolve 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Warrior's Resolve": {
        "category": "warrior",
        "PreReq": ["Resolve 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% DEF, +20 DEF",
        "stats": {
            "DEF%": 0.05
        },
        "conversions": []
    },
    "Combat Training 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% ATK",
        "stats": {
            "ATK%": 0.04
        },
        "conversions": []
    },
    "Combat Training 2": {
        "category": "warrior",
        "PreReq": ["Combat Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% ATK",
        "stats": {
            "ATK%": 0.04
        },
        "conversions": []
    },
    "Combat Initiate": {
        "category": "warrior",
        "PreReq": ["Combat Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% ATK",
        "stats": {
            "ATK%": 0.08
        },
        "conversions": []
    },
    "Strength Training 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4 ATK",
        "stats": {},
        "conversions": []
    },
    "Strength Training 2": {
        "category": "warrior",
        "PreReq": ["Strength Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6 ATK",
        "stats": {},
        "conversions": []
    },
    "Strength Exercises": {
        "category": "warrior",
        "PreReq": ["Strength Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 1,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK",
        "stats": {},
        "conversions": []
    },
    "Warrior Spirit 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% ATK, +1% DEF",
        "stats": {
            "DEF%": 0.01,
            "ATK%": 0.04
        },
        "conversions": []
    },
    "Warrior Spirit 2": {
        "category": "warrior",
        "PreReq": ["Warrior Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% ATK, +1% DEF",
        "stats": {
            "DEF%": 0.01,
            "ATK%": 0.04
        },
        "conversions": []
    },
    "Spirit of War": {
        "category": "warrior",
        "PreReq": ["Warrior Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% ATK, +4% DEF",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.08
        },
        "conversions": []
    },
    "Combat Mastery 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% ATK",
        "stats": {
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Combat Mastery 2": {
        "category": "warrior",
        "PreReq": ["Combat Mastery 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% ATK",
        "stats": {
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Combat Adept": {
        "category": "warrior",
        "PreReq": ["Combat Mastery 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% ATK, +8 ATK",
        "stats": {
            "ATK%": 0.08
        },
        "conversions": []
    },
    "Adv Strength Training 1": {
        "category": "warrior",
        "PreReq": ["Strength Exercises"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK",
        "stats": {},
        "conversions": []
    },
    "Adv Strength Training 2": {
        "category": "warrior",
        "PreReq": ["Adv Strength Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK",
        "stats": {},
        "conversions": []
    },
    "Body Building": {
        "category": "warrior",
        "PreReq": ["Adv Strength Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Path of the Archer": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "ATK Path 1",
        "BlockedTag": "ATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Archer Path 1": {
        "category": "warrior",
        "PreReq": ["Path of the Archer"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Pierce Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Pierce%": 0.04
        },
        "conversions": []
    },
    "Archer Path 2": {
        "category": "warrior",
        "PreReq": ["Archer Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Pierce Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Pierce%": 0.04
        },
        "conversions": []
    },
    "Archer Path 3": {
        "category": "warrior",
        "PreReq": ["Archer Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Pierce Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Pierce%": 0.04
        },
        "conversions": []
    },
    "Path of the Sword": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "ATK Path 1",
        "BlockedTag": "ATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Slash Damage",
        "stats": {
            "Slash%": 0.25
        },
        "conversions": []
    },
    "Sword Path 1": {
        "category": "warrior",
        "PreReq": ["Path of the Sword"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage",
        "stats": {
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Sword Path 2": {
        "category": "warrior",
        "PreReq": ["Sword Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage",
        "stats": {
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Sword Path 3": {
        "category": "warrior",
        "PreReq": ["Sword Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage",
        "stats": {
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Path of the Lance": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "ATK Path 1",
        "BlockedTag": "ATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Pierce Damage",
        "stats": {
            "Pierce%": 0.25
        },
        "conversions": []
    },
    "Lance Path 1": {
        "category": "warrior",
        "PreReq": ["Path of the Lance"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Pierce Damage",
        "stats": {
            "Pierce%": 0.08
        },
        "conversions": []
    },
    "Lance Path 2": {
        "category": "warrior",
        "PreReq": ["Lance Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Pierce Damage",
        "stats": {
            "Pierce%": 0.08
        },
        "conversions": []
    },
    "Lance Path 3": {
        "category": "warrior",
        "PreReq": ["Lance Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Pierce Damage",
        "stats": {
            "Pierce%": 0.08
        },
        "conversions": []
    },
    "Path of the Hammer": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "ATK Path 1",
        "BlockedTag": "ATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Blunt Damage",
        "stats": {
            "Blunt%": 0.25
        },
        "conversions": []
    },
    "Hammer Path 1": {
        "category": "warrior",
        "PreReq": ["Path of the Hammer"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Blunt Damage",
        "stats": {
            "Blunt%": 0.08
        },
        "conversions": []
    },
    "Hammer Path 2": {
        "category": "warrior",
        "PreReq": ["Hammer Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Blunt Damage",
        "stats": {
            "Blunt%": 0.08
        },
        "conversions": []
    },
    "Hammer Path 3": {
        "category": "warrior",
        "PreReq": ["Hammer Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Blunt Damage",
        "stats": {
            "Blunt%": 0.08
        },
        "conversions": []
    },
    "Path of the Fist": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "ATK Path 1",
        "BlockedTag": "ATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Fist Path 1": {
        "category": "warrior",
        "PreReq": ["Path of the Fist"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Blunt Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Blunt%": 0.04
        },
        "conversions": []
    },
    "Fist Path 2": {
        "category": "warrior",
        "PreReq": ["Fist Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Blunt Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Blunt%": 0.04
        },
        "conversions": []
    },
    "Fist Path 3": {
        "category": "warrior",
        "PreReq": ["Fist Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Blunt Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Blunt%": 0.04
        },
        "conversions": []
    },
    "Path of the Dagger": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "ATK Path 1",
        "BlockedTag": "ATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage, +6% Crit Chance",
        "stats": {
            "Crit Chance%": 0.06,
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Dagger Path 1": {
        "category": "warrior",
        "PreReq": ["Path of the Dagger"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Slash Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Slash%": 0.02
        },
        "conversions": []
    },
    "Dagger Path 2": {
        "category": "warrior",
        "PreReq": ["Dagger Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Slash Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Slash%": 0.02
        },
        "conversions": []
    },
    "Dagger Path 3": {
        "category": "warrior",
        "PreReq": ["Dagger Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 8,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Slash Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Slash%": 0.02
        },
        "conversions": []
    },
    "Hero Conditioning 1": {
        "category": "warrior",
        "PreReq": ["Body Building"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Hero Conditioning 2": {
        "category": "warrior",
        "PreReq": ["Hero Conditioning 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Hero's Training": {
        "category": "warrior",
        "PreReq": ["Hero Conditioning 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +12 DEF, +4% Crit Chance, +15% Crit DMG",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.15
        },
        "conversions": []
    },
    "Arrow Lord": {
        "category": "warrior",
        "PreReq": ["Path of the Archer"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +5% Crit Chance, +15% Crit DMG",
        "stats": {
            "Crit Chance%": 0.05,
            "Crit DMG%": 0.15,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Lord 1": {
        "category": "warrior",
        "PreReq": ["Arrow Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Pierce Damage, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "Pierce%": 0.04
        },
        "conversions": []
    },
    "Arrow Lord 2": {
        "category": "warrior",
        "PreReq": ["Arrow Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Pierce Damage, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "Pierce%": 0.04
        },
        "conversions": []
    },
    "Arrow Lord 3": {
        "category": "warrior",
        "PreReq": ["Arrow Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Pierce Damage, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "Pierce%": 0.04
        },
        "conversions": []
    },
    "Sword Lord": {
        "category": "warrior",
        "PreReq": ["Path of the Sword"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Slash Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.25
        },
        "conversions": []
    },
    "Sword Lord 1": {
        "category": "warrior",
        "PreReq": ["Sword Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage",
        "stats": {
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Sword Lord 2": {
        "category": "warrior",
        "PreReq": ["Sword Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage",
        "stats": {
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Sword Lord 3": {
        "category": "warrior",
        "PreReq": ["Sword Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage",
        "stats": {
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Spear Lord": {
        "category": "warrior",
        "PreReq": ["Path of the Lance"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Pierce Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.25
        },
        "conversions": []
    },
    "Spear Lord 1": {
        "category": "warrior",
        "PreReq": ["Spear Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Pierce Damage",
        "stats": {
            "Pierce%": 0.08
        },
        "conversions": []
    },
    "Spear Lord 2": {
        "category": "warrior",
        "PreReq": ["Spear Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Pierce Damage",
        "stats": {
            "Pierce%": 0.08
        },
        "conversions": []
    },
    "Spear Lord 3": {
        "category": "warrior",
        "PreReq": ["Spear Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Pierce Damage",
        "stats": {
            "Pierce%": 0.08
        },
        "conversions": []
    },
    "Hammer Lord": {
        "category": "warrior",
        "PreReq": ["Path of the Hammer"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Blunt Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.25
        },
        "conversions": []
    },
    "Hammer Lord 1": {
        "category": "warrior",
        "PreReq": ["Hammer Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Blunt Damage",
        "stats": {
            "Blunt%": 0.08
        },
        "conversions": []
    },
    "Hammer Lord 2": {
        "category": "warrior",
        "PreReq": ["Hammer Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Blunt Damage",
        "stats": {
            "Blunt%": 0.08
        },
        "conversions": []
    },
    "Hammer Lord 3": {
        "category": "warrior",
        "PreReq": ["Hammer Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Blunt Damage",
        "stats": {
            "Blunt%": 0.08
        },
        "conversions": []
    },
    "Martial Lord": {
        "category": "warrior",
        "PreReq": ["Path of the Fist"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +5% Crit Chance, +15% Crit DMG",
        "stats": {
            "Crit Chance%": 0.05,
            "Crit DMG%": 0.15,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Lord 1": {
        "category": "warrior",
        "PreReq": ["Martial Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Blunt Damage, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "Blunt%": 0.04
        },
        "conversions": []
    },
    "Martial Lord 2": {
        "category": "warrior",
        "PreReq": ["Martial Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Blunt Damage, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "Blunt%": 0.04
        },
        "conversions": []
    },
    "Martial Lord 3": {
        "category": "warrior",
        "PreReq": ["Martial Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Blunt Damage, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "Blunt%": 0.04
        },
        "conversions": []
    },
    "Dagger Lord": {
        "category": "warrior",
        "PreReq": ["Path of the Dagger"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+6% Crit Chance, +25% Crit Damage",
        "stats": {
            "Crit Chance%": 0.06,
            "Crit DMG%": 0.25,
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Dagger Lord 1": {
        "category": "warrior",
        "PreReq": ["Dagger Lord"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Dagger Lord 2": {
        "category": "warrior",
        "PreReq": ["Dagger Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Dagger Lord 3": {
        "category": "warrior",
        "PreReq": ["Dagger Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 15,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Slash Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Slash%": 0.08
        },
        "conversions": []
    },
    "Weakpoints 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Crit Damage",
        "stats": {
            "Crit DMG%": 0.08
        },
        "conversions": []
    },
    "Weakpoints 2": {
        "category": "warrior",
        "PreReq": ["Weakpoints 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8% Crit Damage",
        "stats": {
            "Crit DMG%": 0.08
        },
        "conversions": []
    },
    "Shatterpoint": {
        "category": "warrior",
        "PreReq": ["Weakpoints 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Crit Damage",
        "stats": {
            "Crit DMG%": 0.18
        },
        "conversions": []
    },
    "Hero's Strength 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+7% ATK",
        "stats": {
            "ATK%": 0.07
        },
        "conversions": []
    },
    "Hero's Strength 2": {
        "category": "warrior",
        "PreReq": ["Hero's Strength 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+7% ATK",
        "stats": {
            "ATK%": 0.07
        },
        "conversions": []
    },
    "Warrior Hero": {
        "category": "warrior",
        "PreReq": ["Hero's Strength 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK",
        "stats": {
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Inner Spirit 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP",
        "stats": {},
        "conversions": []
    },
    "Inner Spirit 2": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP",
        "stats": {},
        "conversions": []
    },
    "Inner Spirit 3": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP",
        "stats": {},
        "conversions": []
    },
    "Critical Exploit 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-1% Crit Chance, +12% Crit Damage",
        "stats": {
            "Crit Chance%": -0.01,
            "Crit DMG%": 0.12
        },
        "conversions": []
    },
    "Critical Exploit 2": {
        "category": "warrior",
        "PreReq": ["Critical Exploit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-1% Crit Chance, +12% Crit Damage",
        "stats": {
            "Crit Chance%": -0.01,
            "Crit DMG%": 0.12
        },
        "conversions": []
    },
    "Critical Exploitation": {
        "category": "warrior",
        "PreReq": ["Critical Exploit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-2% Crit Chance, +25% Crit Damage",
        "stats": {
            "Crit Chance%": -0.02,
            "Crit DMG%": 0.25
        },
        "conversions": []
    },
    "Arrow Saint": {
        "category": "warrior",
        "PreReq": ["Arrow Lord"],
        "Tag": "ArrowSaint",
        "BlockedTag": "",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +25% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.25,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Saint 1": {
        "category": "warrior",
        "PreReq": ["Arrow Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG",
        "stats": {
            "Crit DMG%": 0.1,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Saint 2": {
        "category": "warrior",
        "PreReq": ["Arrow Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG",
        "stats": {
            "Crit DMG%": 0.1,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Saint 3": {
        "category": "warrior",
        "PreReq": ["Arrow Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG",
        "stats": {
            "Crit DMG%": 0.1,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Sword Saint": {
        "category": "warrior",
        "PreReq": ["Sword Lord"],
        "Tag": "SwordSaint",
        "BlockedTag": "",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Slash Damage, +15% ATK, +5% Slash Penetration",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.25
        },
        "conversions": []
    },
    "Sword Saint 1": {
        "category": "warrior",
        "PreReq": ["Sword Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Slash Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.18
        },
        "conversions": []
    },
    "Sword Saint 2": {
        "category": "warrior",
        "PreReq": ["Sword Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Slash Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.18
        },
        "conversions": []
    },
    "Sword Saint 3": {
        "category": "warrior",
        "PreReq": ["Sword Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Slash Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.18
        },
        "conversions": []
    },
    "Spear Saint": {
        "category": "warrior",
        "PreReq": ["Spear Lord"],
        "Tag": "SpearSaint",
        "BlockedTag": "",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Pierce Damage, +15% ATK, +5% Pierce Penetration",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.25
        },
        "conversions": []
    },
    "Spear Saint 1": {
        "category": "warrior",
        "PreReq": ["Spear Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Pierce Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.18
        },
        "conversions": []
    },
    "Spear Saint 2": {
        "category": "warrior",
        "PreReq": ["Spear Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Pierce Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.18
        },
        "conversions": []
    },
    "Spear Saint 3": {
        "category": "warrior",
        "PreReq": ["Spear Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Pierce Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.18
        },
        "conversions": []
    },
    "Hammer Saint": {
        "category": "warrior",
        "PreReq": ["Hammer Lord"],
        "Tag": "HammerSaint",
        "BlockedTag": "",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Blunt Damage, +15% ATK, +5% Blunt Penetration",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.25,
            "Blunt Pen%": 0.05
        },
        "conversions": []
    },
    "Hammer Saint 1": {
        "category": "warrior",
        "PreReq": ["Hammer Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Blunt Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.18
        },
        "conversions": []
    },
    "Hammer Saint 2": {
        "category": "warrior",
        "PreReq": ["Hammer Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Blunt Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.18
        },
        "conversions": []
    },
    "Hammer Saint 3": {
        "category": "warrior",
        "PreReq": ["Hammer Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+18% Blunt Damage, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.18
        },
        "conversions": []
    },
    "Martial Saint": {
        "category": "warrior",
        "PreReq": ["Martial Lord"],
        "Tag": "MartialSaint",
        "BlockedTag": "",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +25% Crit DMG, +15% ATK",
        "stats": {
            "Crit DMG%": 0.25,
            "ATK%": 0.15,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Saint 1": {
        "category": "warrior",
        "PreReq": ["Martial Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG",
        "stats": {
            "Crit DMG%": 0.1,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Saint 2": {
        "category": "warrior",
        "PreReq": ["Martial Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG",
        "stats": {
            "Crit DMG%": 0.1,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Saint 3": {
        "category": "warrior",
        "PreReq": ["Martial Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG",
        "stats": {
            "Crit DMG%": 0.1,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Dagger Demon": {
        "category": "warrior",
        "PreReq": ["Dagger Lord"],
        "Tag": "DaggerDemon",
        "BlockedTag": "",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Slash Damage, +30% Crit DMG",
        "stats": {
            "Crit DMG%": 0.3,
            "Slash%": 0.1
        },
        "conversions": []
    },
    "Dagger Demon 1": {
        "category": "warrior",
        "PreReq": ["Dagger Demon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Slash Damage, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "Slash%": 0.1
        },
        "conversions": []
    },
    "Dagger Demon 2": {
        "category": "warrior",
        "PreReq": ["Dagger Demon 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Slash Damage, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "Slash%": 0.1
        },
        "conversions": []
    },
    "Dagger Demon 3": {
        "category": "warrior",
        "PreReq": ["Dagger Demon 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Slash Damage, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "Slash%": 0.1
        },
        "conversions": []
    },
    "Penetration 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Physical Penetration",
        "stats": {},
        "conversions": []
    },
    "Penetration 2": {
        "category": "warrior",
        "PreReq": ["Penetration 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% Physical Penetration",
        "stats": {},
        "conversions": []
    },
    "Reality Breaker": {
        "category": "warrior",
        "PreReq": ["Penetration 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Physical Penetration",
        "stats": {},
        "conversions": []
    },
    "Demigod's Strength 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK",
        "stats": {
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Demigod's Strength 2": {
        "category": "warrior",
        "PreReq": ["Demigod's Strength 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK",
        "stats": {
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Warrior Demigod": {
        "category": "warrior",
        "PreReq": ["Demigod's Strength 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Heroic Spirit 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +5% ATK, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Heroic Spirit 2": {
        "category": "warrior",
        "PreReq": ["Heroic Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +5% ATK, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Spirit of the Hero": {
        "category": "warrior",
        "PreReq": ["Heroic Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +10% ATK, +10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Arrow Demigod": {
        "category": "warrior",
        "PreReq": ["Arrow Saint"],
        "Tag": "ArrowDemigod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Arrow Demigod 1": {
        "category": "warrior",
        "PreReq": ["Arrow Demigod"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Demigod 2": {
        "category": "warrior",
        "PreReq": ["Arrow Demigod 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Demigod 3": {
        "category": "warrior",
        "PreReq": ["Arrow Demigod 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Sword Demigod": {
        "category": "warrior",
        "PreReq": ["Sword Saint"],
        "Tag": "SwordDemigod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% Slash Damage, +15% ATK, +5% Slash Penetration",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.3
        },
        "conversions": []
    },
    "Sword Demigod 1": {
        "category": "warrior",
        "PreReq": ["Sword Demigod"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Sword Demigod 2": {
        "category": "warrior",
        "PreReq": ["Sword Demigod 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Sword Demigod 3": {
        "category": "warrior",
        "PreReq": ["Sword Demigod 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Spear Demigod": {
        "category": "warrior",
        "PreReq": ["Spear Saint"],
        "Tag": "SpearDemigod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% Pierce Damage, +15% ATK, +5% Pierce Penetration",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.3
        },
        "conversions": []
    },
    "Spear Demigod 1": {
        "category": "warrior",
        "PreReq": ["Spear Demigod"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Spear Demigod 2": {
        "category": "warrior",
        "PreReq": ["Spear Demigod 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Spear Demigod 3": {
        "category": "warrior",
        "PreReq": ["Spear Demigod 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Hammer Demigod": {
        "category": "warrior",
        "PreReq": ["Hammer Saint"],
        "Tag": "HammerDemigod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% Blunt Damage, +15% ATK, +5% Blunt Penetration",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.3,
            "Blunt Pen%": 0.05
        },
        "conversions": []
    },
    "Hammer Demigod 1": {
        "category": "warrior",
        "PreReq": ["Hammer Demigod"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Hammer Demigod 2": {
        "category": "warrior",
        "PreReq": ["Hammer Demigod 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Hammer Demigod 3": {
        "category": "warrior",
        "PreReq": ["Hammer Demigod 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Martial Demigod": {
        "category": "warrior",
        "PreReq": ["Martial Saint"],
        "Tag": "MartialDemigod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Martial Demigod 1": {
        "category": "warrior",
        "PreReq": ["Martial Demigod"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Demigod 2": {
        "category": "warrior",
        "PreReq": ["Martial Demigod 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Demigod 3": {
        "category": "warrior",
        "PreReq": ["Martial Demigod 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Dagger Demigod": {
        "category": "warrior",
        "PreReq": ["Dagger Demon"],
        "Tag": "DaggerDemigod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +20% Slash Damage, +30% Crit DMG",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.1,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Dagger Demigod 1": {
        "category": "warrior",
        "PreReq": ["Dagger Demigod"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Dagger Demigod 2": {
        "category": "warrior",
        "PreReq": ["Dagger Demigod 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Dagger Demigod 3": {
        "category": "warrior",
        "PreReq": ["Dagger Demigod 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Tyr's Blessing 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Physical Damage",
        "stats": {
            "Slash%": 0.1,
            "Pierce%": 0.1,
            "Blunt%": 0.1
        },
        "conversions": []
    },
    "Tyr's Blessing 2": {
        "category": "warrior",
        "PreReq": ["Tyr's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Physical Damage",
        "stats": {
            "Slash%": 0.1,
            "Pierce%": 0.1,
            "Blunt%": 0.1
        },
        "conversions": []
    },
    "Avatar of Tyr": {
        "category": "warrior",
        "PreReq": ["Tyr's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Physical Penetration",
        "stats": {},
        "conversions": []
    },
    "Magni's Blessing 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK",
        "stats": {
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Magni's Blessing 2": {
        "category": "warrior",
        "PreReq": ["Magni's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK",
        "stats": {
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Avatar of Magni": {
        "category": "warrior",
        "PreReq": ["Magni's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK",
        "stats": {
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Thor's Blessing 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +10% ATK, +10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Thor's Blessing 2": {
        "category": "warrior",
        "PreReq": ["Thor's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +10% ATK, +10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Avatar of Thor": {
        "category": "warrior",
        "PreReq": ["Thor's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MP, +15% ATK, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Arrow God": {
        "category": "warrior",
        "PreReq": ["Arrow Demigod"],
        "Tag": "ArrowGod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Arrow God 1": {
        "category": "warrior",
        "PreReq": ["Arrow God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow God 2": {
        "category": "warrior",
        "PreReq": ["Arrow God 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow God 3": {
        "category": "warrior",
        "PreReq": ["Arrow God 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Sword God": {
        "category": "warrior",
        "PreReq": ["Sword Demigod"],
        "Tag": "SwordGod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Slash Damage, +15% ATK, +5% Slash Penetration",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.35
        },
        "conversions": []
    },
    "Sword God 1": {
        "category": "warrior",
        "PreReq": ["Sword God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Sword God 2": {
        "category": "warrior",
        "PreReq": ["Sword God 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Sword God 3": {
        "category": "warrior",
        "PreReq": ["Sword God 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Spear God": {
        "category": "warrior",
        "PreReq": ["Spear Demigod"],
        "Tag": "SpearGod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Pierce Damage, +15% ATK, +5% Pierce Penetration",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.35
        },
        "conversions": []
    },
    "Spear God 1": {
        "category": "warrior",
        "PreReq": ["Spear God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Spear God 2": {
        "category": "warrior",
        "PreReq": ["Spear God 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Spear God 3": {
        "category": "warrior",
        "PreReq": ["Spear God 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Hammer God": {
        "category": "warrior",
        "PreReq": ["Hammer Demigod"],
        "Tag": "HammerGod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Blunt Damage, +15% ATK, +5% Blunt Penetration",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.35,
            "Blunt Pen%": 0.05
        },
        "conversions": []
    },
    "Hammer God 1": {
        "category": "warrior",
        "PreReq": ["Hammer God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Hammer God 2": {
        "category": "warrior",
        "PreReq": ["Hammer God 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Hammer God 3": {
        "category": "warrior",
        "PreReq": ["Hammer God 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Martial God": {
        "category": "warrior",
        "PreReq": ["Martial Demigod"],
        "Tag": "MartialGod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Martial God 1": {
        "category": "warrior",
        "PreReq": ["Martial God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial God 2": {
        "category": "warrior",
        "PreReq": ["Martial God 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial God 3": {
        "category": "warrior",
        "PreReq": ["Martial God 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Dagger God": {
        "category": "warrior",
        "PreReq": ["Dagger Demigod"],
        "Tag": "DaggerGod",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +20% Slash Damage, +30% Crit DMG",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.1,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Dagger God 1": {
        "category": "warrior",
        "PreReq": ["Dagger God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Dagger God 2": {
        "category": "warrior",
        "PreReq": ["Dagger God 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Dagger God 3": {
        "category": "warrior",
        "PreReq": ["Dagger God 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 70,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Saga of Atlanta 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Physical Damage",
        "stats": {
            "Slash%": 0.15,
            "Pierce%": 0.15,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Saga of Atlanta 2": {
        "category": "warrior",
        "PreReq": ["Saga of Atlanta 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Physical Damage",
        "stats": {
            "Slash%": 0.15,
            "Pierce%": 0.15,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Skill of Atlanta": {
        "category": "warrior",
        "PreReq": ["Saga of Atlanta 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Physical Penetration",
        "stats": {},
        "conversions": []
    },
    "Saga of Achilles 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Saga of Achilles 2": {
        "category": "warrior",
        "PreReq": ["Saga of Achilles 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Might of Achilles": {
        "category": "warrior",
        "PreReq": ["Saga of Achilles 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK",
        "stats": {
            "ATK%": 0.4
        },
        "conversions": []
    },
    "Saga of Odysseus 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% ATK, +12% Crit Damage",
        "stats": {
            "Crit DMG%": 0.12,
            "ATK%": 0.12
        },
        "conversions": []
    },
    "Saga of Odysseus 2": {
        "category": "warrior",
        "PreReq": ["Saga of Odysseus 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% ATK, +12% Crit Damage",
        "stats": {
            "Crit DMG%": 0.12,
            "ATK%": 0.12
        },
        "conversions": []
    },
    "Guile of Odysseus": {
        "category": "warrior",
        "PreReq": ["Saga of Odysseus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% Crit Damage, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.15,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Arrow Deity": {
        "category": "warrior",
        "PreReq": ["Arrow God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Arrow Deity 1": {
        "category": "warrior",
        "PreReq": ["Arrow Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Deity 2": {
        "category": "warrior",
        "PreReq": ["Arrow Deity 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Arrow Deity 3": {
        "category": "warrior",
        "PreReq": ["Arrow Deity 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Pierce Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Pierce%": 0.15
        },
        "conversions": []
    },
    "Sword Deity": {
        "category": "warrior",
        "PreReq": ["Sword God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Slash Damage, +15% ATK, +5% Slash Penetration",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.35
        },
        "conversions": []
    },
    "Sword Deity 1": {
        "category": "warrior",
        "PreReq": ["Sword Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Sword Deity 2": {
        "category": "warrior",
        "PreReq": ["Sword Deity 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Sword Deity 3": {
        "category": "warrior",
        "PreReq": ["Sword Deity 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Spear Deity": {
        "category": "warrior",
        "PreReq": ["Spear God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Pierce Damage, +15% ATK, +5% Pierce Penetration",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.35
        },
        "conversions": []
    },
    "Spear Deity 1": {
        "category": "warrior",
        "PreReq": ["Spear Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Spear Deity 2": {
        "category": "warrior",
        "PreReq": ["Spear Deity 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Spear Deity 3": {
        "category": "warrior",
        "PreReq": ["Spear Deity 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Hammer Deity": {
        "category": "warrior",
        "PreReq": ["Hammer God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Blunt Damage, +15% ATK, +5% Blunt Penetration",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.35,
            "Blunt Pen%": 0.05
        },
        "conversions": []
    },
    "Hammer Deity 1": {
        "category": "warrior",
        "PreReq": ["Hammer Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Hammer Deity 2": {
        "category": "warrior",
        "PreReq": ["Hammer Deity 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Hammer Deity 3": {
        "category": "warrior",
        "PreReq": ["Hammer Deity 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +15% ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.15,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Martial Deity": {
        "category": "warrior",
        "PreReq": ["Martial God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Martial Deity 1": {
        "category": "warrior",
        "PreReq": ["Martial Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Deity 2": {
        "category": "warrior",
        "PreReq": ["Martial Deity 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Martial Deity 3": {
        "category": "warrior",
        "PreReq": ["Martial Deity 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +10% Crit DMG, +5% ATK",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.05,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Dagger Deity": {
        "category": "warrior",
        "PreReq": ["Dagger God"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +20% Slash Damage, +30% Crit DMG",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.1,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Dagger Deity 1": {
        "category": "warrior",
        "PreReq": ["Dagger Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Dagger Deity 2": {
        "category": "warrior",
        "PreReq": ["Dagger Deity 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Dagger Deity 3": {
        "category": "warrior",
        "PreReq": ["Dagger Deity 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 85,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash Damage, +6% ATK, +15% Crit DMG",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.06,
            "Slash%": 0.15
        },
        "conversions": []
    },
    "Arrow Archon": {
        "category": "warrior",
        "PreReq": ["Arrow Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Pierce Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Pierce%": 0.2
        },
        "conversions": []
    },
    "Arrow Archon Power": {
        "category": "warrior",
        "PreReq": ["Arrow Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% Pierce Damage",
        "stats": {
            "Pierce%": 0.45
        },
        "conversions": []
    },
    "Arrow Archon Focus": {
        "category": "warrior",
        "PreReq": ["Arrow Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Arrow Archon Will": {
        "category": "warrior",
        "PreReq": ["Arrow Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Void Penetration, +15% Global MP, -50% Penalty to Void Damage",
        "stats": {
            "Void Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Void%",
                "ratio": -0.5,
                "resulting_stat": "Void%"
            }
        ]
    },
    "Sword Archon": {
        "category": "warrior",
        "PreReq": ["Sword Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Slash Damage, +15% ATK, +5% Slash Penetration",
        "stats": {
            "ATK%": 0.15,
            "Slash%": 0.35
        },
        "conversions": []
    },
    "Sword Archon Power": {
        "category": "warrior",
        "PreReq": ["Sword Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% Slash Damage",
        "stats": {
            "Slash%": 0.45
        },
        "conversions": []
    },
    "Sword Archon Focus": {
        "category": "warrior",
        "PreReq": ["Sword Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +3% Crit Chance",
        "stats": {
            "Crit Chance%": 0.03,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Sword Archon Will": {
        "category": "warrior",
        "PreReq": ["Sword Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Slash Damage, +20% ATK",
        "stats": {
            "ATK%": 0.2,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Spear Archon": {
        "category": "warrior",
        "PreReq": ["Spear Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Pierce Damage, +15% ATK, +5% Pierce Penetration",
        "stats": {
            "ATK%": 0.15,
            "Pierce%": 0.35
        },
        "conversions": []
    },
    "Spear Archon Power": {
        "category": "warrior",
        "PreReq": ["Spear Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% Pierce Damage",
        "stats": {
            "Pierce%": 0.45
        },
        "conversions": []
    },
    "Spear Archon Focus": {
        "category": "warrior",
        "PreReq": ["Spear Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +3% Crit Chance",
        "stats": {
            "Crit Chance%": 0.03,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Spear Archon Will": {
        "category": "warrior",
        "PreReq": ["Spear Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Pierce Penetration",
        "stats": {},
        "conversions": []
    },
    "Hammer Archon": {
        "category": "warrior",
        "PreReq": ["Hammer Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% Blunt Damage, +15% ATK, +5% Blunt Penetration",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.35,
            "Blunt Pen%": 0.05
        },
        "conversions": []
    },
    "Hammer Archon Power": {
        "category": "warrior",
        "PreReq": ["Hammer Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% Blunt Damage",
        "stats": {
            "Blunt%": 0.45
        },
        "conversions": []
    },
    "Hammer Archon Focus": {
        "category": "warrior",
        "PreReq": ["Hammer Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +3% Crit Chance",
        "stats": {
            "Crit Chance%": 0.03,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Hammer Archon Will": {
        "category": "warrior",
        "PreReq": ["Hammer Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Blunt Damage, +15% ATK, +5% Blunt Penetration",
        "stats": {
            "ATK%": 0.15,
            "Blunt%": 0.15,
            "Blunt Pen%": 0.05
        },
        "conversions": []
    },
    "Martial Archon": {
        "category": "warrior",
        "PreReq": ["Martial Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Blunt Damage, +30% Crit DMG, +8% ATK",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.08,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Martial Archon Power": {
        "category": "warrior",
        "PreReq": ["Martial Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% Blunt Damage",
        "stats": {
            "Blunt%": 0.45
        },
        "conversions": []
    },
    "Martial Archon Focus": {
        "category": "warrior",
        "PreReq": ["Martial Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Martial Archon Will": {
        "category": "warrior",
        "PreReq": ["Martial Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+80% ATK, Blunt Damage ignores 10% Armor",
        "stats": {
            "ATK%": 0.8
        },
        "conversions": []
    },
    "Dagger Archon": {
        "category": "warrior",
        "PreReq": ["Dagger Deity"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +20% Slash Damage, +30% Crit DMG",
        "stats": {
            "Crit DMG%": 0.3,
            "ATK%": 0.1,
            "Slash%": 0.2
        },
        "conversions": []
    },
    "Dagger Archon Power": {
        "category": "warrior",
        "PreReq": ["Dagger Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% Slash Damage, +5% Slash Penetration",
        "stats": {
            "Slash%": 0.45
        },
        "conversions": []
    },
    "Dagger Archon Focus": {
        "category": "warrior",
        "PreReq": ["Dagger Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Dagger Archon Will": {
        "category": "warrior",
        "PreReq": ["Dagger Archon"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Slash Damage, +5% Crit Chance, +5% Crit DMG Multiplier",
        "stats": {
            "Crit Chance%": 0.05,
            "Slash%": 0.1
        },
        "conversions": []
    },
    "Legend of Nuada 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +12% Crit Damage",
        "stats": {
            "Crit DMG%": 0.12
        },
        "conversions": []
    },
    "Legend of Nuada 2": {
        "category": "warrior",
        "PreReq": ["Legend of Nuada 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +12% Crit Damage",
        "stats": {
            "Crit DMG%": 0.12
        },
        "conversions": []
    },
    "Legacy of Fragarach": {
        "category": "warrior",
        "PreReq": ["Legend of Nuada 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +30% Crit Damage, +1% Global Damage",
        "stats": {
            "Crit DMG%": 0.3
        },
        "conversions": []
    },
    "Saga of Brynhildr 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +12% Physical Damage",
        "stats": {
            "Slash%": 0.12,
            "Pierce%": 0.12,
            "Blunt%": 0.12
        },
        "conversions": []
    },
    "Saga of Brynhildr 2": {
        "category": "warrior",
        "PreReq": ["Saga of Brynhildr 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +12% Physical Damage",
        "stats": {
            "Slash%": 0.12,
            "Pierce%": 0.12,
            "Blunt%": 0.12
        },
        "conversions": []
    },
    "Legacy of Gram": {
        "category": "warrior",
        "PreReq": ["Saga of Brynhildr 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +10% Physical Penetration",
        "stats": {},
        "conversions": []
    },
    "Epic of Jason 1": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK,  +25% ATK Multi",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Epic of Jason 2": {
        "category": "warrior",
        "PreReq": ["Epic of Jason 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK,  +25% ATK Multi",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Dioskouroi's Dance": {
        "category": "warrior",
        "PreReq": ["Epic of Jason 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK,  +40% ATK Multi, +2% Global Damage",
        "stats": {
            "ATK%": 0.4
        },
        "conversions": []
    },
    "Scion of Ulster": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "War125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Physical Damage, 33% of Physical Pen converted into Void Pen",
        "stats": {
            "Slash%": 0.2,
            "Pierce%": 0.2,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Astrapste Argo": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "War125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-20% Threat Generated, +20% Global Crit Damage",
        "stats": {
            "Threat%": -0.2
        },
        "conversions": []
    },
    "Dragonslayer's Twilight": {
        "category": "warrior",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "War125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Threat Generated, +1.5% of ATKMulti converted to Physical Pen",
        "stats": {
            "Threat%": 0.25
        },
        "conversions": []
    },
    "Abyssal Sands of Dawn": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +10% Physical DMG, Conversion 5% ATK to DEF",
        "stats": {
            "Slash%": 0.1,
            "Pierce%": 0.1,
            "Blunt%": 0.1,
            "Global ATK%": 0.01
        },
        "conversions": [
            {
                "source": "ATK",
                "ratio": 0.05,
                "resulting_stat": "DEF"
            }
        ]
    },
    "Abyssal Sands of Horizon": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-3% Global ATK, +20% Physical DMG, Conversion 5% ATK to DEF",
        "stats": {
            "Slash%": 0.2,
            "Pierce%": 0.2,
            "Blunt%": 0.2,
            "Global ATK%": -0.03
        },
        "conversions": [
            {
                "source": "ATK",
                "ratio": 0.05,
                "resulting_stat": "DEF"
            }
        ]
    },
    "Abyssal Sands of Twilight": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, -6% xPhys DMG, Conversion 5% ATK to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "ATK",
                "ratio": 0.05,
                "resulting_stat": "def"
            }
        ]
    },
    "Time Shard of Hapnatra": {
        "category": "warrior",
        "PreReq": ["W_AeonShard"],
        "Tag": "W_AeonCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, '+4% xPhys DMG, Conversion 5% ATK to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "ATK",
                "ratio": 0.05,
                "resulting_stat": "def"
            }
        ]
    },
    "Abyssal Light of Ego": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+3% Global ATK, -75% Global MATK, +8% xVoid Pen",
        "stats": {},
        "conversions": []
    },
    "Abyssal Light of Desire": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +5% xPhys Pen",
        "stats": {
            "Global ATK%": 0.01,
            "Phys xPen%": 0.05
        },
        "conversions": []
    },
    "Abyssal Light of Spirit": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +5% xPhys Pen, +5% Crit Chance, -10% Max HP Multi",
        "stats": {
            "Crit Chance%": 0.04
        },
        "conversions": []
    },
    "Soul Shard of Hapnatra": {
        "category": "warrior",
        "PreReq": ["W_InfinityShard"],
        "Tag": "W_InfinityCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global ATK, +8% xPhys DMG, +2% Global DMG",
        "stats": {
            "Global ATK%": 0.02,
            "xSlash%": 0.08,
            "xPierce%": 0.08,
            "xBlunt%": 0.08,
            "Global DMG%": 0.02
        },
        "conversions": []
    },
    "Abyssal Gem of Protons": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +25% ATK Multi, Conversion 8% DEF to ATK",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": [
            {
                "source": "DEF",
                "ratio": 0.08,
                "resulting_stat": "atk"
            }
        ]
    },
    "Abyssal Gem of Electrons": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +25% ATK Multi, Conversion 8% MATK to ATK",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": [
            {
                "source": "MATK",
                "ratio": 0.08,
                "resulting_stat": "atk"
            }
        ]
    },
    "Abyssal Gem of Neutrons": {
        "category": "warrior",
        "PreReq": ["PrimalEssence"],
        "Tag": "W_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1% Global ATK, +25% ATK Multi, Conversion 8% Healpower to ATK",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": [
            {
                "source": "Healpower",
                "ratio": 0.08,
                "resulting_stat": "atk"
            }
        ]
    },
    "Space Shard of Hapnatra": {
        "category": "warrior",
        "PreReq": ["W_CosmicShard"],
        "Tag": "W_CosmicCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global ATK,  +25% ATK Multi, +2% Global DMG",
        "stats": {
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Time Shard of T'sanogora": {
        "category": "warrior",
        "PreReq": ["W_StarGodHeart", "StarEssence"],
        "Tag": "W175 Shard",
        "BlockedTag": "W175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+3% Global ATK, Temp HP Start of 25% Max HP, -33% Global MATK/Healpower",
        "stats": {},
        "conversions": []
    },
    "Soul Shard of T'sanogora": {
        "category": "warrior",
        "PreReq": ["W_StarGodHeart", "StarEssence"],
        "Tag": "W175 Shard",
        "BlockedTag": "W175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+3% Global ATK, +15% xPhys DMG, +5% xVoid Pen",
        "stats": {},
        "conversions": []
    },
    "Space Shard of T'sanogora": {
        "category": "warrior",
        "PreReq": ["W_StarGodHeart", "StarEssence"],
        "Tag": "W175 Shard",
        "BlockedTag": "W175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+3% Global ATK, +10% Buff Multiplier, -80% Global MATK/Healpower/Elevoid",
        "stats": {},
        "conversions": []
    },
    "Time Core of T'sanogora": {
        "category": "warrior",
        "PreReq": ["W175 Shard"],
        "Tag": "W175 Core",
        "BlockedTag": "W175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-10% Max HP Multi, +20% All Res, +5% Global ATK, +20% xPhys DMG",
        "stats": {
            "Slash Res%": 0.2,
            "Pierce Res%": 0.2,
            "Blunt Res%": 0.2,
            "Fire Res%": 0.2,
            "Water Res%": 0.2,
            "Lightning Res%": 0.2,
            "Wind Res%": 0.2,
            "Earth Res%": 0.2,
            "Toxic Res%": 0.2,
            "Neg Res%": 0.2,
            "Holy Res%": 0.2,
            "Void Res%": 0.2
        },
        "conversions": []
    },
    "Soul Core of T'sanogora": {
        "category": "warrior",
        "PreReq": ["W175 Shard"],
        "Tag": "W175 Core",
        "BlockedTag": "W175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "-10% Global Crit Chance, +12% Global Crit DMG & xPhys DMG, -25% Global MATK",
        "stats": {},
        "conversions": []
    },
    "Space Core of T'sanogora": {
        "category": "warrior",
        "PreReq": ["W175 Shard"],
        "Tag": "W175 Core",
        "BlockedTag": "W175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Global ATK, Conversion 10% of MP to Focus, -50% Global Elevoid",
        "stats": {},
        "conversions": [
            {
                "source": "MP",
                "ratio": 0.1,
                "resulting_stat": "Focus"
            }
        ]
    },
    "Sealed Core of T'sanogora": {
        "category": "warrior",
        "PreReq": ["W175 Shard"],
        "Tag": "W175 Core",
        "BlockedTag": "W175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 175,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2% Global ATK, +10% Global Crit Damage, +5% xPhys DMG",
        "stats": {},
        "conversions": []
    },
    "Arcane Study 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+5% MATK",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Arcane Study 2": {
        "category": "caster",
        "PreReq": ["Arcane Study 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+5% MATK",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Arcane Apprentice": {
        "category": "caster",
        "PreReq": ["Arcane Study 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+10% MATK",
        "stats": {
            "MATK%": 0.1
        },
        "conversions": []
    },
    "Divine Study 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+2% MATK, +3% Heal",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.03
        },
        "conversions": []
    },
    "Divine Study 2": {
        "category": "caster",
        "PreReq": ["Divine Study 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+2% MATK, +3% Heal",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.03
        },
        "conversions": []
    },
    "Divine Apprentice": {
        "category": "caster",
        "PreReq": ["Divine Study 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+5% MATK, +6% Heal, +20 Heal",
        "stats": {
            "MATK%": 0.05,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Mage Body Training 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+2 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Mage Body Training 2": {
        "category": "caster",
        "PreReq": ["Mage Body Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+3 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Mage Body Training 3": {
        "category": "caster",
        "PreReq": ["Mage Body Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 1,
            "healer_levels": 0
        },
        "description": "+4 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Arcane Mastery 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+5% MATK",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Arcane Mastery 2": {
        "category": "caster",
        "PreReq": ["Arcane Mastery 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+5% MATK",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Arcane Talent": {
        "category": "caster",
        "PreReq": ["Arcane Mastery 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+10% MATK",
        "stats": {
            "MATK%": 0.1
        },
        "conversions": []
    },
    "Divine Mastery 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+4% MATK, +2% Heal",
        "stats": {
            "MATK%": 0.04,
            "HEAL%": 0.02
        },
        "conversions": []
    },
    "Divine Mastery 2": {
        "category": "caster",
        "PreReq": ["Divine Mastery 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+4% MATK, +2% Heal",
        "stats": {
            "MATK%": 0.04,
            "HEAL%": 0.02
        },
        "conversions": []
    },
    "Divine Talent": {
        "category": "caster",
        "PreReq": ["Divine Mastery 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+8% MATK, +8% Heal, +20 Heal",
        "stats": {
            "MATK%": 0.08,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Mage Body Training 4": {
        "category": "caster",
        "PreReq": ["Mage Body Training 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+5 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Mage Body Training 5": {
        "category": "caster",
        "PreReq": ["Mage Body Training 4"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+6 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Mage Body Training 6": {
        "category": "caster",
        "PreReq": ["Mage Body Training 5"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+7 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Path of the Arcane": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 1",
        "BlockedTag": "MATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+16% MATK",
        "stats": {
            "MATK%": 0.16
        },
        "conversions": []
    },
    "Arcane Path 1": {
        "category": "caster",
        "PreReq": ["Path of the Arcane"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+6% MATK",
        "stats": {
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Arcane Path 2": {
        "category": "caster",
        "PreReq": ["Arcane Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+6% MATK",
        "stats": {
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Arcane Path 3": {
        "category": "caster",
        "PreReq": ["Arcane Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+6% MATK",
        "stats": {
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Path of the Divine": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 1",
        "BlockedTag": "MATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+10% MATK, +10% Holy Damage",
        "stats": {
            "MATK%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Divine Path 1": {
        "category": "caster",
        "PreReq": ["Path of the Divine"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Holy Damage",
        "stats": {
            "MATK%": 0.03,
            "Holy%": 0.04
        },
        "conversions": []
    },
    "Divine Path 2": {
        "category": "caster",
        "PreReq": ["Divine Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Holy Damage",
        "stats": {
            "MATK%": 0.03,
            "Holy%": 0.04
        },
        "conversions": []
    },
    "Divine Path 3": {
        "category": "caster",
        "PreReq": ["Divine Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Holy Damage",
        "stats": {
            "MATK%": 0.03,
            "Holy%": 0.04
        },
        "conversions": []
    },
    "Path of the Shadow": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 1",
        "BlockedTag": "MATK Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+10% MATK, +10% Negative Damage",
        "stats": {
            "MATK%": 0.1,
            "Neg%": 0.1
        },
        "conversions": []
    },
    "Shadow Path 1": {
        "category": "caster",
        "PreReq": ["Path of the Shadow"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Negative Damage",
        "stats": {
            "MATK%": 0.03,
            "Neg%": 0.04
        },
        "conversions": []
    },
    "Shadow Path 2": {
        "category": "caster",
        "PreReq": ["Shadow Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Negative Damage",
        "stats": {
            "MATK%": 0.03,
            "Neg%": 0.04
        },
        "conversions": []
    },
    "Shadow Path 3": {
        "category": "caster",
        "PreReq": ["Shadow Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 8,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Negative Damage",
        "stats": {
            "MATK%": 0.03,
            "Neg%": 0.04
        },
        "conversions": []
    },
    "Mage Body Training 7": {
        "category": "caster",
        "PreReq": ["Mage Body Training 6"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+8 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Mage Body Training 8": {
        "category": "caster",
        "PreReq": ["Mage Body Training 7"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10 MATK, +5 MP",
        "stats": {},
        "conversions": []
    },
    "Sage's Body": {
        "category": "caster",
        "PreReq": ["Mage Body Training 8"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+15 MATK, +5 MP, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05
        },
        "conversions": []
    },
    "Path of the Elements": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 2",
        "BlockedTag": "MATK Path 2",
        "gold": 200,
        "exp": 100,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+15% MATK",
        "stats": {
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Fire Focus": {
        "category": "caster",
        "PreReq": ["Path of the Elements"],
        "Tag": "Element",
        "BlockedTag": "Element",
        "gold": 50,
        "exp": 50,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% Fire Damage",
        "stats": {
            "Fire%": 0.1
        },
        "conversions": []
    },
    "Fire Focus 2": {
        "category": "caster",
        "PreReq": ["Fire Focus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+4% Fire Damage",
        "stats": {
            "Fire%": 0.04
        },
        "conversions": []
    },
    "Fire Focus 3": {
        "category": "caster",
        "PreReq": ["Fire Focus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+8% Fire Damage",
        "stats": {
            "Fire%": 0.08
        },
        "conversions": []
    },
    "Water Focus": {
        "category": "caster",
        "PreReq": ["Path of the Elements"],
        "Tag": "Element",
        "BlockedTag": "Element",
        "gold": 50,
        "exp": 50,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% Water Damage",
        "stats": {
            "Water%": 0.1
        },
        "conversions": []
    },
    "Water Focus 2": {
        "category": "caster",
        "PreReq": ["Water Focus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Water Focus 3": {
        "category": "caster",
        "PreReq": ["Water Focus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+8% Water Damage",
        "stats": {
            "Water%": 0.08
        },
        "conversions": []
    },
    "Lightning Focus": {
        "category": "caster",
        "PreReq": ["Path of the Elements"],
        "Tag": "Element",
        "BlockedTag": "Element",
        "gold": 50,
        "exp": 50,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% Lightning Damage",
        "stats": {
            "Lightning%": 0.1
        },
        "conversions": []
    },
    "Lightning Focus 2": {
        "category": "caster",
        "PreReq": ["Lightning Focus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+4% Lightning Damage",
        "stats": {
            "Lightning%": 0.04
        },
        "conversions": []
    },
    "Lightning Focus 3": {
        "category": "caster",
        "PreReq": ["Lightning Focus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+8% Lightning Damage",
        "stats": {
            "Lightning%": 0.08
        },
        "conversions": []
    },
    "Wind Focus": {
        "category": "caster",
        "PreReq": ["Path of the Elements"],
        "Tag": "Element",
        "BlockedTag": "Element",
        "gold": 50,
        "exp": 50,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% Wind Damage",
        "stats": {
            "Wind%": 0.1
        },
        "conversions": []
    },
    "Wind Focus 2": {
        "category": "caster",
        "PreReq": ["Wind Focus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+4% Wind Damage",
        "stats": {
            "Wind%": 0.04
        },
        "conversions": []
    },
    "Wind Focus 3": {
        "category": "caster",
        "PreReq": ["Wind Focus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+8% Wind Damage",
        "stats": {
            "Wind%": 0.08
        },
        "conversions": []
    },
    "Earth Focus": {
        "category": "caster",
        "PreReq": ["Path of the Elements"],
        "Tag": "Element",
        "BlockedTag": "Element",
        "gold": 50,
        "exp": 50,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% Earth Damage",
        "stats": {
            "Earth%": 0.1
        },
        "conversions": []
    },
    "Earth Focus 2": {
        "category": "caster",
        "PreReq": ["Earth Focus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+4% Eath Damage",
        "stats": {
            "Earth%": 0.04
        },
        "conversions": []
    },
    "Earth Focus 3": {
        "category": "caster",
        "PreReq": ["Earth Focus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+8% Eath Damage",
        "stats": {
            "Earth%": 0.08
        },
        "conversions": []
    },
    "Poison Focus": {
        "category": "caster",
        "PreReq": ["Path of the Elements"],
        "Tag": "Element",
        "BlockedTag": "Element",
        "gold": 50,
        "exp": 50,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% Toxic Damage",
        "stats": {
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Poison Focus 2": {
        "category": "caster",
        "PreReq": ["Poison Focus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+4% Toxic Damage",
        "stats": {
            "Toxic%": 0.04
        },
        "conversions": []
    },
    "Poison Focus 3": {
        "category": "caster",
        "PreReq": ["Poison Focus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+8% Toxic Damage",
        "stats": {
            "Toxic%": 0.08
        },
        "conversions": []
    },
    "Path of Nature": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 2",
        "BlockedTag": "MATK Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% MATK, +10% Holy Damage, +10% Toxic Damage",
        "stats": {
            "MATK%": 0.1,
            "Toxic%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Nature Path 1": {
        "category": "caster",
        "PreReq": ["Path of Nature"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Holy Damage, +4% Toxic Damage",
        "stats": {
            "MATK%": 0.03,
            "Toxic%": 0.04,
            "Holy%": 0.04
        },
        "conversions": []
    },
    "Nature Path 2": {
        "category": "caster",
        "PreReq": ["Nature Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Holy Damage, +4% Toxic Damage",
        "stats": {
            "MATK%": 0.03,
            "Toxic%": 0.04,
            "Holy%": 0.04
        },
        "conversions": []
    },
    "Nature Path 3": {
        "category": "caster",
        "PreReq": ["Nature Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Holy Damage, +4% Toxic Damage",
        "stats": {
            "MATK%": 0.03,
            "Toxic%": 0.04,
            "Holy%": 0.04
        },
        "conversions": []
    },
    "Path of the Dead": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 2",
        "BlockedTag": "MATK Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+10% MATK, +10% Negative Damage",
        "stats": {
            "MATK%": 0.1,
            "Neg%": 0.1
        },
        "conversions": []
    },
    "Dead Path 1": {
        "category": "caster",
        "PreReq": ["Path of the Dead"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Negative Damage",
        "stats": {
            "MATK%": 0.03,
            "Neg%": 0.04
        },
        "conversions": []
    },
    "Dead Path 2": {
        "category": "caster",
        "PreReq": ["Dead Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Negative Damage",
        "stats": {
            "MATK%": 0.03,
            "Neg%": 0.04
        },
        "conversions": []
    },
    "Dead Path 3": {
        "category": "caster",
        "PreReq": ["Dead Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 15,
            "healer_levels": 0
        },
        "description": "+3% MATK, +4% Negative Damage",
        "stats": {
            "MATK%": 0.03,
            "Neg%": 0.04
        },
        "conversions": []
    },
    "Magic Flow 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +2 MP +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Magic Flow 2": {
        "category": "caster",
        "PreReq": ["Magic Flow 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +2 MP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Magic Conduit": {
        "category": "caster",
        "PreReq": ["Magic Flow 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +6 MP, +3% Crit Chance",
        "stats": {
            "Crit Chance%": 0.03,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Mana Blood 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Mana Blood 2": {
        "category": "caster",
        "PreReq": ["Mana Blood 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Mana Bloodlines": {
        "category": "caster",
        "PreReq": ["Mana Blood 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +10% DEF",
        "stats": {
            "DEF%": 0.1,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Mana Catalyst 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+2% Crit Chance, -10 MATK, -4 MP",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Mana Catalyst 2": {
        "category": "caster",
        "PreReq": ["Mana Catalyst 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+2% Crit Chance, -10 MATK, -4 MP",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Mana Fission": {
        "category": "caster",
        "PreReq": ["Mana Catalyst 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+4% Crit Chance, -12 MATK, -5 MP",
        "stats": {
            "Crit Chance%": 0.04
        },
        "conversions": []
    },
    "The Reality": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 3",
        "BlockedTag": "MATK Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+20% MATK",
        "stats": {
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Warp Reality": {
        "category": "caster",
        "PreReq": ["The Reality"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +10% Water and Wind Damage",
        "stats": {
            "MATK%": 0.06,
            "Water%": 0.1,
            "Wind%": 0.1
        },
        "conversions": []
    },
    "Twist Reality": {
        "category": "caster",
        "PreReq": ["The Reality"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +10% Fire and Lightning Damage",
        "stats": {
            "MATK%": 0.06,
            "Fire%": 0.1,
            "Lightning%": 0.1
        },
        "conversions": []
    },
    "Control Reality": {
        "category": "caster",
        "PreReq": ["The Reality"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, +10% Earth Damage and Toxic Damage",
        "stats": {
            "MATK%": 0.06,
            "Earth%": 0.1,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "The Essence": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 3",
        "BlockedTag": "MATK Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+12% MATK, +10% Heal",
        "stats": {
            "MATK%": 0.12,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Soothe Essence": {
        "category": "caster",
        "PreReq": ["The Essence"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+5% MATK, +15% Heal, +5% Holy Damage",
        "stats": {
            "MATK%": 0.05,
            "HEAL%": 0.15,
            "Holy%": 0.05
        },
        "conversions": []
    },
    "Form Essence": {
        "category": "caster",
        "PreReq": ["The Essence"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+5% MATK, +40 Heal, +5% Holy Damage",
        "stats": {
            "MATK%": 0.05,
            "Holy%": 0.05
        },
        "conversions": []
    },
    "Destroy Essence": {
        "category": "caster",
        "PreReq": ["The Essence"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+5% MATK, +10% Holy Damage",
        "stats": {
            "MATK%": 0.05,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "The Soul": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 3",
        "BlockedTag": "MATK Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% MATK, -30% Heal, +20% Negative Damage",
        "stats": {
            "MATK%": 0.06,
            "HEAL%": -0.3,
            "Neg%": 0.2
        },
        "conversions": []
    },
    "Rip Soul": {
        "category": "caster",
        "PreReq": ["The Soul"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% Negative Damage, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "Neg%": 0.06
        },
        "conversions": []
    },
    "Distort Soul": {
        "category": "caster",
        "PreReq": ["The Soul"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% Negative Damage, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "Neg%": 0.06
        },
        "conversions": []
    },
    "Erase Soul": {
        "category": "caster",
        "PreReq": ["The Soul"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+6% Negative Damage, +3% Crit Chance, +15% Crit Damage",
        "stats": {
            "Crit Chance%": 0.03,
            "Crit DMG%": 0.15,
            "Neg%": 0.06
        },
        "conversions": []
    },
    "Sage Study 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+7% MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "MATK%": 0.07
        },
        "conversions": []
    },
    "Sage Study 2": {
        "category": "caster",
        "PreReq": ["Sage Study 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+7% MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "MATK%": 0.07
        },
        "conversions": []
    },
    "Magic Sage": {
        "category": "caster",
        "PreReq": ["Sage Study 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+12% MATK, +3% Crit Chance",
        "stats": {
            "Crit Chance%": 0.03,
            "MATK%": 0.12
        },
        "conversions": []
    },
    "Demigod's Magic 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+6% MATK, +2 MP, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Demigod's Magic 2": {
        "category": "caster",
        "PreReq": ["Demigod's Magic 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+6% MATK, +2 MP, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Magic Demigod": {
        "category": "caster",
        "PreReq": ["Demigod's Magic 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+9% MATK, +5 MP, + 6% DEF",
        "stats": {
            "DEF%": 0.06,
            "MATK%": 0.09
        },
        "conversions": []
    },
    "Elemental Sage": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 4",
        "BlockedTag": "MATK Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+20% MATK",
        "stats": {
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Sage's Power": {
        "category": "caster",
        "PreReq": ["Elemental Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% Water and Wind Penetration",
        "stats": {
            "MATK%": 0.06,
            "Water Pen%": 0.05,
            "Wind Pen%": 0.05
        },
        "conversions": []
    },
    "Sage's Control": {
        "category": "caster",
        "PreReq": ["Elemental Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% Fire and Lightning Penetration",
        "stats": {
            "MATK%": 0.06,
            "Fire Pen%": 0.05,
            "Lightning Pen%": 0.05
        },
        "conversions": []
    },
    "Sage's Technique": {
        "category": "caster",
        "PreReq": ["Elemental Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% Earth Penetration and Toxic Penetration",
        "stats": {
            "MATK%": 0.06,
            "Earth Pen%": 0.05,
            "Toxic Pen%": 0.05
        },
        "conversions": []
    },
    "Spirit Sage": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 4",
        "BlockedTag": "MATK Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+12% MATK, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "MATK%": 0.12
        },
        "conversions": []
    },
    "Sage's Spirit": {
        "category": "caster",
        "PreReq": ["Spirit Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+5% MATK, +5% Holy and Negative Penetration",
        "stats": {
            "MATK%": 0.05,
            "Neg Pen%": 0.05,
            "Holy Pen%": 0.05
        },
        "conversions": []
    },
    "Sage's Fortune": {
        "category": "caster",
        "PreReq": ["Spirit Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+5% MATK, +30% Crit Damage",
        "stats": {
            "Crit DMG%": 0.3,
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Sage's Knowledge": {
        "category": "caster",
        "PreReq": ["Spirit Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+5% MATK, +10% Holy and Negative Damage",
        "stats": {
            "MATK%": 0.05,
            "Neg%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Life Sage": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 4",
        "BlockedTag": "MATK Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+12% MATK, +30% Heal",
        "stats": {
            "MATK%": 0.12,
            "HEAL%": 0.3
        },
        "conversions": []
    },
    "Sage's Hope": {
        "category": "caster",
        "PreReq": ["Life Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+5% MATK, +15% DEF, +250 HP",
        "stats": {
            "DEF%": 0.15,
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Sage's Wisdom": {
        "category": "caster",
        "PreReq": ["Life Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+5% MATK, +10 MP",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Sage's Love": {
        "category": "caster",
        "PreReq": ["Life Sage"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+5% MATK, +10% Heal",
        "stats": {
            "MATK%": 0.05,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Odin's Blessing 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+12% MATK",
        "stats": {
            "MATK%": 0.12
        },
        "conversions": []
    },
    "Odin's Blessing 2": {
        "category": "caster",
        "PreReq": ["Odin's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+12% MATK",
        "stats": {
            "MATK%": 0.12
        },
        "conversions": []
    },
    "Avatar of Odin": {
        "category": "caster",
        "PreReq": ["Odin's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+18% MATK",
        "stats": {
            "MATK%": 0.18
        },
        "conversions": []
    },
    "Loki's Blessing 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+6% MATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Loki's Blessing 2": {
        "category": "caster",
        "PreReq": ["Loki's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+6% MATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Avatar of Loki": {
        "category": "caster",
        "PreReq": ["Loki's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+12% MATK, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "MATK%": 0.12
        },
        "conversions": []
    },
    "Hela's Blessing 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+6% MATK, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Hela's Blessing 2": {
        "category": "caster",
        "PreReq": ["Hela's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+6% MATK, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Avatar of Hela": {
        "category": "caster",
        "PreReq": ["Hela's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+12% MATK, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25,
            "MATK%": 0.12
        },
        "conversions": []
    },
    "God of Nature": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 5",
        "BlockedTag": "MATK Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+20% MATK",
        "stats": {
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Flow of Nature": {
        "category": "caster",
        "PreReq": ["God of Nature"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% Water and Wind Penetration",
        "stats": {
            "MATK%": 0.06,
            "Water Pen%": 0.05,
            "Wind Pen%": 0.05
        },
        "conversions": []
    },
    "Power of Nature": {
        "category": "caster",
        "PreReq": ["God of Nature"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% Fire and Lightning Penetration",
        "stats": {
            "MATK%": 0.06,
            "Fire Pen%": 0.05,
            "Lightning Pen%": 0.05
        },
        "conversions": []
    },
    "Heart of Nature": {
        "category": "caster",
        "PreReq": ["God of Nature"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+6% MATK, +5% Earth Penetration and Toxic Penetration",
        "stats": {
            "MATK%": 0.06,
            "Earth Pen%": 0.05,
            "Toxic Pen%": 0.05
        },
        "conversions": []
    },
    "God of Death": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 5",
        "BlockedTag": "MATK Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+14% MATK, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "MATK%": 0.14
        },
        "conversions": []
    },
    "Coming of Death": {
        "category": "caster",
        "PreReq": ["God of Death"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+4% MATK, +5% Negative Penetration",
        "stats": {
            "MATK%": 0.04,
            "Neg Pen%": 0.05
        },
        "conversions": []
    },
    "Touch of Death": {
        "category": "caster",
        "PreReq": ["God of Death"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+4% MATK, +30% Crit Damage",
        "stats": {
            "Crit DMG%": 0.3,
            "MATK%": 0.04
        },
        "conversions": []
    },
    "Power of Death": {
        "category": "caster",
        "PreReq": ["God of Death"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+4% MATK, +10% Negative Damage",
        "stats": {
            "MATK%": 0.04,
            "Neg%": 0.1
        },
        "conversions": []
    },
    "God of Light": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 5",
        "BlockedTag": "MATK Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+12% MATK, +30% Heal",
        "stats": {
            "MATK%": 0.12,
            "HEAL%": 0.3
        },
        "conversions": []
    },
    "Gaze of Light": {
        "category": "caster",
        "PreReq": ["God of Light"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+5% ATK, +10% Holy Damage and Penetration",
        "stats": {
            "ATK%": 0.05,
            "Holy%": 0.1,
            "Holy Pen%": 0.1
        },
        "conversions": []
    },
    "Energy of Light": {
        "category": "caster",
        "PreReq": ["God of Light"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+5% MATK, 12 MP",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Touch of Light": {
        "category": "caster",
        "PreReq": ["God of Light"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 70,
            "healer_levels": 0
        },
        "description": "+5% MATK, +12% Heal",
        "stats": {
            "MATK%": 0.05,
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Saga of Circe 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+20% MATK",
        "stats": {
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Saga of Circe 2": {
        "category": "caster",
        "PreReq": ["Saga of Circe 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+20% MATK",
        "stats": {
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Power of Circe": {
        "category": "caster",
        "PreReq": ["Saga of Circe 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+35% MATK",
        "stats": {
            "MATK%": 0.35
        },
        "conversions": []
    },
    "Saga of Pythagoras 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+8% MATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.08
        },
        "conversions": []
    },
    "Saga of Pythagoras 2": {
        "category": "caster",
        "PreReq": ["Saga of Pythagoras 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+8% MATK, +3% Crit Chance",
        "stats": {
            "Crit Chance%": 0.03,
            "MATK%": 0.08
        },
        "conversions": []
    },
    "Genius of Pythagoras": {
        "category": "caster",
        "PreReq": ["Saga of Pythagoras 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+15% MATK, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Saga of Medea 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Saga of Medea 2": {
        "category": "caster",
        "PreReq": ["Saga of Medea 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Vengeance of Medea": {
        "category": "caster",
        "PreReq": ["Saga of Medea 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+12% MATK, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25,
            "MATK%": 0.12
        },
        "conversions": []
    },
    "Blessing of Olympus": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 6",
        "BlockedTag": "MATK Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+20% MATK",
        "stats": {
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Wrath of Poseidon": {
        "category": "caster",
        "PreReq": ["Blessing of Olympus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +15% Water and Wind Penetration",
        "stats": {
            "MATK%": 0.06,
            "Water Pen%": 0.15,
            "Wind Pen%": 0.15
        },
        "conversions": []
    },
    "Wrath of Zeus": {
        "category": "caster",
        "PreReq": ["Blessing of Olympus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +15% Fire and Lightning Penetration",
        "stats": {
            "MATK%": 0.06,
            "Fire Pen%": 0.15,
            "Lightning Pen%": 0.15
        },
        "conversions": []
    },
    "Wrath of Gaia": {
        "category": "caster",
        "PreReq": ["Blessing of Olympus"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +15% Earth Penetration and Toxic Penetration",
        "stats": {
            "MATK%": 0.06,
            "Earth Pen%": 0.15,
            "Toxic Pen%": 0.15
        },
        "conversions": []
    },
    "Blessing of Hades": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 6",
        "BlockedTag": "MATK Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+15% MATK, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Will of Hades": {
        "category": "caster",
        "PreReq": ["Blessing of Hades"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +10% Negative Penetration",
        "stats": {
            "MATK%": 0.06,
            "Neg Pen%": 0.1
        },
        "conversions": []
    },
    "Will of Thanatos": {
        "category": "caster",
        "PreReq": ["Blessing of Hades"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +30% Crit Damage",
        "stats": {
            "Crit DMG%": 0.3,
            "MATK%": 0.06
        },
        "conversions": []
    },
    "Will of Charon": {
        "category": "caster",
        "PreReq": ["Blessing of Hades"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+6% MATK, +15% Negative Damage",
        "stats": {
            "MATK%": 0.06,
            "Neg%": 0.15
        },
        "conversions": []
    },
    "Blessing of the Titans": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "MATK Path 6",
        "BlockedTag": "MATK Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+35% MATK",
        "stats": {
            "MATK%": 0.35
        },
        "conversions": []
    },
    "Chaos of Cronus": {
        "category": "caster",
        "PreReq": ["Blessing of the Titans"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+25% MATK",
        "stats": {
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Chaos of Atlas": {
        "category": "caster",
        "PreReq": ["Blessing of the Titans"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+20% MATK, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Chaos of Hyperion": {
        "category": "caster",
        "PreReq": ["Blessing of the Titans"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 85,
            "healer_levels": 0
        },
        "description": "+20% MATK, +15% Holy Damage",
        "stats": {
            "MATK%": 0.2,
            "Holy%": 0.15
        },
        "conversions": []
    },
    "Elementalist Ascendency": {
        "category": "caster",
        "PreReq": ["Path of the Elements", "Element"],
        "Tag": "CasterAscend",
        "BlockedTag": "CasterAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Elemental Penetration, +15% Elemental Damage",
        "stats": {
            "Fire%": 0.15,
            "Water%": 0.15,
            "Lightning%": 0.15,
            "Wind%": 0.15,
            "Earth%": 0.15,
            "Toxic%": 0.15,
            "Fire Pen%": 0.05,
            "Water Pen%": 0.05,
            "Lightning Pen%": 0.05,
            "Wind Pen%": 0.05,
            "Earth Pen%": 0.05,
            "Toxic Pen%": 0.05
        },
        "conversions": []
    },
    "Fire Ascendency": {
        "category": "caster",
        "PreReq": ["Elementalist Ascendency"],
        "Tag": "ElementAscend",
        "BlockedTag": "ElementAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Fire Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Fire Pen%": 0.05
        },
        "conversions": []
    },
    "Fire Ascendency 2": {
        "category": "caster",
        "PreReq": ["Fire Ascendency"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Fire Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Fire Pen%": 0.05
        },
        "conversions": []
    },
    "Fire Ascendency 3": {
        "category": "caster",
        "PreReq": ["Fire Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Elemental xPen, +20 MP, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Water Ascendency": {
        "category": "caster",
        "PreReq": ["Elementalist Ascendency"],
        "Tag": "ElementAscend",
        "BlockedTag": "ElementAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Water Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Water Pen%": 0.05
        },
        "conversions": []
    },
    "Water Ascendency 2": {
        "category": "caster",
        "PreReq": ["Water Ascendency"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Water Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Water Pen%": 0.05
        },
        "conversions": []
    },
    "Water Ascendency 3": {
        "category": "caster",
        "PreReq": ["Water Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Elemental xPen, +20 MP, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Lightning Ascendency": {
        "category": "caster",
        "PreReq": ["Elementalist Ascendency"],
        "Tag": "ElementAscend",
        "BlockedTag": "ElementAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Lightning Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Lightning Pen%": 0.05
        },
        "conversions": []
    },
    "Lightning Ascendency 2": {
        "category": "caster",
        "PreReq": ["Lightning Ascendency"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Lightning Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Lightning Pen%": 0.05
        },
        "conversions": []
    },
    "Lightning Ascendency 3": {
        "category": "caster",
        "PreReq": ["Lightning Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Elemental xPen, +20 MP, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Wind Ascendency": {
        "category": "caster",
        "PreReq": ["Elementalist Ascendency"],
        "Tag": "ElementAscend",
        "BlockedTag": "ElementAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Wind Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Wind Pen%": 0.05
        },
        "conversions": []
    },
    "Wind Ascendency 2": {
        "category": "caster",
        "PreReq": ["Wind Ascendency"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Wind Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Wind Pen%": 0.05
        },
        "conversions": []
    },
    "Wind Ascendency 3": {
        "category": "caster",
        "PreReq": ["Wind Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Elemental xPen, +20 MP, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Earth Ascendency": {
        "category": "caster",
        "PreReq": ["Elementalist Ascendency"],
        "Tag": "ElementAscend",
        "BlockedTag": "ElementAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Earth Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Earth Pen%": 0.05
        },
        "conversions": []
    },
    "Earth Ascendency 2": {
        "category": "caster",
        "PreReq": ["Earth Ascendency"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Earth Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Earth Pen%": 0.05
        },
        "conversions": []
    },
    "Earth Ascendency 3": {
        "category": "caster",
        "PreReq": ["Earth Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Elemental xPen, +20 MP, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Poison Ascendency": {
        "category": "caster",
        "PreReq": ["Elementalist Ascendency"],
        "Tag": "ElementAscend",
        "BlockedTag": "ElementAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Toxic Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Toxic Pen%": 0.05
        },
        "conversions": []
    },
    "Poison Ascendency 2": {
        "category": "caster",
        "PreReq": ["Poison Ascendency"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Toxic Penetration, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Toxic Pen%": 0.05
        },
        "conversions": []
    },
    "Poison Ascendency 3": {
        "category": "caster",
        "PreReq": ["Poison Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Elemental xPen, +20 MP, +10% Elemental Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Soul Ascendency": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "CasterAscend",
        "BlockedTag": "CasterAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Divine Penetration, +25% Divine Damage",
        "stats": {
            "Neg%": 0.25,
            "Holy%": 0.25,
            "Neg Pen%": 0.05,
            "Holy Pen%": 0.05
        },
        "conversions": []
    },
    "Life Ascendency 1": {
        "category": "caster",
        "PreReq": ["Soul Ascendency"],
        "Tag": "SoulAscend",
        "BlockedTag": "SoulAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+3% Holy Penetration, +10% Divine Damage",
        "stats": {
            "Neg%": 0.1,
            "Holy%": 0.1,
            "Holy Pen%": 0.03
        },
        "conversions": []
    },
    "Life Ascendency 2": {
        "category": "caster",
        "PreReq": ["Life Ascendency 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+3% Holy Penetration, +10% Divine Damage",
        "stats": {
            "Neg%": 0.1,
            "Holy%": 0.1,
            "Holy Pen%": 0.03
        },
        "conversions": []
    },
    "Life Ascendency 3": {
        "category": "caster",
        "PreReq": ["Life Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+6% Holy Penetration, +30% Divine Damage, +10% Divine xPen",
        "stats": {
            "Neg%": 0.3,
            "Holy%": 0.3,
            "Holy Pen%": 0.06
        },
        "conversions": []
    },
    "Death Ascendency 1": {
        "category": "caster",
        "PreReq": ["Soul Ascendency"],
        "Tag": "SoulAscend",
        "BlockedTag": "SoulAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Negative Penetration, +5% Divine Damage, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "Neg%": 0.05,
            "Holy%": 0.05,
            "Neg Pen%": 0.05
        },
        "conversions": []
    },
    "Death Ascendency 2": {
        "category": "caster",
        "PreReq": ["Death Ascendency 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Negative Penetration, +5% Divine Damage, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "Neg%": 0.05,
            "Holy%": 0.05,
            "Neg Pen%": 0.05
        },
        "conversions": []
    },
    "Death Ascendency 3": {
        "category": "caster",
        "PreReq": ["Death Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+5% Negative Penetration, +10% Divine Damage, +10% Divine xPen",
        "stats": {
            "Neg%": 0.1,
            "Holy%": 0.1,
            "Neg Pen%": 0.05
        },
        "conversions": []
    },
    "Arcane Ascendency": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "CasterAscend",
        "BlockedTag": "CasterAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+2% Void Penetration, +10% Void Damage, +20% MATK",
        "stats": {
            "MATK%": 0.2,
            "Void%": 0.1,
            "Void Pen%": 0.02
        },
        "conversions": []
    },
    "Void Ascendency 1": {
        "category": "caster",
        "PreReq": ["Arcane Ascendency"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+1% Void Penetration, +10% Void Damage, +10% MATK",
        "stats": {
            "MATK%": 0.1,
            "Void%": 0.1,
            "Void Pen%": 0.01
        },
        "conversions": []
    },
    "Void Ascendency 2": {
        "category": "caster",
        "PreReq": ["Void Ascendency 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+1% Void Penetration, +10% Void Damage, +10% MATK",
        "stats": {
            "MATK%": 0.1,
            "Void%": 0.1,
            "Void Pen%": 0.01
        },
        "conversions": []
    },
    "Void Ascendency 3": {
        "category": "caster",
        "PreReq": ["Void Ascendency 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+4% Void Penetration, +10% Void Damage, +10% Void xPen, +30% MATK",
        "stats": {
            "MATK%": 0.3,
            "Void%": 0.1,
            "Void Pen%": 0.04,
            "Void xPen%": 0.1
        },
        "conversions": []
    },
    "Studies of Trismegistus 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +12% Crit Damage",
        "stats": {
            "Crit DMG%": 0.12
        },
        "conversions": []
    },
    "Studies of Trismegistus 2": {
        "category": "caster",
        "PreReq": ["Studies of Trismegistus 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +12% Crit Damage",
        "stats": {
            "Crit DMG%": 0.12
        },
        "conversions": []
    },
    "Lore of the Corpus": {
        "category": "caster",
        "PreReq": ["Studies of Trismegistus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +30% Crit Damage, +1% Global Damage",
        "stats": {
            "Crit DMG%": 0.3
        },
        "conversions": []
    },
    "Buddha's Blessing 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +12% Elemental Damage",
        "stats": {
            "Fire%": 0.12,
            "Water%": 0.12,
            "Lightning%": 0.12,
            "Wind%": 0.12,
            "Earth%": 0.12,
            "Toxic%": 0.12
        },
        "conversions": []
    },
    "Buddha's Blessing 2": {
        "category": "caster",
        "PreReq": ["Buddha's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +18% Elemental Damage",
        "stats": {
            "Fire%": 0.18,
            "Water%": 0.18,
            "Lightning%": 0.18,
            "Wind%": 0.18,
            "Earth%": 0.18,
            "Toxic%": 0.18
        },
        "conversions": []
    },
    "Buddha's Enlightenment": {
        "category": "caster",
        "PreReq": ["Buddha's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +12% Elemental Penetration",
        "stats": {
            "Fire Pen%": 0.12,
            "Water Pen%": 0.12,
            "Lightning Pen%": 0.12,
            "Wind Pen%": 0.12,
            "Earth Pen%": 0.12,
            "Toxic Pen%": 0.12
        },
        "conversions": []
    },
    "Damned Sorceries 1": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +12% Divine Damage, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "Neg%": 0.12,
            "Holy%": 0.12
        },
        "conversions": []
    },
    "Damned Sorceries 2": {
        "category": "caster",
        "PreReq": ["Damned Sorceries 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +18% Divine Damage, +3% Crit Chance",
        "stats": {
            "Crit Chance%": 0.03,
            "Neg%": 0.18,
            "Holy%": 0.18
        },
        "conversions": []
    },
    "Follies of Faustus": {
        "category": "caster",
        "PreReq": ["Damned Sorceries 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +12% Divine Pen, +1% Global Damage",
        "stats": {
            "Neg Pen%": 0.12,
            "Holy Pen%": 0.12
        },
        "conversions": []
    },
    "Ideals of the Saoshyant": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "Cast125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+40% Divine DMG, +5% Divine Pen, Conversion 10% Holy DMG to MP, Conversion 10% Negative DMG to Crit DMG",
        "stats": {
            "Neg%": 0.4,
            "Holy%": 0.4,
            "Neg Pen%": 0.05,
            "Holy Pen%": 0.05
        },
        "conversions": [
            {
                "source": "Holy%",
                "ratio": 0.1,
                "resulting_stat": "MP"
            },
            {
                "source": "Neg%",
                "ratio": 0.1,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Seal of Solomon": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "Cast125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+10% Void Pen, -40 MP, +35% Global Void DMG",
        "stats": {
            "Void Pen%": 0.1
        },
        "conversions": []
    },
    "Avatar's Rebirth": {
        "category": "caster",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "Cast125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+40% MATK Multi, 6% of MATK Multi converted into Elemental DMG",
        "stats": {
            "MATK%": 0.4
        },
        "conversions": []
    },
    "Warping Sands of Dawn": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +8% Magic DMG, Conversion 4% MATK to DEF",
        "stats": {
            "Fire%": 0.08,
            "Water%": 0.08,
            "Lightning%": 0.08,
            "Wind%": 0.08,
            "Earth%": 0.08,
            "Toxic%": 0.08,
            "Neg%": 0.08,
            "Holy%": 0.08,
            "Void%": 0.08
        },
        "conversions": [
            {
                "source": "MATK",
                "ratio": 0.04,
                "resulting_stat": "def"
            }
        ]
    },
    "Warping Sands of Horizon": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "-3% Global MATK, +16% Magic DMG, Conversion 4% MATK to DEF",
        "stats": {
            "Fire%": 0.16,
            "Water%": 0.16,
            "Lightning%": 0.16,
            "Wind%": 0.16,
            "Earth%": 0.16,
            "Toxic%": 0.16,
            "Neg%": 0.16,
            "Holy%": 0.16,
            "Void%": 0.16
        },
        "conversions": [
            {
                "source": "MATK",
                "ratio": 0.04,
                "resulting_stat": "def"
            }
        ]
    },
    "Warping Sands of Twilight": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, -6% xMagic DMG, Conversion 4% MATK to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "MATK",
                "ratio": 0.04,
                "resulting_stat": "def"
            }
        ]
    },
    "Time Shard of Onirakan": {
        "category": "caster",
        "PreReq": ["C_AeonShard"],
        "Tag": "C_AeonCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +3% xMagic DMG, Conversion 4% MATK to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "MATK",
                "ratio": 0.04,
                "resulting_stat": "def"
            }
        ]
    },
    "Warping Light of Ego": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +4% xMagic Pen",
        "stats": {},
        "conversions": []
    },
    "Warping Light of Desire": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK,  Transfer 20% DEF to MATK",
        "stats": {},
        "conversions": [
            {
                "source": "DEF",
                "ratio": 0.2,
                "resulting_stat": "matk"
            }
        ]
    },
    "Warping Light of Spirit": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +4% xMagic Pen, -10% Max HP Multi",
        "stats": {},
        "conversions": []
    },
    "Soul Shard of Onirakan": {
        "category": "caster",
        "PreReq": ["C_InfinityShard"],
        "Tag": "C_InfinityCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+2% Global MATK, +6% xMagic DMG",
        "stats": {},
        "conversions": []
    },
    "Warping Gem of Protons": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +8% Magic DMG, Conversion 8% DEF to MATK",
        "stats": {
            "Fire%": 0.08,
            "Water%": 0.08,
            "Lightning%": 0.08,
            "Wind%": 0.08,
            "Earth%": 0.08,
            "Toxic%": 0.08,
            "Neg%": 0.08,
            "Holy%": 0.08,
            "Void%": 0.08
        },
        "conversions": [
            {
                "source": "DEF",
                "ratio": 0.08,
                "resulting_stat": "matk"
            }
        ]
    },
    "Warping Gem of Electrons": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +8% Magic DMG, Conversion 8% ATK to MATK",
        "stats": {
            "Fire%": 0.08,
            "Water%": 0.08,
            "Lightning%": 0.08,
            "Wind%": 0.08,
            "Earth%": 0.08,
            "Toxic%": 0.08,
            "Neg%": 0.08,
            "Holy%": 0.08,
            "Void%": 0.08
        },
        "conversions": [
            {
                "source": "ATK",
                "ratio": 0.08,
                "resulting_stat": "matk"
            }
        ]
    },
    "Warping Gem of Neutrons": {
        "category": "caster",
        "PreReq": ["PrimalEssence"],
        "Tag": "C_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, +8% Magic DMG, Conversion 8% Healpower to MATK",
        "stats": {
            "Fire%": 0.08,
            "Water%": 0.08,
            "Lightning%": 0.08,
            "Wind%": 0.08,
            "Earth%": 0.08,
            "Toxic%": 0.08,
            "Neg%": 0.08,
            "Holy%": 0.08,
            "Void%": 0.08
        },
        "conversions": [
            {
                "source": "Healpower",
                "ratio": 0.08,
                "resulting_stat": "matk"
            }
        ]
    },
    "Space Shard of Onirakan": {
        "category": "caster",
        "PreReq": ["C_CosmicShard"],
        "Tag": "C_CosmicCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+2% Global MATK,  +10% Magic DMG, +2% Global Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Neg%": 0.1,
            "Holy%": 0.1,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Time Shard of Mephis'ronan": {
        "category": "caster",
        "PreReq": ["C_StarGodHeart", "StarEssence"],
        "Tag": "C175 Shard",
        "BlockedTag": "C175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, Temp HP Start of 20% Max HP, -33% Global ATK/Healpower",
        "stats": {},
        "conversions": []
    },
    "Soul Shard of Mephis'ronan": {
        "category": "caster",
        "PreReq": ["C_StarGodHeart", "StarEssence"],
        "Tag": "C175 Shard",
        "BlockedTag": "C175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+2% Global MATK, +3% Crit Chance, +25% Crit DMG",
        "stats": {
            "Crit Chance%": 0.03,
            "Crit DMG%": 0.25
        },
        "conversions": []
    },
    "Space Shard of Mephis'ronan": {
        "category": "caster",
        "PreReq": ["C_StarGodHeart", "StarEssence"],
        "Tag": "C175 Shard",
        "BlockedTag": "C175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+1% Global MATK, -8% Global MP, +12% xMagic DMG",
        "stats": {},
        "conversions": []
    },
    "Time Core of Mephis'ronan": {
        "category": "caster",
        "PreReq": ["C175 Shard"],
        "Tag": "C175 Core",
        "BlockedTag": "C175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+15 MP Regen, -85% Global MP, Temp HP Start of 20% Max HP",
        "stats": {
            "MP Regen": 15
        },
        "conversions": []
    },
    "Soul Core of Mephis'ronan": {
        "category": "caster",
        "PreReq": ["C175 Shard"],
        "Tag": "C175 Core",
        "BlockedTag": "C175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "-50% Global Crit Chance, +25% xMagic DMG",
        "stats": {},
        "conversions": []
    },
    "Space Core of Mephis'ronan": {
        "category": "caster",
        "PreReq": ["C175 Shard"],
        "Tag": "C175 Core",
        "BlockedTag": "C175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+200% Threat Generated, +10% Crit Chance, Conversion 10% MATK to MATK/Heal/ATK/DEF",
        "stats": {
            "Crit Chance%": 0.1,
            "Threat%": 2.0
        },
        "conversions": [
            {
                "source": "MATK",
                "ratio": 0.1,
                "resulting_stat": "matk"
            }
        ]
    },
    "Sealed Core of Mephis'ronan": {
        "category": "caster",
        "PreReq": ["C175 Shard"],
        "Tag": "C175 Core",
        "BlockedTag": "C175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 175,
            "healer_levels": 0
        },
        "description": "+2% Global MATK, +5% xMagic Pen, +5% Global Crit DMG",
        "stats": {},
        "conversions": []
    },
    "Healing Study 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+5% Heal ",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Healing Study 2": {
        "category": "healer",
        "PreReq": ["Healing Study 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+5% Heal",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Healing Apprentice": {
        "category": "healer",
        "PreReq": ["Healing Study 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+10% Heal",
        "stats": {
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Cleric Training 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+3% Heal, +9 ATK",
        "stats": {
            "HEAL%": 0.03
        },
        "conversions": []
    },
    "Cleric Training 2": {
        "category": "healer",
        "PreReq": ["Cleric Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+3% Heal, +9 ATK",
        "stats": {
            "HEAL%": 0.03
        },
        "conversions": []
    },
    "Cleric Apprentice": {
        "category": "healer",
        "PreReq": ["Cleric Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+5% Heal, +15 ATK",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Magic Body Training 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+2% Heal, +3 MATK",
        "stats": {
            "HEAL%": 0.02
        },
        "conversions": []
    },
    "Magic Body Training 2": {
        "category": "healer",
        "PreReq": ["Magic Body Training 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+2% Heal, +3 MATK",
        "stats": {
            "HEAL%": 0.02
        },
        "conversions": []
    },
    "Magic Body Training 3": {
        "category": "healer",
        "PreReq": ["Magic Body Training 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 25,
        "exp": 25,
        "tp_spent": 0,
        "total_level": 1,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 1
        },
        "description": "+2% Heal, +4 MATK",
        "stats": {
            "HEAL%": 0.02
        },
        "conversions": []
    },
    "Heal Locus 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+5% Heal ",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Heal Locus 2": {
        "category": "healer",
        "PreReq": ["Heal Locus 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+5% Heal",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Life Locus": {
        "category": "healer",
        "PreReq": ["Heal Locus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+10% Heal",
        "stats": {
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Faith War 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +5% MATK, +10 ATK",
        "stats": {
            "MATK%": 0.05,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Faith War 2": {
        "category": "healer",
        "PreReq": ["Faith War 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +5% MATK, +10 ATK",
        "stats": {
            "MATK%": 0.05,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Faith of War": {
        "category": "healer",
        "PreReq": ["Faith War 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+8% Heal, +10% MATK, +15 ATK",
        "stats": {
            "MATK%": 0.1,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Magic Body Training 4": {
        "category": "healer",
        "PreReq": ["Magic Body Training 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+3% Heal, +4 MATK",
        "stats": {
            "HEAL%": 0.03
        },
        "conversions": []
    },
    "Magic Body Training 5": {
        "category": "healer",
        "PreReq": ["Magic Body Training 4"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+3% Heal, +4 MATK",
        "stats": {
            "HEAL%": 0.03
        },
        "conversions": []
    },
    "Magic Body Training 6": {
        "category": "healer",
        "PreReq": ["Magic Body Training 5"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 40,
        "exp": 100,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+5% Heal, +6 MATK",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Path of the Healer": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 1",
        "BlockedTag": "Heal Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+20% Heal",
        "stats": {
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Healer Path 1": {
        "category": "healer",
        "PreReq": ["Path of the Healer"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Healer Path 2": {
        "category": "healer",
        "PreReq": ["Healer Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Healer Path 3": {
        "category": "healer",
        "PreReq": ["Healer Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Path of the Guardian": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 1",
        "BlockedTag": "Heal Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+12% Heal, +80 HP, +25 DEF",
        "stats": {
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Guardian Path 1": {
        "category": "healer",
        "PreReq": ["Path of the Guardian"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +2% DEF, +4 DEF",
        "stats": {
            "DEF%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Guardian Path 2": {
        "category": "healer",
        "PreReq": ["Guardian Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +2% DEF, +4 DEF",
        "stats": {
            "DEF%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Guardian Path 3": {
        "category": "healer",
        "PreReq": ["Guardian Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +2% DEF, +4 DEF",
        "stats": {
            "DEF%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Path of the Bishop": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 1",
        "BlockedTag": "Heal Path 1",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+15% Heal, +8% MATK, +20 MATK",
        "stats": {
            "MATK%": 0.08,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Bishop Path 1": {
        "category": "healer",
        "PreReq": ["Path of the Bishop"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +2% MATK, +4 MATK",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Bishop Path 2": {
        "category": "healer",
        "PreReq": ["Bishop Path 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +2% MATK, +4 MATK",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Bishop Path 3": {
        "category": "healer",
        "PreReq": ["Bishop Path 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 8
        },
        "description": "+4% Heal, +2% MATK, +4 MATK",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Magic Body Training 7": {
        "category": "healer",
        "PreReq": ["Magic Body Training 6"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+5% Heal, +6 MATK",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Magic Body Training 8": {
        "category": "healer",
        "PreReq": ["Magic Body Training 7"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+5% Heal, +6 MATK",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Magic Focus Mastery": {
        "category": "healer",
        "PreReq": ["Magic Body Training 8"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+20% Heal, +25 MP, +20 MATK, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Life Saint": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 2",
        "BlockedTag": "Heal Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+20% Heal",
        "stats": {
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Life Saint 1": {
        "category": "healer",
        "PreReq": ["Life Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Life Saint 2": {
        "category": "healer",
        "PreReq": ["Life Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Life Saint 3": {
        "category": "healer",
        "PreReq": ["Life Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Protection Saint": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 2",
        "BlockedTag": "Heal Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+12% Heal, +10% DEF, +20 DEF",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Protection Saint 1": {
        "category": "healer",
        "PreReq": ["Protection Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+4% Heal, +2% DEF, +4 DEF",
        "stats": {
            "DEF%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Protection Saint 2": {
        "category": "healer",
        "PreReq": ["Protection Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+4% Heal, +2% DEF, +4 DEF",
        "stats": {
            "DEF%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Protection Saint 3": {
        "category": "healer",
        "PreReq": ["Protection Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+4% Heal, +2% DEF, +4 DEF",
        "stats": {
            "DEF%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "War Saint": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 2",
        "BlockedTag": "Heal Path 2",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+15% Heal, +10% MATK, +10 MATK",
        "stats": {
            "MATK%": 0.1,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "War Saint 1": {
        "category": "healer",
        "PreReq": ["War Saint"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+4% Heal, +2% MATK, +4 MATK",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "War Saint 2": {
        "category": "healer",
        "PreReq": ["War Saint 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+4% Heal, +2% MATK, +4 MATK",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "War Saint 3": {
        "category": "healer",
        "PreReq": ["War Saint 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 15
        },
        "description": "+4% Heal, +2% MATK, +4 MATK",
        "stats": {
            "MATK%": 0.02,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Soul Care 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+5% Heal, +2 MP",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Soul Care 2": {
        "category": "healer",
        "PreReq": ["Soul Care 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+5% Heal, +2 MP",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Soul Tender": {
        "category": "healer",
        "PreReq": ["Soul Care 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+8% Heal, +2 MP",
        "stats": {
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Spirit Mastery 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+5% Heal, +7% DEF",
        "stats": {
            "DEF%": 0.07,
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Spirit Mastery 2": {
        "category": "healer",
        "PreReq": ["Spirit Mastery 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+5% Heal, +7% DEF",
        "stats": {
            "DEF%": 0.07,
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Spirit Lord": {
        "category": "healer",
        "PreReq": ["Spirit Mastery 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+8% Heal, +15% DEF",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Soul Power 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+4% Heal, +5 MATK",
        "stats": {
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Soul Power 2": {
        "category": "healer",
        "PreReq": ["Soul Power 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+4% Heal, +5 MATK",
        "stats": {
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Energy of the Soul": {
        "category": "healer",
        "PreReq": ["Soul Power 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+6% Heal, +12 MATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Life Weaver": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 3",
        "BlockedTag": "Heal Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+20% Heal",
        "stats": {
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Fate Weaver": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 3",
        "BlockedTag": "Heal Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+10% Heal, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Death Weaver": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 3",
        "BlockedTag": "Heal Path 3",
        "gold": 200,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+15% Heal, +15% MATK",
        "stats": {
            "MATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Life String 1": {
        "category": "healer",
        "PreReq": ["Heal Path 3"],
        "Tag": "Heal3Tier1",
        "BlockedTag": "Heal3Tier1",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Fate String 1": {
        "category": "healer",
        "PreReq": ["Heal Path 3"],
        "Tag": "Heal3Tier1",
        "BlockedTag": "Heal3Tier1",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1
        },
        "conversions": []
    },
    "Death String 1": {
        "category": "healer",
        "PreReq": ["Heal Path 3"],
        "Tag": "Heal3Tier1",
        "BlockedTag": "Heal3Tier1",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+4% Heal, +4% MATK",
        "stats": {
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Life String 2": {
        "category": "healer",
        "PreReq": ["Heal3Tier1"],
        "Tag": "Heal3Tier2",
        "BlockedTag": "Heal3Tier2",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+6% Heal",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Fate String 2": {
        "category": "healer",
        "PreReq": ["Heal3Tier1"],
        "Tag": "Heal3Tier2",
        "BlockedTag": "Heal3Tier2",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1
        },
        "conversions": []
    },
    "Death String 2": {
        "category": "healer",
        "PreReq": ["Heal3Tier1"],
        "Tag": "Heal3Tier2",
        "BlockedTag": "Heal3Tier2",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+4% Heal, +4% MATK",
        "stats": {
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Thread of Life": {
        "category": "healer",
        "PreReq": ["Heal3Tier2"],
        "Tag": "Heal3Tier3",
        "BlockedTag": "Heal3Tier3",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+10% Heal",
        "stats": {
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Thread of Fate": {
        "category": "healer",
        "PreReq": ["Heal3Tier2"],
        "Tag": "Heal3Tier3",
        "BlockedTag": "Heal3Tier3",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2
        },
        "conversions": []
    },
    "Thread of Death": {
        "category": "healer",
        "PreReq": ["Heal3Tier2"],
        "Tag": "Heal3Tier3",
        "BlockedTag": "Heal3Tier3",
        "gold": 50,
        "exp": 1500,
        "tp_spent": 11,
        "total_level": 30,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+8% Heal, +12% MATK",
        "stats": {
            "MATK%": 0.12,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Spirit's Touch 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+6% Heal, +100 HP",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Spirit's Touch 2": {
        "category": "healer",
        "PreReq": ["Spirit's Touch 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+6% Heal, +100 HP",
        "stats": {
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Love of the Spirit": {
        "category": "healer",
        "PreReq": ["Spirit's Touch 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+10% Heal, +200 HP",
        "stats": {
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Demigod's Spirit 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+5% Heal, +7% DEF, +3 MP",
        "stats": {
            "DEF%": 0.07,
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Demigod's Spirit 2": {
        "category": "healer",
        "PreReq": ["Demigod's Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+5% Heal, +7% DEF, +3 MP",
        "stats": {
            "DEF%": 0.07,
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Spirit Demigod": {
        "category": "healer",
        "PreReq": ["Demigod's Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+8% Heal, +15% DEF, +6 MP",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Emissary of Life": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 4",
        "BlockedTag": "Heal Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+20% Heal, +200 HP",
        "stats": {
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Emissary of Fortune": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 4",
        "BlockedTag": "Heal Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+12% Heal, +5% Crit Chance, +25% Crit Damage",
        "stats": {
            "Crit Chance%": 0.05,
            "Crit DMG%": 0.25,
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Emissary of War": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 4",
        "BlockedTag": "Heal Path 4",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+15% Heal, +15% MATK, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "MATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Life Vision 1": {
        "category": "healer",
        "PreReq": ["Heal Path 4"],
        "Tag": "Heal4Tier1",
        "BlockedTag": "Heal4Tier1",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+8% Heal, +75 HP",
        "stats": {
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Fortune Vision 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal4Tier1",
        "BlockedTag": "Heal4Tier1",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+4% Heal, +2% Crit Chance, +15% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.15,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "War Vision 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal4Tier1",
        "BlockedTag": "Heal4Tier1",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+6% Heal, MATK, and ATK",
        "stats": {
            "ATK%": 0.06,
            "MATK%": 0.06,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Life Vision 2": {
        "category": "healer",
        "PreReq": ["Heal4Tier1"],
        "Tag": "Heal4Tier2",
        "BlockedTag": "Heal4Tier2",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+8% Heal, +75 HP",
        "stats": {
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Fortune Vision 2": {
        "category": "healer",
        "PreReq": ["Heal4Tier1"],
        "Tag": "Heal4Tier2",
        "BlockedTag": "Heal4Tier2",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+4% Heal, +2% Crit Chance, +15% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.15,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "War Vision 2": {
        "category": "healer",
        "PreReq": ["Heal4Tier1"],
        "Tag": "Heal4Tier2",
        "BlockedTag": "Heal4Tier2",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+6% Heal, MATK, and ATK",
        "stats": {
            "ATK%": 0.06,
            "MATK%": 0.06,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Prophecy of Life": {
        "category": "healer",
        "PreReq": ["Heal4Tier2"],
        "Tag": "Heal4Tier3",
        "BlockedTag": "Heal4Tier3",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+12% Heal, +125 HP",
        "stats": {
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Prophecy of Fortune": {
        "category": "healer",
        "PreReq": ["Heal4Tier2"],
        "Tag": "Heal4Tier3",
        "BlockedTag": "Heal4Tier3",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+6% Heal, +2% Crit Chance, +25% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.25,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Prophecy of War": {
        "category": "healer",
        "PreReq": ["Heal4Tier2"],
        "Tag": "Heal4Tier3",
        "BlockedTag": "Heal4Tier3",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+10% Heal, MATK, and ATK",
        "stats": {
            "ATK%": 0.1,
            "MATK%": 0.1,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Frigg's Blessing 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+5% Heal, +10% DEF",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Frigg's Blessing 2": {
        "category": "healer",
        "PreReq": ["Frigg's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+5% Heal, +10% DEF",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Avatar of Frigg": {
        "category": "healer",
        "PreReq": ["Frigg's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+8% Heal, +16% DEF",
        "stats": {
            "DEF%": 0.16,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Idun's Blessing 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+5% Heal, +4 MP",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Idun's Blessing 2": {
        "category": "healer",
        "PreReq": ["Idun's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+5% Heal, +4 MP",
        "stats": {
            "HEAL%": 0.05
        },
        "conversions": []
    },
    "Avatar of Idun": {
        "category": "healer",
        "PreReq": ["Idun's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+8% Heal, +8 MP",
        "stats": {
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Freya's Blessing 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+4% Heal, +3% Crit Chance. +10% Crit Damage",
        "stats": {
            "Crit Chance%": 0.03,
            "Crit DMG%": 0.1,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Freya's Blessing 2": {
        "category": "healer",
        "PreReq": ["Freya's Blessing 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+4% Heal, +3% Crit Chance. +10% Crit Damage",
        "stats": {
            "Crit Chance%": 0.03,
            "Crit DMG%": 0.1,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Avatar of Freya": {
        "category": "healer",
        "PreReq": ["Freya's Blessing 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+8% Heal, +6% Crit Chance. +20% Crit Damage",
        "stats": {
            "Crit Chance%": 0.06,
            "Crit DMG%": 0.2,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "God of Life": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 5",
        "BlockedTag": "Heal Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+20% Heal, +300 HP",
        "stats": {
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "God of Fate": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 5",
        "BlockedTag": "Heal Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+12% Heal, +5% Crit Chance, +25% Crit Damage",
        "stats": {
            "Crit Chance%": 0.05,
            "Crit DMG%": 0.25,
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "God of Justice": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 5",
        "BlockedTag": "Heal Path 5",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+15% Heal, +15% MATK, +15% ATK",
        "stats": {
            "ATK%": 0.15,
            "MATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Divine Life 1": {
        "category": "healer",
        "PreReq": ["Heal Path 5"],
        "Tag": "Heal5Tier1",
        "BlockedTag": "Heal5Tier1",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+8% Heal, +120 HP",
        "stats": {
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Divine Fate 1": {
        "category": "healer",
        "PreReq": ["Heal Path 5"],
        "Tag": "Heal5Tier1",
        "BlockedTag": "Heal5Tier1",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+4% Heal, +2% Crit Chance, +15% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.15,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Divine Justice 1": {
        "category": "healer",
        "PreReq": ["Heal Path 5"],
        "Tag": "Heal5Tier1",
        "BlockedTag": "Heal5Tier1",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+6% Heal, MATK, and ATK",
        "stats": {
            "ATK%": 0.06,
            "MATK%": 0.06,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Divine Life 2": {
        "category": "healer",
        "PreReq": ["Heal5Tier1"],
        "Tag": "Heal5Tier2",
        "BlockedTag": "Heal5Tier2",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+8% Heal, +120 HP",
        "stats": {
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Divine Fate 2": {
        "category": "healer",
        "PreReq": ["Heal5Tier1"],
        "Tag": "Heal5Tier2",
        "BlockedTag": "Heal5Tier2",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+4% Heal, +2% Crit Chance, +15% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.15,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Divine Justice 2": {
        "category": "healer",
        "PreReq": ["Heal5Tier1"],
        "Tag": "Heal5Tier2",
        "BlockedTag": "Heal5Tier2",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+6% Heal, MATK, and ATK",
        "stats": {
            "ATK%": 0.06,
            "MATK%": 0.06,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Divinity of Life": {
        "category": "healer",
        "PreReq": ["Heal5Tier2"],
        "Tag": "Heal5Tier3",
        "BlockedTag": "Heal5Tier3",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+12% Heal, +240 HP",
        "stats": {
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Divinity of Fate": {
        "category": "healer",
        "PreReq": ["Heal5Tier2"],
        "Tag": "Heal5Tier3",
        "BlockedTag": "Heal5Tier3",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+6% Heal, +2% Crit Chance, +25% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.25,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Divinity of Justice": {
        "category": "healer",
        "PreReq": ["Heal5Tier2"],
        "Tag": "Heal5Tier3",
        "BlockedTag": "Heal5Tier3",
        "gold": 50,
        "exp": 4000,
        "tp_spent": 30,
        "total_level": 70,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 70
        },
        "description": "+10% Heal, MATK, and ATK",
        "stats": {
            "ATK%": 0.1,
            "MATK%": 0.1,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Saga of Empedocles 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +5% Holy Damage, +5% Negative Damage",
        "stats": {
            "HEAL%": 0.1,
            "Neg%": 0.05,
            "Holy%": 0.05
        },
        "conversions": []
    },
    "Saga of Empedocles 2": {
        "category": "healer",
        "PreReq": ["Saga of Empedocles 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +5% Holy Damage, +5% Negative Damage",
        "stats": {
            "HEAL%": 0.1,
            "Neg%": 0.05,
            "Holy%": 0.05
        },
        "conversions": []
    },
    "Healing of Empedocles": {
        "category": "healer",
        "PreReq": ["Saga of Empedocles 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+12% Heal, +10% Holy Damage, +10% Negative Damage",
        "stats": {
            "HEAL%": 0.12,
            "Neg%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Saga of Pandora 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +300 HP, +4 MP",
        "stats": {
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Saga of Pandora 2": {
        "category": "healer",
        "PreReq": ["Saga of Pandora 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +300 HP, +4 MP",
        "stats": {
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Hope of Pandora": {
        "category": "healer",
        "PreReq": ["Saga of Pandora 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+12% Heal, +500 HP, +6 MP",
        "stats": {
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Saga of Orpheus 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +2% Crit Chance. +12% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.12,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Saga of Orpheus 2": {
        "category": "healer",
        "PreReq": ["Saga of Orpheus 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +2% Crit Chance. +12% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.12,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Song of Orpheus": {
        "category": "healer",
        "PreReq": ["Saga of Orpheus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+12% Heal, +2% Crit Chance. +25% Crit Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "Crit DMG%": 0.25,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Mark of Apollo": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 6",
        "BlockedTag": "Heal Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+20% Heal, +10% Holy Damage",
        "stats": {
            "HEAL%": 0.2,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Mark of Hades": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 6",
        "BlockedTag": "Heal Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+20% Heal, +15% Negative Damage",
        "stats": {
            "HEAL%": 0.2,
            "Neg%": 0.15
        },
        "conversions": []
    },
    "Mark of Demeter": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "Heal Path 6",
        "BlockedTag": "Heal Path 6",
        "gold": 300,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+25% Heal, +500 HP",
        "stats": {
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Fragment of Life": {
        "category": "healer",
        "PreReq": ["Heal Path 6"],
        "Tag": "Heal6Tier1",
        "BlockedTag": "Heal6Tier1",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +5% Holy Damage",
        "stats": {
            "HEAL%": 0.1,
            "Holy%": 0.05
        },
        "conversions": []
    },
    "Fragment of Death": {
        "category": "healer",
        "PreReq": ["Heal Path 6"],
        "Tag": "Heal6Tier1",
        "BlockedTag": "Heal6Tier1",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +8% Negative Damage",
        "stats": {
            "HEAL%": 0.1,
            "Neg%": 0.08
        },
        "conversions": []
    },
    "Fragment of Harvest": {
        "category": "healer",
        "PreReq": ["Heal Path 6"],
        "Tag": "Heal6Tier1",
        "BlockedTag": "Heal6Tier1",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+12% Heal, +200 HP",
        "stats": {
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Measure of Life": {
        "category": "healer",
        "PreReq": ["Heal6Tier1"],
        "Tag": "Heal6Tier2",
        "BlockedTag": "Heal6Tier2",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +5% Holy Damage",
        "stats": {
            "HEAL%": 0.1,
            "Holy%": 0.05
        },
        "conversions": []
    },
    "Measure of Death": {
        "category": "healer",
        "PreReq": ["Heal6Tier1"],
        "Tag": "Heal6Tier2",
        "BlockedTag": "Heal6Tier2",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+10% Heal, +8% Negative Damage",
        "stats": {
            "HEAL%": 0.1,
            "Neg%": 0.08
        },
        "conversions": []
    },
    "Measure of Harvest": {
        "category": "healer",
        "PreReq": ["Heal6Tier1"],
        "Tag": "Heal6Tier2",
        "BlockedTag": "Heal6Tier2",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+12% Heal, +200 HP",
        "stats": {
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Grace of Apollo": {
        "category": "healer",
        "PreReq": ["Heal6Tier2"],
        "Tag": "Heal6Tier3",
        "BlockedTag": "Heal6Tier3",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+20% Heal, +20% Holy Damage, +5% Holy Penetration",
        "stats": {
            "HEAL%": 0.2,
            "Holy%": 0.2,
            "Holy Pen%": 0.05
        },
        "conversions": []
    },
    "Grace of Hades": {
        "category": "healer",
        "PreReq": ["Heal6Tier2"],
        "Tag": "Heal6Tier3",
        "BlockedTag": "Heal6Tier3",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+20% Heal, +20% Negative Damage +10% Negative Penetration",
        "stats": {
            "HEAL%": 0.2,
            "Neg%": 0.2,
            "Neg Pen%": 0.1
        },
        "conversions": []
    },
    "Grace of Demeter": {
        "category": "healer",
        "PreReq": ["Heal6Tier2"],
        "Tag": "Heal6Tier3",
        "BlockedTag": "Heal6Tier3",
        "gold": 75,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 85,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 85
        },
        "description": "+25% Heal, +25% DEF, +600 HP",
        "stats": {
            "DEF%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Sanctified Legate": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "HealAscend",
        "BlockedTag": "HealAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+15% Heal, +5% Global Heal Effect",
        "stats": {
            "HEAL%": 0.15,
            "Global Heal Effect": 0.05
        },
        "conversions": []
    },
    "Guardian Legate": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "HealAscend",
        "BlockedTag": "HealAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+10% Heal, +30% DEF, +2% All Resist",
        "stats": {
            "DEF%": 0.3,
            "HEAL%": 0.1,
            "Slash Res%": 0.02,
            "Pierce Res%": 0.02,
            "Blunt Res%": 0.02,
            "Fire Res%": 0.02,
            "Water Res%": 0.02,
            "Lightning Res%": 0.02,
            "Wind Res%": 0.02,
            "Earth Res%": 0.02,
            "Toxic Res%": 0.02,
            "Neg Res%": 0.02,
            "Holy Res%": 0.02,
            "Void Res%": 0.02
        },
        "conversions": []
    },
    "Inquisitor Legate": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "HealAscend",
        "BlockedTag": "HealAscend",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+10% Heal, +8% Divine Penetration",
        "stats": {
            "HEAL%": 0.1,
            "Neg Pen%": 0.08,
            "Holy Pen%": 0.08
        },
        "conversions": []
    },
    "Sanctity Proclaimation 1": {
        "category": "healer",
        "PreReq": ["HealAscend"],
        "Tag": "HealAscend1",
        "BlockedTag": "HealAscend1",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+50% Heal",
        "stats": {
            "HEAL%": 0.5
        },
        "conversions": []
    },
    "Consecrated Proclaimation 1": {
        "category": "healer",
        "PreReq": ["HealAscend"],
        "Tag": "HealAscend1",
        "BlockedTag": "HealAscend1",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+10% Heal, +15% DEF, +5% Max HP Multiplier",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Heresy Proclaimation 1": {
        "category": "healer",
        "PreReq": ["HealAscend"],
        "Tag": "HealAscend1",
        "BlockedTag": "HealAscend1",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+10% Heal, +20% Divine Damage",
        "stats": {
            "HEAL%": 0.1,
            "Neg%": 0.2,
            "Holy%": 0.2
        },
        "conversions": []
    },
    "Sanctity Proclaimation 2": {
        "category": "healer",
        "PreReq": ["HealAscend1"],
        "Tag": "HealAscend2",
        "BlockedTag": "HealAscend2",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+5% Global Heal Effect, +75% Crit Damage, -10% Global Damage",
        "stats": {
            "Crit DMG%": 0.75
        },
        "conversions": []
    },
    "Consecrated Proclaimation 2": {
        "category": "healer",
        "PreReq": ["HealAscend1"],
        "Tag": "HealAscend2",
        "BlockedTag": "HealAscend2",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+50% DEF",
        "stats": {
            "DEF%": 0.5
        },
        "conversions": []
    },
    "Heresy Proclaimation 2": {
        "category": "healer",
        "PreReq": ["HealAscend1"],
        "Tag": "HealAscend2",
        "BlockedTag": "HealAscend2",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+8% Divine Penetration",
        "stats": {
            "Neg Pen%": 0.08,
            "Holy Pen%": 0.08
        },
        "conversions": []
    },
    "Sanctity Proclaimation 3": {
        "category": "healer",
        "PreReq": ["HealAscend2"],
        "Tag": "HealAscend3",
        "BlockedTag": "HealAscend3",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+15% Crit Chance, +25% Heal, -35% Global Damage",
        "stats": {
            "Crit Chance%": 0.15,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Consecrated Proclaimation 3": {
        "category": "healer",
        "PreReq": ["HealAscend2"],
        "Tag": "HealAscend3",
        "BlockedTag": "HealAscend3",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+15% Heal, +45% Threat Bonus, +5% Max HP Multiplier",
        "stats": {
            "HEAL%": 0.15,
            "Threat%": 0.45
        },
        "conversions": []
    },
    "Heresy Proclaimation 3": {
        "category": "healer",
        "PreReq": ["HealAscend2"],
        "Tag": "HealAscend3",
        "BlockedTag": "HealAscend3",
        "gold": 200,
        "exp": 7500,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+3% Divine Penetration Multiplier, +10% Divine Damage",
        "stats": {
            "Neg%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Valkyrie's Charm 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, +10% Divine Damage and +15% Toxic Damage",
        "stats": {
            "Global HEAL%": 0.01,
            "Toxic%": 0.15,
            "Neg%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Valkyrie's Charm 2": {
        "category": "healer",
        "PreReq": ["Valkyrie's Charm 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, +10% Divine Damage and +15% Toxic Damage",
        "stats": {
            "Toxic%": 0.15,
            "Neg%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Protection of Eir": {
        "category": "healer",
        "PreReq": ["Valkyrie's Charm 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, +10% Divine Penetration and +15% Toxic Penetration",
        "stats": {
            "Toxic Pen%": 0.15,
            "Neg Pen%": 0.1,
            "Holy Pen%": 0.1
        },
        "conversions": []
    },
    "Power of Isis 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, -6% Threat Generated",
        "stats": {
            "Threat%": -0.06
        },
        "conversions": []
    },
    "Power of Isis 2": {
        "category": "healer",
        "PreReq": ["Power of Isis 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, -6% Threat Generated",
        "stats": {
            "Threat%": -0.06
        },
        "conversions": []
    },
    "Sacred Tyet": {
        "category": "healer",
        "PreReq": ["Power of Isis 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+4% Global Heal Effect, -8% Threat Generated, +6% Global Max Health",
        "stats": {
            "Threat%": -0.08
        },
        "conversions": []
    },
    "Divine Medicine 1": {
        "category": "healer",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 8000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, +10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1
        },
        "conversions": []
    },
    "Divine Medicine 2": {
        "category": "healer",
        "PreReq": ["Divine Medicine 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 250,
        "exp": 10000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15
        },
        "conversions": []
    },
    "Favor of Delphinios": {
        "category": "healer",
        "PreReq": ["Divine Medicine 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 300,
        "exp": 12500,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+1% Global Healpower, +25% Crit Damage, +2% Global Heal Effect",
        "stats": {
            "Crit DMG%": 0.25
        },
        "conversions": []
    },
    "Keter Malchut": {
        "category": "healer",
        "PreReq": ["Heal125"],
        "Tag": "Heal125Cap",
        "BlockedTag": "Heal125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+25% Global Damage, -40% Global Heal Effect, +25% Divine and Toxic Damage",
        "stats": {
            "Toxic%": 0.25,
            "Neg%": 0.25,
            "Holy%": 0.25
        },
        "conversions": []
    },
    "Flamel's Triumph": {
        "category": "healer",
        "PreReq": ["Heal125"],
        "Tag": "Heal125Cap",
        "BlockedTag": "Heal125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+10% Global Heal Effect, +10% Global Max Health, +25% Threat Generated",
        "stats": {
            "Threat%": 0.25
        },
        "conversions": []
    },
    "Asclepian Secrets": {
        "category": "healer",
        "PreReq": ["Heal125"],
        "Tag": "Heal125Cap",
        "BlockedTag": "Heal125Cap",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "-20% Threat Generated, +75 MP, +40% Crit Damage, +10% Crit Chance",
        "stats": {
            "Crit Chance%": 0.1,
            "Crit DMG%": 0.4,
            "Threat%": -0.25
        },
        "conversions": []
    },
    "Undying Sands of Dawn": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, +2% Max HP Multi, Conversion 3% Heal to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "Heal",
                "ratio": 0.03,
                "resulting_stat": "def"
            }
        ]
    },
    "Undying Sands of Horizon": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "-2% Global Heal, +4% Max HP Multi, Conversion 3% Heal to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "Heal",
                "ratio": 0.03,
                "resulting_stat": "def"
            }
        ]
    },
    "Undying Sands of Twilight": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_AeonShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+2% Global Heal, -5% Max HP Multi, Conversion 3% Heal to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "Heal",
                "ratio": 0.03,
                "resulting_stat": "def"
            }
        ]
    },
    "Time Shard of Mesofet": {
        "category": "healer",
        "PreReq": ["H_AeonShard"],
        "Tag": "H_AeonCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+2% Global Heal, +2% Max HP Multi, Conversion 3% Heal to DEF",
        "stats": {},
        "conversions": [
            {
                "source": "Heal",
                "ratio": 0.03,
                "resulting_stat": "def"
            }
        ]
    },
    "Undying Light of Ego": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+3% Global Heal, +5% All Res",
        "stats": {
            "Slash Res%": 0.05,
            "Pierce Res%": 0.05,
            "Blunt Res%": 0.05,
            "Fire Res%": 0.05,
            "Water Res%": 0.05,
            "Lightning Res%": 0.05,
            "Wind Res%": 0.05,
            "Earth Res%": 0.05,
            "Toxic Res%": 0.05,
            "Neg Res%": 0.05,
            "Holy Res%": 0.05,
            "Void Res%": 0.05
        },
        "conversions": []
    },
    "Undying Light of Desire": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, +5% Buff Multiplier, -25% Global ATK/MATK/DEF",
        "stats": {},
        "conversions": []
    },
    "Undying Light of Spirit": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_InfinityShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, +5% Buff Multiplier, -15% Global ATK/MATK/Max HP",
        "stats": {},
        "conversions": []
    },
    "Soul Shard of Mesofet": {
        "category": "healer",
        "PreReq": ["H_InfinityShard"],
        "Tag": "H_InfinityCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+3% Global Heal, +5% All Res",
        "stats": {
            "Slash Res%": 0.05,
            "Pierce Res%": 0.05,
            "Blunt Res%": 0.05,
            "Fire Res%": 0.05,
            "Water Res%": 0.05,
            "Lightning Res%": 0.05,
            "Wind Res%": 0.05,
            "Earth Res%": 0.05,
            "Toxic Res%": 0.05,
            "Neg Res%": 0.05,
            "Holy Res%": 0.05,
            "Void Res%": 0.05
        },
        "conversions": []
    },
    "Undying Gem of Protons": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, +8% Magic DMG, Conversion 8% DEF to Heal",
        "stats": {
            "Fire%": 0.08,
            "Water%": 0.08,
            "Lightning%": 0.08,
            "Wind%": 0.08,
            "Earth%": 0.08,
            "Toxic%": 0.08,
            "Neg%": 0.08,
            "Holy%": 0.08,
            "Void%": 0.08
        },
        "conversions": [
            {
                "source": "DEF",
                "ratio": 0.08,
                "resulting_stat": "heal"
            }
        ]
    },
    "Undying Gem of Electrons": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, +8% Magic DMG, Conversion 8% ATK to Heal",
        "stats": {
            "Fire%": 0.08,
            "Water%": 0.08,
            "Lightning%": 0.08,
            "Wind%": 0.08,
            "Earth%": 0.08,
            "Toxic%": 0.08,
            "Neg%": 0.08,
            "Holy%": 0.08,
            "Void%": 0.08
        },
        "conversions": [
            {
                "source": "ATK",
                "ratio": 0.08,
                "resulting_stat": "heal"
            }
        ]
    },
    "Undying Gem of Neutrons": {
        "category": "healer",
        "PreReq": ["PrimalEssence"],
        "Tag": "H_CosmicShard",
        "BlockedTag": "",
        "gold": 400,
        "exp": 12000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, +8% Magic DMG, Conversion 8% MATK to Heal",
        "stats": {
            "Fire%": 0.08,
            "Water%": 0.08,
            "Lightning%": 0.08,
            "Wind%": 0.08,
            "Earth%": 0.08,
            "Toxic%": 0.08,
            "Neg%": 0.08,
            "Holy%": 0.08,
            "Void%": 0.08
        },
        "conversions": [
            {
                "source": "MATK",
                "ratio": 0.08,
                "resulting_stat": "heal"
            }
        ]
    },
    "Space Shard of Mesofet": {
        "category": "healer",
        "PreReq": ["H_CosmicShard"],
        "Tag": "H_CosmicCore",
        "BlockedTag": "",
        "gold": 500,
        "exp": 15000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+2% Global Heal,  +10% Magic DMG, +2% Global Damage",
        "stats": {
            "Fire%": 0.1,
            "Water%": 0.1,
            "Lightning%": 0.1,
            "Wind%": 0.1,
            "Earth%": 0.1,
            "Toxic%": 0.1,
            "Neg%": 0.1,
            "Holy%": 0.1,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Time Shard of Azago'toth": {
        "category": "healer",
        "PreReq": ["H_StarGodHeart", "StarEssence"],
        "Tag": "H175 Shard",
        "BlockedTag": "H175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, Temp HP Start of 20% Max HP, -33% Global MATK/ATK",
        "stats": {
            "Global HEAL%": 0.01,
            "Global MATK%": -0.33,
            "Global ATK%": -0.33
        },
        "conversions": []
    },
    "Soul Shard of Azago'toth": {
        "category": "healer",
        "PreReq": ["H_StarGodHeart", "StarEssence"],
        "Tag": "H175 Shard",
        "BlockedTag": "H175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+1% Global Heal, +3% Buff Multiplier",
        "stats": {},
        "conversions": []
    },
    "Space Shard of Azago'toth": {
        "category": "healer",
        "PreReq": ["H_StarGodHeart", "StarEssence"],
        "Tag": "H175 Shard",
        "BlockedTag": "H175 Shard",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+50% Global DMG, -95% Global MATK/ATK/Void DMG, -40% Global Heal Effect",
        "stats": {},
        "conversions": []
    },
    "Time Core of Azago'toth": {
        "category": "healer",
        "PreReq": ["H175 Shard"],
        "Tag": "H175 Core",
        "BlockedTag": "H175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+5% Global Heal & HP Regen Rate, +3 MP Regen, -33% Global Damage",
        "stats": {
            "Global Healpower%": 0.05,
        },
        "conversions": []
    },
    "Soul Core of Azago'toth": {
        "category": "healer",
        "PreReq": ["H175 Shard"],
        "Tag": "H175 Core",
        "BlockedTag": "H175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+5% Global Heal, +15% Global Max Health, +300% Threat Generated",
        "stats": {
            "Threat%": 3.0,
            "Global Healpower%": 0.05,
            "Global HP%": 0.15
        },
        "conversions": []
    },
    "Space Core of Azago'toth": {
        "category": "healer",
        "PreReq": ["H175 Shard"],
        "Tag": "H175 Core",
        "BlockedTag": "H175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+50% Global Heal, -75% Buff Multiplier, -75% Global Heal Effect",
        "stats": {
            "Global Healpower%": 0.5,
            "Buff Multiplier%": -0.75,
            "Global Healing%": -0.75
        },
        "conversions": []
    },
    "Sealed Core of Azago'toth": {
        "category": "healer",
        "PreReq": ["H175 Shard"],
        "Tag": "H175 Core",
        "BlockedTag": "H175 Core",
        "gold": 1500,
        "exp": 25000,
        "tp_spent": 86,
        "total_level": 175,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 175
        },
        "description": "+3% Global Heal, +3% Buff Multiplier, +33% Crit Damage",
        "stats": {
            "Crit DMG%": 0.33,
            "Global Healpower%": 0.03,
            "Buff Multiplier%": 0.03
        },
        "conversions": []
    },
    "Warrior's Path": {
        "category": "hybrid",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 4,
            "warrior_levels": 4,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12% DEF, +12% ATK, +15 ATK",
        "stats": {
            "DEF%": 0.12,
            "ATK%": 0.12
        },
        "conversions": []
    },
    "Champion's Path": {
        "category": "hybrid",
        "PreReq": ["Warrior's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 14,
        "class_levels": {
            "tank_levels": 7,
            "warrior_levels": 7,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Conqueror 1": {
        "category": "hybrid",
        "PreReq": ["Champion's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 14,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% ATK, +15 ATK",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Conqueror 2": {
        "category": "hybrid",
        "PreReq": ["Conqueror 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 14,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% ATK, +15 ATK",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Conqueror 3": {
        "category": "hybrid",
        "PreReq": ["Conqueror 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 14,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% ATK, +15 ATK",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Vanquisher 1": {
        "category": "hybrid",
        "PreReq": ["Conqueror 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 150,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 24,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Vanquisher 2": {
        "category": "hybrid",
        "PreReq": ["Vanquisher 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 150,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 24,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Vanquisher 3": {
        "category": "hybrid",
        "PreReq": ["Vanquisher 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 150,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 24,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Vanquisher EX": {
        "category": "hybrid",
        "PreReq": ["Vanquisher 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 35,
        "total_level": 80,
        "class_levels": {
            "tank_levels": 40,
            "warrior_levels": 40,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Warrior's Path": {
        "category": "hybrid",
        "PreReq": ["Vanquisher EX"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 60,
            "warrior_levels": 60,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Champion's Path": {
        "category": "hybrid",
        "PreReq": ["Ascended Warrior's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5500,
        "tp_spent": 60,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 75,
            "warrior_levels": 75,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Conqueror 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Champion's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 90,
            "warrior_levels": 90,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Conqueror 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Conqueror 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 90,
            "warrior_levels": 90,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Conqueror 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Conqueror 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 110,
            "warrior_levels": 110,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Vanquisher 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Conqueror 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 110,
            "warrior_levels": 110,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +25% ATK, +20 ATK",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Vanquisher 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Vanquisher 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +30% ATK, +25 ATK",
        "stats": {
            "DEF%": 0.25,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Ascended Vanquisher 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Vanquisher 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +30% ATK, +25 ATK",
        "stats": {
            "DEF%": 0.25,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Ascended Vanquisher EX": {
        "category": "hybrid",
        "PreReq": ["Ascended Vanquisher 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 12500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 140,
            "warrior_levels": 140,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% DEF, +35% ATK, +25 ATK",
        "stats": {
            "DEF%": 0.3,
            "ATK%": 0.35
        },
        "conversions": []
    },
    "Battle Mage's Path": {
        "category": "hybrid",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 4,
            "warrior_levels": 0,
            "caster_levels": 4,
            "healer_levels": 0
        },
        "description": "+12% DEF, +12% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.12,
            "MATK%": 0.12
        },
        "conversions": []
    },
    "War Mage's Path": {
        "category": "hybrid",
        "PreReq": ["Battle Mage's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 14,
        "class_levels": {
            "tank_levels": 7,
            "warrior_levels": 0,
            "caster_levels": 7,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Arcane Juggernaut 1": {
        "category": "hybrid",
        "PreReq": ["War Mage's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 0,
            "caster_levels": 14,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Arcane Juggernaut 2": {
        "category": "hybrid",
        "PreReq": ["Arcane Juggernaut 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 0,
            "caster_levels": 14,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Arcane Juggernaut 3": {
        "category": "hybrid",
        "PreReq": ["Arcane Juggernaut 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 0,
            "caster_levels": 14,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Mystic Knight 1": {
        "category": "hybrid",
        "PreReq": ["Arcane Juggernaut 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 0,
            "caster_levels": 24,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Mystic Knight 2": {
        "category": "hybrid",
        "PreReq": ["Mystic Knight 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 0,
            "caster_levels": 24,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Mystic Knight 3": {
        "category": "hybrid",
        "PreReq": ["Mystic Knight 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 0,
            "caster_levels": 24,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Mystic Knight EX": {
        "category": "hybrid",
        "PreReq": ["Mystic Knight 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 35,
        "total_level": 80,
        "class_levels": {
            "tank_levels": 40,
            "warrior_levels": 0,
            "caster_levels": 40,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Battle Mage's Path": {
        "category": "hybrid",
        "PreReq": ["Mystic Knight EX"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 60,
            "warrior_levels": 0,
            "caster_levels": 60,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended War Mage's Path": {
        "category": "hybrid",
        "PreReq": ["Ascended Battle Mage's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5500,
        "tp_spent": 60,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 75,
            "warrior_levels": 0,
            "caster_levels": 75,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Arcane Juggernaut 1": {
        "category": "hybrid",
        "PreReq": ["Ascended War Mage's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 90,
            "warrior_levels": 0,
            "caster_levels": 90,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Arcane Juggernaut 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Arcane Juggernaut 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 90,
            "warrior_levels": 0,
            "caster_levels": 90,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Arcane Juggernaut 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Arcane Juggernaut 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 110,
            "warrior_levels": 0,
            "caster_levels": 110,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Mystic Knight 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Arcane Juggernaut 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 110,
            "warrior_levels": 0,
            "caster_levels": 110,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% MATK, +15 MATK",
        "stats": {
            "DEF%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Mystic Knight 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Mystic Knight 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+25% DEF, +25% MATK, +20 MATK",
        "stats": {
            "DEF%": 0.25,
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Mystic Knight 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Mystic Knight 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+25% DEF, +25% MATK, +20 MATK",
        "stats": {
            "DEF%": 0.25,
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Mystic Knight EX": {
        "category": "hybrid",
        "PreReq": ["Ascended Mystic Knight 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 12500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 140,
            "warrior_levels": 0,
            "caster_levels": 140,
            "healer_levels": 0
        },
        "description": "+25% DEF, +25% MATK, +20 MATK",
        "stats": {
            "DEF%": 0.25,
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Paladin's Path": {
        "category": "hybrid",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 4,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 4
        },
        "description": "+12% DEF, +12% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.12,
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Crusader's Path": {
        "category": "hybrid",
        "PreReq": ["Paladin's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 14,
        "class_levels": {
            "tank_levels": 7,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 7
        },
        "description": "+15% DEF, +15% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Justicar 1": {
        "category": "hybrid",
        "PreReq": ["Crusader's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 14
        },
        "description": "+15% DEF, +15% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Justicar 2": {
        "category": "hybrid",
        "PreReq": ["Justicar 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 14
        },
        "description": "+15% DEF, +15% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Justicar 3": {
        "category": "hybrid",
        "PreReq": ["Justicar 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 14,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 14
        },
        "description": "+15% DEF, +15% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Lightforged Crusader 1": {
        "category": "hybrid",
        "PreReq": ["Justicar 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 24
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Lightforged Crusader 2": {
        "category": "hybrid",
        "PreReq": ["Lightforged Crusader 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 24
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Lightforged Crusader 3": {
        "category": "hybrid",
        "PreReq": ["Lightforged Crusader 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 24,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 24
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Lightforged Crusader EX": {
        "category": "hybrid",
        "PreReq": ["Lightforged Crusader 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 35,
        "total_level": 80,
        "class_levels": {
            "tank_levels": 40,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 40
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Paladin's Path": {
        "category": "hybrid",
        "PreReq": ["Lightforged Crusader EX"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 60,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 60
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Crusader's Path": {
        "category": "hybrid",
        "PreReq": ["Ascended Paladin's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5500,
        "tp_spent": 60,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 75,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 75
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Justicar 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Crusader's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 90,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 90
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Justicar 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Justicar 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 90,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 90
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Justicar 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Justicar 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 110,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 110
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Lightforged Crusader 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Justicar 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 110,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 110
        },
        "description": "+20% DEF, +20% Heal, +15 Heal",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Lightforged Crusader 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Lightforged Crusader 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+25% DEF, +25% Heal, +20 Heal",
        "stats": {
            "DEF%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Lightforged Crusader 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Lightforged Crusader 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+25% DEF, +25% Heal, +20 Heal",
        "stats": {
            "DEF%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Lightforged Crusader EX": {
        "category": "hybrid",
        "PreReq": ["Ascended Lightforged Crusader 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 12500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 140,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 140
        },
        "description": "+25% DEF, +25% Heal, +20 Heal",
        "stats": {
            "DEF%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Spellblade's Path": {
        "category": "hybrid",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 4,
            "caster_levels": 4,
            "healer_levels": 0
        },
        "description": "+12% ATK, +12% MATK, +45 HP",
        "stats": {
            "ATK%": 0.12,
            "MATK%": 0.12
        },
        "conversions": []
    },
    "Cursed Knight's Path": {
        "category": "hybrid",
        "PreReq": ["Spellblade's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 14,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 7,
            "caster_levels": 7,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% MATK, +45 HP",
        "stats": {
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Arcane Warlord 1": {
        "category": "hybrid",
        "PreReq": ["Cursed Knight's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 14,
            "caster_levels": 14,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Arcane Warlord 2": {
        "category": "hybrid",
        "PreReq": ["Arcane Warlord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 14,
            "caster_levels": 14,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Arcane Warlord 3": {
        "category": "hybrid",
        "PreReq": ["Arcane Warlord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 14,
            "caster_levels": 14,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15,
            "MATK%": 0.15
        },
        "conversions": []
    },
    "Mythic Warlord 1": {
        "category": "hybrid",
        "PreReq": ["Arcane Warlord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 24,
            "caster_levels": 24,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Mythic Warlord 2": {
        "category": "hybrid",
        "PreReq": ["Mythic Warlord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 24,
            "caster_levels": 24,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Mythic Warlord 3": {
        "category": "hybrid",
        "PreReq": ["Mythic Warlord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 24,
            "caster_levels": 24,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Mythic Warlord EX": {
        "category": "hybrid",
        "PreReq": ["Mythic Warlord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 35,
        "total_level": 80,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 40,
            "caster_levels": 40,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Spellblade's Path": {
        "category": "hybrid",
        "PreReq": ["Mythic Warlord EX"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 60,
            "caster_levels": 60,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Cursed Knight's Path": {
        "category": "hybrid",
        "PreReq": ["Ascended Spellblade's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5500,
        "tp_spent": 60,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 75,
            "caster_levels": 75,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Arcane Warlord 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Cursed Knight's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 90,
            "caster_levels": 90,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Arcane Warlord 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Arcane Warlord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 90,
            "caster_levels": 90,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Ascended Arcane Warlord 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Arcane Warlord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 110,
            "caster_levels": 110,
            "healer_levels": 0
        },
        "description": "+30% ATK, +25% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.3,
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Mythic Warlord 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Arcane Warlord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 110,
            "caster_levels": 110,
            "healer_levels": 0
        },
        "description": "+30% ATK, +25% MATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.3,
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Ascended Mythic Warlord 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Mythic Warlord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+40% ATK, +40% MATK, +10% DEF",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.4,
            "MATK%": 0.4
        },
        "conversions": []
    },
    "Ascended Mythic Warlord 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Mythic Warlord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+40% ATK, +40% MATK, +15% DEF",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.4,
            "MATK%": 0.4
        },
        "conversions": []
    },
    "Ascended Mythic Warlord EX": {
        "category": "hybrid",
        "PreReq": ["Ascended Mythic Warlord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 12500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 140,
            "caster_levels": 140,
            "healer_levels": 0
        },
        "description": "+45% ATK, +45% MATK, +20% DEF",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.45,
            "MATK%": 0.45
        },
        "conversions": []
    },
    "Templar's Path": {
        "category": "hybrid",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 4,
            "caster_levels": 0,
            "healer_levels": 4
        },
        "description": "+12% ATK, +12% Heal, +45 HP",
        "stats": {
            "ATK%": 0.12,
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Hospitaler's Path": {
        "category": "hybrid",
        "PreReq": ["Templar's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 14,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 7,
            "caster_levels": 0,
            "healer_levels": 7
        },
        "description": "+15% ATK, +15% Heal, +45 HP",
        "stats": {
            "ATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Divine Executor 1": {
        "category": "hybrid",
        "PreReq": ["Hospitaler's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 14,
            "caster_levels": 0,
            "healer_levels": 14
        },
        "description": "+15% ATK, +15% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Divine Executor 2": {
        "category": "hybrid",
        "PreReq": ["Divine Executor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 14,
            "caster_levels": 0,
            "healer_levels": 14
        },
        "description": "+15% ATK, +15% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Divine Executor 3": {
        "category": "hybrid",
        "PreReq": ["Divine Executor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 14,
            "caster_levels": 0,
            "healer_levels": 14
        },
        "description": "+15% ATK, +15% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Sacred Warrior 1": {
        "category": "hybrid",
        "PreReq": ["Divine Executor 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 24,
            "caster_levels": 0,
            "healer_levels": 24
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Sacred Warrior 2": {
        "category": "hybrid",
        "PreReq": ["Sacred Warrior 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 24,
            "caster_levels": 0,
            "healer_levels": 24
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Sacred Warrior 3": {
        "category": "hybrid",
        "PreReq": ["Sacred Warrior 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 24,
            "caster_levels": 0,
            "healer_levels": 24
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Sacred Warrior EX": {
        "category": "hybrid",
        "PreReq": ["Sacred Warrior 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 35,
        "total_level": 80,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 40,
            "caster_levels": 0,
            "healer_levels": 40
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Templar's Path": {
        "category": "hybrid",
        "PreReq": ["Sacred Warrior EX"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 60,
            "caster_levels": 0,
            "healer_levels": 60
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Hospitaler's Path": {
        "category": "hybrid",
        "PreReq": ["Ascended Templar's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5500,
        "tp_spent": 60,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 75,
            "caster_levels": 0,
            "healer_levels": 75
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Divine Executor 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Hospitaler's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 90,
            "caster_levels": 0,
            "healer_levels": 90
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Divine Executor 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Divine Executor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 90,
            "caster_levels": 0,
            "healer_levels": 90
        },
        "description": "+25% ATK, +20% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.25,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Divine Executor 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Divine Executor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 110,
            "caster_levels": 0,
            "healer_levels": 110
        },
        "description": "+30% ATK, +25% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.3,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Sacred Warrior 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Divine Executor 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 110,
            "caster_levels": 0,
            "healer_levels": 110
        },
        "description": "+30% ATK, +25% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.3,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Sacred Warrior 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Sacred Warrior 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+30% ATK, +25% Heal, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.3,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Sacred Warrior 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Sacred Warrior 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+30% ATK, +25% Heal, +10% DEF",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.3,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Sacred Warrior EX": {
        "category": "hybrid",
        "PreReq": ["Ascended Sacred Warrior 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 12500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 140,
            "caster_levels": 0,
            "healer_levels": 140
        },
        "description": "+35% ATK, +25% Heal, +15% DEF",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.35,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Inquisitor's Path": {
        "category": "hybrid",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 2,
        "total_level": 8,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 4,
            "healer_levels": 4
        },
        "description": "+12% MATK, +12% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.12,
            "HEAL%": 0.12
        },
        "conversions": []
    },
    "Shaman's Path": {
        "category": "hybrid",
        "PreReq": ["Inquisitor's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 150,
        "tp_spent": 4,
        "total_level": 14,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 7,
            "healer_levels": 7
        },
        "description": "+15% MATK, +15% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Prophet 1": {
        "category": "hybrid",
        "PreReq": ["Shaman's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 14,
            "healer_levels": 14
        },
        "description": "+15% MATK, +15% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Prophet 2": {
        "category": "hybrid",
        "PreReq": ["Prophet 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 14,
            "healer_levels": 14
        },
        "description": "+15% MATK, +15% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Prophet 3": {
        "category": "hybrid",
        "PreReq": ["Prophet 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 800,
        "tp_spent": 10,
        "total_level": 28,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 14,
            "healer_levels": 14
        },
        "description": "+15% MATK, +15% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.15,
            "HEAL%": 0.15
        },
        "conversions": []
    },
    "Great Sage 1": {
        "category": "hybrid",
        "PreReq": ["Prophet 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 24,
            "healer_levels": 24
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Great Sage 2": {
        "category": "hybrid",
        "PreReq": ["Great Sage 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 24,
            "healer_levels": 24
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Great Sage 3": {
        "category": "hybrid",
        "PreReq": ["Great Sage 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 3000,
        "tp_spent": 20,
        "total_level": 48,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 24,
            "healer_levels": 24
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Great Sage EX": {
        "category": "hybrid",
        "PreReq": ["Great Sage 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 4000,
        "tp_spent": 35,
        "total_level": 80,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 40,
            "healer_levels": 40
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Inquisitor's Path": {
        "category": "hybrid",
        "PreReq": ["Great Sage EX"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5000,
        "tp_spent": 40,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 60,
            "healer_levels": 60
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Shaman's Path": {
        "category": "hybrid",
        "PreReq": ["Ascended Inquisitor's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 5500,
        "tp_spent": 60,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 75,
            "healer_levels": 75
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Prophet 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Shaman's Path"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 90,
            "healer_levels": 90
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Prophet 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Prophet 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 6500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 90,
            "healer_levels": 90
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Prophet 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Prophet 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 110,
            "healer_levels": 110
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Great Sage 1": {
        "category": "hybrid",
        "PreReq": ["Ascended Prophet 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 9000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 110,
            "healer_levels": 110
        },
        "description": "+20% MATK, +20% Heal, +15 MATK",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Ascended Great Sage 2": {
        "category": "hybrid",
        "PreReq": ["Ascended Great Sage 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 125
        },
        "description": "+25% MATK, +25% Heal, +20 MATK",
        "stats": {
            "MATK%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Great Sage 3": {
        "category": "hybrid",
        "PreReq": ["Ascended Great Sage 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 10000,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 125
        },
        "description": "+25% MATK, +25% Heal, +20 MATK",
        "stats": {
            "MATK%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "Ascended Great Sage EX": {
        "category": "hybrid",
        "PreReq": ["Ascended Great Sage 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 200,
        "exp": 12500,
        "tp_spent": 80,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 140,
            "healer_levels": 140
        },
        "description": "+25% MATK, +25% Heal, +20 MATK",
        "stats": {
            "MATK%": 0.25,
            "HEAL%": 0.25
        },
        "conversions": []
    },
    "World Guardian": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 60,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +20% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.4,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "World Slayer": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 60,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +30% DEF, +10% Void DMG",
        "stats": {
            "DEF%": 0.3,
            "ATK%": 0.2,
            "Void%": 0.1
        },
        "conversions": []
    },
    "World Disaster": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 60,
            "healer_levels": 0
        },
        "description": "+40% MATK, +20% Void DMG, +15% Global MATK, -20% Max MP",
        "stats": {
            "MATK%": 0.4,
            "Void%": 0.2,
            "Global MATK%": 0.15,
            "MP%": -0.2
        },
        "conversions": []
    },
    "World Mender": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 60
        },
        "description": "+20% Heal, +20% Def, +10% Void DMG",
        "stats": {
            "DEF%": 0.2,
            "HEAL%": 0.2,
            "Void%": 0.1
        },
        "conversions": []
    },
    "World Champion": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +30% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.3,
            "ATK%": 0.3,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "World Liberator": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+30% MATK, +30% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.3,
            "MATK%": 0.3,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "World Preserver": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+30% Heal, +30% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.3,
            "HEAL%": 0.3,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "World Conqueror": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+45% ATK, +45% MATK, +30 MP",
        "stats": {
            "ATK%": 0.45,
            "MATK%": 0.45
        },
        "conversions": []
    },
    "World Overseer": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+30% ATK, +30% Heal, +10% Void Resist",
        "stats": {
            "ATK%": 0.3,
            "HEAL%": 0.3,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "World Emissary": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 30
        },
        "description": "+30% MATK, +30% Heal, +10% Void DMG",
        "stats": {
            "MATK%": 0.3,
            "HEAL%": 0.3,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Void Guardian": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 60,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Threat Bonus, +30% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.3,
            "Threat%": 0.15,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Void Slayer": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 60,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +20% DEF, +10 MP",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Void Disaster": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 60,
            "healer_levels": 0
        },
        "description": "+25% MATK, +25 MP, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "MATK%": 0.25
        },
        "conversions": []
    },
    "Void Mender": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 60
        },
        "description": "+30% Heal, +10% Void Resist",
        "stats": {
            "HEAL%": 0.3,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Void Champion": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +15% DEF, +10% Void Damage",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.35,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Void Liberator": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+35% MATK, +15% DEF, +10% Void Damage",
        "stats": {
            "DEF%": 0.15,
            "MATK%": 0.35,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Void Preserver": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+35% Heal, +25% DEF, +10% Void Damage",
        "stats": {
            "DEF%": 0.25,
            "HEAL%": 0.35,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Void Conqueror": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+30% ATK, +30% MATK, +20 MP",
        "stats": {
            "ATK%": 0.3,
            "MATK%": 0.3
        },
        "conversions": []
    },
    "Void Overseer": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+30% ATK, +30% Heal, +10% Void Damage",
        "stats": {
            "ATK%": 0.3,
            "HEAL%": 0.3,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Void Emissary": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 30
        },
        "description": "+30% MATK, +30% Heal, +10% Void Resist",
        "stats": {
            "MATK%": 0.3,
            "HEAL%": 0.3,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Spirit Guardian": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 60,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% DEF, +5% Max HP, +10% Void Resist",
        "stats": {
            "DEF%": 0.35,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Spirit Slayer": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 60,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% Divine Resist",
        "stats": {
            "ATK%": 0.25,
            "Neg Res%": 0.2,
            "Holy Res%": 0.2
        },
        "conversions": []
    },
    "Spirit Disaster": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 60,
            "healer_levels": 0
        },
        "description": "+30% MATK, +10% Divine Damage",
        "stats": {
            "MATK%": 0.3,
            "Neg%": 0.1,
            "Holy%": 0.1
        },
        "conversions": []
    },
    "Spirit Mender": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 60
        },
        "description": "+10% Heal, +5% Max MP, +10% Void Resist",
        "stats": {
            "HEAL%": 0.1,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Spirit Champion": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +40% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.4,
            "ATK%": 0.2,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Spirit Liberator": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+30% MATK, +10% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.1,
            "MATK%": 0.3,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Spirit Preserver": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 30,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+40% Heal, +10% DEF, +10% Void Resist",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.4,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Spirit Conqueror": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 30,
            "healer_levels": 0
        },
        "description": "+20% ATK, +20% MATK, +10% Max MP",
        "stats": {
            "ATK%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Spirit Overseer": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 30,
            "caster_levels": 0,
            "healer_levels": 30
        },
        "description": "+20% ATK, +40% Heal, +10% Void Resist",
        "stats": {
            "ATK%": 0.2,
            "HEAL%": 0.4,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Spirit Emissary": {
        "category": "prestige",
        "PreReq": ["PleiadesTrial"],
        "Tag": "SistersPrestige",
        "BlockedTag": "SistersPrestige",
        "gold": 500,
        "exp": 3500,
        "tp_spent": 20,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 30,
            "healer_levels": 30
        },
        "description": "+20% MATK, +35% Heal, +10% Void Damage",
        "stats": {
            "MATK%": 0.2,
            "HEAL%": 0.35,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Celestial's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +40% DEF, +20% Void Resist, +15% Void Penetration",
        "stats": {
            "DEF%": 0.4,
            "ATK%": 0.3,
            "Void Pen%": 0.15,
            "Void Res%": 0.2
        },
        "conversions": []
    },
    "Devourer's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +30% Void Damage, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "ATK%": 0.25,
            "Void%": 0.3
        },
        "conversions": []
    },
    "Sin's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+50% MATK, +40% Void DMG, -15 MP, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "MATK%": 0.5,
            "Void%": 0.4
        },
        "conversions": []
    },
    "Sephira's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+45% Heal, +20% DEF, +5% Crit Chance, -10% Threat Bonus",
        "stats": {
            "Crit Chance%": 0.05,
            "DEF%": 0.2,
            "HEAL%": 0.45,
            "Threat%": -0.1
        },
        "conversions": []
    },
    "Bahamut's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Physical Damage, +30% ATK, +30% DEF",
        "stats": {
            "DEF%": 0.3,
            "ATK%": 0.3,
            "Slash%": 0.25,
            "Pierce%": 0.25,
            "Blunt%": 0.25
        },
        "conversions": []
    },
    "Tiamat's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+50% MATK, +50% DEF, +15% Void Resist, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "DEF%": 0.5,
            "MATK%": 0.5,
            "Void Res%": 0.15
        },
        "conversions": []
    },
    "Odin's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+50% Heal, +75% DEF, +15% Threat Bonus, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "DEF%": 0.75,
            "HEAL%": 0.5,
            "Threat%": 0.15
        },
        "conversions": []
    },
    "Reaper's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+60% ATK, +60% MATK, +5% Crit Chance, +20% Crit Damage",
        "stats": {
            "Crit Chance%": 0.05,
            "Crit DMG%": 0.2,
            "ATK%": 0.6,
            "MATK%": 0.6
        },
        "conversions": []
    },
    "Gaia's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+60% Heal, +40% ATK, -10% Threat Bonus, +30 MP",
        "stats": {
            "ATK%": 0.4,
            "HEAL%": 0.6,
            "Threat%": -0.1
        },
        "conversions": []
    },
    "Goddess's Herald": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 50
        },
        "description": "+50% Heal, +50% MATK, +20% Void Damage, +5% Void Penetration",
        "stats": {
            "MATK%": 0.5,
            "HEAL%": 0.5,
            "Void%": 0.2,
            "Void Pen%": 0.05
        },
        "conversions": []
    },
    "Celestial's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 100,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Void Damage, +30% DEF, +25% Physical Penetration",
        "stats": {
            "DEF%": 0.3,
            "Void%": 0.25,
            "Slash Pen%": 0.25,
            "Pierce Pen%": 0.25,
            "Blunt Pen%": 0.25
        },
        "conversions": []
    },
    "Devourer's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 100,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Physical Penetration, -60% Void Damage, +55% ATK",
        "stats": {
            "ATK%": 0.55,
            "Void%": -0.6,
            "Slash Pen%": 0.2,
            "Pierce Pen%": 0.2,
            "Blunt Pen%": 0.2
        },
        "conversions": []
    },
    "Sin's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 100,
            "healer_levels": 0
        },
        "description": "+40% MATK, +60 MP, +20% Crit Chance",
        "stats": {
            "Crit Chance%": 0.2,
            "MATK%": 0.4
        },
        "conversions": []
    },
    "Sephira's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 100
        },
        "description": "+25% Heal, +50% Holy/Negative Damage, +10% Holy/Negative Penetration",
        "stats": {
            "HEAL%": 0.25,
            "Neg%": 0.5,
            "Holy%": 0.5,
            "Neg Pen%": 0.1,
            "Holy Pen%": 0.1
        },
        "conversions": []
    },
    "Bahamut's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Void Penetration, +50% ATK, +50% DEF",
        "stats": {
            "DEF%": 0.5,
            "ATK%": 0.5,
            "Void Pen%": 0.15
        },
        "conversions": []
    },
    "Tiamat's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+40% MATK, +40% DEF, +30% Void Damage, +5% Void Penetration",
        "stats": {
            "DEF%": 0.4,
            "MATK%": 0.4,
            "Void%": 0.3,
            "Void Pen%": 0.05
        },
        "conversions": []
    },
    "Odin's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 50,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+50% Heal, +30% DEF, +15% Holy/Negative/Void Penetration",
        "stats": {
            "DEF%": 0.3,
            "HEAL%": 0.5,
            "Neg Pen%": 0.15,
            "Holy Pen%": 0.15,
            "Void Pen%": 0.15
        },
        "conversions": []
    },
    "Reaper's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 50,
            "healer_levels": 0
        },
        "description": "+75% ATK, +75% MATK, -10% Crit Chance, +75% Crit Damage",
        "stats": {
            "Crit Chance%": -0.1,
            "Crit DMG%": 0.75,
            "ATK%": 0.75,
            "MATK%": 0.75
        },
        "conversions": []
    },
    "Gaia's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 50,
            "caster_levels": 0,
            "healer_levels": 50
        },
        "description": "+60% ATK, +30% Heal, +15% Threat Bonus, +30 MP",
        "stats": {
            "ATK%": 0.6,
            "HEAL%": 0.3,
            "Threat%": 0.15
        },
        "conversions": []
    },
    "Goddess's Anathema": {
        "category": "prestige",
        "PreReq": ["DeathGodBlessing"],
        "Tag": "HeraldPrestige",
        "BlockedTag": "HeraldPrestige",
        "gold": 1250,
        "exp": 10000,
        "tp_spent": 49,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 50,
            "healer_levels": 50
        },
        "description": "+60% Heal, 60% MATK, +10% Void/Holy/Negative Penetration",
        "stats": {
            "MATK%": 0.6,
            "HEAL%": 0.6,
            "Neg Pen%": 0.1,
            "Holy Pen%": 0.1,
            "Void Pen%": 0.1
        },
        "conversions": []
    },
    "Mystic Heart of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+50% MATK, +30 MP, Conversion 20% MP to Crit DMG, 50% Crit Chance to MP",
        "stats": {
            "MATK%": 0.5
        },
        "conversions": [
            {
                "source": "MP",
                "ratio": 0.2,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Mystic Legacy of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+50% MATK, +15% Penfire, +15% Global Elefire, +15% Global Fire Damage, Conversion 150% Resfire to MP",
        "stats": {
            "MATK%": 0.5,
            "Fire Pen%": 0.15,
            "Global Fire%": 0.15,
            "Global Fire DMG%": 0.15
        },
        "conversions": [
            {
                "source": "Fire Res%",
                "ratio": 1.5,
                "resulting_stat": "MP"
            }
        ]
    },
    "Mystic Essence of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+50% MATK, +10% Penelement, Conversion 60% Elefire to Elemental Damage, 80% Penfire to Crit Damage, -50% Reduction to Elefire",
        "stats": {
            "MATK%": 0.5,
            "Fire Pen%": 0.1,
            "Water Pen%": 0.1,
            "Lightning Pen%": 0.1,
            "Wind Pen%": 0.1,
            "Earth Pen%": 0.1,
            "Toxic Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Fire%",
                "ratio": 0.6,
                "resulting_stat": "Elemental%"
            },
            {
                "source": "Fire Pen%",
                "ratio": 0.8,
                "resulting_stat": "Crit DMG%"
            },
            {
                "source": "Fire%",
                "ratio": -0.5,
                "resulting_stat": "Fire%"
            }
        ]
    },
    "Warlord's Heart of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% ATK, Conversion 8% DEF Multiplier to Crit Damage",
        "stats": {
            "ATK%": 0.5
        },
        "conversions": [
            {
                "source": "DEF%",
                "ratio": 0.08,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Warlord's Legacy of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +5% Crit Chance, +15% Global Fist Damage, +5% Global Blunt Penetration. Conversion 50% Penslash to Penblunt.",
        "stats": {
            "Crit Chance%": 0.05,
            "ATK%": 0.30,
            "Global Fist%": 0.15,
            "Global Blunt Pen%": 0.05
        },
        "conversions": [
            {
                "source": "Slash Pen%",
                "ratio": 0.5,
                "resulting_stat": "Blunt Pen%"
            }
        ]
    },
    "Warlord's Essence of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% ATK, +5% Penslash, +15% Global Sword Damage, Conversion 110% Penfire to Penslash, 50% Elefire to Eleslash.",
        "stats": {
            "ATK%": 0.5,
            "Global Sword%": 0.15,
            "Slash Pen%": 0.05
        },
        "conversions": [
            {
                "source": "Fire Pen%",
                "ratio": 1.1,
                "resulting_stat": "Slash Pen%"
            },
            {
                "source": "Fire%",
                "ratio": 0.5,
                "resulting_stat": "Slash%"
            }
        ]
    },
    "Paragon's Heart of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% DEF, +1250 Max HP, +0.5% HP Regen, Conversion 100% Resfire to MP, 135% DEF Multi to HP Regen",
        "stats": {
            "DEF%": 0.35
        },
        "conversions": [
            {
                "source": "Fire Res%",
                "ratio": 1.0,
                "resulting_stat": "MP"
            }
        ]
    },
    "Paragon's Legacy of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +1200 Max HP, -25% Reswater, Conversion 25% Resfire to ResElements (except Water), 100% Resfire to Elephysical, Reduction 50% Resfire",
        "stats": {
            "DEF%": 0.2,
            "Water Res%": -0.25
        },
        "conversions": [
            {
                "source": "Fire Res%",
                "ratio": 0.25,
                "resulting_stat": "reselements"
            }
        ]
    },
    "Paragon's Essence of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% DEF, +25% Threat Gained, Conversion 40% of Penfire to Penvoid, 30% Elefire to Elephysical",
        "stats": {
            "DEF%": 0.3,
            "Threat%": 0.25
        },
        "conversions": [
            {
                "source": "Fire Pen%",
                "ratio": 0.4,
                "resulting_stat": "Void Pen%"
            },
            {
                "source": "Fire%",
                "ratio": 0.3,
                "resulting_stat": "elephysical"
            }
        ]
    },
    "Saint's Heart of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+45% Heal, -15% Global Heal Effect, Conversion 15% Healpower Multiplier to MP",
        "stats": {
            "HEAL%": 0.45,
            "Global Healing%": -0.15
        },
        "conversions": [
            {
                "source": "Healpower Multiplier",
                "ratio": 0.15,
                "resulting_stat": "MP"
            }
        ]
    },
    "Saint's Legacy of the Flame": {
        "category": "hybrid",
        "PreReq": ["IgnisKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+35% Heal, Conversion 200% Resfire to Crit Damage, 25% Resfire to Divine Resist. -25% Reduction to Resfire",
        "stats": {
            "HEAL%": 0.35
        },
        "conversions": [
            {
                "source": "Fire Res%",
                "ratio": 2.0,
                "resulting_stat": "Crit DMG%"
            },
            {
                "source": "Fire Res%",
                "ratio": -0.25,
                "resulting_stat": "Fire Res%"
            }

        ]
    },
    "Saint's Essence of the Flame": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalFire",
        "BlockedTag": "PrimalFire",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+30% Heal, Conversion 100% Elefire to Eledivine, 100% Penfire to Pendivine",
        "stats": {
            "HEAL%": 0.3
        },
        "conversions": [
            {
                "source": "Fire%",
                "ratio": 1.0,
                "resulting_stat": "Divine%"
            },
            {
                "source": "Fire Pen%",
                "ratio": 1.0,
                "resulting_stat": "Divine Pen%"
            }

        ]
    },
    "Mystic Flow of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+50% MATK, +1 MP Regen",
        "stats": {
            "MATK%": 0.5
        },
        "conversions": []
    },
    "Mystic Wrath of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+40% MATK, +10% Penwater, Conversion 70% Elewater to Crit Damage",
        "stats": {
            "MATK%": 0.4,
            "Water Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Water%",
                "ratio": 0.7,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Mystic Embrace of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+35% MATK, Conversion 200% Reswater to Elemental Damage, -75% Reduction to Reswater",
        "stats": {
            "MATK%": 0.35
        },
        "conversions": [
            {
                "source": "Water Res%",
                "ratio": 2.0,
                "resulting_stat": "elemental"
            },
            {
                "source": "Water Res%",
                "ratio": -0.75,
                "resulting_stat": "Water Res%"
            }

        ]
    },
    "Warlord's Flow of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +10% Physical Pen, Conversion 25% Elewater to Crit Chance, -100% Reduction to Elewater",
        "stats": {
            "ATK%": 0.4,
            "Slash Pen%": 0.1,
            "Pierce Pen%": 0.1,
            "Blunt Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Water%",
                "ratio": 0.25,
                "resulting_stat": "Crit Chance%"
            },
            {
                "source": "Water%",
                "ratio": -1.0,
                "resulting_stat": "Water%"
            }

        ]
    },
    "Warlord's Wrath of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +20% Increase to MP",
        "stats": {
            "ATK%": 0.4
        },
        "conversions": [
            {
                "source": "MP",
                "ratio": 0.2,
                "resulting_stat": "MP"
            }
        ]
    },
    "Warlord's Embrace of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, Conversion 200% Reswater to Physical Damage, 100% Reswater to Elewater, -75% Reduction to Reswater",
        "stats": {
            "ATK%": 0.35
        },
        "conversions": [
            {
                "source": "Water Res%",
                "ratio": 2.0,
                "resulting_stat": "physical"
            },
            {
                "source": "Water Res%",
                "ratio": -0.75,
                "resulting_stat": "Water Res%"
            }

        ]
    },
    "Paragon's Flow of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% DEF, +15% Threat Gained, Conversion 600% of MP to HP Regen",
        "stats": {
            "DEF%": 0.4,
            "Threat%": 0.15
        },
        "conversions": [
            {
                "source": "MP",
                "ratio": 6.0,
                "resulting_stat": "Hp Regen"
            }
        ]
    },
    "Paragon's Wrath of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, Conversion 70% Elewater to Elevoid, -50% Physical Damage",
        "stats": {
            "DEF%": 0.2
        },
        "conversions": [
            {
                "source": "Water%",
                "ratio": 0.7,
                "resulting_stat": "Void%"
            }
        ]
    },
    "Paragon's Embrace of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, Conversion 2% Reswater to MP Regen, -50% Reduction to Reswater",
        "stats": {
            "DEF%": 0.25
        },
        "conversions": [
            {
                "source": "Water Res%",
                "ratio": 0.02,
                "resulting_stat": "MP"
            },
            {
                "source": "Water Res%",
                "ratio": -0.5,
                "resulting_stat": "Water Res%"
            }

        ]
    },
    "Saint's Flow of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+30% Heal, -5% Threat Gained, Conversion 450% MP to HP Regen",
        "stats": {
            "HEAL%": 0.3,
            "Threat%": -0.05
        },
        "conversions": [
            {
                "source": "MP",
                "ratio": 4.5,
                "resulting_stat": "hp"
            }
        ]
    },
    "Saint's Wrath of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+25% Heal, Conversion 100% Elewater to Crit Damage, -100% Reduction to Elewater",
        "stats": {
            "HEAL%": 0.25
        },
        "conversions": [
            {
                "source": "Water%",
                "ratio": 1.0,
                "resulting_stat": "Crit DMG%"
            },
            {
                "source": "Water%",
                "ratio": 1.0,
                "resulting_stat": "Water%"
            }

        ]
    },
    "Saint's Embrace of the Seas": {
        "category": "hybrid",
        "PreReq": ["AquaKey"],
        "Tag": "PrimalSea",
        "BlockedTag": "PrimalSea",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+30% Heal, Conversion 150% Reswater to MP, -50% Reduction to Reswater",
        "stats": {
            "HEAL%": 0.3
        },
        "conversions": [
            {
                "source": "Water Res%",
                "ratio": 1.5,
                "resulting_stat": "MP"
            },
            {
                "source": "Water Res%",
                "ratio": -0.5,
                "resulting_stat": "Water Res%"
            }

        ]
    },
    "Mystic Touch of the Storm": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+30% MATK, +10% Lightning Penetration, Conversion 10% MP to Elelightning, 30% Penlightning to MP",
        "stats": {
            "MATK%": 0.3,
            "Lightning Pen%": 0.1
        },
        "conversions": [
            {
                "source": "MP",
                "ratio": 0.1,
                "resulting_stat": "Lightning%"
            },
            {
                "source": "Lightning Pen%",
                "ratio": 0.3,
                "resulting_stat": "MP"
            }

        ]
    },
    "Mystic Breath of the Wind": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+25% MATK, +10% Wind Penetration, Conversion 50% Penwind to Elewind, 15% Reswind to Penwind, -50% Reduction to Reswind",
        "stats": {
            "MATK%": 0.25,
            "Wind Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Wind Pen%",
                "ratio": 0.5,
                "resulting_stat": "Wind%"
            },
            {
                "source": "Wind Res%",
                "ratio": 0.15,
                "resulting_stat": "Wind Pen%"
            },
            {
                "source": "Wind Res%",
                "ratio": -0.5,
                "resulting_stat": "Wind Res%"
            }

        ]
    },
    "Mystic Power of the Tempest": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+35% MATK, +5% Crit Chance, +30% Crit Damage, Conversion 110% Reswind and Reslightning to Crit Damage, -75% Reduction to Reswind and Reslightning",
        "stats": {
            "Crit Chance%": 0.05,
            "Crit DMG%": 0.3,
            "MATK%": 0.35
        },
        "conversions": [
            {
                "source": "Wind Res%",
                "ratio": 1.1,
                "resulting_stat": "Crit DMG%"
            },
            {
                "source": "Lightning Res%",
                "ratio": 1.1,
                "resulting_stat": "Crit DMG%"
            },
            {
                "source": "Lightning Res%",
                "ratio": -0.75,
                "resulting_stat": "Lightning Res%"
            },
            {
                "source": "Wind Res%",
                "ratio": -0.75,
                "resulting_stat": "Wind Res%"
            }

        ]
    },
    "Warlord's Touch of the Storm": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% Global Dagger Damage, Conversion 90% Elelightning to Eleslash, 90% Elelightning to Crit Damage, -100% Reduction to Elelightning",
        "stats": {
            "ATK%": 0.25,
            "Global Dagger%": 0.2
        },
        "conversions": [
            {
                "source": "Lightning%",
                "ratio": 0.9,
                "resulting_stat": "Slash%"
            },
            {
                "source": "Lightning%",
                "ratio": 0.9,
                "resulting_stat": "Crit DMG%"
            },
            {
                "source": "Lightning%",
                "ratio": -1.0,
                "resulting_stat": "Lightning%"
            }
        ]
    },
    "Warlord's Breath of the Wind": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +25% Global Pierce Penetration, Conversion 120% Penwind to Penpierce, 8% ATK Multiplier to Elepierce",
        "stats": {
            "ATK%": 0.3,
            "Global Pierce Pen%": 0.25
        },
        "conversions": [
            {
                "source": "Wind Pen%",
                "ratio": 1.2,
                "resulting_stat": "Pierce Pen%"
            },
            {
                "source": "ATK Multiplier",
                "ratio": 0.08,
                "resulting_stat": "Pierce%"
            }
        ]
    },
    "Warlord's Power of the Tempest": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, Conversion 50% Elewind to MP, 50% Elewind to Crit Damage",
        "stats": {
            "ATK%": 0.4
        },
        "conversions": [
            {
                "source": "Wind%",
                "ratio": 0.5,
                "resulting_stat": "MP"
            }
        ]
    },
    "Paragon's Touch of the Storm": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, Conversion 100% Elelightning to Elephysical, 50% Elelightning to MP",
        "stats": {
            "DEF%": 0.2
        },
        "conversions": [
            {
                "source": "Lightning%",
                "ratio": 1.0,
                "resulting_stat": "elephysical"
            }
        ]
    },
    "Paragon's Breath of the Wind": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +15% Threat Bonus, Conversion 60% Elewind to Elevoid, 40% Penwind to Penvoid",
        "stats": {
            "DEF%": 0.15,
            "Threat%": 0.15
        },
        "conversions": [
            {
                "source": "Wind%",
                "ratio": 0.6,
                "resulting_stat": "Void%"
            },
            {
                "source": "Wind Pen%",
                "ratio": 0.4,
                "resulting_stat": "Void Pen%"
            }
        ]
    },
    "Paragon's Power of the Tempest": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +20% Threat Bonus, Conversion 50% Reslightning to Physical Resistance, -75% Reduction to Reslightning",
        "stats": {
            "DEF%": 0.25,
            "Threat%": 0.2
        },
        "conversions": [
            {
                "source": "Lightning Res%",
                "ratio": 0.5,
                "resulting_stat": "physical"
            },
            {
                "source": "Reduction",
                "ratio": 0.75,
                "resulting_stat": "Lightning Res%"
            }
        ]
    },
    "Saint's Touch of the Storm": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+35% Heal, Conversion 50% Elelightning to MP and Crit Damage, -100% Reduction to Elelightning",
        "stats": {
            "HEAL%": 0.35
        },
        "conversions": [
            {
                "source": "Lightning%",
                "ratio": 0.5,
                "resulting_stat": "MP"
            },
            {
                "source": "Reduction",
                "ratio": 1.0,
                "resulting_stat": "Lightning%"
            }
        ]
    },
    "Saint's Breath of the Wind": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+10% Heal, -30% Threat Bonus, Conversion 50% Elewind to Crit Chance, 75% Elewind to Crit Damage, -100% Reduction to Crit Chance/Damage and Elewind",
        "stats": {
            "HEAL%": 0.1,
            "Threat%": -0.3
        },
        "conversions": [
            {
                "source": "Wind%",
                "ratio": 0.5,
                "resulting_stat": "Crit DMG%"
            },
            {
                "source": "Reduction",
                "ratio": 1.0,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Saint's Power of the Tempest": {
        "category": "hybrid",
        "PreReq": ["TempestKey"],
        "Tag": "PrimalTempest",
        "BlockedTag": "PrimalTempest",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+15% Heal, +100% Threat Bonus, +20% Global Heal Effect",
        "stats": {
            "HEAL%": 0.15,
            "Threat%": 1.0,
            "Global Healing%": 0.2
        },
        "conversions": []
    },
    "Mystic Will of the Champion": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+30% MATK, +5% Void Penetration, Conversion 110% Void Penetration to Elevoid",
        "stats": {
            "MATK%": 0.3,
            "Void Pen%": 0.05
        },
        "conversions": [
            {
                "source": "Void Pen%",
                "ratio": 1.1,
                "resulting_stat": "Void%"
            }
        ]
    },
    "Mystic Aspect of Reality": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+30% MATK, +10% Pentoxic, Conversion 200% Restoxic to Eletoxic, 1500% Eletoxic to MATK, -75% Reduction to Restoxic",
        "stats": {
            "MATK%": 0.3,
            "Toxic Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Toxic Res%",
                "ratio": 2.0,
                "resulting_stat": "Toxic%"
            },
            {
                "source": "Toxic%",
                "ratio": 15.0,
                "resulting_stat": "matk"
            },
            {
                "source": "Reduction",
                "ratio": 0.75,
                "resulting_stat": "Toxic Res%"
            }
        ]
    },
    "Mystic Fortitude of the Earth": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+35% MATK, +10% Earth Penetration, Conversion 2000% Eleearth to DEF, 150% Researth to Eleearth, -75% Reduction to Researth",
        "stats": {
            "MATK%": 0.35,
            "Earth Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Earth%",
                "ratio": 20.0,
                "resulting_stat": "def"
            },
            {
                "source": "Earth Res%",
                "ratio": 1.5,
                "resulting_stat": "Earth%"
            },
            {
                "source": "Earth Res%_Broken",
                "ratio": -0.75,
                "resulting_stat": "Earth Res%"
            }
        ]
    },
    "Warlord's Will of the Champion": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +5% Penvoid, +50% Crit Chance and +20% DMG to Shadow Break Skills, Conversion 20% Elevoid to MP, Conversion 4% Elevoid to Penvoid, 2% Elepierce to Penvoid",
        "stats": {
            "ATK%": 0.25,
            "Void Pen%": 0.05,
            "Shadow Break Skill%": 0.2
        },
        "conversions": [
            {
                "source": "Void%",
                "ratio": 0.04,
                "resulting_stat": "Void Pen%"
            },
            {
                "source": "Pierce%",
                "ratio": 0.02,
                "resulting_stat": "Void Pen%"
            }
        ]
    },
    "Warlord's Aspect of Reality": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +15% Global Hammer Damage, +10% Global Blunt Penetration, Conversion 120% Penearth to Penblunt",
        "stats": {
            "ATK%": 0.3,
            "Global Hammer%": 0.15,
            "Global Blunt Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Earth Pen%",
                "ratio": 1.2,
                "resulting_stat": "Blunt Pen%"
            }
        ]
    },
    "Warlord's Fortitude of the Earth": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, Conversion 800% Eleearth to DEF, 4000% Researth to DEF, 75% Eleearth to Elephysical, -60% Reduction Researth",
        "stats": {
            "ATK%": 0.4
        },
        "conversions": [
            {
                "source": "Earth%",
                "ratio": 8.0,
                "resulting_stat": "def"
            },
            {
                "source": "Earth Pen%",
                "ratio": 40.0,
                "resulting_stat": "def"
            }
        ]
    },
    "Paragon's Will of the Champion": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +5% Penvoid, +50% Crit Chance and +20% DMG to Shadow Break Skills, Conversion 20% DEF to ATK, 20% Elevoid to MP, 3% Elephysical to Penvoid",
        "stats": {
            "DEF%": 0.2,
            "Void Pen%": 0.05,
            "Shadow Break %": 0.2
        },
        "conversions": [
            {
                "source": "DEF",
                "ratio": 0.2,
                "resulting_stat": "atk"
            },
            {
                "source": "Void%",
                "ratio": 0.2,
                "resulting_stat": "MP"
            },
            {
                "source": "Elephysical",
                "ratio": 0.03,
                "resulting_stat": "Void Pen%"
            }
        ]
    },
    "Paragon's Aspect of Reality": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +15% Threat Bonus, +20% Elevoid, Conversion 20% Elephysical to Elevoid, Reduction -50% Elephys",
        "stats": {
            "DEF%": 0.2,
            "Void%": 0.2,
            "Threat%": 0.15
        },
        "conversions": [
            {
                "source": "Elephysical",
                "ratio": 0.2,
                "resulting_stat": "Void%"
            }
        ]
    },
    "Paragon's Fortitude of the Earth": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +10% Threat Bonus, Conversion 7500% Researth to Max HP, 400% Eleearth to HP Regen, 60% Eleearth to Elevoid, -50% Reduction to Researth and Elephys",
        "stats": {
            "DEF%": 0.25,
            "Threat%": 0.1
        },
        "conversions": [
            {
                "source": "Earth Pen%",
                "ratio": 75.0,
                "resulting_stat": "max"
            },
            {
                "source": "Earth%",
                "ratio": 4.0,
                "resulting_stat": "hp"
            },
            {
                "source": "Reduction",
                "ratio": 0.5,
                "resulting_stat": "Earth Pen%"
            }
        ]
    },
    "Saint's Will of the Champion": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+35% Heal, +20% Threat Bonus, Conversion 50% Elevoid to MP, 90% Elevoid to Eledivine",
        "stats": {
            "HEAL%": 0.35,
            "Threat%": 0.2
        },
        "conversions": [
            {
                "source": "Void%",
                "ratio": 0.5,
                "resulting_stat": "MP"
            }
        ]
    },
    "Saint's Aspect of Reality": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+20% Heal, -85% Global Damage Reduction, +20% Global Healpower, +10% Global Healing Modifier",
        "stats": {
            "HEAL%": 0.2,
            "Global Healpower%": 0.2,
            "Global Healing%": 0.1,
            "Global DMG Reduction%": -0.85
        },
        "conversions": []
    },
    "Saint's Fortitude of the Earth": {
        "category": "hybrid",
        "PreReq": ["TerraKey"],
        "Tag": "PrimalTerra",
        "BlockedTag": "PrimalTerra",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+15% Heal, Conversion 20% Researth to Physical and Elemental Resists, 3000% Researth to Max HP, Conversion 5% Healpower to DEF, -75% Reduction to Researth",
        "stats": {
            "HEAL%": 0.15
        },
        "conversions": [
            {
                "source": "Earth Res%",
                "ratio": 0.2,
                "resulting_stat": "physical"
            },
            {
                "source": "Healpower",
                "ratio": 0.05,
                "resulting_stat": "def"
            },
            {
                "source": "Earth Res%",
                "ratio": -0.75,
                "resulting_stat": "Earth Res%"
            }
        ]
    },
    "Mystic Primal Soul": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+25% MATK, +5% Elemental and Void Penetration, +10% Global Elevoid, Conversion 100% Elevoid to Elemental Damage",
        "stats": {
            "MATK%": 0.25,
            "Fire Pen%": 0.05,
            "Water Pen%": 0.05,
            "Lightning Pen%": 0.05,
            "Wind Pen%": 0.05,
            "Earth Pen%": 0.05,
            "Toxic Pen%": 0.05,
            "Void Pen%": 0.05,
            "Global Void%": 0.1
        },
        "conversions": [
            {
                "source": "Void%",
                "ratio": 1.0,
                "resulting_stat": "elemental"
            }
        ]
    },
    "Mystic Flow of Yinshan": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+25% MATK, +10% Pennegative, Conversion 20% Elenegative to Crit Damage, 15% Crit Damage to Elenegative",
        "stats": {
            "MATK%": 0.25,
            "Neg Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Neg%",
                "ratio": 0.2,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Mystic Touch of the Yangson": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 125,
            "healer_levels": 0
        },
        "description": "+35% MATK, +5% Penholy, +10% Eleholy, Conversion 35% ATK Multiplier to Eleholy",
        "stats": {
            "MATK%": 0.35,
            "Holy%": 0.1,
            "Holy Pen%": 0.05
        },
        "conversions": [
            {
                "source": "ATK%",
                "ratio": 0.35,
                "resulting_stat": "Holy%"
            }
        ]
    },
    "Warlord's Primal Soul": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +5% Physical and Void Penetration, Conversion 20% Elevoid to Physical Damage",
        "stats": {
            "ATK%": 0.25,
            "Void Pen%": 0.05
        },
        "conversions": [
            {
                "source": "Void%",
                "ratio": 0.2,
                "resulting_stat": "physical"
            }
        ]
    },
    "Warlord's Flow of Yinshan": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +15% Physical Damage, Conversion 120% Pennegative to Penphysical, 100% Elenegative to Crit Damage",
        "stats": {
            "ATK%": 0.3,
            "Slash%": 0.15,
            "Pierce%": 0.15,
            "Blunt%": 0.15
        },
        "conversions": [
            {
                "source": "Neg Pen%",
                "ratio": 1.2,
                "resulting_stat": "penphysical"
            },
            {
                "source": "Neg%",
                "ratio": 1.0,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Warlord's Touch of the Yangson": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 125,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +15% Physical Damage, Conversion 140% Penholy to Penphysical, 15% Eleholy to MP, 4500% Eleholy to ATK",
        "stats": {
            "ATK%": 0.4,
            "Slash%": 0.15,
            "Pierce%": 0.15,
            "Blunt%": 0.15
        },
        "conversions": [
            {
                "source": "Holy Pen%",
                "ratio": 1.4,
                "resulting_stat": "penphysical"
            },
            {
                "source": "Holy%",
                "ratio": 0.15,
                "resulting_stat": "MP"
            }
        ]
    },
    "Paragon's Primal Soul": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, Conversion 175% Resvoid to Crit DMG, 10,000% Resvoid to Max HP, Reduction -75% Resvoid",
        "stats": {
            "DEF%": 0.2
        },
        "conversions": [
            {
                "source": "Void Res%",
                "ratio": 1.75,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Paragon's Flow of Yinshan": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +20% Threat Bonus, +20% Elevoid, Conversion 50% Resnegative to Elevoid, Reduction -25% to Resnegative and Elephys",
        "stats": {
            "DEF%": 0.2,
            "Void%": 0.2,
            "Threat%": 0.2
        },
        "conversions": [
            {
                "source": "Neg Res%",
                "ratio": 0.5,
                "resulting_stat": "Void%"
            }
        ]
    },
    "Paragon's Touch of the Yangson": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 125,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +10% Threat Bonus, Conversion 1500% Resholy to HP Regen, 10,000% Resholy to Heal, Reduction -50% Resholy",
        "stats": {
            "DEF%": 0.25,
            "Threat%": 0.1
        },
        "conversions": [
            {
                "source": "Holy Res%",
                "ratio": 15.0,
                "resulting_stat": "hp"
            }
        ]
    },
    "Saint's Primal Soul": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+35% Heal, +5% Crit Chance, +20% MP, Conversion 40% MP to Elevoid, 3% MP to Penvoid",
        "stats": {
            "Crit Chance%": 0.05,
            "HEAL%": 0.35
        },
        "conversions": [
            {
                "source": "MP",
                "ratio": 0.4,
                "resulting_stat": "Void%"
            }
        ]
    },
    "Saint's Flow of Yinshan": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+10% Heal, +10% Pennegative, Conversion 15% Elenegative to Crit Damage",
        "stats": {
            "HEAL%": 0.1,
            "Neg Pen%": 0.1
        },
        "conversions": [
            {
                "source": "Neg%",
                "ratio": 0.15,
                "resulting_stat": "Crit DMG%"
            }
        ]
    },
    "Saint's Touch of the Yangson": {
        "category": "hybrid",
        "PreReq": ["PrimalEssence"],
        "Tag": "PrimalSoul",
        "BlockedTag": "PrimalSoul",
        "gold": 1250,
        "exp": 20000,
        "tp_spent": 62,
        "total_level": 125,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 125
        },
        "description": "+15% Heal,  -10% Global Heal Effect, +20% Eleholy, Conversion 15% Max HP to Heal, 1000% Eleholy to Heal",
        "stats": {
            "HEAL%": 0.15,
            "Holy%": 0.2,
            "Global Healing%": -0.1
        },
        "conversions": [
            {
                "source": "HP",
                "ratio": 0.15,
                "resulting_stat": "heal"
            },
            {
                "source": "Holy%",
                "ratio": 10.0,
                "resulting_stat": "heal"
            }
        ]
    },
    "Skeleton Warrior 1": {
        "category": "racial",
        "PreReq": ["Skeleton"],
        "Tag": "Skeleton1",
        "BlockedTag": "Skeleton1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +2% Threat Bonus",
        "stats": {
            "Threat%": 0.02,
            "Slash Res%": 0.25,
            "Pierce Res%": 0.25,
            "Blunt Res%": -0.25,
            "Fire Res%": -0.25,
            "Water Res%": 0.25,
            "Neg Res%": 0.5,
            "Holy Res%": -0.5
        },
        "conversions": []
    },
    "Skeleton Warrior 2": {
        "category": "racial",
        "PreReq": ["Skeleton Warrior 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +2% Threat Bonus",
        "stats": {
            "Threat%": 0.02
        },
        "conversions": []
    },
    "Skeleton Warrior 3": {
        "category": "racial",
        "PreReq": ["Skeleton Warrior 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +2% Threat Bonus",
        "stats": {
            "Threat%": 0.02
        },
        "conversions": []
    },
    "Death Warrior 1": {
        "category": "racial",
        "PreReq": ["Skeleton Warrior 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% ATK, +20 DEF, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Death Warrior 2": {
        "category": "racial",
        "PreReq": ["Death Warrior 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +2% Threat Bonus",
        "stats": {
            "Threat%": 0.02
        },
        "conversions": []
    },
    "Death Warrior 3": {
        "category": "racial",
        "PreReq": ["Death Warrior 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +2% Threat Bonus",
        "stats": {
            "Threat%": 0.02
        },
        "conversions": []
    },
    "Death Knight 1": {
        "category": "racial",
        "PreReq": ["Death Warrior 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +15% DEF, +25% Water Resist, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "DEF%": 0.15,
            "ATK%": 0.2,
            "Water Res%": 0.25
        },
        "conversions": []
    },
    "Death Knight 2": {
        "category": "racial",
        "PreReq": ["Death Knight 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +3% Threat Bonus",
        "stats": {
            "Threat%": 0.03
        },
        "conversions": []
    },
    "Death Knight 3": {
        "category": "racial",
        "PreReq": ["Death Knight 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +3% Threat Bonus",
        "stats": {
            "Threat%": 0.03
        },
        "conversions": []
    },
    "Death Lord 1": {
        "category": "racial",
        "PreReq": ["Death Knight 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +15% DEF, +25% Lightning Resist, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "DEF%": 0.15,
            "ATK%": 0.2,
            "Lightning Res%": 0.25
        },
        "conversions": []
    },
    "Death Lord 2": {
        "category": "racial",
        "PreReq": ["Death Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +4% Threat Bonus",
        "stats": {
            "Threat%": 0.04
        },
        "conversions": []
    },
    "Death Lord 3": {
        "category": "racial",
        "PreReq": ["Death Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF, +4% Threat Bonus",
        "stats": {
            "Threat%": 0.04
        },
        "conversions": []
    },
    "Death Emperor": {
        "category": "racial",
        "PreReq": ["Death Lord 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% ATK, +15% Threat Gain, +20% Negative Resist, +5% Crit Chance",
        "stats": {
            "Crit Chance%": 0.05,
            "ATK%": 0.45,
            "Threat%": 0.15,
            "Neg Res%": 0.2
        },
        "conversions": []
    },
    "Skeleton Mage 1": {
        "category": "racial",
        "PreReq": ["Skeleton"],
        "Tag": "Skeleton1",
        "BlockedTag": "Skeleton1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "Slash Res%": 0.25,
            "Pierce Res%": 0.25,
            "Blunt Res%": -0.25,
            "Fire Res%": -0.25,
            "Water Res%": 0.25,
            "Neg Res%": 0.5,
            "Holy Res%": -0.5
        },
        "conversions": []
    },
    "Skeleton Mage 2": {
        "category": "racial",
        "PreReq": ["Skeleton Mage 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Skeleton Mage 3": {
        "category": "racial",
        "PreReq": ["Skeleton Mage 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Elder Lich 1": {
        "category": "racial",
        "PreReq": ["Skeleton Mage 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, '+20 MATK, +5% MATK, +1% Global Damage",
        "stats": {
            "MATK%": 0.05,
            "MP": 5,
            "MATK": 20,
            "Global DMG%": 0.01,
        },
        "conversions": []
    },
    "Elder Lich 2": {
        "category": "racial",
        "PreReq": ["Elder Lich 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Elder Lich 3": {
        "category": "racial",
        "PreReq": ["Elder Lich 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Night Lich 1": {
        "category": "racial",
        "PreReq": ["Elder Lich 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% MATK, +10 MP, +25% Water Resist, +1% Global Damage",
        "stats": {
            "MATK%": 0.3,
            "Water Res%": 0.25,
            "MP": 10,
            "Global DMG%": 0.01
        },
        "conversions": []
    },
    "Night Lich 2": {
        "category": "racial",
        "PreReq": ["Night Lich 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05
        },
        "conversions": []
    },
    "Night Lich 3": {
        "category": "racial",
        "PreReq": ["Night Lich 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05
        },
        "conversions": []
    },
    "Twilight Lich 1": {
        "category": "racial",
        "PreReq": ["Night Lich 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% MATK, +15% Crit Damage, +25% Lightning Resist, +2% Global Damage",
        "stats": {
            "MATK%": 0.35,
            "Lightning Res%": 0.25,
            "Global DMG%": 0.02
        },
        "conversions": []
    },
    "Twilight Lich 2": {
        "category": "racial",
        "PreReq": ["Twilight Lich 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 8% Crit Damage",
        "stats": {
            "Crit DMG%": 0.08
        },
        "conversions": []
    },
    "Twilight Lich 3": {
        "category": "racial",
        "PreReq": ["Twilight Lich 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 MP, +16 MATK, 8% Crit Damage",
        "stats": {
            "Crit DMG%": 0.08
        },
        "conversions": []
    },
    "Overlord": {
        "category": "racial",
        "PreReq": ["Twilight Lich 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% MATK, +35% Crit Damage, +30 MP, +2% Global Damage",
        "stats": {
            "Crit DMG%": 0.35,
            "MATK%": 0.4
        },
        "conversions": []
    },
    "Zombie 1": {
        "category": "racial",
        "PreReq": ["Zombie"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +30 HP, +0.2% HP Regen Rate, +10% Negative Resist",
        "stats": {
            "Fire Res%": -0.25,
            "Water Res%": 0.25,
            "Neg Res%": 0.6,
            "Holy Res%": -0.5
        },
        "conversions": []
    },
    "Zombie 2": {
        "category": "racial",
        "PreReq": ["Zombie 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +30 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Zombie 3": {
        "category": "racial",
        "PreReq": ["Zombie 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +30 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Dullahan 1": {
        "category": "racial",
        "PreReq": ["Zombie 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +10% DEF, +110 HP, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.1,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Dullahan 2": {
        "category": "racial",
        "PreReq": ["Dullahan 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +80 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Dullahan 3": {
        "category": "racial",
        "PreReq": ["Dullahan 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +80 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Draugr 1": {
        "category": "racial",
        "PreReq": ["Dullahan 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +25% DEF, +25% Water Resist, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.25,
            "ATK%": 0.2,
            "Water Res%": 0.25
        },
        "conversions": []
    },
    "Draugr 2": {
        "category": "racial",
        "PreReq": ["Draugr 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +200 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Draugr 3": {
        "category": "racial",
        "PreReq": ["Draugr 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +200 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Revenant 1": {
        "category": "racial",
        "PreReq": ["Draugr 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +25% DEF, +25% Lightning Resist, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.25,
            "ATK%": 0.25,
            "Lightning Res%": 0.25
        },
        "conversions": []
    },
    "Revenant 2": {
        "category": "racial",
        "PreReq": ["Revenant 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +350 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Revenant 3": {
        "category": "racial",
        "PreReq": ["Revenant 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +350 HP, +0.2% HP Regen Rate",
        "stats": {},
        "conversions": []
    },
    "Tomb Emperor": {
        "category": "racial",
        "PreReq": ["Revenant 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% ATK, +4% Global Damage, +6% Crit Chance, +1.2% HP Regen Rate",
        "stats": {
            "Crit Chance%": 0.06,
            "ATK%": 0.45
        },
        "conversions": []
    },
    "Orc 1": {
        "category": "racial",
        "PreReq": ["Orc"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP, +5% ATK, +5% DEF, -5% MATK, -5% Heal",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.05,
            "MATK%": -0.05,
            "HEAL%": -0.05
        },
        "conversions": []
    },
    "Orc 2": {
        "category": "racial",
        "PreReq": ["Orc 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "Orc 3": {
        "category": "racial",
        "PreReq": ["Orc 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "High Orc 1": {
        "category": "racial",
        "PreReq": ["Orc 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% ATK, +50 HP",
        "stats": {
            "ATK%": 0.05
        },
        "conversions": []
    },
    "High Orc 2": {
        "category": "racial",
        "PreReq": ["High Orc 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "High Orc 3": {
        "category": "racial",
        "PreReq": ["High Orc 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "Orc Lord 1": {
        "category": "racial",
        "PreReq": ["High Orc 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +15% DEF, +200 HP",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Orc Lord 2": {
        "category": "racial",
        "PreReq": ["Orc Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "Orc Lord 3": {
        "category": "racial",
        "PreReq": ["Orc Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "Orc Emperor 1": {
        "category": "racial",
        "PreReq": ["Orc Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +15% DEF, +750 HP",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Orc Emperor 2": {
        "category": "racial",
        "PreReq": ["Orc Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "Orc Emperor 3": {
        "category": "racial",
        "PreReq": ["Orc Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "Orc Deity": {
        "category": "racial",
        "PreReq": ["Orc Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% ATK, +50% DEF, +2250 HP",
        "stats": {
            "DEF%": 0.5,
            "ATK%": 0.5
        },
        "conversions": []
    },
    "Goblin 1": {
        "category": "racial",
        "PreReq": ["Goblin"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance, +5% Crit Chance, -5% ATK, -5% DEF",
        "stats": {
            "Crit Chance%": 0.07,
            "DEF%": -0.05,
            "ATK%": -0.05
        },
        "conversions": []
    },
    "Goblin 2": {
        "category": "racial",
        "PreReq": ["Goblin 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Goblin 3": {
        "category": "racial",
        "PreReq": ["Goblin 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "High Goblin 1": {
        "category": "racial",
        "PreReq": ["Goblin 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +2% Crit Chance, +10% ATK",
        "stats": {
            "Crit Chance%": 0.02,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "High Goblin 2": {
        "category": "racial",
        "PreReq": ["High Goblin 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "High Goblin 3": {
        "category": "racial",
        "PreReq": ["High Goblin 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Goblin Lord 1": {
        "category": "racial",
        "PreReq": ["High Goblin 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +3% Crit Chance, +20% Crit Damage",
        "stats": {
            "Crit Chance%": 0.03,
            "Crit DMG%": 0.2,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Goblin Lord 2": {
        "category": "racial",
        "PreReq": ["Goblin Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Goblin Lord 3": {
        "category": "racial",
        "PreReq": ["Goblin Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Goblin Emperor 1": {
        "category": "racial",
        "PreReq": ["Goblin Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +35% Crit Damage",
        "stats": {
            "Crit DMG%": 0.35
        },
        "conversions": []
    },
    "Goblin Emperor 2": {
        "category": "racial",
        "PreReq": ["Goblin Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Goblin Emperor 3": {
        "category": "racial",
        "PreReq": ["Goblin Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Goblin Deity": {
        "category": "racial",
        "PreReq": ["Goblin Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, -10% Threat Gain, +50% Crit Damage",
        "stats": {
            "Crit DMG%": 0.5,
            "ATK%": 0.2,
            "Threat%": -0.1
        },
        "conversions": []
    },
    "Lizardman 1": {
        "category": "racial",
        "PreReq": ["Lizardman"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage, +25% Water Resist, -25% Lightning Resist",
        "stats": {
            "Water%": 0.04,
            "Water Res%": 0.25,
            "Lightning Res%": -0.25
        },
        "conversions": []
    },
    "Lizardman 2": {
        "category": "racial",
        "PreReq": ["Lizardman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Lizardman 3": {
        "category": "racial",
        "PreReq": ["Lizardman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Elder Lizardman 1": {
        "category": "racial",
        "PreReq": ["Lizardman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK/MATK, +5% Water Damage, +10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.1,
            "MATK%": 0.1,
            "Water%": 0.05
        },
        "conversions": []
    },
    "Elder Lizardman 2": {
        "category": "racial",
        "PreReq": ["Elder Lizardman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Elder Lizardman 3": {
        "category": "racial",
        "PreReq": ["Elder Lizardman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Ancient Lizardman 1": {
        "category": "racial",
        "PreReq": ["Elder Lizardman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK/MATK, +10% Water Damage/Resist/Crit Damage",
        "stats": {
            "Crit DMG%": 0.1,
            "ATK%": 0.2,
            "MATK%": 0.2,
            "Water%": 0.1,
            "Water Res%": 0.1
        },
        "conversions": []
    },
    "Ancient Lizardman 2": {
        "category": "racial",
        "PreReq": ["Ancient Lizardman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Ancient Lizardman 3": {
        "category": "racial",
        "PreReq": ["Ancient Lizardman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Elder Scale 1": {
        "category": "racial",
        "PreReq": ["Ancient Lizardman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK/MATK, +15% Water Damage/Resist/Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.2,
            "MATK%": 0.2,
            "Water%": 0.15,
            "Water Res%": 0.15
        },
        "conversions": []
    },
    "Elder Scale 2": {
        "category": "racial",
        "PreReq": ["Elder Scale 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Elder Scale 3": {
        "category": "racial",
        "PreReq": ["Elder Scale 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK/MATK, +12 DEF, +4% Water Damage",
        "stats": {
            "Water%": 0.04
        },
        "conversions": []
    },
    "Elder Scale Deity": {
        "category": "racial",
        "PreReq": ["Elder Scale 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK/MATK, +20% Water Damage/Resist/Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "ATK%": 0.4,
            "MATK%": 0.4,
            "Water%": 0.2,
            "Water Res%": 0.2
        },
        "conversions": []
    },
    "Giant 1": {
        "category": "racial",
        "PreReq": ["Giant"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK, +10% ATK, +10% DEF, -10% Crit Chance",
        "stats": {
            "Crit Chance%": -0.1,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Giant 2": {
        "category": "racial",
        "PreReq": ["Giant 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Giant 3": {
        "category": "racial",
        "PreReq": ["Giant 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Frost Giant 1": {
        "category": "racial",
        "PreReq": ["Giant 3"],
        "Tag": "Giant2",
        "BlockedTag": "Giant2",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Water Resist, -25% Fire Resist, +10% ATK",
        "stats": {
            "ATK%": 0.1,
            "Fire Res%": -0.25,
            "Water Res%": 0.25
        },
        "conversions": []
    },
    "Frost Giant 2": {
        "category": "racial",
        "PreReq": ["Frost Giant 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Frost Giant 3": {
        "category": "racial",
        "PreReq": ["Frost Giant 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Air Giant 1": {
        "category": "racial",
        "PreReq": ["Giant 3"],
        "Tag": "Giant2",
        "BlockedTag": "Giant2",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Wind Resist, -25% Lightning Resist, +10% ATK",
        "stats": {
            "Lightning Res%": -0.25,
            "Wind Res%": 0.25
        },
        "conversions": []
    },
    "Air Giant 2": {
        "category": "racial",
        "PreReq": ["Air Giant 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Air Giant 3": {
        "category": "racial",
        "PreReq": ["Air Giant 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Hill Giant 1": {
        "category": "racial",
        "PreReq": ["Giant 3"],
        "Tag": "Giant2",
        "BlockedTag": "Giant2",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+7% ATK, +7% DEF, +60 HP",
        "stats": {
            "DEF%": 0.07,
            "ATK%": 0.07
        },
        "conversions": []
    },
    "Hill Giant 2": {
        "category": "racial",
        "PreReq": ["Hill Giant 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Hill Giant 3": {
        "category": "racial",
        "PreReq": ["Hill Giant 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Jotun Lord 1": {
        "category": "racial",
        "PreReq": ["Frost Giant 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Water Resist, +10% ATK, +20% DEF",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.1,
            "Water Res%": 0.1
        },
        "conversions": []
    },
    "Jotun Lord 2": {
        "category": "racial",
        "PreReq": ["Jotun Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Jotun Lord 3": {
        "category": "racial",
        "PreReq": ["Jotun Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Jotun Emperor 1": {
        "category": "racial",
        "PreReq": ["Jotun Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Water Resist, +10% ATK, +20% DEF",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.1,
            "Water Res%": 0.1
        },
        "conversions": []
    },
    "Jotun Emperor 2": {
        "category": "racial",
        "PreReq": ["Jotun Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Jotun Emperor 3": {
        "category": "racial",
        "PreReq": ["Jotun Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Jotun Deity": {
        "category": "racial",
        "PreReq": ["Jotun Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +3000 HP, +20% Water Resist, +8% Global Max Health",
        "stats": {
            "ATK%": 0.35,
            "Water Res%": 0.2
        },
        "conversions": []
    },
    "Storm Giant Lord 1": {
        "category": "racial",
        "PreReq": ["Air Giant 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Lightning Resist, +10% ATK, +20% DEF",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.1,
            "Lightning Res%": 0.1
        },
        "conversions": []
    },
    "Storm Giant Lord 2": {
        "category": "racial",
        "PreReq": ["Storm Giant Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Storm Giant Lord 3": {
        "category": "racial",
        "PreReq": ["Storm Giant Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Storm Giant Emperor 1": {
        "category": "racial",
        "PreReq": ["Storm Giant Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% Lightning Resist, +10% ATK, +20% DEF",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.1,
            "Lightning Res%": 0.1
        },
        "conversions": []
    },
    "Storm Giant Emperor 2": {
        "category": "racial",
        "PreReq": ["Storm Giant Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Storm Giant Emperor 3": {
        "category": "racial",
        "PreReq": ["Storm Giant Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Storm Deity": {
        "category": "racial",
        "PreReq": ["Storm Giant Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +3000 HP, +20% Lightning Resist, +8% Global Max Health",
        "stats": {
            "ATK%": 0.35,
            "Lightning Res%": 0.2
        },
        "conversions": []
    },
    "Mountain Lord 1": {
        "category": "racial",
        "PreReq": ["Hill Giant 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +25% DEF, +100 HP",
        "stats": {
            "DEF%": 0.25,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Mountain Lord 2": {
        "category": "racial",
        "PreReq": ["Mountain Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Mountain Lord 3": {
        "category": "racial",
        "PreReq": ["Mountain Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Mountain Emperor 1": {
        "category": "racial",
        "PreReq": ["Mountain Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +25% DEF, +600 HP",
        "stats": {
            "DEF%": 0.25,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Mountain Emperor 2": {
        "category": "racial",
        "PreReq": ["Mountain Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Mountain Emperor 3": {
        "category": "racial",
        "PreReq": ["Mountain Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5 ATK, +5 DEF, +30 HP, +1% Global ATK",
        "stats": {},
        "conversions": []
    },
    "Mountain Deity": {
        "category": "racial",
        "PreReq": ["Mountain Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +3000 HP, +20% Earth Resist, +8% Global Max Health",
        "stats": {
            "ATK%": 0.35,
            "Earth Res%": 0.2
        },
        "conversions": []
    },
    "Dragonspawn 1": {
        "category": "racial",
        "PreReq": ["Dragonspawn"],
        "Tag": "Dragonspawn1",
        "BlockedTag": "Dragonspawn1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage, +15% DEF, +15% ATK, -15% MATK",
        "stats": {
            "Crit DMG%": 0.03,
            "DEF%": 0.15,
            "ATK%": 0.15,
            "MATK%": -0.15,
            "Water Res%": -0.15,
            "Lightning Res%": -0.15,
            "Wind Res%": -0.15
        },
        "conversions": []
    },
    "Dragonspawn 2": {
        "category": "racial",
        "PreReq": ["Dragonspawn 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonspawn 3": {
        "category": "racial",
        "PreReq": ["Dragonspawn 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonkin 1": {
        "category": "racial",
        "PreReq": ["Dragonspawn 3"],
        "Tag": "Dragonkin",
        "BlockedTag": "Dragonkin",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +10% DEF, -6 MP, +2% Global Damage",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Dragonkin 2": {
        "category": "racial",
        "PreReq": ["Dragonkin 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonkin 3": {
        "category": "racial",
        "PreReq": ["Dragonkin 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonborn 1": {
        "category": "racial",
        "PreReq": ["Dragonkin 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +20% DEF, +25% Fire Resist, +2% Global Damage",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.2,
            "Fire Res%": 0.25
        },
        "conversions": []
    },
    "Dragonborn 2": {
        "category": "racial",
        "PreReq": ["Dragonborn 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonborn 3": {
        "category": "racial",
        "PreReq": ["Dragonborn 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonoid 1": {
        "category": "racial",
        "PreReq": ["Dragonborn 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +20% DEF, +2% Global Damage",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Dragonoid 2": {
        "category": "racial",
        "PreReq": ["Dragonoid 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonoid 3": {
        "category": "racial",
        "PreReq": ["Dragonoid 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +12 DEF, -2 MP, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonoid Lord": {
        "category": "racial",
        "PreReq": ["Dragonoid 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% ATK, +75% DEF, +1000 HP, +2% Global Damage",
        "stats": {
            "DEF%": 0.75,
            "ATK%": 0.5
        },
        "conversions": []
    },
    "Dragonspawn Mystic 1": {
        "category": "racial",
        "PreReq": ["Dragonspawn"],
        "Tag": "Dragonspawn1",
        "BlockedTag": "Dragonspawn1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, -10% ATK, -10% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.05,
            "MATK%": 0.1,
            "Water Res%": -0.15,
            "Lightning Res%": -0.15,
            "Wind Res%": -0.15
        },
        "conversions": []
    },
    "Dragonspawn Mystic 2": {
        "category": "racial",
        "PreReq": ["Dragonspawn Mystic 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonspawn Mystic 3": {
        "category": "racial",
        "PreReq": ["Dragonspawn Mystic 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonkin Mage 1": {
        "category": "racial",
        "PreReq": ["Dragonspawn Mystic 3"],
        "Tag": "Dragonkin",
        "BlockedTag": "Dragonkin",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +5% MATK, +20 DEF, +2% Global Damage",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Dragonkin Mage 2": {
        "category": "racial",
        "PreReq": ["Dragonkin Mage 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonkin Mage 3": {
        "category": "racial",
        "PreReq": ["Dragonkin Mage 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonborn Mystic 1": {
        "category": "racial",
        "PreReq": ["Dragonkin Mage 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +10% DEF, +25% Fire Resist, +2% Global Damage",
        "stats": {
            "DEF%": 0.1,
            "MATK%": 0.2,
            "Fire Res%": 0.25
        },
        "conversions": []
    },
    "Dragonborn Mystic 2": {
        "category": "racial",
        "PreReq": ["Dragonborn Mystic 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonborn Mystic 3": {
        "category": "racial",
        "PreReq": ["Dragonborn Mystic 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonoid Mystic 1": {
        "category": "racial",
        "PreReq": ["Dragonborn Mystic 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +10% DEF, +2% Global Damage",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Dragonoid Mystic 2": {
        "category": "racial",
        "PreReq": ["Dragonoid Mystic 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonoid Mystic 3": {
        "category": "racial",
        "PreReq": ["Dragonoid Mystic 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +8 DEF, +3% Crit Damage",
        "stats": {
            "Crit DMG%": 0.03
        },
        "conversions": []
    },
    "Dragonoid Sovereign": {
        "category": "racial",
        "PreReq": ["Dragonoid Mystic 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% MATK, +25% DEF, +30 MP, +2% Global Damage",
        "stats": {
            "DEF%": 0.25,
            "MATK%": 0.5
        },
        "conversions": []
    },
    "Devil 1": {
        "category": "racial",
        "PreReq": ["Demon"],
        "Tag": "Demon1",
        "BlockedTag": "Demon1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {
            "Fire Res%": 0.5,
            "Holy Res%": -0.5
        },
        "conversions": []
    },
    "Devil 2": {
        "category": "racial",
        "PreReq": ["Devil 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Devil 3": {
        "category": "racial",
        "PreReq": ["Devil 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Fiend 1": {
        "category": "racial",
        "PreReq": ["Devil 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 ATK, +5% ATK, +10% DEF, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25,
            "DEF%": 0.1,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Fiend 2": {
        "category": "racial",
        "PreReq": ["Fiend 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Fiend 3": {
        "category": "racial",
        "PreReq": ["Fiend 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Arch Devil 1": {
        "category": "racial",
        "PreReq": ["Fiend 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, 10% DEF, +25% Physical Damage",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.25,
            "Slash%": 0.25,
            "Pierce%": 0.25,
            "Blunt%": 0.25
        },
        "conversions": []
    },
    "Arch Devil 2": {
        "category": "racial",
        "PreReq": ["Arch Devil 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Arch Devil 3": {
        "category": "racial",
        "PreReq": ["Arch Devil 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Evil Lord 1": {
        "category": "racial",
        "PreReq": ["Arch Devil 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, 10% DEF, +30% Crit Damage",
        "stats": {
            "Crit DMG%": 0.3,
            "DEF%": 0.1,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Evil Lord 2": {
        "category": "racial",
        "PreReq": ["Evil Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Evil Lord 3": {
        "category": "racial",
        "PreReq": ["Evil Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 ATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Aspect of Evil": {
        "category": "racial",
        "PreReq": ["Evil Lord 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+60% ATK, +40% DEF, +10% Physical Penetration",
        "stats": {
            "DEF%": 0.4,
            "ATK%": 0.6
        },
        "conversions": []
    },
    "Imp 1": {
        "category": "racial",
        "PreReq": ["Demon"],
        "Tag": "Demon1",
        "BlockedTag": "Demon1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {
            "Fire Res%": 0.5,
            "Holy Res%": -0.5
        },
        "conversions": []
    },
    "Imp 2": {
        "category": "racial",
        "PreReq": ["Imp 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Imp 3": {
        "category": "racial",
        "PreReq": ["Imp 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Daemon 1": {
        "category": "racial",
        "PreReq": ["Imp 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 MATK, +5% MATK, +10 DEF, +10% Fire Damage, +5% Void Damage",
        "stats": {
            "Fire%": 0.1,
            "Void%": 0.05
        },
        "conversions": []
    },
    "Daemon 2": {
        "category": "racial",
        "PreReq": ["Daemon 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Daemon 3": {
        "category": "racial",
        "PreReq": ["Daemon 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Arch Demon 1": {
        "category": "racial",
        "PreReq": ["Daemon 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +10% DEF, +10 MP, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2
        },
        "conversions": []
    },
    "Arch Demon 2": {
        "category": "racial",
        "PreReq": ["Arch Demon 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Arch Demon 3": {
        "category": "racial",
        "PreReq": ["Arch Demon 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Demon King 1": {
        "category": "racial",
        "PreReq": ["Arch Demon 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +10% DEF, +10 MP, +15% Fire Damage, +10% Void Damage",
        "stats": {
            "Fire%": 0.15,
            "Void%": 0.1
        },
        "conversions": []
    },
    "Demon King 2": {
        "category": "racial",
        "PreReq": ["Demon King 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Demon King 3": {
        "category": "racial",
        "PreReq": ["Demon King 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF",
        "stats": {},
        "conversions": []
    },
    "Lord of Hell": {
        "category": "racial",
        "PreReq": ["Demon King 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+60% MATK, +40% DEF, +30 MP, +5% Fire and Void Penetration",
        "stats": {
            "DEF%": 0.4,
            "MATK%": 0.6,
            "Fire Pen%": 0.05,
            "Void Pen%": 0.05
        },
        "conversions": []
    },
    "Angel 1": {
        "category": "racial",
        "PreReq": ["Angel"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {
            "Neg Res%": -0.5,
            "Holy Res%": 0.5
        },
        "conversions": []
    },
    "Angel 2": {
        "category": "racial",
        "PreReq": ["Angel 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Angel 3": {
        "category": "racial",
        "PreReq": ["Angel 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Archangel 1": {
        "category": "racial",
        "PreReq": ["Angel 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 Heal, +8% MATK, +8% Heal",
        "stats": {
            "MATK%": 0.08,
            "HEAL%": 0.08
        },
        "conversions": []
    },
    "Archangel 2": {
        "category": "racial",
        "PreReq": ["Archangel 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Archangel 3": {
        "category": "racial",
        "PreReq": ["Archangel 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Dominion 1": {
        "category": "racial",
        "PreReq": ["Archangel 3"],
        "Tag": "Angel1",
        "BlockedTag": "Angel1",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +35% ATK, +15% Holy Resist",
        "stats": {
            "ATK%": 0.35,
            "MATK%": 0.2,
            "Holy Res%": 0.15
        },
        "conversions": []
    },
    "Dominion 2": {
        "category": "racial",
        "PreReq": ["Dominion 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Dominion 3": {
        "category": "racial",
        "PreReq": ["Dominion 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Virtues 1": {
        "category": "racial",
        "PreReq": ["Archangel 3"],
        "Tag": "Angel1",
        "BlockedTag": "Angel1",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Heal, +10% Def, +15% Holy Resist",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.25,
            "Holy Res%": 0.15
        },
        "conversions": []
    },
    "Virtues 2": {
        "category": "racial",
        "PreReq": ["Virtues 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 Heal, +8 DEF",
        "stats": {},
        "conversions": []
    },
    "Virtues 3": {
        "category": "racial",
        "PreReq": ["Virtues 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 Heal, +8 DEF",
        "stats": {},
        "conversions": []
    },
    "Fallen Angel 1": {
        "category": "racial",
        "PreReq": ["Archangel 3"],
        "Tag": "Angel1",
        "BlockedTag": "Angel1",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% MATK, +55% ATK, +10% Void Damage, -100% Holy Resist",
        "stats": {
            "ATK%": 0.55,
            "MATK%": 0.35,
            "Void%": 0.1,
            "Holy Res%": -1.0
        },
        "conversions": []
    },
    "Fallen Angel 2": {
        "category": "racial",
        "PreReq": ["Fallen Angel 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Fallen Angel 3": {
        "category": "racial",
        "PreReq": ["Fallen Angel 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Thrones 1": {
        "category": "racial",
        "PreReq": ["Dominion 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +35% ATK, +25% Holy Damage",
        "stats": {
            "ATK%": 0.35,
            "MATK%": 0.2,
            "Holy%": 0.25
        },
        "conversions": []
    },
    "Thrones 2": {
        "category": "racial",
        "PreReq": ["Thrones 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Thrones 3": {
        "category": "racial",
        "PreReq": ["Thrones 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 MATK, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Cherubrim": {
        "category": "racial",
        "PreReq": ["Thrones 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% ATK, +50% MATK, +10% Holy Penetration",
        "stats": {
            "ATK%": 0.5,
            "MATK%": 0.5,
            "Holy Pen%": 0.1
        },
        "conversions": []
    },
    "Seraph 1": {
        "category": "racial",
        "PreReq": ["Virtues 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Heal, +10% Def, +25% Holy Damage",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.25,
            "Holy%": 0.25
        },
        "conversions": []
    },
    "Seraph 2": {
        "category": "racial",
        "PreReq": ["Seraph 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 Heal, +8 DEF",
        "stats": {},
        "conversions": []
    },
    "Seraph 3": {
        "category": "racial",
        "PreReq": ["Seraph 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 Heal, +8 DEF",
        "stats": {},
        "conversions": []
    },
    "Empyrean": {
        "category": "racial",
        "PreReq": ["Seraph 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% Heal, + 25% DEF, +5% Holy Penetration",
        "stats": {
            "DEF%": 0.25,
            "HEAL%": 0.5,
            "Holy Pen%": 0.05
        },
        "conversions": []
    },
    "Sin Lord 1": {
        "category": "racial",
        "PreReq": ["Fallen Angel 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% MATK, +55% ATK, +15% Void Damage, +100% Negative Resist",
        "stats": {
            "ATK%": 0.55,
            "MATK%": 0.35,
            "Void%": 0.15,
            "Neg Res%": 1.0
        },
        "conversions": []
    },
    "Sin Lord 2": {
        "category": "racial",
        "PreReq": ["Sin Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Sin Lord 3": {
        "category": "racial",
        "PreReq": ["Sin Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Lucifer": {
        "category": "racial",
        "PreReq": ["Sin Lord 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+55% MATK, +55% ATK, +20% Void Damage, +5% Void Penetration",
        "stats": {
            "ATK%": 0.55,
            "MATK%": 0.55,
            "Void%": 0.2,
            "Void Pen%": 0.05
        },
        "conversions": []
    },
    "Lesser Vampire 1": {
        "category": "racial",
        "PreReq": ["Vampire"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +25 HP, +5% ATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.05,
            "Fire Res%": -0.25,
            "Neg Res%": 0.5,
            "Holy Res%": -0.5
        },
        "conversions": []
    },
    "Lesser Vampire 2": {
        "category": "racial",
        "PreReq": ["Lesser Vampire 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +25 HP",
        "stats": {},
        "conversions": []
    },
    "Lesser Vampire 3": {
        "category": "racial",
        "PreReq": ["Lesser Vampire 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +25 HP",
        "stats": {},
        "conversions": []
    },
    "Vampire 1": {
        "category": "racial",
        "PreReq": ["Lesser Vampire 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +5% DEF, +60 HP, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.05,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Vampire 2": {
        "category": "racial",
        "PreReq": ["Vampire 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +50 HP, +4% Crit Damage",
        "stats": {
            "Crit DMG%": 0.04
        },
        "conversions": []
    },
    "Vampire 3": {
        "category": "racial",
        "PreReq": ["Vampire 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +50 HP, +4% Crit Damage",
        "stats": {
            "Crit DMG%": 0.04
        },
        "conversions": []
    },
    "True Vampire 1": {
        "category": "racial",
        "PreReq": ["Vampire 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +15% DEF, +25% Water Resist, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.15,
            "ATK%": 0.25,
            "Water Res%": 0.25
        },
        "conversions": []
    },
    "True Vampire 2": {
        "category": "racial",
        "PreReq": ["True Vampire 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +150 HP, +4% Crit Damage",
        "stats": {
            "Crit DMG%": 0.04
        },
        "conversions": []
    },
    "True Vampire 3": {
        "category": "racial",
        "PreReq": ["True Vampire 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +150 HP, +4% Crit Damage",
        "stats": {
            "Crit DMG%": 0.04
        },
        "conversions": []
    },
    "Vampire Lord 1": {
        "category": "racial",
        "PreReq": ["True Vampire 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +20% DEF, +4% Negative Resist, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "DEF%": 0.2,
            "ATK%": 0.25,
            "Neg Res%": 0.04
        },
        "conversions": []
    },
    "Vampire Lord 2": {
        "category": "racial",
        "PreReq": ["Vampire Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +300 HP, +3% Negative Resist, +4% Crit Damage",
        "stats": {
            "Crit DMG%": 0.04,
            "Neg Res%": 0.03
        },
        "conversions": []
    },
    "Vampire Lord 3": {
        "category": "racial",
        "PreReq": ["Vampire Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+14 ATK, +300 HP, +3% Negative Resist, +4% Crit Damage",
        "stats": {
            "Crit DMG%": 0.04,
            "Neg Res%": 0.03
        },
        "conversions": []
    },
    "Vampire Deity": {
        "category": "racial",
        "PreReq": ["Vampire Lord 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+60% ATK, +2.5% HP Regen, +1500 HP, +4% Crit Chance",
        "stats": {
            "Crit Chance%": 0.04,
            "ATK%": 0.6
        },
        "conversions": []
    },
    "Insectoid 1": {
        "category": "racial",
        "PreReq": ["Insectoid"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage, +5% ATK, +5% DEF",
        "stats": {
            "Crit DMG%": 0.02,
            "DEF%": 0.05,
            "ATK%": 0.05,
            "Fire Res%": -0.1,
            "Toxic Res%": 0.1
        },
        "conversions": []
    },
    "Insectoid 2": {
        "category": "racial",
        "PreReq": ["Insectoid 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Insectoid 3": {
        "category": "racial",
        "PreReq": ["Insectoid 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Insect Warrior 1": {
        "category": "racial",
        "PreReq": ["Insectoid 3"],
        "Tag": "Insectoid1",
        "BlockedTag": "Insectoid1",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% ATK, +7% DEF, +20 DEF, +10% Physical Damage",
        "stats": {
            "DEF%": 0.07,
            "ATK%": 0.05,
            "Slash%": 0.1,
            "Pierce%": 0.1,
            "Blunt%": 0.1
        },
        "conversions": []
    },
    "Insect Warrior 2": {
        "category": "racial",
        "PreReq": ["Insect Warrior 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Insect Warrior 3": {
        "category": "racial",
        "PreReq": ["Insect Warrior 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Vermin Lord 1": {
        "category": "racial",
        "PreReq": ["Insect Warrior 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% DEF, +25% Earth Resist. +15% Physical Damage",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15,
            "Slash%": 0.15,
            "Pierce%": 0.15,
            "Blunt%": 0.15,
            "Earth Res%": 0.25
        },
        "conversions": []
    },
    "Vermin Lord 2": {
        "category": "racial",
        "PreReq": ["Vermin Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Vermin Lord 3": {
        "category": "racial",
        "PreReq": ["Vermin Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Vermin Emperor 1": {
        "category": "racial",
        "PreReq": ["Vermin Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% DEF, +15% Physical Damage",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15,
            "Slash%": 0.15,
            "Pierce%": 0.15,
            "Blunt%": 0.15
        },
        "conversions": []
    },
    "Vermin Emperor 2": {
        "category": "racial",
        "PreReq": ["Vermin Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Vermin Emperor 3": {
        "category": "racial",
        "PreReq": ["Vermin Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10 DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Vermin Deity": {
        "category": "racial",
        "PreReq": ["Vermin Emperor 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +45% DEF, +40% Crit Damage, +20% Physical Damage",
        "stats": {
            "Crit DMG%": 0.4,
            "DEF%": 0.45,
            "ATK%": 0.35,
            "Slash%": 0.2,
            "Pierce%": 0.2,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Insect Shaman 1": {
        "category": "racial",
        "PreReq": ["Insectoid 3"],
        "Tag": "Insectoid1",
        "BlockedTag": "Insectoid1",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40 MATK, +10% Toxic Damage, +5% Crit Damage",
        "stats": {
            "Crit DMG%": 0.05,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Insect Shaman 2": {
        "category": "racial",
        "PreReq": ["Insect Shaman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF, +2% Crit Damage, +5% Toxic Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Insect Shaman 3": {
        "category": "racial",
        "PreReq": ["Insect Shaman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF, +2% Crit Damage, +5% Toxic Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Venomatid Lord 1": {
        "category": "racial",
        "PreReq": ["Insect Shaman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +15% Toxic Damage, +10% Crit Damage",
        "stats": {
            "Crit DMG%": 0.1,
            "Toxic%": 0.15
        },
        "conversions": []
    },
    "Venomatid Lord 2": {
        "category": "racial",
        "PreReq": ["Venomatid Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF, +2% Crit Damage, +5% Toxic Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Venomatid Lord 3": {
        "category": "racial",
        "PreReq": ["Venomatid Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF, +2% Crit Damage, +5% Toxic Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Venomatid Emperor 1": {
        "category": "racial",
        "PreReq": ["Venomatid Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +15% Toxic Damage, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "Toxic%": 0.15
        },
        "conversions": []
    },
    "Venomatid Emperor 2": {
        "category": "racial",
        "PreReq": ["Venomatid Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF, +2% Crit Damage, +5% Toxic Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Venomatid Emperor 3": {
        "category": "racial",
        "PreReq": ["Venomatid Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +10 DEF, +2% Crit Damage, +5% Toxic Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Venomatid Deity": {
        "category": "racial",
        "PreReq": ["Venomatid Emperor 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% MATK, +25% Toxic Damage, +10% Toxic Penetration",
        "stats": {
            "Toxic%": 0.25,
            "Toxic Pen%": 0.1
        },
        "conversions": []
    },
    "Ogre 1": {
        "category": "racial",
        "PreReq": ["Ogre"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +40 HP, +1% Global Max Health, +10% ATK, +5% DEF, -5% MATK, -5% Heal, +25 HP, -5% Crit Chance",
        "stats": {
            "Crit Chance%": -0.05,
            "DEF%": 0.05,
            "ATK%": 0.1,
            "MATK%": -0.05,
            "HEAL%": -0.05
        },
        "conversions": []
    },
    "Ogre 2": {
        "category": "racial",
        "PreReq": ["Ogre 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +40 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Ogre 3": {
        "category": "racial",
        "PreReq": ["Ogre 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +40 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "High Ogre 1": {
        "category": "racial",
        "PreReq": ["Ogre 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% ATK, +7% DEF, +80 HP, +2% Global Max Health",
        "stats": {
            "DEF%": 0.07,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "High Ogre 2": {
        "category": "racial",
        "PreReq": ["High Ogre 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +80 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "High Ogre 3": {
        "category": "racial",
        "PreReq": ["High Ogre 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +80 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Ogre Lord 1": {
        "category": "racial",
        "PreReq": ["High Ogre 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +15% DEF, +200 HP, +3% Global Max Health",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Ogre Lord 2": {
        "category": "racial",
        "PreReq": ["Ogre Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +200 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Ogre Lord 3": {
        "category": "racial",
        "PreReq": ["Ogre Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +200 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Ogre Emperor 1": {
        "category": "racial",
        "PreReq": ["Ogre Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +15% DEF, +750 HP, +3% Global Max Health",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Ogre Emperor 2": {
        "category": "racial",
        "PreReq": ["Ogre Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +400 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Ogre Emperor 3": {
        "category": "racial",
        "PreReq": ["Ogre Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +400 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Ogre Deity": {
        "category": "racial",
        "PreReq": ["Ogre Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +2250 HP, +15% Threat Bonus, +3% Global Max Health",
        "stats": {
            "ATK%": 0.4,
            "Threat%": 0.15
        },
        "conversions": []
    },
    "Troll 1": {
        "category": "racial",
        "PreReq": ["Troll"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+80 HP, +10% ATK, +10% DEF, -5% MATK, -5% Heal, +0.3% HP Regen",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.1,
            "MATK%": -0.05,
            "HEAL%": -0.05,
            "Fire Res%": -0.25,
            "Toxic Res%": -0.25
        },
        "conversions": []
    },
    "Troll 2": {
        "category": "racial",
        "PreReq": ["Troll 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+80 HP, +0.3% HP Regen",
        "stats": {},
        "conversions": []
    },
    "Troll 3": {
        "category": "racial",
        "PreReq": ["Troll 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+80 HP, +0.3% HP Regen",
        "stats": {},
        "conversions": []
    },
    "High Troll 1": {
        "category": "racial",
        "PreReq": ["Troll 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +10% DEF, +140 HP",
        "stats": {
            "DEF%": 0.1
        },
        "conversions": []
    },
    "High Troll 2": {
        "category": "racial",
        "PreReq": ["High Troll 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+110 HP, +0.3% Regen",
        "stats": {},
        "conversions": []
    },
    "High Troll 3": {
        "category": "racial",
        "PreReq": ["High Troll 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+110 HP, +0.3% Regen",
        "stats": {},
        "conversions": []
    },
    "Troll Lord 1": {
        "category": "racial",
        "PreReq": ["High Troll 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +15% DEF, +500 HP",
        "stats": {
            "DEF%": 0.15,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Troll Lord 2": {
        "category": "racial",
        "PreReq": ["Troll Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+300 HP, +0.3% Regen",
        "stats": {},
        "conversions": []
    },
    "Troll Lord 3": {
        "category": "racial",
        "PreReq": ["Troll Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+300 HP, +0.3% Regen",
        "stats": {},
        "conversions": []
    },
    "Troll Emperor 1": {
        "category": "racial",
        "PreReq": ["Troll Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +20% DEF, +1500 HP",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Troll Emperor 2": {
        "category": "racial",
        "PreReq": ["Troll Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+500 HP, +0.3% HP Regen",
        "stats": {},
        "conversions": []
    },
    "Troll Emperor 3": {
        "category": "racial",
        "PreReq": ["Troll Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+500 HP, +0.3% HP Regen",
        "stats": {},
        "conversions": []
    },
    "Troll Deity": {
        "category": "racial",
        "PreReq": ["Troll Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +3500 HP, +2.3% HP Regen",
        "stats": {
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Quogga 1": {
        "category": "racial",
        "PreReq": ["Quogga"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage, +10% ATK, -20% DEF",
        "stats": {
            "DEF%": -0.2,
            "ATK%": 0.1,
            "Slash%": 0.05,
            "Blunt%": 0.05,
            "Slash Res%": 0.05,
            "Pierce Res%": 0.05,
            "Blunt Res%": 0.05,
            "Lightning Res%": -0.25
        },
        "conversions": []
    },
    "Quogga 2": {
        "category": "racial",
        "PreReq": ["Quogga 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Quogga 3": {
        "category": "racial",
        "PreReq": ["Quogga 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Elder Quogga 1": {
        "category": "racial",
        "PreReq": ["Quogga 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +8% Slash/Blunt Damage, +4% Slash/Blunt Penetration",
        "stats": {
            "Slash%": 0.08,
            "Blunt%": 0.08,
            "Slash Pen%": 0.04,
            "Blunt Pen%": 0.04
        },
        "conversions": []
    },
    "Elder Quogga 2": {
        "category": "racial",
        "PreReq": ["Elder Quogga 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Elder Quogga 3": {
        "category": "racial",
        "PreReq": ["Elder Quogga 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Quogga Lord 1": {
        "category": "racial",
        "PreReq": ["Elder Quogga 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +10% DEF, +20% Slash/Blunt Damage",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.35,
            "Slash%": 0.2,
            "Blunt%": 0.2
        },
        "conversions": []
    },
    "Quogga Lord 2": {
        "category": "racial",
        "PreReq": ["Quogga Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Quogga Lord 3": {
        "category": "racial",
        "PreReq": ["Quogga Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Quogga Emperor 1": {
        "category": "racial",
        "PreReq": ["Quogga Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +10% DEF, +6% Slash/Blunt Penetration",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.35,
            "Slash Pen%": 0.06,
            "Blunt Pen%": 0.06
        },
        "conversions": []
    },
    "Quogga Emperor 2": {
        "category": "racial",
        "PreReq": ["Quogga Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Quogga Emperor 3": {
        "category": "racial",
        "PreReq": ["Quogga Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% Slash/Blunt Damage",
        "stats": {
            "Slash%": 0.05,
            "Blunt%": 0.05
        },
        "conversions": []
    },
    "Quogga Deity": {
        "category": "racial",
        "PreReq": ["Quogga Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +12% Slash/Blunt Penetration",
        "stats": {
            "ATK%": 0.3,
            "Slash Pen%": 0.12,
            "Blunt Pen%": 0.12
        },
        "conversions": []
    },
    "Minotaur 1": {
        "category": "racial",
        "PreReq": ["Minotaur"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +20 HP, +5% ATK, +5% DEF, -5% MATK, -5% Heal",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.05,
            "MATK%": -0.05,
            "HEAL%": -0.05
        },
        "conversions": []
    },
    "Minotaur 2": {
        "category": "racial",
        "PreReq": ["Minotaur 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "Minotaur 3": {
        "category": "racial",
        "PreReq": ["Minotaur 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +20 HP",
        "stats": {},
        "conversions": []
    },
    "High Minotaur 1": {
        "category": "racial",
        "PreReq": ["Minotaur 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +10% DEF, +10% Threat Gain",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.1,
            "Threat%": 0.1
        },
        "conversions": []
    },
    "High Minotaur 2": {
        "category": "racial",
        "PreReq": ["High Minotaur 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +65 HP",
        "stats": {},
        "conversions": []
    },
    "High Minotaur 3": {
        "category": "racial",
        "PreReq": ["High Minotaur 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +65 HP",
        "stats": {},
        "conversions": []
    },
    "Minotaur Lord 1": {
        "category": "racial",
        "PreReq": ["High Minotaur 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +20% DEF, +10% Threat Gain",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.2,
            "Threat%": 0.1
        },
        "conversions": []
    },
    "Minotaur Lord 2": {
        "category": "racial",
        "PreReq": ["Minotaur Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +150 HP",
        "stats": {},
        "conversions": []
    },
    "Minotaur Lord 3": {
        "category": "racial",
        "PreReq": ["Minotaur Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +150 HP",
        "stats": {},
        "conversions": []
    },
    "Minotaur Emperor 1": {
        "category": "racial",
        "PreReq": ["Minotaur Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +25% DEF, +15% Threat Gain",
        "stats": {
            "DEF%": 0.25,
            "ATK%": 0.25,
            "Threat%": 0.15
        },
        "conversions": []
    },
    "Minotaur Emperor 2": {
        "category": "racial",
        "PreReq": ["Minotaur Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +220 HP",
        "stats": {},
        "conversions": []
    },
    "Minotaur Emperor 3": {
        "category": "racial",
        "PreReq": ["Minotaur Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +220 HP",
        "stats": {},
        "conversions": []
    },
    "Minotaur Deity": {
        "category": "racial",
        "PreReq": ["Minotaur Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +60% DEF, +20% Threat Gain",
        "stats": {
            "DEF%": 0.6,
            "ATK%": 0.4,
            "Threat%": 0.2
        },
        "conversions": []
    },
    "Tigerman 1": {
        "category": "racial",
        "PreReq": ["Tigerman"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +10% ATK, -10% DEF, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02,
            "DEF%": -0.1,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Tigerman 2": {
        "category": "racial",
        "PreReq": ["Tigerman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Tigerman 3": {
        "category": "racial",
        "PreReq": ["Tigerman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "High Tigerman 1": {
        "category": "racial",
        "PreReq": ["Tigerman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +10 ATK, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "High Tigerman 2": {
        "category": "racial",
        "PreReq": ["High Tigerman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "High Tigerman 3": {
        "category": "racial",
        "PreReq": ["High Tigerman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Tigerman Lord 1": {
        "category": "racial",
        "PreReq": ["High Tigerman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25,
            "ATK%": 0.25
        },
        "conversions": []
    },
    "Tigerman Lord 2": {
        "category": "racial",
        "PreReq": ["Tigerman Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Tigerman Lord 3": {
        "category": "racial",
        "PreReq": ["Tigerman Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Tigerman Emperor 1": {
        "category": "racial",
        "PreReq": ["Tigerman Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% ATK, +40% Crit Damage",
        "stats": {
            "Crit DMG%": 0.4,
            "ATK%": 0.3
        },
        "conversions": []
    },
    "Tigerman Emperor 2": {
        "category": "racial",
        "PreReq": ["Tigerman Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Tigerman Emperor 3": {
        "category": "racial",
        "PreReq": ["Tigerman Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +2% Crit Damage",
        "stats": {
            "Crit DMG%": 0.02
        },
        "conversions": []
    },
    "Tigerman Deity": {
        "category": "racial",
        "PreReq": ["Tigerman Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +50% Crit Damage",
        "stats": {
            "Crit DMG%": 0.5,
            "ATK%": 0.4
        },
        "conversions": []
    },
    "Goatman 1": {
        "category": "racial",
        "PreReq": ["Goatman"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +5% ATK, -5% DEF, +10 HP",
        "stats": {
            "DEF%": -0.05,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Goatman 2": {
        "category": "racial",
        "PreReq": ["Goatman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +10 HP",
        "stats": {},
        "conversions": []
    },
    "Goatman 3": {
        "category": "racial",
        "PreReq": ["Goatman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +10 HP",
        "stats": {},
        "conversions": []
    },
    "High Goatman 1": {
        "category": "racial",
        "PreReq": ["Goatman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5% ATK, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "High Goatman 2": {
        "category": "racial",
        "PreReq": ["High Goatman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +30 HP",
        "stats": {},
        "conversions": []
    },
    "High Goatman 3": {
        "category": "racial",
        "PreReq": ["High Goatman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +30 HP",
        "stats": {},
        "conversions": []
    },
    "Goatman Lord 1": {
        "category": "racial",
        "PreReq": ["High Goatman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +25% DEF, +20% Crit Damage",
        "stats": {
            "Crit DMG%": 0.2,
            "DEF%": 0.25,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Goatman Lord 2": {
        "category": "racial",
        "PreReq": ["Goatman Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +90 HP",
        "stats": {},
        "conversions": []
    },
    "Goatman Lord 3": {
        "category": "racial",
        "PreReq": ["Goatman Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +90 HP",
        "stats": {},
        "conversions": []
    },
    "Goatman Emperor 1": {
        "category": "racial",
        "PreReq": ["Goatman Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +25% DEF, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25,
            "DEF%": 0.25,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Goatman Emperor 2": {
        "category": "racial",
        "PreReq": ["Goatman Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +150 HP",
        "stats": {},
        "conversions": []
    },
    "Goatman Emperor 3": {
        "category": "racial",
        "PreReq": ["Goatman Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +5 DEF, +150 HP",
        "stats": {},
        "conversions": []
    },
    "Goatman Deity": {
        "category": "racial",
        "PreReq": ["Goatman Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% ATK, +45% DEF, +30% Crit Damage",
        "stats": {
            "Crit DMG%": 0.3,
            "DEF%": 0.45,
            "ATK%": 0.45
        },
        "conversions": []
    },
    "Half-Golem 1": {
        "category": "racial",
        "PreReq": ["HalfGolem"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF, +10% DEF, -20% Crit Chance",
        "stats": {
            "Crit Chance%": -0.2,
            "DEF%": 0.1,
            "Toxic Res%": 0.5,
            "Neg Res%": 0.5,
            "Holy Res%": 0.5
        },
        "conversions": []
    },
    "Half-Golem 2": {
        "category": "racial",
        "PreReq": ["Half-Golem 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Half-Golem 3": {
        "category": "racial",
        "PreReq": ["Half-Golem 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Iron Half-Golem 1": {
        "category": "racial",
        "PreReq": ["Half-Golem 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +10% DEF, +5% ATK",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Iron Half-Golem 2": {
        "category": "racial",
        "PreReq": ["Iron Half-Golem 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Iron Half-Golem 3": {
        "category": "racial",
        "PreReq": ["Iron Half-Golem 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Mithril Half-Golem 1": {
        "category": "racial",
        "PreReq": ["Iron Half-Golem 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% DEF, +10% Fire, Wind, and Earth Resist",
        "stats": {
            "DEF%": 0.15,
            "Fire Res%": 0.1,
            "Wind Res%": 0.1,
            "Earth Res%": 0.1
        },
        "conversions": []
    },
    "Mithril Half-Golem 2": {
        "category": "racial",
        "PreReq": ["Mithril Half-Golem 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Mithril Half-Golem 3": {
        "category": "racial",
        "PreReq": ["Mithril Half-Golem 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Adamantite Golem 1": {
        "category": "racial",
        "PreReq": ["Mithril Half-Golem 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +15% Physical Resist",
        "stats": {
            "DEF%": 0.2,
            "Slash Res%": 0.15,
            "Pierce Res%": 0.15,
            "Blunt Res%": 0.15
        },
        "conversions": []
    },
    "Adamantite Golem 2": {
        "category": "racial",
        "PreReq": ["Adamantite Golem 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Adamantite Golem 3": {
        "category": "racial",
        "PreReq": ["Adamantite Golem 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20 DEF",
        "stats": {},
        "conversions": []
    },
    "Prismatic Golem": {
        "category": "racial",
        "PreReq": ["Adamantite Golem 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+100% DEF, +50 MP, +25% Threat Bonus, +10% Void Res",
        "stats": {
            "DEF%": 1.0,
            "Threat%": 0.25,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Frogman 1": {
        "category": "racial",
        "PreReq": ["Frogman"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance, +25% Water Resist, -35% Lightning Resist, +5% MATK",
        "stats": {
            "MATK%": 0.05,
            "Water Res%": 0.25,
            "Lightning Res%": -0.35
        },
        "conversions": []
    },
    "Frogman 2": {
        "category": "racial",
        "PreReq": ["Frogman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Frogman 3": {
        "category": "racial",
        "PreReq": ["Frogman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Elder Frogman 1": {
        "category": "racial",
        "PreReq": ["Frogman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +5% MATK, +50 HP, +10% Water Damage",
        "stats": {
            "MATK%": 0.05,
            "Water%": 0.1
        },
        "conversions": []
    },
    "Elder Frogman 2": {
        "category": "racial",
        "PreReq": ["Elder Frogman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Elder Frogman 3": {
        "category": "racial",
        "PreReq": ["Elder Frogman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Frogman Lord 1": {
        "category": "racial",
        "PreReq": ["Elder Frogman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +10% DEF, +15% Water Damage",
        "stats": {
            "DEF%": 0.1,
            "MATK%": 0.25,
            "Water%": 0.15
        },
        "conversions": []
    },
    "Frogman Lord 2": {
        "category": "racial",
        "PreReq": ["Frogman Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Frogman Lord 3": {
        "category": "racial",
        "PreReq": ["Frogman Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Frogman Emperor 1": {
        "category": "racial",
        "PreReq": ["Frogman Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +10% DEF, +25% Water Damage",
        "stats": {
            "DEF%": 0.1,
            "MATK%": 0.25,
            "Water%": 0.25
        },
        "conversions": []
    },
    "Frogman Emperor 2": {
        "category": "racial",
        "PreReq": ["Frogman Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Frogman Emperor 3": {
        "category": "racial",
        "PreReq": ["Frogman Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +20 HP, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Frogman Deity": {
        "category": "racial",
        "PreReq": ["Frogman Emperor 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% MATK, +45% DEF, +6% Crit Chance, +30% Water Damage",
        "stats": {
            "Crit Chance%": 0.06,
            "DEF%": 0.45,
            "MATK%": 0.4,
            "Water%": 0.3
        },
        "conversions": []
    },
    "Fire Elemental 1": {
        "category": "racial",
        "PreReq": ["Elemental"],
        "Tag": "Elemental1",
        "BlockedTag": "Elemental1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +50% Fire Resist, -50% Water Resist, +5% MATK, -5% ATK",
        "stats": {
            "ATK%": -0.05,
            "MATK%": 0.05,
            "Fire Res%": 0.5,
            "Water Res%": -0.5
        },
        "conversions": []
    },
    "Fire Elemental 2": {
        "category": "racial",
        "PreReq": ["Fire Elemental 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Fire Elemental 3": {
        "category": "racial",
        "PreReq": ["Fire Elemental 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Fire Spirit 1": {
        "category": "racial",
        "PreReq": ["Fire Elemental 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10% Fire Damage, +5% Fire Resist",
        "stats": {
            "Fire%": 0.1,
            "Fire Res%": 0.05
        },
        "conversions": []
    },
    "Fire Spirit 2": {
        "category": "racial",
        "PreReq": ["Fire Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Fire Spirit 3": {
        "category": "racial",
        "PreReq": ["Fire Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Fire Lord 1": {
        "category": "racial",
        "PreReq": ["Fire Spirit 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +40% Fire Damage, +10% Fire Resist",
        "stats": {
            "MATK%": 0.1,
            "Fire%": 0.4,
            "Fire Res%": 0.1
        },
        "conversions": []
    },
    "Fire Lord 2": {
        "category": "racial",
        "PreReq": ["Fire Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Fire Lord 3": {
        "category": "racial",
        "PreReq": ["Fire Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Primal Flame 1": {
        "category": "racial",
        "PreReq": ["Fire Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +25% Fire Damage, +10% Fire Penetration",
        "stats": {
            "MATK%": 0.1,
            "Fire%": 0.25,
            "Fire Pen%": 0.1
        },
        "conversions": []
    },
    "Primal Flame 2": {
        "category": "racial",
        "PreReq": ["Primal Flame 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Primal Flame 3": {
        "category": "racial",
        "PreReq": ["Primal Flame 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Fire Damage",
        "stats": {
            "Fire%": 0.05
        },
        "conversions": []
    },
    "Inferno Deity": {
        "category": "racial",
        "PreReq": ["Primal Flame 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +30% Fire Damage, +10% Fire Penetration",
        "stats": {
            "MATK%": 0.2,
            "Fire%": 0.3,
            "Fire Pen%": 0.1
        },
        "conversions": []
    },
    "Water Elemental 1": {
        "category": "racial",
        "PreReq": ["Elemental"],
        "Tag": "Elemental1",
        "BlockedTag": "Elemental1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +50% Water Resist, -50% Earth Resist, +5% MATK, -5% ATK",
        "stats": {
            "ATK%": -0.05,
            "MATK%": 0.05,
            "Water Res%": 0.5,
            "Earth Res%": -0.5
        },
        "conversions": []
    },
    "Water Elemental 2": {
        "category": "racial",
        "PreReq": ["Water Elemental 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Water Elemental 3": {
        "category": "racial",
        "PreReq": ["Water Elemental 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Water Spirit 1": {
        "category": "racial",
        "PreReq": ["Water Elemental 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10% Water Damage, 5% Water Resist",
        "stats": {
            "Water%": 0.1,
            "Water Res%": 0.05
        },
        "conversions": []
    },
    "Water Spirit 2": {
        "category": "racial",
        "PreReq": ["Water Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Water Spirit 3": {
        "category": "racial",
        "PreReq": ["Water Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Water Lord 1": {
        "category": "racial",
        "PreReq": ["Water Spirit 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +40% Water Damage, +10% Water Resist",
        "stats": {
            "MATK%": 0.1,
            "Water%": 0.4,
            "Water Res%": 0.1
        },
        "conversions": []
    },
    "Water Lord 2": {
        "category": "racial",
        "PreReq": ["Water Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Water Lord 3": {
        "category": "racial",
        "PreReq": ["Water Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Primal Water 1": {
        "category": "racial",
        "PreReq": ["Water Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +25% Water Damage, +10% Water Penetration",
        "stats": {
            "MATK%": 0.1,
            "Water%": 0.25,
            "Water Pen%": 0.1
        },
        "conversions": []
    },
    "Primal Water 2": {
        "category": "racial",
        "PreReq": ["Primal Water 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Primal Water 3": {
        "category": "racial",
        "PreReq": ["Primal Water 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK. +5% Water Damage",
        "stats": {
            "Water%": 0.05
        },
        "conversions": []
    },
    "Aqua Deity": {
        "category": "racial",
        "PreReq": ["Primal Water 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +30% Water Damage, +10% Water Penetration",
        "stats": {
            "MATK%": 0.2,
            "Water%": 0.3,
            "Water Pen%": 0.1
        },
        "conversions": []
    },
    "Earth Elemental 1": {
        "category": "racial",
        "PreReq": ["Elemental"],
        "Tag": "Elemental1",
        "BlockedTag": "Elemental1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +50% Earth Resist, -50% Fire Resist, +5% MATK, -5% ATK",
        "stats": {
            "ATK%": -0.05,
            "MATK%": 0.05,
            "Fire Res%": -0.5,
            "Earth Res%": 0.5
        },
        "conversions": []
    },
    "Earth Elemental 2": {
        "category": "racial",
        "PreReq": ["Earth Elemental 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Earth Elemental 3": {
        "category": "racial",
        "PreReq": ["Earth Elemental 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Earth Spirit 1": {
        "category": "racial",
        "PreReq": ["Earth Elemental 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10% Earth Damage, +5% Earth Resist",
        "stats": {
            "Earth%": 0.1,
            "Earth Res%": 0.05
        },
        "conversions": []
    },
    "Earth Spirit 2": {
        "category": "racial",
        "PreReq": ["Earth Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Earth Spirit 3": {
        "category": "racial",
        "PreReq": ["Earth Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Earth Lord 1": {
        "category": "racial",
        "PreReq": ["Earth Spirit 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +40% Earth Damage, +10% Earth Resist",
        "stats": {
            "MATK%": 0.1,
            "Earth%": 0.4,
            "Earth Res%": 0.1
        },
        "conversions": []
    },
    "Earth Lord 2": {
        "category": "racial",
        "PreReq": ["Earth Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Earth Lord 3": {
        "category": "racial",
        "PreReq": ["Earth Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Primal Earth 1": {
        "category": "racial",
        "PreReq": ["Earth Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +25% Earth Damage, +10% Earth Penetration",
        "stats": {
            "MATK%": 0.1,
            "Earth%": 0.25,
            "Earth Pen%": 0.1
        },
        "conversions": []
    },
    "Primal Earth 2": {
        "category": "racial",
        "PreReq": ["Primal Earth 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Primal Earth 3": {
        "category": "racial",
        "PreReq": ["Primal Earth 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Earth Damage",
        "stats": {
            "Earth%": 0.05
        },
        "conversions": []
    },
    "Terra Deity": {
        "category": "racial",
        "PreReq": ["Primal Earth 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +30% Earth Damage, +10% Earth Penetration",
        "stats": {
            "MATK%": 0.2,
            "Earth%": 0.3,
            "Earth Pen%": 0.1
        },
        "conversions": []
    },
    "Wind Elemental 1": {
        "category": "racial",
        "PreReq": ["Elemental"],
        "Tag": "Elemental1",
        "BlockedTag": "Elemental1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +50% Wind Resist, -50% Lightning Resist, +5% MATK, -5% ATK",
        "stats": {
            "ATK%": -0.05,
            "MATK%": 0.05,
            "Lightning Res%": -0.5,
            "Wind Res%": 0.5
        },
        "conversions": []
    },
    "Wind Elemental 2": {
        "category": "racial",
        "PreReq": ["Wind Elemental 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Wind Elemental 3": {
        "category": "racial",
        "PreReq": ["Wind Elemental 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Wind Spirit 1": {
        "category": "racial",
        "PreReq": ["Wind Elemental 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10% Wind Damage, +5% Wind Resist",
        "stats": {
            "Wind%": 0.1,
            "Wind Res%": 0.05
        },
        "conversions": []
    },
    "Wind Spirit 2": {
        "category": "racial",
        "PreReq": ["Wind Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Wind Spirit 3": {
        "category": "racial",
        "PreReq": ["Wind Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Wind Lord 1": {
        "category": "racial",
        "PreReq": ["Wind Spirit 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +40% Wind Damage, +10% Wind Resist",
        "stats": {
            "MATK%": 0.1,
            "Wind%": 0.4,
            "Wind Res%": 0.1
        },
        "conversions": []
    },
    "Wind Lord 2": {
        "category": "racial",
        "PreReq": ["Wind Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Wind Lord 3": {
        "category": "racial",
        "PreReq": ["Wind Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Primal Wind 1": {
        "category": "racial",
        "PreReq": ["Wind Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +25% Wind Damage, +10% Wind Penetration",
        "stats": {
            "MATK%": 0.1,
            "Wind%": 0.25,
            "Wind Pen%": 0.1
        },
        "conversions": []
    },
    "Primal Wind 2": {
        "category": "racial",
        "PreReq": ["Primal Wind 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Primal Wind 3": {
        "category": "racial",
        "PreReq": ["Primal Wind 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Wind Damage",
        "stats": {
            "Wind%": 0.05
        },
        "conversions": []
    },
    "Whirlwind Deity": {
        "category": "racial",
        "PreReq": ["Primal Wind 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +30% Wind Damage, +10% Wind Penetration",
        "stats": {
            "MATK%": 0.2,
            "Wind%": 0.3,
            "Wind Pen%": 0.1
        },
        "conversions": []
    },
    "Lightning Elemental 1": {
        "category": "racial",
        "PreReq": ["Elemental"],
        "Tag": "Elemental1",
        "BlockedTag": "Elemental1",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +50% Lightning Resist, -50% Wind Resist, +5% MATK, -5% ATK",
        "stats": {
            "ATK%": -0.05,
            "MATK%": 0.05,
            "Lightning Res%": 0.5,
            "Wind Res%": -0.5
        },
        "conversions": []
    },
    "Lightning Elemental 2": {
        "category": "racial",
        "PreReq": ["Lightning Elemental 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Lightning Elemental 3": {
        "category": "racial",
        "PreReq": ["Lightning Elemental 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Lightning Spirit 1": {
        "category": "racial",
        "PreReq": ["Lightning Elemental 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, '+10% Lightning Damage, +5% Lightning Resist",
        "stats": {
            "Lightning%": 0.1,
            "Lightning Res%": 0.05
        },
        "conversions": []
    },
    "Lightning Spirit 2": {
        "category": "racial",
        "PreReq": ["Lightning Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Lightning Spirit 3": {
        "category": "racial",
        "PreReq": ["Lightning Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Storm Lord 1": {
        "category": "racial",
        "PreReq": ["Lightning Spirit 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +40% Lightning Damage, +10% Lightning Resist",
        "stats": {
            "MATK%": 0.1,
            "Lightning%": 0.4,
            "Lightning Res%": 0.1
        },
        "conversions": []
    },
    "Storm Lord 2": {
        "category": "racial",
        "PreReq": ["Storm Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Storm Lord 3": {
        "category": "racial",
        "PreReq": ["Storm Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Primal Storm 1": {
        "category": "racial",
        "PreReq": ["Storm Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +25% Lightning Damage, +10% Lightning Penetration",
        "stats": {
            "MATK%": 0.1,
            "Lightning%": 0.25,
            "Lightning Pen%": 0.1
        },
        "conversions": []
    },
    "Primal Storm 2": {
        "category": "racial",
        "PreReq": ["Primal Storm 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Primal Storm 3": {
        "category": "racial",
        "PreReq": ["Primal Storm 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Lightning Damage",
        "stats": {
            "Lightning%": 0.05
        },
        "conversions": []
    },
    "Tempest Deity": {
        "category": "racial",
        "PreReq": ["Primal Storm 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +30% Lightning Damage, +10% Lightning Penetration",
        "stats": {
            "MATK%": 0.2,
            "Lightning%": 0.3,
            "Lightning Pen%": 0.1
        },
        "conversions": []
    },
    "Tengu 1": {
        "category": "racial",
        "PreReq": ["Tengu"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +10% MATK, -10% DEF, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01,
            "DEF%": -0.1,
            "MATK%": 0.1
        },
        "conversions": []
    },
    "Tengu 2": {
        "category": "racial",
        "PreReq": ["Tengu 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Tengu 3": {
        "category": "racial",
        "PreReq": ["Tengu 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Wolf Tengu 1": {
        "category": "racial",
        "PreReq": ["Tengu 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +10 MATK",
        "stats": {
            "MATK%": 0.1
        },
        "conversions": []
    },
    "Wolf Tengu 2": {
        "category": "racial",
        "PreReq": ["Wolf Tengu 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Wolf Tengu 3": {
        "category": "racial",
        "PreReq": ["Wolf Tengu 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "White Wolf Tengu 1": {
        "category": "racial",
        "PreReq": ["Wolf Tengu 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK",
        "stats": {
            "MATK%": 0.25
        },
        "conversions": []
    },
    "White Wolf Tengu 2": {
        "category": "racial",
        "PreReq": ["White Wolf Tengu 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "White Wolf Tengu 3": {
        "category": "racial",
        "PreReq": ["White Wolf Tengu 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Tengu Emperor 1": {
        "category": "racial",
        "PreReq": ["White Wolf Tengu 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +5% Void Damage",
        "stats": {
            "MATK%": 0.25,
            "Void%": 0.05
        },
        "conversions": []
    },
    "Tengu Emperor 2": {
        "category": "racial",
        "PreReq": ["Tengu Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Tengu Emperor 3": {
        "category": "racial",
        "PreReq": ["Tengu Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 MATK, +1% Crit Chance",
        "stats": {
            "Crit Chance%": 0.01
        },
        "conversions": []
    },
    "Tengu Deity": {
        "category": "racial",
        "PreReq": ["Tengu Emperor 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% MATK, +4% Crit Chance, +5% Void Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "MATK%": 0.5,
            "Void%": 0.05
        },
        "conversions": []
    },
    "Birdman 1": {
        "category": "racial",
        "PreReq": ["Birdman"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK,+5% Crit Chance, +5% ATK, -15% DEF",
        "stats": {
            "Crit Chance%": 0.05,
            "DEF%": -0.15,
            "ATK%": 0.05,
            "Lightning Res%": -0.25
        },
        "conversions": []
    },
    "Birdman 2": {
        "category": "racial",
        "PreReq": ["Birdman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Birdman 3": {
        "category": "racial",
        "PreReq": ["Birdman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Elder Birdman 1": {
        "category": "racial",
        "PreReq": ["Birdman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Crit Chance, +15 ATK, +5% ATK",
        "stats": {
            "Crit Chance%": 0.04,
            "ATK%": 0.05
        },
        "conversions": []
    },
    "Elder Birdman 2": {
        "category": "racial",
        "PreReq": ["Elder Birdman 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Elder Birdman 3": {
        "category": "racial",
        "PreReq": ["Elder Birdman 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Birdman Lord 1": {
        "category": "racial",
        "PreReq": ["Elder Birdman 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Crit Chance, +20% ATK, +25% Crit Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.25,
            "ATK%": 0.2
        },
        "conversions": []
    },
    "Birdman Lord 2": {
        "category": "racial",
        "PreReq": ["Birdman Lord 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Birdman Lord 3": {
        "category": "racial",
        "PreReq": ["Birdman Lord 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Birdman Emperor 1": {
        "category": "racial",
        "PreReq": ["Birdman Lord 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+4% Crit Chance, +20% ATK, +35% Crit Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.35
        },
        "conversions": []
    },
    "Birdman Emperor 2": {
        "category": "racial",
        "PreReq": ["Birdman Emperor 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Birdman Emperor 3": {
        "category": "racial",
        "PreReq": ["Birdman Emperor 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK",
        "stats": {},
        "conversions": []
    },
    "Birdman Deity": {
        "category": "racial",
        "PreReq": ["Birdman Emperor 3", "AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +4% Crit Chance, +40% Crit Damage",
        "stats": {
            "Crit Chance%": 0.04,
            "Crit DMG%": 0.4,
            "ATK%": 0.35
        },
        "conversions": []
    },
    "Ghost 1": {
        "category": "racial",
        "PreReq": ["Ghost"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage, +5% MATK, -5% ATK",
        "stats": {
            "ATK%": -0.05,
            "MATK%": 0.05,
            "Neg%": 0.05,
            "Neg Res%": 0.5,
            "Holy Res%": -0.5
        },
        "conversions": []
    },
    "Ghost 2": {
        "category": "racial",
        "PreReq": ["Ghost 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage",
        "stats": {
            "Neg%": 0.05
        },
        "conversions": []
    },
    "Ghost 3": {
        "category": "racial",
        "PreReq": ["Ghost 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage",
        "stats": {
            "Neg%": 0.05
        },
        "conversions": []
    },
    "Wraith 1": {
        "category": "racial",
        "PreReq": ["Ghost 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10% Negative Damage, +10% Slash Resist",
        "stats": {
            "Neg%": 0.1,
            "Slash Res%": 0.1
        },
        "conversions": []
    },
    "Wraith 2": {
        "category": "racial",
        "PreReq": ["Wraith 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage, +10% Blunt Resist",
        "stats": {
            "Neg%": 0.05,
            "Blunt Res%": 0.1
        },
        "conversions": []
    },
    "Wraith 3": {
        "category": "racial",
        "PreReq": ["Wraith 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage, +10% Pierce Resist",
        "stats": {
            "Neg%": 0.05,
            "Pierce Res%": 0.1
        },
        "conversions": []
    },
    "Phantom 1": {
        "category": "racial",
        "PreReq": ["Wraith 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +40% Negative Damage, +10% Negative Resist",
        "stats": {
            "MATK%": 0.1,
            "Neg%": 0.4,
            "Neg Res%": 0.1
        },
        "conversions": []
    },
    "Phantom 2": {
        "category": "racial",
        "PreReq": ["Phantom 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage",
        "stats": {
            "Neg%": 0.05
        },
        "conversions": []
    },
    "Phantom 3": {
        "category": "racial",
        "PreReq": ["Phantom 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage",
        "stats": {
            "Neg%": 0.05
        },
        "conversions": []
    },
    "Spectre 1": {
        "category": "racial",
        "PreReq": ["Phantom 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK, +25% Negative Damage",
        "stats": {
            "MATK%": 0.1,
            "Neg%": 0.25
        },
        "conversions": []
    },
    "Spectre 2": {
        "category": "racial",
        "PreReq": ["Spectre 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage",
        "stats": {
            "Neg%": 0.05
        },
        "conversions": []
    },
    "Spectre 3": {
        "category": "racial",
        "PreReq": ["Spectre 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +5% Negative Damage",
        "stats": {
            "Neg%": 0.05
        },
        "conversions": []
    },
    "Nightmare Lord": {
        "category": "racial",
        "PreReq": ["Spectre 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +30% Negative Damage, +10% Negative Penetration",
        "stats": {
            "MATK%": 0.2,
            "Neg%": 0.3,
            "Neg Pen%": 0.1
        },
        "conversions": []
    },
    "Arachnoid 1": {
        "category": "racial",
        "PreReq": ["Arachnoid"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +10% ATK, -10% DEF, +5% Pierce Damage",
        "stats": {
            "DEF%": -0.1,
            "ATK%": 0.1,
            "Pierce%": 0.05,
            "Fire Res%": -0.15,
            "Toxic Res%": 0.1
        },
        "conversions": []
    },
    "Arachnoid 2": {
        "category": "racial",
        "PreReq": ["Arachnoid 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachnoid 3": {
        "category": "racial",
        "PreReq": ["Arachnoid 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachnoid Warrior 1": {
        "category": "racial",
        "PreReq": ["Arachnoid 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +10 ATK, +10% Pierce Damage, +10% Toxic Resist",
        "stats": {
            "ATK%": 0.1,
            "Pierce%": 0.1,
            "Toxic Res%": 0.1
        },
        "conversions": []
    },
    "Arachnoid Warrior 2": {
        "category": "racial",
        "PreReq": ["Arachnoid Warrior 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachnoid Warrior 3": {
        "category": "racial",
        "PreReq": ["Arachnoid Warrior 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachne 1": {
        "category": "racial",
        "PreReq": ["Arachnoid Warrior 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +15% Earth Resist, +10% Pierce Damage",
        "stats": {
            "ATK%": 0.25,
            "Pierce%": 0.1,
            "Earth Res%": 0.15
        },
        "conversions": []
    },
    "Arachne 2": {
        "category": "racial",
        "PreReq": ["Arachne 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachne 3": {
        "category": "racial",
        "PreReq": ["Arachne 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachne Queen 1": {
        "category": "racial",
        "PreReq": ["Arachne 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +15% Toxic Resist, +15% Pierce Damage",
        "stats": {
            "ATK%": 0.25,
            "Pierce%": 0.15,
            "Toxic Res%": 0.15
        },
        "conversions": []
    },
    "Arachne Queen 2": {
        "category": "racial",
        "PreReq": ["Arachne Queen 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachne Queen 3": {
        "category": "racial",
        "PreReq": ["Arachne Queen 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 ATK, +5% Pierce Damage",
        "stats": {
            "Pierce%": 0.05
        },
        "conversions": []
    },
    "Arachne Empress": {
        "category": "racial",
        "PreReq": ["Arachne Queen 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+35% ATK, +20% DEF, +12% Pierce Penetration",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.35
        },
        "conversions": []
    },
    "Slime 1": {
        "category": "racial",
        "PreReq": ["AsuraKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance, -10% DEF",
        "stats": {
            "Crit Chance%": 0.02,
            "DEF%": -0.1,
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Water Res%": 0.1,
            "Lightning Res%": -0.4,
            "Toxic Res%": 0.1
        },
        "conversions": []
    },
    "Slime 2": {
        "category": "racial",
        "PreReq": ["Slime 1", "Slime"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Slime 3": {
        "category": "racial",
        "PreReq": ["Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Predator Slime 1": {
        "category": "racial",
        "PreReq": ["Slime 3"],
        "Tag": "Slime1",
        "BlockedTag": "Slime1",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Predator Slime 2": {
        "category": "racial",
        "PreReq": ["Predator Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Predator Slime 3": {
        "category": "racial",
        "PreReq": ["Predator Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Demon Slime 1": {
        "category": "racial",
        "PreReq": ["Predator Slime 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +3% Crit Chance, +20% Crit Damage",
        "stats": {
            "Crit Chance%": 0.03,
            "Crit DMG%": 0.2,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Demon Slime 2": {
        "category": "racial",
        "PreReq": ["Demon Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Demon Slime 3": {
        "category": "racial",
        "PreReq": ["Demon Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Ubbo Sathla 1": {
        "category": "racial",
        "PreReq": ["Demon Slime 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% ATK, +35% Crit Damage, +10% DEF",
        "stats": {
            "Crit DMG%": 0.35,
            "DEF%": 0.1,
            "ATK%": 0.1
        },
        "conversions": []
    },
    "Ubbo Sathla 2": {
        "category": "racial",
        "PreReq": ["Ubbo Sathla 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Ubbo Sathla 3": {
        "category": "racial",
        "PreReq": ["Ubbo Sathla 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Shoggoth": {
        "category": "racial",
        "PreReq": ["Ubbo Sathla 3"],
        "Tag": "ValkyrieKey",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK, +25% DEF, +45% Crit Damage",
        "stats": {
            "Crit DMG%": 0.45,
            "DEF%": 0.25,
            "ATK%": 0.4
        },
        "conversions": []
    },
    "Shield Slime 1": {
        "category": "racial",
        "PreReq": ["Slime 3"],
        "Tag": "Slime1",
        "BlockedTag": "Slime1",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% DEF, +10% Crit Damage, +9 HP Regen",
        "stats": {
            "Crit DMG%": 0.1,
            "DEF%": 0.2
        },
        "conversions": []
    },
    "Shield Slime 2": {
        "category": "racial",
        "PreReq": ["Shield Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 DEF, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Shield Slime 3": {
        "category": "racial",
        "PreReq": ["Shield Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 DEF, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Angel Slime 1": {
        "category": "racial",
        "PreReq": ["Shield Slime 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% DEF, +15% Crit Damage, +25 HP Regen",
        "stats": {
            "Crit DMG%": 0.15,
            "DEF%": 0.25
        },
        "conversions": []
    },
    "Angel Slime 2": {
        "category": "racial",
        "PreReq": ["Angel Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 DEF, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Angel Slime 3": {
        "category": "racial",
        "PreReq": ["Angel Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 DEF, +2% Crit Chance",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Elder Pink Slime 1": {
        "category": "racial",
        "PreReq": ["Angel Slime 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% Slash, Pierce, and Water Resist",
        "stats": {
            "Slash Res%": 0.15,
            "Pierce Res%": 0.15,
            "Water Res%": 0.15
        },
        "conversions": []
    },
    "Elder Pink Slime 2": {
        "category": "racial",
        "PreReq": ["Elder Pink Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 DEF, +2% Crit Chance, +30 HP Regen",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Elder Pink Slime 3": {
        "category": "racial",
        "PreReq": ["Elder Pink Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15 DEF, +2% Crit Chance, +30 HP Regen",
        "stats": {
            "Crit Chance%": 0.02
        },
        "conversions": []
    },
    "Elder Guardian Ooze": {
        "category": "racial",
        "PreReq": ["Elder Pink Slime 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% DEF, +500 HP Regen, +35% Crit Damage",
        "stats": {
            "Crit DMG%": 0.35,
            "DEF%": 0.45
        },
        "conversions": []
    },
    "Poison Slime 1": {
        "category": "racial",
        "PreReq": ["Slime 3"],
        "Tag": "Slime1",
        "BlockedTag": "Slime1",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% MATK, +10% Toxic Damage, +20 MATK",
        "stats": {
            "MATK%": 0.2,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Poison Slime 2": {
        "category": "racial",
        "PreReq": ["Poison Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +2% Crit Chance, +5% Toxic Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.05,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Poison Slime 3": {
        "category": "racial",
        "PreReq": ["Poison Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +2% Crit Chance, +5% Toxic Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.05,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Acid Slime 1": {
        "category": "racial",
        "PreReq": ["Poison Slime 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +10% Toxic Damage",
        "stats": {
            "MATK%": 0.25,
            "Toxic%": 0.1
        },
        "conversions": []
    },
    "Acid Slime 2": {
        "category": "racial",
        "PreReq": ["Acid Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +2% Crit Chance, +5% Toxic Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.05,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Acid Slime 3": {
        "category": "racial",
        "PreReq": ["Acid Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +2% Crit Chance, +5% Toxic Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.05,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Elder Ivy Slime 1": {
        "category": "racial",
        "PreReq": ["Acid Slime 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+30% MATK, +15% Toxic Damage",
        "stats": {
            "MATK%": 0.3,
            "Toxic%": 0.15
        },
        "conversions": []
    },
    "Elder Ivy Slime 2": {
        "category": "racial",
        "PreReq": ["Elder Ivy Slime 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +2% Crit Chance, +5% Toxic Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.05,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Elder Ivy Slime 3": {
        "category": "racial",
        "PreReq": ["Elder Ivy Slime 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +2% Crit Chance, +5% Toxic Damage",
        "stats": {
            "Crit Chance%": 0.02,
            "MATK%": 0.05,
            "Toxic%": 0.05
        },
        "conversions": []
    },
    "Elder Devouring Ooze": {
        "category": "racial",
        "PreReq": ["Elder Ivy Slime 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+45% MATK, +1% HP Regen, +20% Toxic Damage, +10% Toxic Penetration",
        "stats": {
            "MATK%": 0.45,
            "Toxic%": 0.2,
            "Toxic Pen%": 0.1
        },
        "conversions": []
    },
    "Tree Spirit 1": {
        "category": "racial",
        "PreReq": ["TreeSpirit"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +8 HEAL, +5% HEAL, +5% DEF",
        "stats": {
            "DEF%": 0.05,
            "HEAL%": 0.05,
            "Fire Res%": -0.25,
            "Earth Res%": 0.25
        },
        "conversions": []
    },
    "Tree Spirit 2": {
        "category": "racial",
        "PreReq": ["Tree Spirit 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Tree Spirit 3": {
        "category": "racial",
        "PreReq": ["Tree Spirit 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+8 ATK, +8 DEF, +8 HEAL",
        "stats": {},
        "conversions": []
    },
    "Dryad 1": {
        "category": "racial",
        "PreReq": ["Tree Spirit 3"],
        "Tag": "TreeSpirit1",
        "BlockedTag": "TreeSpirit1",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Heal, +10 Heal",
        "stats": {
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "Dryad 2": {
        "category": "racial",
        "PreReq": ["Dryad 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 Heal, +5 DEF",
        "stats": {},
        "conversions": []
    },
    "Dryad 3": {
        "category": "racial",
        "PreReq": ["Dryad 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 Heal, +5 DEF",
        "stats": {},
        "conversions": []
    },
    "High Dryad 1": {
        "category": "racial",
        "PreReq": ["Dryad 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% Heal, +10% DEF",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.2
        },
        "conversions": []
    },
    "High Dryad 2": {
        "category": "racial",
        "PreReq": ["High Dryad 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 Heal, +5 DEF",
        "stats": {},
        "conversions": []
    },
    "High Dryad 3": {
        "category": "racial",
        "PreReq": ["High Dryad 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 Heal, +5 DEF",
        "stats": {},
        "conversions": []
    },
    "Dryad Queen 1": {
        "category": "racial",
        "PreReq": ["High Dryad 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Heal, +10% DEF, +15% Earth Resist",
        "stats": {
            "DEF%": 0.1,
            "HEAL%": 0.25,
            "Earth Res%": 0.15
        },
        "conversions": []
    },
    "Dryad Queen 2": {
        "category": "racial",
        "PreReq": ["Dryad Queen 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 Heal, +5 DEF",
        "stats": {},
        "conversions": []
    },
    "Dryad Queen 3": {
        "category": "racial",
        "PreReq": ["Dryad Queen 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 Heal, +5 DEF",
        "stats": {},
        "conversions": []
    },
    "Earth Mother": {
        "category": "racial",
        "PreReq": ["Dryad Queen 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+50% Heal, +50% DEF, +30 MP",
        "stats": {
            "DEF%": 0.5,
            "HEAL%": 0.5
        },
        "conversions": []
    },
    "Treant 1": {
        "category": "racial",
        "PreReq": ["Tree Spirit 3"],
        "Tag": "TreeSpirit1",
        "BlockedTag": "TreeSpirit1",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% DEF, +20% Pierce Resist, -20% Slash Resist",
        "stats": {
            "DEF%": 0.1,
            "Slash Res%": -0.2,
            "Pierce Res%": 0.2
        },
        "conversions": []
    },
    "Treant 2": {
        "category": "racial",
        "PreReq": ["Treant 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +12 DEF",
        "stats": {},
        "conversions": []
    },
    "Treant 3": {
        "category": "racial",
        "PreReq": ["Treant 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +12 DEF",
        "stats": {},
        "conversions": []
    },
    "Huorn 1": {
        "category": "racial",
        "PreReq": ["Treant 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+15% ATK, +20% DEF",
        "stats": {
            "DEF%": 0.2,
            "ATK%": 0.15
        },
        "conversions": []
    },
    "Huorn 2": {
        "category": "racial",
        "PreReq": ["Huorn 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +12 DEF",
        "stats": {},
        "conversions": []
    },
    "Huorn 3": {
        "category": "racial",
        "PreReq": ["Huorn 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +12 DEF",
        "stats": {},
        "conversions": []
    },
    "Demon Tree 1": {
        "category": "racial",
        "PreReq": ["Huorn 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK, +25% DEF, +15% Earth Resist",
        "stats": {
            "DEF%": 0.25,
            "ATK%": 0.2,
            "Earth Res%": 0.15
        },
        "conversions": []
    },
    "Demon Tree 2": {
        "category": "racial",
        "PreReq": ["Demon Tree 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +12 DEF",
        "stats": {},
        "conversions": []
    },
    "Demon Tree 3": {
        "category": "racial",
        "PreReq": ["Demon Tree 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 ATK, +12 DEF",
        "stats": {},
        "conversions": []
    },
    "Zy'tl Q'ae": {
        "category": "racial",
        "PreReq": ["Demon Tree 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% ATK, +40% DEF, +12% Blunt Penetration",
        "stats": {
            "DEF%": 0.4,
            "ATK%": 0.25,
            "Blunt Pen%": 0.12
        },
        "conversions": []
    },
    "Kitsune 1": {
        "category": "racial",
        "PreReq": ["Kitsune"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% Fire Resist, -25% Holy Resist, +5% ATK/MATK, +10 MATK, +10 ATK",
        "stats": {
            "ATK%": 0.05,
            "MATK%": 0.05,
            "Fire Res%": 0.25,
            "Holy Res%": -0.25
        },
        "conversions": []
    },
    "Kitsune 2": {
        "category": "racial",
        "PreReq": ["Kitsune 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Kitsune 3": {
        "category": "racial",
        "PreReq": ["Kitsune 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Sanbi 1": {
        "category": "racial",
        "PreReq": ["Kitsune 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10% MATK/ATK, +15% Elefire/Eleslash",
        "stats": {
            "Slash%": 0.15,
            "Fire%": 0.15
        },
        "conversions": []
    },
    "Sanbi 2": {
        "category": "racial",
        "PreReq": ["Sanbi 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Sanbi 3": {
        "category": "racial",
        "PreReq": ["Sanbi 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Gobi 1": {
        "category": "racial",
        "PreReq": ["Sanbi 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK/MATK, +25% Crit Damage",
        "stats": {
            "Crit DMG%": 0.25,
            "ATK%": 0.2,
            "MATK%": 0.2
        },
        "conversions": []
    },
    "Gobi 2": {
        "category": "racial",
        "PreReq": ["Gobi 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Gobi 3": {
        "category": "racial",
        "PreReq": ["Gobi 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Nanabi 1": {
        "category": "racial",
        "PreReq": ["Gobi 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+20% ATK/MATK, +25% Elefire/Eleslash",
        "stats": {
            "ATK%": 0.2,
            "MATK%": 0.2,
            "Slash%": 0.25,
            "Fire%": 0.25
        },
        "conversions": []
    },
    "Nanabi 2": {
        "category": "racial",
        "PreReq": ["Nanabi 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Nanabi 3": {
        "category": "racial",
        "PreReq": ["Nanabi 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +10 ATK",
        "stats": {},
        "conversions": []
    },
    "Kyuubi": {
        "category": "racial",
        "PreReq": ["Nanabi 3", "ElvenKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+40% ATK/MATK, +15% Penslash/Penfire",
        "stats": {
            "ATK%": 0.4,
            "MATK%": 0.4,
            "Fire Pen%": 0.15
        },
        "conversions": []
    },
    "Erinyes 1": {
        "category": "racial",
        "PreReq": [""],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+60 HP, +0.5% Global Max Health, +0.1% HP Regen",
        "stats": {
            "HP": 60,
            "Global HP%": 0.005,
            "HP Regen%": 0.001
        },
        "conversions": []
    },
    "Erinyes 2": {
        "category": "racial",
        "PreReq": ["Erinyes 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+60 HP, +0.5% Global Max Health, +0.1% HP Regen",
        "stats": {},
        "conversions": []
    },
    "Erinyes 3": {
        "category": "racial",
        "PreReq": ["Erinyes 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 100,
        "tp_spent": 0,
        "total_level": 0,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+60 HP, +1% Global Max Health, +0.1% HP Regen",
        "stats": {},
        "conversions": []
    },
    "Brachina 1": {
        "category": "racial",
        "PreReq": ["Erinyes 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+5% MATK, +80 HP, +1% Global Max Health, +0.4% HP Regen",
        "stats": {
            "MATK%": 0.05
        },
        "conversions": []
    },
    "Brachina 2": {
        "category": "racial",
        "PreReq": ["Brachina 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +80 HP, +0.5% Global Max Health, +0.1% HP Regen",
        "stats": {},
        "conversions": []
    },
    "Brachina 3": {
        "category": "racial",
        "PreReq": ["Brachina 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 600,
        "tp_spent": 0,
        "total_level": 15,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+10 MATK, +80 HP, +0.5% Global Max Health, +0.1% HP Regen",
        "stats": {},
        "conversions": []
    },
    "Succubus 1": {
        "category": "racial",
        "PreReq": ["Brachina 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +400 HP, +2% Global Max Health, +10% Physical and Fire Resist, +15% Crit Damage",
        "stats": {
            "Crit DMG%": 0.15,
            "MATK%": 0.25,
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Blunt Res%": 0.1,
            "Fire Res%": 0.1
        },
        "conversions": []
    },
    "Succubus 2": {
        "category": "racial",
        "PreReq": ["Succubus 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +200 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Succubus 3": {
        "category": "racial",
        "PreReq": ["Succubus 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 1800,
        "tp_spent": 0,
        "total_level": 35,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +200 HP, +1% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Succubus Archdevil 1": {
        "category": "racial",
        "PreReq": ["Succubus 3"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+25% MATK, +800 HP, +3% Global Max Health +15% Physical and Void Resist, +25% Void Damage",
        "stats": {
            "MATK%": 0.25,
            "Void%": 0.25,
            "Slash Res%": 0.15,
            "Pierce Res%": 0.15,
            "Blunt Res%": 0.15,
            "Void Res%": 0.15
        },
        "conversions": []
    },
    "Succubus Archdevil 2": {
        "category": "racial",
        "PreReq": ["Succubus Archdevil 1"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +400 HP, +1.5% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Succubus Archdevil 3": {
        "category": "racial",
        "PreReq": ["Succubus Archdevil 2"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 50,
        "exp": 3000,
        "tp_spent": 0,
        "total_level": 50,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+12 MATK, +400 HP, +1.5% Global Max Health",
        "stats": {},
        "conversions": []
    },
    "Succubus Goddess": {
        "category": "racial",
        "PreReq": ["Succubus Archdevil 3", "ValkyrieKey"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 1000,
        "exp": 5000,
        "tp_spent": 0,
        "total_level": 100,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+60% MATK, +3500 HP, +10% AllRes, +10% Void Penetration, +1.1% HP Regen",
        "stats": {
            "MATK%": 0.6,
            "Void Pen%": 0.1,
            "Slash Res%": 0.1,
            "Pierce Res%": 0.1,
            "Blunt Res%": 0.1,
            "Fire Res%": 0.1,
            "Water Res%": 0.1,
            "Lightning Res%": 0.1,
            "Wind Res%": 0.1,
            "Earth Res%": 0.1,
            "Toxic Res%": 0.1,
            "Neg Res%": 0.1,
            "Holy Res%": 0.1,
            "Void Res%": 0.1
        },
        "conversions": []
    },
    "Hero Seed Evolution": {
        "category": "racial",
        "PreReq": ["HeroSeed"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 5000,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+1 Hero Points, +10% Main Stats",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.1,
            "MATK%": 0.1,
            "HEAL%": 0.1
        },
        "conversions": []
    },
    "Hero Awakening 1": {
        "category": "racial",
        "PreReq": ["Hero Seed Evolution", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 7500,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +4% Main Stats, +2% Max HP Multiplier",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Hero Awakening 2": {
        "category": "racial",
        "PreReq": ["Hero Awakening 1", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 5500,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +4% Main Stats",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Hero Awakening 3": {
        "category": "racial",
        "PreReq": ["Hero Awakening 2", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 5750,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +4% Main Stats",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Hero Awakening 4": {
        "category": "racial",
        "PreReq": ["Hero Awakening 3", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 6000,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +4% Main Stats",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Hero Awakening 5": {
        "category": "racial",
        "PreReq": ["Hero Awakening 4", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 6250,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +6% Main Stats",
        "stats": {
            "DEF%": 0.06,
            "ATK%": 0.06,
            "MATK%": 0.06,
            "HEAL%": 0.06
        },
        "conversions": []
    },
    "Hero Awakening 6": {
        "category": "racial",
        "PreReq": ["Hero Awakening 5", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 6500,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +4% Main Stats",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Hero Awakening 7": {
        "category": "racial",
        "PreReq": ["Hero Awakening 6", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 6750,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +4% Main Stats",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "Hero Awakening 8": {
        "category": "racial",
        "PreReq": ["Hero Awakening 7", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 7000,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +4% Main Stats",
        "stats": {
            "DEF%": 0.04,
            "ATK%": 0.04,
            "MATK%": 0.04,
            "HEAL%": 0.04
        },
        "conversions": []
    },
    "True Hero Ascendency": {
        "category": "racial",
        "PreReq": ["Hero Awakening 8", "DeathGodBlessing"],
        "Tag": "",
        "BlockedTag": "",
        "gold": 100,
        "exp": 12000,
        "tp_spent": 20,
        "total_level": 101,
        "class_levels": {
            "tank_levels": 0,
            "warrior_levels": 0,
            "caster_levels": 0,
            "healer_levels": 0
        },
        "description": "+2 Hero Points, +10% Main Stats, +3% Max HP Multiplier",
        "stats": {
            "DEF%": 0.1,
            "ATK%": 0.1,
            "MATK%": 0.1,
            "HEAL%": 0.1
        },
        "conversions": []
    }
};

const statSet = new Set<string>()
const convSet = new Set<string>()

for (const entry of Object.values(talent_data)) {
    Object.keys(entry.stats).forEach(stat => statSet.add(stat))
    entry.conversions.forEach(conv => {
        convSet.add(conv.source)
        convSet.add(conv.resulting_stat)
    })
}

// inject precomputed widths
const __columnWidths = computeColumnWidths(talent_data)
const __allStatNames = Array.from(statSet).sort()
const __allConversionNames = Array.from(convSet).sort()

// export both
export { talent_data, __columnWidths, __allStatNames, __allConversionNames }
