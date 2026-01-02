"use client"

import Link from "next/link";
import { Suspense } from "react";
import { Navbar } from "@/components/molecules/Navbar";
import { SwitchLangage } from "@/components/atoms/SwitchLangage";
import { Burger } from "@/components/molecules/Burger";
import { Avatar } from "@/components/atoms/Avatar";

export const Header = () => {

    return (
       
        <header className="z-20 h-16 flex w-full lg:px-0 px-9 items-center justify-between gap-10 fixed top-0">
            <h1 className="lg:w-[8.25rem] flex items-center justify-center">
                <Link href="/">
                    <Avatar size="small" />
                </Link>
            </h1>

            <Navbar />

            <div className="flex items-center justify-end gap-4 md:w-fit w-full">
                <Burger />
                <div className="lg:w-[8.25rem] flex items-center justify-center">
                    <Suspense>
                        <SwitchLangage />
                    </Suspense>
                </div>
            </div>
        </header>
        
    )
}

