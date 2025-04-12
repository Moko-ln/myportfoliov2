"use client"

import { articleTypeProp } from "@/type"
import { motion } from "framer-motion"

export const Article = ({ children, className, scale=true }: articleTypeProp ) => {
    
    return (
        <motion.article 
            className={`${className} min-h-screen w-full`}
            initial={{ opacity:0, scale: scale ? 1.045 : 1 }}
            animate={{ opacity: 1, scale:1 }}

            transition={{ type:"spring", stiffness:50, damping:10, ease:"easeIn", delay: .3 }}
        >
            { children }
        </motion.article>
        
    )
}