"use client";

import { montserrat } from "@/font/Fonts";
import { useDictionary } from "@/hooks/useDictionary";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const ButtonPdf = ({ className }: { className?:string }) => {
    const { dictionary } = useDictionary();
    
    const handleClickPdf = () => {
        window.open(`/${dictionary?.about.resume.link}`, '_blank');
    }

    return (
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`${montserrat.className} group relative flex items-center bg-blue-500 text-slate-100 dark:bg-green-500 rounded-full w-40 px-4 h-12 justify-center ${className}`}
            onClick={ handleClickPdf }
        >
            {dictionary?.about.resume.labelbtn} 
            <span className="group-hover:text-blue-300 dark:group-hover:text-green-300 group-hover:rotate-45 transition ease-linear"><FiArrowUpRight/></span>
        </motion.button>
    )
}