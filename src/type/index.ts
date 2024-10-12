export interface dataWorkPropType {
    id: number;
    title: string,
    description:string;
    content:string;
    image: string;
    done: boolean;
    bgColor:string;
    private: boolean;

    share: shareProjectLinkPropType[];
}

export interface dataExperiencePropType {
    id: number;
    title: string;
    periode: string;
    enterprise: string;
    logo: any
    ville: string
    languages: string[]
}

export interface compPropType {
    id: number;
    comp: any;
}

export interface shareProjectLinkPropType {
    id: number;
    title:string;
    icon:any;
    link: string;
}

export interface dataExperiencePropType {
    id: number,
    title: string,
    periode: string,
    enterprise: string,
    logo: any,
    ville: string,
    languages: string[],
    linkEnterprise?: string,
}

export interface dataDictionaryPropType {
    lan: string;
    dataHero: dictHeroPropType;
    dataAbout: dictAboutPropType;
    dataExperience: dataExperiencePropType;
    dataWork: dictWorkPropType;
}

export interface dictHeroPropType {
    id: number;
    title: string;
    subText: string;
    text: string;
}

export interface dictAboutPropType {
    id: number;
    title: string;
    text: string;
    textbtn:string;
    textfollow:string;
}

export interface dictExperiencePropType {
    id: number;
    text: string;
    title: string;
    experiences: dataExperiencePropType[]
}

export interface dictWorkPropType {
    id: number;
    title: string;
    subText: string;
    text: string;
    works: dataWorkPropType[]
}