const dictionaries = {
  en: () => import("@/utils/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/utils/dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary : any = (lang: "en" | "fr") => {
  const res = dictionaries[lang]?.();

  if (res) return res;
  
  throw new Error("Dictionnaire introuvable");
};

  