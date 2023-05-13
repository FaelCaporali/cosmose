export default interface IChar {
    id: number;
    player: string;
    info: BasicInfo,
    status: Status,
    attributes: Attributes,
    abilities: Abilities,
    knowledge: Knowledge,
    talents: object,
    special: {
        domains: object,
        mutation: object,
        magics: object,
        miracles: object,
        improvements: object
    }
}

export interface Equipment {
    name: string;
    value: number;
    dices: number;
    main_status: string;
    pre_requirements: Abilities;
    usage: 'hands' | 'torso' | 'feet' | 'head' | 'legs' | 'full-body' | 'special';
}

export interface Attributes {
    body: number;
    mind: number;
    cosmos: number;
}

export interface Abilities {
    persuasion: number;
    perception: number;
    combat: number;
    dexterity: number;
    stealth: number;
    acrobatics: number;
}

export interface BasicInfo {
    name: string;
    weight: number;
    height: number;
    age: number;
    image: string;
    gender: 'male' | 'female' | 'neuter' | 'male_trans' | 'female_trans' | 'androgynous';
    sexualOrientation: 'gay' | 'straight' | 'bisexual' | 'asexual';

}

export interface Status {
    health: number;
    sanity: number;
    lucky: number;
    finances: number;
    condition: string;
    equipment: Equipment[];
    charge: number;
    fails: number;
    experience: {
        actual: number;
        total: number;
    };
}

export interface Knowledge {
    motherLanguage: number;
    maths: number;
    physics: number;
    chemistry: number;
    biology: number;
    history: number;
    geography: number;
    electronics: number;
    investigation: number;
    firstAid: number;
    religion: number;
    arts: number;
    vehicles: number;
    survival: number;
    uncommon: {
        anatomy: number;
        economy: number;
        philosophy: number;
        occultism: number;
    }
}