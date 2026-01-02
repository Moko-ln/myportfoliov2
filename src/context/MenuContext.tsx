"use client"

import { burgerPropType } from "@/type";
import { createContext, ReactNode, useEffect, useState } from "react";


export const MenuContext = createContext< burgerPropType | null >(null);

export const MenuProvider = ({ children }:{children : ReactNode}) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        <MenuContext.Provider value={{ open, setOpen, handleMenu }}> 
            { children }
        </MenuContext.Provider>
    )

}