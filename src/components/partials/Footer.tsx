"use client"

import Link from "next/link";
import {FiChevronUp} from "react-icons/fi";

export const Footer = () => {

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <footer className="py-2 z-10 relative w-full bg-white">
            <div className="container-root">
                <div className="wrapper flex items-center justify-between gap-2">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 text-sm">© 2024 Moko</p>
                    </div>

                    <div>
                        <Link href={`/${infos.link}`} title={infos.title} className="text-slate-500 text-sm">
                            {infos.title}
                        </Link>
                    </div>

                    <button
                        className="absolute flex items-center justify-center border bottom-0 rounded-t-full w-16 h-8 z-20 transform left-1/2 -translate-x-1/2"
                        onClick={ () => handleScrollUp() }
                    >
                        <span className="text-slate-700 text-lg"><FiChevronUp /></span>
                    </button>
                </div>
            </div>
        </footer>
    )
}

const infos = {
    title: "Mentions legales",
    link: "mentionslegales",
}
