"use client"

import { articleTypeProp } from "@/type"
import { twMerge } from "tailwind-merge"

export const Article = ({ children, className, isSnap }: articleTypeProp ) => {
    
    return (
        <article className={twMerge(`${isSnap && "snap-center"} md:pt-24 pt-14 h-full w-full ${className} bg-slate-50 dark:bg-black`)}>
            { children }
        </article>
        
    )
}