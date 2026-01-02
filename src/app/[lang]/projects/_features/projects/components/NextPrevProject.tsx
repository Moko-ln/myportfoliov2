"use client";

import { Article } from "@/components/atoms/Article";
import { Heading } from "@/components/atoms/Heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useProjects } from "../../../_hooks/allProjects";

export const NextPrevProject = () => {

    const params = useParams();
    const allProjects = useProjects();
    const router = useRouter();

    const slug = params?.slug;

    if (!allProjects || !slug) {
        return null;
    }

    const index = allProjects.findIndex((p:any) => p.slug === slug);

    if (index === -1) return null;

    // const prev = index > 0 ? allProjects[index - 1] : null;
    const next = index < allProjects.length - 1 ? allProjects[index + 1] : null;

    const handleClick = (slug: string) => {
        window.location.href = `/${params?.lang}/projects/${slug}`;
    };

    return (
        <>
            { next && 
                <Article className="relative overflow-hidden">
                    <div 
                        className="cursor-pointer w-full h-[78vh] relative"
                        onClick={() => handleClick(next.slug)}
                    >
                        <Heading typeHeading="h3" className={`absolute text-center transform top-1/2 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2 lg:text-4xl text-2xl font-black text-slate-50 pointer-events-none`}>
                            {next.nameproject}
                        </Heading>

                        <motion.div 
                            className="w-full h-full relative"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Image 
                                src={`/uploads/${next.mainImage}.webp`}
                                fill
                                alt={next.nameproject}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        
                        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparant"/>
                    
                    </div>
                </Article>
            }
        </>
        
    )
}