"use client"

import { useContext } from 'react';
import {LangageContext} from "@/context/langageContext";

const LangageBtn = () => {
    const langageContext = useContext(LangageContext);

    if (!langageContext) return null;

    const [langage, setLangage, dict]: any = langageContext;

    const toggleLangage = () => {
        setLangage(langage === 'ang' ? 'fr' : 'ang');
    };

    return (
        <button
            className="border border-slate-200 h-12 w-12 flex items-center justify-center text-slate-500"
            onClick={ toggleLangage }
        >Toggle</button>
    );
};

export default LangageBtn;
