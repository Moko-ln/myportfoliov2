"use client";

import { useMenu } from "@/hooks/useMenu";

export const Overlay = ({className}:{className?: string}) => {
    
    const menuContext = useMenu();

    return (
        <>
            { menuContext?.open && 
                <div
                    className={`fixed z-20 inset-0 bg-black bg-opacity-50 ${className}`}
                    onClick={() => menuContext?.setOpen(false)}
                />
            }
        </>
    )
}