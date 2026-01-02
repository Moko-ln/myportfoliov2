"use client";

import { useTheme } from "@/hooks/useTheme";

export const ThemeButton = () => {

    const { toggleTheme } = useTheme();

    return (
        <button onClick={() => toggleTheme()} className="bg-black dark:bg-slate-50 h-6 w-6 rounded-full fixed bottom-10 right-10 z-40"/>
    )
}