import { poppins } from "@/font/Fonts"
import { paragraphTypeProp } from "@/type"
import { twMerge } from "tailwind-merge"

export const Paragraph = ({ className, children, size = "medium" }:paragraphTypeProp) => {
    const sizes = {
        small: "text-xl lg:text-sm xl:text-base",
        medium: "text-base xl:text-lg",
        large: "text-lg xl:text-xl"
    }
    
    return (
        <p className={twMerge(`${sizes[size]} ${poppins.className} text-slate-700 tracking-tight`, className) }>
            {children}
        </p>
    )
}