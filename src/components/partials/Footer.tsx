"use client"
import Link from "next/link";
import { Container } from "../atoms/Container";

import { useDictionary } from "@/hooks/useDictionary";
export const Footer = () => {

    const { dictionary } = useDictionary();


    return (
        <footer className="z-10 max-h-16 py-2 flex items-center w-full fixed bottom-0">
            <Container>
                <ul className="flex items-center text-slate-500 text-sm divide-x divide-slate-500">
                    <li className="pl-2 pr-4">
                        <p>©2025 Moko</p>
                    </li>
                    <li className="px-4">
                        {dictionary && 
                            <Link href={"/termsofuse"} className="hover:text-slate-500 ease-linear transition"
                            >{dictionary && dictionary?.footer.legal }
                            </Link>
                        }
                    </li>
                </ul>
            </Container>
        </footer>
    )
}