"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { DictionaryContext } from "@/context/DictionaryProvider";
import Cookies from "js-cookie";

export const SwitchLangage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const context = useContext(DictionaryContext);

  if (!context) {
    return null;
  }

  const { setLocale } = context;
  
  const currentLocale = pathname.startsWith("/en") ? "en" : "fr";
  const newLocale = currentLocale === "en" ? "fr" : "en";

  const toggleLanguage = () => {
    localStorage.setItem("locale", newLocale);
    
    Cookies.set("NEXT_LOCALE", newLocale, { 
      expires: 365, // 1 an
      path: "/"
    });

    setLocale(newLocale);
    const newPath = `/${newLocale}${pathname.replace(/^\/(en|fr)/, "")}`;
    router.push(newPath);
  };
  
  return (
    <button onClick={toggleLanguage} className="text-slate-500 uppercase underline z-20">
      {newLocale.toUpperCase()}
    </button>
  );
};