"use client"

import {Hero} from "@/components/home/Hero";
import {WorkBox} from "@/features/works/components/WorkBox";;
import {motion} from "framer-motion";
import { ReactLenis } from 'lenis/react';

export default function Home() {

    return (
            <ReactLenis root>
            <motion.section
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{type: "spring", duration: .6, ease: "linear"}}
            >
                <span className="fixed top-20 right-96 w-52 h-52 rounded-full bg-blue-500 block blur-3xl animate-pulse"></span>
                <Hero/>
                <WorkBox/>
            </motion.section>
        </ReactLenis>

    );
}
