"use client"

import { burgerPropType } from "@/type";
import { createContext, ReactNode, useState } from "react";


export const MenuContext = createContext< burgerPropType | null >(null);

export const MenuProvider = ({ children }:{children : ReactNode}) => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <MenuContext.Provider value={{ open, setOpen, handleMenu }}> 
            { children }
        </MenuContext.Provider>
    )

}