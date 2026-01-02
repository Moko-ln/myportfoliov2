"use client";

import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useLangage from "@/hooks/useLangage";

export const SwitchLangage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const langage = useLangage();

  
  const currentLocale = pathname.startsWith("/en") ? "en" : "fr";
  const newLocale = currentLocale === "en" ? "fr" : "en";

  const toggleLanguage = () => {
    localStorage.setItem("locale", newLocale);
    
    Cookies.set("NEXT_LOCALE", newLocale, { 
      expires: 365, // 1 an
      path: "/"
    });

    langage?.toggleLangage();
    const newPath = `/${newLocale}${pathname.replace(/^\/(en|fr)/, "")}`;
    router.push(newPath);
  };
  
  return (
    <button onClick={toggleLanguage} className={` text-blue-500 font-semibold dark:text-green-500 uppercase underline z-20`}>
      {newLocale.toUpperCase()}
    </button>
  );
};