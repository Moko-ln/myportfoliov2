"use client";

import { montserrat } from "@/font/Fonts";
import { dictWorkPropType } from "@/type";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/atoms/Heading";

type itemProps = {
    key: number;
    data: dictWorkPropType;
};

export const Itemproject = ({ key, data }: itemProps) => {

    const refItem = useRef<HTMLLIElement>(null);
    const { scrollYProgress } = useScroll({
        target: refItem,
        offset: ["start end", "end end"],
    });

    const saturate = useMotionValue(80)

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const filter = useMotionTemplate`saturate(${saturate}%)`

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);


    const router = useRouter();

    const handleClick = (slug: string) => {
        router.push(`projects/${slug}`);
    };

    return (
        <motion.li
            key={key}
            className="h-screen w-full flex items-center justify-center rounded-sm relative"
            ref={refItem}
        >
            {/* Texte animé */}
            <motion.div
                className={`absolute bottom-8 left-8 text-white text-4xl font-black ${montserrat.className}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Heading className="sr-only text-slate-50">{data.nameproject}</Heading> 
            </motion.div>
            {/* Animation d'entrée */}
            <motion.div
                className="cursor-pointer relative overflow-hidden rounded-sm lg:h-[60vh] h-[50vh]"

                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
                style={{ rotate, y, filter, opacity }}
                onClick={() => handleClick(data?.slug)}
            >

                <motion.div
                    className=" h-full w-full"
                    whileHover={{scale:1.045}}
                    whileTap={{scale:1.045}} 
                    transition={{ type: "spring", duration:0.9, ease:"easeInOut" }} 
                >
                   {/* Image avec effet d'ondulation */}
                    <Image
                        src={`/uploads/${data.mainImage}.jpg`}
                        alt={data.nameproject}
                        
                        width={1024}
                        height={1920}

                        quality={75}

                        className="w-full h-full object-contain rounded-sm"
                    /> 
                </motion.div>
                
            </motion.div>
        </motion.li>
    );
};