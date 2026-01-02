"use client"

import { createContext, useEffect, useState, ReactNode } from 'react';
import { dictionaryAng, dictionaryFr } from "@/utils/Dictionary";
import { dataDictionaryPropType, langageContextType } from "@/type";
import { LoadingPage } from '@/components/templates/LoadingPage';

export const LangageContext = createContext<langageContextType | null>(null);

interface MyComponentProps {
    children: ReactNode;
}

const LangageProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [langage, setLangage] = useState<string>("en");
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
        } else if (langage === "en") {
            setDict((dico): any => dictionaryAng);
        }
    }, [langage]);

    const toggleLangage = () => {
        setIsLoading(true);
        setLangage(langage === 'en' ? 'fr' : 'en');
    };

    if (isLoading) return <LoadingPage />

    return (
        <LangageContext.Provider value={{ langage, dict, toggleLangage, setLangage  }}>
            {children}
        </LangageContext.Provider>
    );
};

export default LangageProvider;
