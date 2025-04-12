"use client"

import { useDictionary } from "@/hooks/useDictionary"
import { easeIn, motion } from "framer-motion";

export const ScrollDown = () => {
    const { dictionary } = useDictionary();

    return (
        <motion.button 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center flex-col gap-4"
            initial={{ opacity:0, y:-100}}    
            animate={{ opacity:1, y:0}}    
            transition={{ type:"spring", stiffness:100, damping:10, ease:"easeIn"}}    
        >
            <span className="text-slate-500">{dictionary?.button.scroll}</span>
            <span className="block h-20 w-[1px] bg-slate-500"></span>
        </motion.button>
    )
}