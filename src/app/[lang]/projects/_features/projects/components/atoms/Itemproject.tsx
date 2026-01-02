"use client";

import { dictWorkPropType } from "@/type";
// import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

type itemProps = {
    data: dictWorkPropType;
};

export const Itemproject = ({ data }: itemProps) => {

    const refItem = useRef<any>(null);
    
    const { scrollYProgress } = useScroll({
        target: refItem,
        offset: ["start end", "end end"],
    });

    const saturate = useMotionValue(80)

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const filter = useMotionTemplate`saturate(${saturate}%)`

    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-90, 0, 0]);

    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

    const router = useRouter();

    const handleClick = (slug: string) => {
        router.push(`projects/${slug}`);
    };

    return (
        <motion.div
            key={data.id}
            ref={refItem}
            initial={{
                opacity: 0,
                scaleY: 0.85,
                scaleX: 0.95,
                y: 60,
                transformOrigin: "bottom",
            }}
            whileInView={{
                opacity: 1,
                scaleY: 1,
                scaleX: 1,
                y: 0,
                transformOrigin: "bottom",
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="md:h-[500px] h-96 md:w-96 w-72 overflow-hidden rounded-sm"
        >
            <div
                className="cursor-pointer relative h-full"
                onClick={() => handleClick(data?.slug)}
            >
                <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src={`/uploads/${data.miniature}.png`}
                        alt={data.nameproject}
                        
                        width={1024}
                        height={1920}

                        quality={100}

                        className="w-full h-full object-cover rounded-sm"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};