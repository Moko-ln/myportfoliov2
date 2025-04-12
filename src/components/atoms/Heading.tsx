import { montserrat } from "@/font/Fonts"
import { headingTypeProp } from "@/type"
import { twMerge } from "tailwind-merge"

export const Heading = ({ className, children, size = "medium", typeHeading = "h2", color="black" }:headingTypeProp) => {
    const sizes = {
        small: "text-2xl lg:text-lg xl:text-2xl",
        medium: "text-2xl lg:text-xl xl:text-4xl", 
        large: "text-2xl lg:text-2xl xl:text-8xl"
    }

    const colors = {
        black:"text-slate-900",
        dark:"text-slate-700",
        light:"text-slate-50"
    }

    const Component = typeHeading;

    return (
        <Component className={twMerge(`${sizes[size]} font-black leading-snug ${colors[color]} mb-4 ${montserrat.className}`, className)}>
            {children}
        </Component>
    )
}