import { createContext, useEffect, useState, ReactNode } from 'react';
import { dictionaryAng, dictionaryFr } from "@/utils/Dictionary";
import {dataDictionaryPropType} from "@/type";
import {FiChevronDown} from "react-icons/fi";
import LoadingPage from "@/components/LoadingPage";

export const LangageContext = createContext<dataDictionaryPropType | null>(null);

interface MyComponentProps {
    children: ReactNode;
}

const LangageProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [langage, setLangage] = useState<string>("ang");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dict, setDict] = useState<dataDictionaryPropType | null>(null);

    useEffect(() => {
        if(isLoading){
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        }
    }, [isLoading]);

    useEffect(() => {
        if (langage === "fr") {
            setDict((dico): any => dictionaryFr);
        } else if (langage === "ang") {
            setDict((dico): any => dictionaryAng);
        }
    }, [langage]);

    const toggleLangage = () => {
        setIsLoading(true);
        setLangage(langage === 'ang' ? 'fr' : 'ang');
    };

    if (isLoading) return <LoadingPage />

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
