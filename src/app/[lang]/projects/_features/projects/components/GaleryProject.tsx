"use client"

import { Article } from "@/components/atoms/Article"
import { Container } from "@/components/atoms/Container"
import { Heading } from "@/components/atoms/Heading"
import { Paragraph } from "@/components/atoms/Paragraph"
import { galeryProjectPropType } from "@/type"
import { motion } from "framer-motion"
import Image from "next/image"
import { FiCheckCircle } from "react-icons/fi"


export const GaleryProject = ({title, design, medias, nameproject, customization }: galeryProjectPropType) => {

    return (
        <Article className="min-h-screen relative flex flex-col gap-10">
            <Container className="flex flex-col items-center gap-10 m-auto">
                <div className="flex flex-col items-center justify-center max-w-4xl gap-4">
                    <Heading className="text-center">{title}</Heading>
                    <Paragraph className="text-center">{design}</Paragraph>
                </div>
                <ul className="flex flex-col md:gap-16 gap-12">
                    { medias?.map((item:string, index:number) => 
                        <li key={index+1}>
                            <motion.div
                                initial={{ opacity: 1, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.0 }}
                                transition={{type:"spring", stiffness:150, damping:30, ease: "easeOut" }}
                                className="relative lg:h-[33rem] lg:w-[53rem] md:w-[40rem] md:h-[23rem] h-[15rem] w-[22rem] rounded-sm">
                                <Image
                                    src={`/uploads/${item}.webp`} 
                                    alt={nameproject}
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
                        {customization?.map((item:string, index:number) =>
                            <li className="py-4" key={index+1}>
                                <Paragraph className="flex items-center gap-2">
                                    <span className="text-sm text-slate-500"><FiCheckCircle /></span>
                                    {item}
                                </Paragraph>
                            </li>
                        )}
                    </ul>
                </div>
            </Container>
        </Article> 
    )
}