"use client";

import { montserrat } from "@/font/Fonts";
import { dictWorkPropType } from "@/type";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/atoms/Heading";
import { ScrollDown } from "@/components/atoms/button/Scroll";

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
                className="cursor-pointer relative overflow-hidden rounded-sm h-[60vh]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
                style={{ rotate, y, filter, opacity }}
                onClick={() => handleClick(data?.slug)}

                whileHover={{scale:0.945}}
                whileTap={{scale:1.045}}
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
        </motion.li>
    );
};