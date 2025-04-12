import React from "react";

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
    dataHeader: dictHeaderPropType;
    dataMentions: dictMentionsPropType;
    dataVelocity: [string];
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
    text2: string;
    textbtn:string;
    textfollow:string;
}

export interface dictAboutListsPropType {
    id:number;
    title:string;
    content:string;
}

export interface dictExperiencePropType {
    id: number;
    text: string;
    title: string;
    experiences: dataExperiencePropType[]
}

export type dictWorkPropType =  {
    id: number;
    title:string;
    nameproject: string;
    mainImage: string;
    content:string;
    slug:string;
    stack?:string[];
    medias?:string[];
    design?:string;
    website?:string;

}

export interface dictHeaderPropType {
    id: number;
    title: string;
    link: string;
}

export interface dictMentionsPropType {
    id: number;
    title: string;
    link: string;
}

export interface langageContextType {
    langage: string,
    dict: dataDictionaryPropType | null,
    toggleLangage: () => void;
}

export type paragraphTypeProp =  {
    className?: string;
    children: React.ReactNode;
    size?:"small" | "medium" | "large"
}

export interface containerTypeProp {
    className?: string;
    children: React.ReactNode;
}

export type bannerType = {
    className?:string;
    url:string;
    alt: string;
}

export type articleTypeProp = {
    className?: string;
    children: React.ReactNode;
    scale?:boolean;
}

export type headingTypeProp = {
    className?:string;
    children:React.ReactNode;
    size?:"small" | "medium" | "large"
    typeHeading?: "h1" | "h2" | "h3"
    color?:"dark" | "light" | "black"
}

export type AvatarPropType = {
    className?:string;
    size?:"small"| "medium" | "large";
}

export type dataPropType = itemPropType[]

export type itemPropType = {
    id:number,
    title:string,
    icon?:any,
    image?:any,
    link?:string
}

export type burgerPropType = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    handleMenu: () => void
}