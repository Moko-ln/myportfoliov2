"use client"

import {montserrat} from "@/font/Fonts";
import toast from "react-hot-toast";
import {motion} from "framer-motion";import useLangage from "@/hooks/useLangage";

export const Works = () => {

    const handleClick = (link: string, done: boolean) => {

        if (!done) return toast('Project not ready!',
            {
                icon: '⚡',
                style: {
                    borderRadius: '50px',
                    background: '#333',
                    color: '#fff',
                },
            }
        )

        window.open(link, "_blank");
    }

    return (
        <article className={`h-screen relative pb-20 flex flex-col items-center justify-center`}>
            {/* Header Infos */}
            <div className="container-root">
                <motion.h2
                    className={`lg:text-3xl text-xl font-black tracking-tighter text-slate-800  ${montserrat.className}`}
                    initial={{ opacity: 0, translateY: 15 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "spring", duration:.6, delay: 0.2, ease:"linear" }}
                >Take a Look at Some of the Most Recent Projects and Brands I’ve Worked With
                </motion.h2>
                <div className={`bg-slate-200 rounded-xl h-[30rem]`}>

            </div>
            </div>
        </article>
    )
}
