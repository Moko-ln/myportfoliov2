"use client";

import { themeContext } from "@/context/ThemeProvider";
import { themeType } from "@/type";
import { useContext } from "react";

export const useTheme = () => {

    const context = useContext<themeType>(themeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};