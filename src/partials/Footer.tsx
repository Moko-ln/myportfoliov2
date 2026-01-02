"use client";

import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";
import { Paragraph } from "@/components/atoms/Paragraph";

export const Footer = () => {

    const { dictionary } = useDictionary();

    return (
        <footer className="md:flex hidden z-10 py-2 items-center w-fit fixed left-0 bottom-32 -rotate-90 ">
                <ul className="flex items-center text-slate-500 text-sm divide-x divide-slate-500">
                    <li className="pl-2 pr-4">
                        <Paragraph size="small">© 2025 Moko</Paragraph>
                    </li>
                    <li className="px-4">
                        {dictionary && 
                            <Link href={"/termsofuse"} className="hover:text-blue-500 dark:hover:text-green-500 ease-linear transition text-slate-700 dark:text-slate-200"
                            >{dictionary && dictionary?.footer.legal }
                            </Link>
                        }
                    </li>
                </ul>
        </footer>
    )
}