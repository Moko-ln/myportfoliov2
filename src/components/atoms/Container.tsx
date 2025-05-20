import { containerTypeProp } from "@/type"
import { twMerge } from "tailwind-merge"

export const Container = ({ className, children,  }: containerTypeProp) => {
    return (
        <div className={twMerge(`w-10/12  mx-auto`, className)}>  
            { children }
        </div>
    )
}