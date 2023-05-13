import { Equipment } from "../character/IChar"
import IChar from "../character/IChar"

export default {
    id: 0,
    player: '',
    info: {
        name: '',
        weight: 0,
        height: 0,
        age: 0,
        image: '',
        gender: 'neuter',
        sexualOrientation: 'asexual',
    },
    status: {
        health: 6,
        sanity: 6,
        lucky: 0,
        finances: 0,
        condition: '',
        equipment: [] as Equipment[],
        charge: 0,
        fails: 0,
        experience: {
            actual: 0,
            total: 10
        }
    },
    attributes: {
        body: 1,
        mind: 1,
        cosmos: 2,
    },
    abilities: {
        persuasion: 0,
        perception: 0,
        combat: 0,
        dexterity: 0,
        stealth: 0,
        acrobatics: 0
    },
    knowledge: {
        motherLanguage: 0,
        maths: 0,
        physics: 0,
        chemistry: 0,
        biology: 0,
        history: 0,
        geography: 0,
        electronics: 0,
        investigation: 0,
        firstAid: 0,
        religion: 0,
        arts: 0,
        vehicles: 0,
        survival: 0,
        uncommon: {
            anatomy: 0,
            economy: 0,
            philosophy: 0,
            occultism: 0
        },
    },
    talents: {},
    special: {}
} as IChar