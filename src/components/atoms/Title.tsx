"use client";

import { Heading } from "@/components/atoms/Heading";
import { motion } from "framer-motion";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";

export const Title = ({ type }:{ type:string }) => {

    const { dictionary } = useDictionary();
    
    return (
        <div className="flex flex-col">
            <Heading>
              {dictionary?.[type]?.title}
            </Heading>
            
            { dictionary?.[type]?.content && 
              <Paragraph className="max-w-2xl">{dictionary?.[type]?.content}</Paragraph>
            }
            { dictionary?.[type]?.subtitle && 
              <Paragraph size="small" className="max-w-md">{ dictionary?.[type].subTitle}</Paragraph>
            }
            { type === "notfound" && <Link href={"/"} className={`text-sm text-slate-700 dark:text-slate-200`}>{dictionary?.[type].link}</Link>}
            { type === "notfound" && <span className={`text-2xl font-black text-blue-500 dark:text-green-500 order-first`}>/404</span>}
            {type === "playground" && <span className={`text-sm text-blue-500 dark:text-green-500 order-first`}>{dictionary?.message?.error}</span>}
          </div>
    )
}