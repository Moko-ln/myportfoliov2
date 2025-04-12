"use client"

import { createContext } from "react";

type LangContextType = {
  lang: "en" | "fr";
};

export const LangContext = createContext<LangContextType | undefined>(undefined);

export default function LangProvider({
    lang,
    children,
  }:{
    lang: "en" | "fr";
    children: React.ReactNode;
  }) {
    return <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>;
  }