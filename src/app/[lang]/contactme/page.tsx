"use client"

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { FormCustom } from "@/components/organisms/FormCustom";
import { montserrat } from "@/font/Fonts";
import { useDictionary } from "@/hooks/useDictionary";
import { motion } from "framer-motion";

export default function Page(){
  const { dictionary } = useDictionary();

  return (
    <Article className="lg:pt-52 pt-40">
      <Container className="flex justify-center">
        <div className="max-w-xl relative h-full">
          <div className="flex flex-col gap-4 items-left ">
            <motion.div 
              initial={{ y:5 }}
              animate={{ y:0 }}
              transition={{ type: "spring", stiffness: 100, damping:25 }}
            >
              <motion.h2 className={`lg:text-8xl text-5xl font-black ${montserrat.className}`}>
                {dictionary?.contactme.title}
              </motion.h2>
            </motion.div>

            <FormCustom labelbtn={dictionary?.contactme.labelbtn}/>
          </div>      
        </div>
      </Container>
    </Article>
  )
}