"use client";

import { montserrat } from "@/font/Fonts";
import { dictWorkPropType } from "@/type";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Paragraph } from "@/components/atoms/Paragraph";
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

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    const router = useRouter();
    const handleClick = (slug: string) => {
        router.push(`projects/${slug}`);
    };

    return (
        <li
            key={key}
            className="h-screen w-full flex items-center justify-center rounded-sm"
            ref={refItem}
        >
            {/* Animation d'entrée */}
            <motion.div
                className="cursor-pointer relative h-[33rem] w-[55rem] overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type:"spring", stiffness:200, damping:25, duration: 0.6 }}
                style={{ opacity, scale, y }}

                onClick={() => handleClick(data?.slug)}
            >
                {/* Image avec effet d'ondulation */}
                <motion.div className="absolute inset-0" style={{ scale: 1.2 }}>
                    <Image
                        src={`/uploads/${data.mainImage}.webp`}
                        alt={data.nameproject}
                        fill
                        objectFit="cover"
                        quality={75}
                    />
                </motion.div>

                {/* Texte animé */}
                <motion.div
                    className={`absolute bottom-8 left-8 text-white text-4xl font-black ${montserrat.className}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Heading className="text-slate-50">{data.nameproject}</Heading> 
                </motion.div>
            </motion.div>
        </li>
    );
};