import { containerTypeProp } from "@/type"

export const Container = ({ className, children }: containerTypeProp) => {
    return (
        <div className={`${className} w-10/12 mx-auto`}>  
            { children }
        </div>
    )
}