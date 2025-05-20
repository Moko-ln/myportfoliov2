"use client"

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { useDictionary } from "@/context/DictionaryProvider";
import Image from "next/image";

import NotfoundImage from "@/assets/images/notfound.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {

    const { dictionary } = useDictionary();

    return (
        <Article>
            <Container className="flex flex-col items-center justify-center h-screen relative">
                <div className="absolute top-4 left-0 flex items-center gap-4">
                    <h2 className="text-center text-slate-500 text-sm">
                        {dictionary?.notfound.title}
                    </h2>
                    <span className="block h-1 w-1 bg-slate-700 rounded-full"></span>
                    <Link href="/" title={dictionary?.notfound.title} className="text-slate-700 hover:text-slate-500 transition-all ease-in-out" >{dictionary?.notfound.link}</Link>
                </div>
                

                <div className="lg:h-[60vh] h-[50vh] overflow-hidden relatives rounded-sm">
                    <motion.div
                        className="h-full w-full"
                        whileHover={{scale:1.045}}
                        whileTap={{scale:1.045}} 
                        transition={{ type: "spring", duration:.9, ease:"easeInOut" }} 
                    >
                        <Link href="/">
                            <Image 
                                alt={dictionary?.notfound.title} 
                                src={ NotfoundImage } 
                                width={1024}
                                height={1920}

                                quality={75}

                                className="w-full h-full object-contain rounded-sm"
                            />
                        </Link>
                    </motion.div>
                    
                </div>
                
                
                
            </Container>
        </Article>
        
    )
}