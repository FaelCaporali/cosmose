import IChar, {BasicInfo, Status, Attributes, Abilities, Knowledge } from "./IChar";
import generator from "./IDCounter";

export default class Character implements IChar {
    readonly id: number;
    public info: BasicInfo;
    public status: Status;
    public attributes: Attributes;
    public abilities: Abilities;
    public knowledge: Knowledge;
    public talents: object;
    public special: { domains: object; mutation: object; magics: object; miracles: object; improvements: object; };

    constructor(
        readonly player: string,
        info = {
            name: '',
            weight: 0,
            height: 0,
            age: 0,
            image: '',
            gender: 'neuter',
            sexualOrientation: 'asexual'
        } as BasicInfo,
        status = {
            health: 6,
            sanity: 6,
            lucky: 3,
            finances: 12,
            condition: '',
            equipment: [],
            charge: 0,
            fails: 0,
            experience: {
                actual: 0,
                total: 0,
            }
        } as Status,
        attributes = {
            body: 1,
            mind: 1,
        } as Attributes,
        abilities = {
            persuasion: 1,
            perception: 1,
            combat: 1,
            dexterity: 1,
            stealth: 1,
            acrobatics: 1,
        } as Abilities,
        knowledge = {
            motherLanguage: 1,
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
                occultism: 0,
            }
        } as Knowledge,
        talents = {},
        special = {
            domains: {},
            mutation: {},
            magics: {},
            miracles: {},
            improvements: {}
        },
    ) {
        this.id = generator.next().value;
        this.player = player;
        this.info = info;
        this.status = status;
        this.attributes = {...attributes, cosmos: attributes.body + attributes.mind };
        this.abilities = abilities;
        this.knowledge = knowledge;
        this.talents = talents;
        this.special = special;
    }
}