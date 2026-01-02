"use client";

import { DictionaryProvider } from "@/context/DictionaryProvider";
import LangProvider from "@/context/LangProvider";
import { MenuProvider } from "@/context/MenuContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Toaster } from "sonner";
import { Overlay } from "../atoms/Overlay";
import { ThemeButton } from "../atoms/ThemeButton";
import { usePathname } from "next/navigation";

export const MyTemplate = ({
  children,
  lang,
  dictionary,
}: {
  children: React.ReactNode;
  lang: string;
  dictionary: any;
}) => {

  const pathname = usePathname();

  return (
    <LangProvider key={pathname} lang={lang}>
      <DictionaryProvider dictionary={dictionary} lang={lang}>
        <ThemeProvider>
          <MenuProvider>
            {children}
            <Toaster position="bottom-center" />
            <Overlay />
            <ThemeButton />
          </MenuProvider>
        </ThemeProvider>
      </DictionaryProvider>
    </LangProvider>
  );
};