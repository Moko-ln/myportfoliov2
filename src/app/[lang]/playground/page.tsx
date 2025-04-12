"use client"

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { montserrat, poppins } from "@/font/Fonts";
import { useDictionary } from "@/hooks/useDictionary";
import { motion } from "framer-motion";

export default function Playground() {
    const { dictionary }  = useDictionary();

    return (
        <Article className="flex items-center justify-center">
            <Container className="flex items-center justify-center">
                <div className="max-w-xl">
                    <motion.h2 className={`lg:text-8xl text-7xl font-black ${montserrat.className}`}>
                        <span className="block">{dictionary?.playground.title[0]}</span>
                        {dictionary?.playground.title[1]}
                    </motion.h2>
                    <p className={`text-base text-slate-500 ${poppins.className}`}>
                        {dictionary?.playground.text}
                    </p>
                </div>
            </Container>
        </Article>
    )
}