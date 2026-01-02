"use client"

import { Article } from "@/components/atoms/Article";
import { Avatar } from "@/components/atoms/Avatar";
import { ButtonPdf } from "@/components/atoms/ButtonPdf";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { useDictionary } from "@/hooks/useDictionary";

export const About = () => {
    const { dictionary } = useDictionary();
    
    return (
        <Article className="flex lg:pt-52 pt-24 justify-center">
            <Container className="flex justify-center">
                <div className="max-w-2xl flex flex-col gap-2 items-center">
                    <Heading className="text-center">{dictionary?.about.title}</Heading>
                    <Paragraph className="mdmax-w-xl text-center text-slate-700" size="small">{dictionary?.about.content}</Paragraph>
                    
                    <ButtonPdf className="lg:mt-4" />
                    <Avatar className="order-first" size="medium" />
                </div>
            </Container>
        </Article>
    )
}