"use client"

import Image from "next/image";
import {montserrat, poppins} from "@/font/Fonts";
import Image1 from "@/assets/images/portrait.webp"
import {motion} from "framer-motion";
import { Social } from "../social/Social";
import { FiArrowRight, FiAward } from "react-icons/fi";
import { useDictionary } from "@/hooks/useDictionary";
import { Container } from "../atoms/Container";
import { Article } from "../atoms/Article";

export const Hero = () => {

    const { dictionary } = useDictionary();
    
    return (
        <Article className="pt-52">
            <Container className="flex items-stretch gap-10">
                
                <motion.div
                    className=" w-2/5 grow flex flex-col justify-start z-10 pb-10 gap-10"
                    initial={{ opacity:0, x:100 }}
                    animate={{ opacity: 1, x:0}}
                >
                    <div className={`flex flex-col gap-10 lg:border-none border border-slate-200 rounded-sm p-2`}>
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <motion.h2
                                className={`lg:text-7xl text-4xl font-black tracking-tighter text-slate-900 ${montserrat.className}`}
                                initial={{ opacity: 0, translateY: 15 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: "spring", duration:.6, delay: 0.2, ease:"linear" }}
                            >{dictionary?.hero?.title}<span className="block">{dictionary?.hero.subText}</span>
                            </motion.h2>
                            <motion.p
                                className="text-slate-600 text-xl max-w-xl tracking-tight leading-tight lg:mb-8 mb-4"
                                initial={{ opacity: 0, translateY: 5 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: "spring", duration:.6, delay: 0.3, ease:"linear" }}
                            >
                                { dictionary?.hero.text }
                            </motion.p>

                            <Social />
                        </div>

                        <motion.div
                            className="lg:h-40 lg:w-40 w-32 h-32 relative order-first"
                            initial={{ opacity: 0, scale:.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", duration: 0.5, ease: "linear" }}
                        >
                            <figure className="lg:h-40 lg:w-40 w-32 h-32 overflow-hidden">
                                <Image
                                    src={Image1}
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-cover rounded-full"
                                    alt={"avatar"}
                                />
                            </figure>
                        </motion.div>
                    </div>

                    
                    
                </motion.div>

                <div className="w-2/5 flex items-center">
                    <div className="px-10 z-10 w-full">
                        <p className={`${montserrat.className} mb-4 flex gap-2 items-center text-slate-600 font-medium tracking-tighter lg:text-xl`}> <span className="text-slate-600"><FiAward /></span> Selected Projects</p>
                        <ul className="px-6 flex flex-col gap-0 divide-y divide-slate-300">
                            {dictionary?.projects?.map((item:any) => 
                                <li 
                                    key={item.id} 
                                    className={`cursor-pointer group relative flex items-center justify-start h-16 transition-all duration-300 ease-in-out ${
                                        item.id === dictionary?.projects.length - 1 ? 'border-b border-slate-300' : ''
                                    }`}
                                >
                                    <p className={`${poppins.className} text-slate-700 font-medium tracking-tight transition-colors  duration-300 ease-in-out group-hover:text-slate-500`}>
                                        {item.nameproject}
                                    </p>
                                    
                                    <span className="absolute right-10 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:right-5 transition-all duration-300 ease-in-out">
                                        <FiArrowRight />
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                
                </div>
            
            </Container>
        </Article>
    )
}