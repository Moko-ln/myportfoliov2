"use client";

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { Overlay } from "@/components/atoms/Overlay";
import { WatchProject } from "@/features/works/components/atoms/WatchProject";
import { montserrat, poppins } from "@/font/Fonts";
import { useDictionary } from "@/hooks/useDictionary";
import { dictWorkPropType } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";
import { useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const { dictionary } = useDictionary();

    const data = dictionary?.projects.find((item:dictWorkPropType) => item.slug === slug );
    
    const currentIndex = dictionary?.projects.findIndex((item: dictWorkPropType) => item.slug === slug);
    
    const nextProject = currentIndex !== undefined && currentIndex < dictionary?.projects.length - 1
    ? dictionary?.projects[currentIndex + 1]
    : null;

    const router = useRouter();

    const handleClick = (slug:string) => {
        if (!nextProject) return router.push("/")
        
        router.push(`/projects/${slug}`)
    }

    // Scroll to top when the component mounts
    useEffect(() => {
       window.scrollTo(0, 0);
    }, [slug]);

    return (
        <Article className="flex flex-col lg:gap-20" scale={false}>
            <Container className="lg:h-[80vh] h-screen relative">
                <div className="absolute z-10 lg:top-32 top-96 left-0 lg:w-1/2 h-1/2 lg:pl-20 flex flex-col gap-4">
                    <div className="flex flex-col">
                        <motion.h2 
                            className={`${montserrat.className}  lg:text-7xl text-4xl font-black text-slate-50`}
                            initial={{ y:25 }}
                            animate={{ y:0 }}
                            transition={{ type: "spring", stiffness: 50, damping:10 }}    
                        >{data?.nameproject}</motion.h2>
                    </div>
                    <div className="flex items-center">
                        <motion.ul className="flex items-center gap-0 divide-x divide-slate-300"
                            initial={{ opacity:0 }}
                            animate={{ opacity:1 }}

                            transition={{ type: "spring", duration: .5, ease:"easeIn" }}    
                        >
                            {data?.stack?.map( (item:string, index:number) => 
                                <li className={`${(index+1) === 1 ? "pl-0 pr-3" : "px-3"} text-slate-300 text-sm`} key={index+1}>{item}</li>
                            )}
                        </motion.ul>
                    </div>
                    
                    <motion.p 
                        className={`${poppins.className} text-slate-200 text-sm max-w-96`}
                        initial={{ opacity:0, y:-25 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ type: "spring", stiffness: 50, damping:10 }}
                    >{data?.content}</motion.p>
                    { data?.website && 
                        <WatchProject 
                            link={data?.website}
                            color="light"
                            label={dictionary?.button.work}
                        />
                    }
                </div>

                <div className="w-full lg:h-[80vh] h-screen relative">
                    <Image 
                        src={`/uploads/${data?.mainImage}.webp`}
                        fill
                        quality={100}
                        alt={data?.nameproject}
                        className="w-full h-full object-cover"
                    />
                    <Overlay className="bg-gradient-to-r from-70% left-0 top-0"/>
                </div>
            </Container>
            
            <Container className="min-h-screen flex flex-col items-center gap-10 py-20">
                <div className="flex flex-col items-center justify-center max-w-4xl gap-4">
                    <p className={`${montserrat.className} text-center lg:text-7xl text-4xl font-black text-slate-900`}>{data?.title}</p>
                    <p className={`${poppins.className} text-base text-slate-700 text-center max-w-2xl`}>{data?.design}</p>
                </div>
                <ul className="flex flex-col gap-10">
                    { data?.medias?.map((item:string, index:number) => 
                        <li key={index+1}>
                            <motion.div className="relative lg:h-[33rem] lg:w-[53rem] md:w-[40rem] md:h-[23rem] h-[15rem] w-[22rem] rounded-sm">
                                <Image
                                    src={`/uploads/${item}.webp`} 
                                    alt={data?.nameproject}
                                    fill
                                
                                    quality={100}

                                    className="w-full h-full lg:object-cover object-cover"
                                />
                            </motion.div>  
                        </li>
                    )}
                </ul>
            </Container>

            <Container className="h-auto lg:w-9/12 mx-auto flex flex-col gap-4 pb-20">
                <div className="flex flex-col gap-8 lg:w-9/12 w-full lg:mx-auto mb-10">
                    <ul className="lg:pl-14 flex flex-col divide-y divide-slate-300">
                        {data?.customization?.map((item:string, index:number) =>
                            <li className="py-4" key={index+1}>
                                <p className={`${poppins.className} flex gap-2 items-center text-slate-700 text-base`}>
                                    <span className="text-sm text-slate-500"><FiCheckCircle />                                </span>{item}
                                </p>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex items-center gap-8">
                    <span className="border-t border-slate-400 w-1/3 grow"></span>
                    <span className="w-14 h-14 rounded-full bg-black flex items-center justify-center"></span>
                    <span className="border-t border-slate-400 w-1/3 grow"></span>
                </div>

            </Container>

            { nextProject && 
                <Container className="relative overflow-hidden">
                    <motion.div 
                        className="cursor-pointer w-full h-[80vh] relative"
                        whileHover={{ scale: 1.05 }} // Légère augmentation au survol
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        onClick={() => handleClick(nextProject?.slug)}
                    >
                        <p className={`${montserrat.className} absolute text-center transform top-1/2 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2 lg:text-4xl text-2xl font-black text-slate-50 pointer-events-none`}>
                            {nextProject?.nameproject}
                        </p>

                        <motion.div 
                            className="w-full h-full relative"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Image 
                                src={`/uploads/${nextProject?.mainImage}.webp`}
                                fill
                                alt={nextProject?.nameproject}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        
                        <Overlay className="bg-gradient-to-r from-70% left-0 top-0"/>
                    
                    </motion.div>
                </Container>
            }
        </Article>
    );
}