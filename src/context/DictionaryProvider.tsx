"use client";

import React, { createContext } from "react";

interface DictionaryContextType {
  dictionary: any;
  lang: string;
}

export const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

export const DictionaryProvider = ({
  children,
  dictionary,
  lang,
}: {
  children: React.ReactNode;
  dictionary: any[];
  lang: string;
}) => {
  return (
    <DictionaryContext.Provider value={{ dictionary, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
};