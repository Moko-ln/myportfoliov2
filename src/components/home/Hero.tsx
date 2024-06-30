"use client"

import Image from "next/image";
import {AboutBox} from "@/components/about/AboutBox";
import {ExperienceBox} from "@/features/experiences/components/ExperienceBox";
import {montserrat} from "@/font/Fonts";
import Image1 from "@/assets/images/portrait.webp"
import {compPropType} from "@/type";
import {motion} from "framer-motion";

export const Hero = () => {
    return (
        <article className="min-h-screen flex justify-center">
            <div className="container-root w-full overflow-hidden">
                <div className="xl:w-9/12 w-9/12 gap-10 flex flex-wrap mx-auto">
                    <motion.div
                        className="xl:order-last order-first grow xl:fixed xl:top-0 xl:right-0 xl:min-h-screen xl:w-[650px] w-full flex flex-col items-start gap-10 xl:pt-20 justify-center overflow-hidden"
                        initial={{ opacity:0, x:100 }}
                        animate={{ opacity: 1, x:0}}
                    >
                        <div className={`lg:w-9/12 w-full flex flex-col gap-10 xl:min-h-screen lg:border-none border border-slate-200 rounded-sm p-2`}>
                            <div className="w-full">
                                <motion.h2
                                    className={`lg:text-6xl text-5xl font-black tracking-widest text-slate-800 lg:mb-10 mb-8 ${montserrat.className}`}
                                    initial={{ opacity: 0, translateY: 15 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ type: "spring", duration:.6, delay: 0.2, ease:"linear" }}
                                >Hi! I&lsquo;am <span className="block">Serge Lema</span>
                                </motion.h2>
                                <motion.p
                                    className="text-slate-500 text-lg max-w-[450px]"
                                    initial={{ opacity: 0, translateY: 5 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ type: "spring", duration:.6, delay: 0.3, ease:"linear" }}
                                >
                                    A Front-End developer based in France 🇫🇷. I&lsquo;m passionnate on build things for the web
                                </motion.p>
                            </div>
                        </div>

                        <motion.div
                            className="lg:h-52 lg:w-52 w-32 h-32 relative order-first"
                            initial={{ opacity: 0, scale:.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", duration: 0.5, ease: "linear" }}
                        >
                            <figure className="lg:h-52 lg:w-52 w-32 h-32 overflow-hidden ">
                                <Image
                                    src={Image1}
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-cover rounded-full"
                                    alt={"avatar"}
                                />
                            </figure>
                        </motion.div>
                    </motion.div>

                    <div className={`xl:w-6/12 relative flex flex-col gap-8`}>
                        <ul className="flex flex-col divide-y divide-slate-200">
                            { comps.map(item =>
                                <li key={item.id} className={`py-8`}>{item.comp}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}


const comps : compPropType[] = [
    {
        id:1,
        comp:<AboutBox />
    },
    {
        id:2,
        comp:<ExperienceBox />
    }
]