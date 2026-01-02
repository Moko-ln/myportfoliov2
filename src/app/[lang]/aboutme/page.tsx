"use client"

import { Article } from "@/components/atoms/Article";
import { Avatar } from "@/components/atoms/Avatar";
import { ButtonPdf } from "@/components/atoms/ButtonPdf";
import { Container } from "@/components/atoms/Container";
import { Title } from "@/components/atoms/Title";
import { Social } from "@/components/molecules/Social";
import { InfosListAbout } from "./_components/InfosListAbout";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/atoms/FadeIn";

export default function Page(){
  
  return (
    <Article className="flex items-center justify-center h-screen">
      <Container className="flex md:flex-row flex-col md:items-center md:pt-0 pt-24 justify-center relative">
          <FadeIn className="md:w-[600px] flex flex-col gap-10">
            <Title type="about"/>
            <InfosListAbout />
            <Social />
            <ButtonPdf className="lg:mt-4" />
          </FadeIn>
        <div className="md:w-96 flex md:items-center md:mb-0 mb-10 md:justify-center md:order-last order-first">
          <Avatar />
        </div>
      </Container> 
    </Article>
  )
}

