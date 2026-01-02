"use client";

import { useDictionary } from "@/hooks/useDictionary";
import { Heading } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";

export const ListsOfTerms = () => {

    const { dictionary } = useDictionary();

    return (
        <>
            {
                dictionary?.termsofuse.lists.map((item:any) =>
                    <li key={item.id}>
                        <Heading typeHeading="h3" size="small">{item.title}</Heading>
                        <Paragraph>{item.content}</Paragraph>
                    </li>
                )   
            } 
        </>
        
    )
}