import { montserrat } from "@/font/Fonts";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

type pdfType = {
    pdflabel:string;
    pdflink:string;
    className?:string;
}
export const ButtonPdf = ({pdflabel, pdflink, className }: pdfType) => {
    
    const handleClickPdf = () => {
        window.open(`/${pdflink}`, '_blank');
    }

    return (
        <motion.button 
            className={`${montserrat.className} group bg-white relative flex items-center border border-slate-400 rounded-full w-40 px-4 h-12 justify-center ${className}`}
            onClick={ handleClickPdf }
            initial={{ scale:.95 }}
            animate={{ scale:1 }}
            transition={{ type: "spring", stiffness: 100, damping:25 }}
        >
        
        <motion.span 
            className="bg-white flex items-center justify-center w-full gap-2 min-w-40 px-4 h-12 border border-slate-400 z-0 rounded-full"
            initial={{ y:10, x:10 }}
            whileHover={{y:0, x:0}}
        >
            {pdflabel} <span className="group-hover:text-slate-300 group-hover:rotate-45 transition ease-linear"><FiArrowUpRight/></span>
        </motion.span>
        </motion.button>
    )
}