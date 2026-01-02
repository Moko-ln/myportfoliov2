"use client";

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { FormCustom } from "@/components/organisms/FormCustom";
import { Title } from "../../../components/atoms/Title";
import { FadeIn } from "@/components/atoms/FadeIn";
import { motion } from "framer-motion";

export default function Page(){

  return (
    <Article className="h-screen flex items-center">
      <Container className="flex justify-center m-auto">
        <div className="md:w-[700px] w-full relative flex flex-col md:gap-10 gap-4">
          <FadeIn>
            <Title type="contactme"/>
          </FadeIn>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            <FormCustom />     
          </motion.div>
          
        </div>
      </Container>
    </Article>
  )
}