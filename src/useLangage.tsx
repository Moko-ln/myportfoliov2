"use client"

import {useContext} from 'react';
import {dataDictionaryPropType} from "@/type";
import {LangageContext} from "@/context/langageContext";

const useLangage = () : dataDictionaryPropType | null => {
    const ctx: dataDictionaryPropType | null = useContext(LangageContext);

    if (!ctx) new Error("useLangage must be used in LangageProvider");

    return ctx;
};

export default useLangage;
