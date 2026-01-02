"use client";

import { createContext } from "react";

export const LangContext = createContext<string | undefined>(undefined);

export default function LangProvider({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <LangContext.Provider value={lang}>
      {children}
    </LangContext.Provider>
  );
}