"use client";

import { motion } from "framer-motion";
import { Ping } from "./Ping";

export const Loader = () => {

    return (
        <motion.div 
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type:"spring", stiffness: 100, damping: 20 }}    
        >
            <Ping />
        </motion.div>
        
    )
}