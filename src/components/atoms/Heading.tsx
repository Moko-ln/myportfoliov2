import { montserrat } from "@/font/Fonts"
import { headingTypeProp } from "@/type"
import { twMerge } from "tailwind-merge"

export const Heading = ({ className, children, size = "medium", typeHeading = "h2", color="black" }:headingTypeProp) => {
    const sizes = {
        small: "text-2xl lg:text-lg xl:text-2xl font-semibold",
        medium: "text-2xl lg:text-xl xl:text-4xl font-bold", 
        large: "text-2xl lg:text-2xl xl:text-6xl font-black"
    }

    const colors = {
        black:"text-slate-900 dark:text-slate-50",
        dark:"text-slate-700 dark:text-slate-400",
        light:"text-slate-50 dark:text-slate-900"
    }

    const Component = typeHeading;

    return (
        <Component className={twMerge(`${sizes[size]} leading-snug ${colors[color]} mb-4 ${montserrat.className}`, className)}>
            {children}
        </Component>
    )
}