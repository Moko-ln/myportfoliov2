"use client"

import { Article } from "@/components/atoms/Article";
import { Avatar } from "@/components/atoms/Avatar";
import { ButtonPdf } from "@/components/atoms/button/ButtonPdf";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { useDictionary } from "@/hooks/useDictionary";
import { motion } from "framer-motion";

export default function Page(){
  const { dictionary } = useDictionary();
  return (
    
    <Article className="lg:pt-52 pt-32">
      <Container className="flex flex-col gap-10 items-center h-full lg:h-[600px]">
          <div className="flex flex-col gap-2 items-center lg:w-1/2 w-11/12">
            <motion.div 
              initial={{ opacity:0, y:25 }}
              animate={{ opacity:1, y:0 }}
              transition={{ type: "spring", stiffness: 100, damping:25 }}
            >
              <Heading className="text-left">{dictionary?.about.title}</Heading>
            </motion.div>

            <motion.div 
              initial={{ opacity:0, y:-25 }}
              animate={{ opacity:1, y:0 }}
              transition={{ type: "spring", stiffness: 100, damping:25 }}

              className="lg:max-w-lg"
            >
              <Paragraph className="text-center text-slate-700" size="small">{dictionary?.about.content}</Paragraph>
            </motion.div>

            <Avatar size="small" className="order-first"/>
          </div>
         
          <ButtonPdf className="lg:mt-4" pdflabel={dictionary?.about.resume.labelbtn} pdflink={dictionary?.about.resume.link} />
          
      </Container>
    </Article>
  )
}