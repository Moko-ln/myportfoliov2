"use client";

import { themeType } from "@/type";
import { createContext, useState, useEffect } from "react";

export const themeContext = createContext<themeType>("light" as unknown as themeType);

export const ThemeProvider = ({ children }: {children:React.ReactNode}) => {

    const [themeMode, setThemeMode] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") as "light" | "dark") || "light";
        }
        return "light";
    });

    const toggleTheme = () => {
        setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        const root = window.document.documentElement;

        if (themeMode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", themeMode);
    }, [themeMode]);

    return (
        <themeContext.Provider value={{ theme: themeMode, toggleTheme }}>
            { children }
        </themeContext.Provider>
    )
}