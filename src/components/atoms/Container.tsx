import { containerTypeProp } from "@/type"
import { twMerge } from "tailwind-merge"

export const Container = ({ className, children,  }: containerTypeProp) => {
    return (
        <div className={twMerge(`md:w-[1440px] w-11/12`, className)}>  
            { children }
        </div>
    )
}