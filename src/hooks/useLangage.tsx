"use client"

import {useContext} from 'react';
import {langageContextType} from "@/type";
import {LangageContext} from "@/context/langageContext";

const useLangage = () : langageContextType | null => {
    const ctx: langageContextType | null = useContext(LangageContext);

    if (!ctx) new Error("useLangage must be used in LangageProvider");

    return ctx;
};

export default useLangage;
