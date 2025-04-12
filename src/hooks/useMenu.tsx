"use client"

import { MenuContext } from "@/context/MenuContext";
import { burgerPropType } from "@/type";
import { useContext } from "react"

export const useMenu = () => {
    const ctx: burgerPropType | null = useContext(MenuContext);

    if (!ctx) new Error("useMenu must be used in MenuContext");

    return ctx;
}