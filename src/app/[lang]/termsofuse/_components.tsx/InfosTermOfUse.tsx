"use client";

import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { ListsOfTerms } from "@/components/molecules/ListsOfTerms";
import { useDictionary } from "@/hooks/useDictionary";

export const InfosTermOfUse = () => {

    const isEnterpriseProject = false;
    
    const { dictionary } = useDictionary();

    return (
        <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-2">
                <Heading typeHeading="h3" size="small">{dictionary?.termsofuse.introduction[0]}</Heading>
                <Paragraph>{dictionary?.termsofuse.introduction[1]}</Paragraph>
                {isEnterpriseProject &&
                <Paragraph className="my-4 border border-slate-200 rounded-sm p-2 text-slate-700">
                    Moko, (Auto-entreprise), dont le siège social se situe au 1
                    Paris 75, identifiée sous le numéro RCS *** *** **9
                </Paragraph>

                }
                <hr className="border-slate-200/20 my-4"/>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Paragraph size="small">
                            {dictionary?.termsofuse.creator[0]} :
                            <span className="font-semibold"> {dictionary?.termsofuse.manager[1]}</span>
                        </Paragraph>
                        
                    </li>
                    <li>
                        <Paragraph size="small">
                            {dictionary?.termsofuse.manager[0]} :
                            <span className="font-semibold"> {dictionary?.termsofuse.manager[0]}</span>
                        </Paragraph>
                        
                    </li>
                    <li>
                        <Paragraph size="small">
                            {dictionary?.termsofuse.webmaster[0]} :
                            <span className="font-semibold"> {dictionary?.termsofuse.webmaster[0]}</span>
                        </Paragraph>
                        
                    </li>
                    <li>
                        <Paragraph size="small">
                            {dictionary?.termsofuse.host[0]} :
                            <span className="font-semibold"> {dictionary?.termsofuse.host[0]}</span>
                        </Paragraph>
                        
                    </li>
                </ul>
            </li>

            <ListsOfTerms />
        
        </ul>
    )
}