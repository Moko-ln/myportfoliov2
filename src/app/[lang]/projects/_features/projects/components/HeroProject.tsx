"use client";

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import Image from "next/image";
import { WatchProject } from "./atoms/WatchProject";
import { Paragraph } from "@/components/atoms/Paragraph";
import { FadeIn } from "@/components/atoms/FadeIn";
import { motion } from "framer-motion";

interface heroProjectType {
    projectName:string;
    stacks:string[];
    content:string;
    mainImage:string;
    website:string;
}

export const HeroProject = ({ projectName, stacks, content, mainImage, website }:heroProjectType) => {

    return (
        <Article className="h-[78vh] relative md:pt-52 pt-32" scale={false}>
            <Container className="m-auto flex justify-end">
                <motion.div 
                    className="relative z-10 md:w-[550px] w-full h-fit md:pl-20 flex flex-col gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}    
                    
                >
                    <FadeIn className="flex flex-col">
                        <Heading size="large" className="text-slate-50">{projectName}</Heading>
                    </FadeIn>
                    <div className="flex items-center">
                        <ul className="flex items-center gap-0 divide-x divide-slate-200"   
                        >
                            {stacks?.map( (item:string, index:number) => 
                                <li className={`${(index+1) === 1 ? "pl-0 pr-3" : "px-3"} text-slate-300 text-sm`} key={index+1}>
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>

                    <Paragraph className="text-slate-200">{content}</Paragraph>
                    { website && 
                        <WatchProject 
                            link={website}
                            color="light"
                        />
                    }
                </motion.div>
            </Container>
                    
            <div className="h-full w-full absolute top-0 left-0">
                <Image 
                    src={`/uploads/${mainImage}.webp`}
                    fill
                    quality={100}
                    alt={projectName}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black to-transparant"/>
            </div>

            <div className="bg-gradient-to-b from-transparent to-white dark:to-black absolute bottom-0 left-0 w-full dark:h-72 h-2"/>
        </Article>
    )
}