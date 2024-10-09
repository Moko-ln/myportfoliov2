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
        // <ul className="flex items-center gap-4">
        //     <li>
        //         <button onClick={ handleBtnFr } className={`h-8 min-w-8 text-xs border border-slate-200 rounded-full ${langage === "fr" ? "bg-slate-950 text-slate-50" :"text-slate-50"}`}>FR</button>
        //     </li>
        //     <li>
        //         <button onClick={ handleBtnAng } className={`h-8 min-w-8 text-xs border border-slate-200 rounded-full ${langage === "ang" ? "bg-slate-950 text-slate-50" :"text-slate-50"}`}>ANG</button>
        //     </li>
        // </ul>

        <button
            className="border border-slate-200 h-12 w-12 flex items-center justify-center text-slate-500"
            onClick={ toggleLangage }
        >Toggle</button>
    );
};

export default LangageBtn;
