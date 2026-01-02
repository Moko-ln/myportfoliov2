"use client";

import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { useDictionary } from "@/hooks/useDictionary";


export const InfosListAbout = () => {

    const { dictionary } = useDictionary();

    return (
        <ul className="flex md:flex-row flex-col items-center justify-between gap-4">
            { dictionary?.about.experiences.map((item: any) => 
                <li key={item.id} className="md:w-1/3 w-full flex md:flex-col flex-row md:gap-0 gap-4 items-center">
                    <Heading typeHeading="h3" className={`mb-0 text-blue-500 dark:text-green-500 font-semibold inset-0`}>
                        {item.xp} 
                    </Heading>
                    <Paragraph size="small" >
                        {item.title}
                    </Paragraph>
                </li>

            )}
        </ul>
    )
}