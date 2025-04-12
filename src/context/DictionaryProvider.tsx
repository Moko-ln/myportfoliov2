"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { getDictionary } from "@/utils/dictionaries";

interface DictionaryContextType {
  dictionary: any | null;
  isLoading: boolean;
  error: string | null;
  setLocale: (locale: "en" | "fr") => void;
}

export const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
};

export const DictionaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dictionary, setDictionary] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [locale, setLocaleState] = useState<"en" | "fr">(() => {
    // Récupérer la langue depuis localStorage au chargement
    return (typeof window !== "undefined" && localStorage.getItem("locale")) as "en" | "fr" || "fr";
  });

  // Fonction pour changer la langue et sauvegarder dans localStorage
  const setLocale = (newLocale: "en" | "fr") => {
    localStorage.setItem("locale", newLocale);
    setLocaleState(newLocale);
  };

  useEffect(() => {
    const fetchDictionary = async () => {
      setIsLoading(true);
      try {
        const dict = await getDictionary(locale);
        setDictionary(dict);
      } catch (err) {
        setError("Erreur lors du chargement du dictionnaire");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDictionary();
  }, [locale]);

  return (
    <DictionaryContext.Provider value={{ dictionary, isLoading, error, setLocale }}>
      {children}
    </DictionaryContext.Provider>
  );
};