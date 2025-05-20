"use client"

import { Article } from "@/components/atoms/Article"
import { Container } from "@/components/atoms/Container"
import { Paragraph } from "@/components/atoms/Paragraph"
import { useDictionary } from "@/context/DictionaryProvider"
import { montserrat } from "@/font/Fonts"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

export default function Error ({
    error,
    reset,
}:{
    error: Error & { digest?: string}
    reset: () => void
}) {

    const { dictionary } = useDictionary();

    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <Article>
            <Container className="h-screen flex items-center justify-center relative">
                <div className="max-w-xl">
                    <motion.h2 className={`lg:text-7xl text-5xl font-black mb-4 ${montserrat.className}`}>
                    {dictionary?.errorpage.title}
                    </motion.h2>
                    <Paragraph size="small" className="max-w-md">{ dictionary?.errorpage.subTitle}</Paragraph>
                </div>

                <div className="absolute top-4 left-0 flex items-center gap-4">
                    <p className="text-center text-slate-500 text-sm">
                        {dictionary?.errorpage.page}
                    </p>
                    <span className="block h-1 w-1 bg-slate-700 rounded-full"></span>
                    <button 
                        className="text-slate-700 hover:text-slate-500 transition-all ease-in-out"
                        onClick={ () => reset()}    
                    >{ dictionary?.errorpage.link}</button>
                </div>
                
            </Container>
        </Article>
    )
}