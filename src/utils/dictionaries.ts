"use server";

const dictionaries = {
  en: () => import("@/utils/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/utils/dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "fr") => {
  
  try {
    const res = await dictionaries[locale]?.();
    if (res) return res;
    
    throw new Error("Dictionnaire introuvable");
  } catch (error) {
    console.error("Erreur lors du chargement du dictionnaire :", error);
    return null;
  }
};

  