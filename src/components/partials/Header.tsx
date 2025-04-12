"use client"

import Link from "next/link";
import {Brand} from "@/components/header/Brand";
import { Navbar } from "../header/Navbar";
import { SwitchLangage } from "../atoms/button/SwitchLangage";
import { Suspense } from "react";
import { Burger } from "../header/Burger";
import { MenuProvider } from "@/context/MenuContext";

export const Header = () => {

    return (
        <MenuProvider>
            <header className="z-20 h-16 flex w-full lg:px-0 px-9 items-center justify-between gap-10 fixed top-0">
                <h1 className="lg:w-[8.25rem] flex items-center justify-center">
                    <Link href="/" className={"w-16 h-16"}>
                        <Brand />
                    </Link>
                </h1>

                <Navbar />

                <div className="flex items-center gap-4">
                    <Burger />
                    <div className="lg:w-[8.25rem] flex items-center justify-center">
                        <Suspense>
                            <SwitchLangage />
                        </Suspense>
                    </div>
                </div>
            </header>
        </MenuProvider>
        
    )
}

