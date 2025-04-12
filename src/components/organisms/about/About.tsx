"use client"

import { Article } from "@/components/atoms/Article";
import { Avatar } from "@/components/atoms/Avatar";
import { ButtonPdf } from "@/components/atoms/button/ButtonPdf";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { useDictionary } from "@/hooks/useDictionary";
import { motion } from "framer-motion";

export const About = () => {
    const { dictionary } = useDictionary();
    
    return (
        <Article className="flex lg:pt-52 pt-24 justify-center">
            <Container className="flex justify-center">
                <div className="max-w-2xl flex flex-col gap-2 items-center">
                    <motion.div 
                        initial={{ y:5 }}
                        animate={{ y:0 }}
                        transition={{ type: "spring", stiffness: 100, damping:25 }}
                    >
                        <Heading className="text-center">{dictionary?.about.title}</Heading>
                    </motion.div>

                    <motion.div 
                        initial={{ y:-5 }}
                        animate={{ y:0 }}
                        transition={{ type: "spring", stiffness: 100, damping:25 }}

                        className="lg:max-w-lg"
                    >
                        <Paragraph className="text-center text-slate-700" size="small">{dictionary?.about.content}</Paragraph>
                    </motion.div>
                    
                    <ButtonPdf className="lg:mt-4" pdflabel={dictionary?.about.resume.labelbtn} pdflink={dictionary?.about.resume.link} />
                    <Avatar className="order-first" size="medium" />
                </div>
            </Container>
        </Article>
    )
}