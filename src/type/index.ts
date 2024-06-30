import {FiCommand, FiGlobe} from "react-icons/fi";
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