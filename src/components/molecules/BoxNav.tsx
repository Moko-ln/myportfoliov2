"use client";

import { montserrat } from "@/font/Fonts";
import { useDictionary } from "@/hooks/useDictionary";
import { useMenu } from "@/hooks/useMenu";
import Link from "next/link";
import { FiXCircle } from "react-icons/fi";

export const BoxNav = () => {

    const context = useMenu();

    const { dictionary } = useDictionary();

    return (
        <>
            {   context?.open && (
                <div className="lg:hidden z-40 flex items-center justify-center bg-white dark:bg-black fixed bottom-0 w-full left-0 h-[50vh] rounded-t-3xl border border-slate-100/20 shadow-2xl shadow-slate-200">

                    <button onClick={() => context?.setOpen(false)} className="absolute top-2 text-2xl text-red-400"><FiXCircle /></button>

                    <ul className="flex flex-col items-center gap-4 w-full">
                        {   dictionary?.navbar?.map( (item:any) =>
                            (
                                <li key={item.id} >
                                    <Link 
                                        className={`${montserrat.className} hover:text-slate-500 text-slate-700 dark:text-slate-200 font-semibold leading-snug text-lg transition ease-in-out duration-75`}
                                        href={`/${item.link}`} 
                                        title={item.title}

                                        onClick={() => context?.setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </>
    )
}