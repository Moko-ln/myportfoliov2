"use client"

import {montserrat} from "@/font/Fonts";
import { Lists } from "@/components/mentions/Lists";
import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { useDictionary } from "@/context/DictionaryProvider";

export default function Mentions() {

    const isEnterpriseProject = false;

    const { dictionary } = useDictionary();

    return (
        <Article className="min-h-screen lg:pt-52 pt-32 pb-20">
            <Container className="flex items-center justify-center">
                <div className={`xl:w-6/12 lg:w-9/12 gap-10 flex flex-col`}>
                    <h2 className={`font-bold text-2xl ${montserrat.className} underline`}>{dictionary?.termsofuse.title}</h2>

                    <ul className="flex flex-col gap-8">
                        <li className="flex flex-col gap-2">
                            <h3 className="text-lg font-medium">{dictionary?.termsofuse.introduction[0]}</h3>
                            <p className="text-slate-500 text-sm">{dictionary?.termsofuse.introduction[1]}</p>
                            {isEnterpriseProject &&
                                <div className="my-4 border border-slate-200 rounded-sm p-2 text-slate-700">
                                    Lemiza, SAS, ( société par actions simplifiée ), dont le siège social se situe au 1
                                    RUE DE GRENOBLE 94140 ALFORTVILLE, identifiée sous le numéro RCS 948 295 498
                                </div>

                            }
                            <ul className="flex flex-col gap-2">
                                <li className="text-sm text-slate-700 ">{dictionary?.termsofuse.creator[0]} :<span className="font-semibold">{dictionary?.termsofuse.manager[1]}</span>
                                </li>
                                <li className="text-sm text-slate-700 ">{dictionary?.termsofuse.manager[0]} :<span className="font-semibold">{dictionary?.termsofuse.manager[1]}</span></li>
                                <li className="text-sm text-slate-700 ">{dictionary?.termsofuse.webmaster[0]} :<span className="font-semibold">{dictionary?.termsofuse.manager[1]}</span></li>
                                <li className="text-sm text-slate-700 ">{dictionary?.termsofuse.host[0]} :<span className="font-semibold">{dictionary?.termsofuse.host[1]}</span></li>
                            </ul>
                        </li>

                        <Lists />
                    
                    </ul>
                </div>
            </Container>
        </Article>

    );
}