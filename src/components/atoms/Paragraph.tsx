
import { paragraphTypeProp } from "@/type"
import { twMerge } from "tailwind-merge"

export const Paragraph = ({ className, children, size = "medium" }:paragraphTypeProp) => {
    const sizes = {
        small: "text-xs md:text-sm",
        medium: "text-base xl:text-lg",
        large: "text-lg xl:text-2xl"
    }
    
    return (
        <p className={twMerge(`${sizes[size]} text-slate-700 dark:text-slate-300 tracking-tight`, className) }>
            {children}
        </p>
    )
}