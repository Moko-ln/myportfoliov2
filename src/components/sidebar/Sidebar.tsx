"use client"

import Image from "next/image";
import Right from "../../assets/images/right.jpg";
import { AnimatePresence, motion } from "framer-motion";


export const Sidebar = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="w-2/5 fixed right-0 top-0 min-h-screen right-box"
                initial={{ opacity:0, scale:1.1 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ type:"spring", stiffness:100, damping:50 }}
            >
                <figure className="h-screen w-auto">
                    <Image src={ Right } alt="Right image" style={{width: "100%", height: "100%"}}/>
                </figure>
            </motion.div>
        </AnimatePresence>

    )
}