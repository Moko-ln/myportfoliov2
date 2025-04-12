"use client"

import { bannerType } from "@/type"
import { motion } from "framer-motion"
import Image from "next/image"


export const Banner = ({ className, url, alt } : bannerType) => {
    
    return (
        <motion.div 
            className={`${className} bg-red-200 h-screen sticky top-0 w-full flex items-center justify-center`}
        >
            <figure>
                <Image 
                    src={url ? url : `/uploads/${url}.webp`}
                    alt={alt ?? "Default Image"}
                />
            </figure>
        </motion.div>
    )
}