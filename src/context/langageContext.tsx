import { createContext, useEffect, useState, ReactNode } from 'react';
import { dictionaryAng, dictionaryFr } from "@/utils/Dictionary";
import {dataDictionaryPropType} from "@/type";
import {FiArrowDown, FiChevronDown} from "react-icons/fi";

export const LangageContext = createContext<dataDictionaryPropType | null>(null);

interface MyComponentProps {
    children: ReactNode;
}

const LangageProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [langage, setLangage] = useState<string>("ang");

    const [dict, setDict] = useState<dataDictionaryPropType | null>(null);

    useEffect(() => {
        if (langage === "fr") {
            setDict((dico): any => dictionaryFr);
        } else if (langage === "ang") {
            setDict((dico): any => dictionaryAng);
        }
    }, [langage]);

    const toggleLangage = () => {
        setLangage(langage === 'ang' ? 'fr' : 'ang');
    };

    return (
        <LangageContext.Provider value={ dict }>
            <button
                className={`fixed top-5 right-24 cursor-pointer border border-slate-300 h-8 px-4 rounded-sm text-sm text-slate-500 flex items-center gap-2 z-30`}
                onClick={toggleLangage}
            >{ langage === "ang" ? "EN" : "FR"} <span><FiChevronDown /></span>
            </button>
            {children}
        </LangageContext.Provider>
    );
};

export default LangageProvider;
