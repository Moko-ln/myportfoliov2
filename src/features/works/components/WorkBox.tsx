"use client"

import {montserrat, poppins} from "@/font/Fonts";
import Image from "next/image";
import toast from "react-hot-toast";
import {dataWorkPropType, dictWorkPropType} from "@/type";
import Image1 from "@/assets/images/portrait.webp";
import {HireMe} from "@/components/button/HireMe";
import {FiArrowUpRight, FiSettings} from "react-icons/fi";
import {Social} from "@/components/social/Social";
import {motion} from "framer-motion";import useLangage from "@/useLangage";

export const WorkBox = () => {

    const data = useLangage();

    const dataWork: dictWorkPropType | any = data?.dataWork;

    const handleClick = (link: string, done: boolean) => {

        if (!done) return toast('Project not ready!',
            {
                icon: '⚡',
                style: {
                    borderRadius: '50px',
                    background: '#333',
                    color: '#fff',
                },
            }
        )

        window.open(link, "_blank");
    }

    return (
        <article className={`min-h-screen bg-zinc-50 relative pb-20`}>
            {/* Header Infos */}
            <div className="h-20 sticky top-0 bg-zinc-50 z-10 border border-zinc-200">
                <div className="container-root flex items-center justify-center h-full ">
                    <div className="xl:w-9/12 w-9/12 flex items-center">
                        <div className="flex lg:items-center justify-center w-full">
                            <div className="flex lg:items-center gap-4 grow w-2/5">
                                <div className="lg:h-12 lg:w-12 w-8 h-8 relative order-first">
                                    <figure className="lg:h-12 lg:w-12 w-8 h-8 overflow-hidden">
                                        <Image
                                            src={Image1}
                                            width={500}
                                            height={500}
                                            className="h-full w-full object-cover rounded-full"
                                            alt={"avatar"}
                                        />
                                    </figure>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className={`${montserrat.className} lg:text-md text-xs`}>Serge Lema, <span
                                        className="font-semibold">Web Developer</span></p>
                                    <p className="flex gap-2 items-center text-slate-500 text-sm">
                                    <span className="relative flex h-3 w-3">
                                      <span
                                          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-500 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
                                    </span>
                                        Available for work
                                    </p>
                                </div>
                            </div>


                            <div className="w/2/5">
                                <HireMe/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-root pt-10">
                <div className="xl:w-9/12 w-9/12 mx-auto flex flex-col items-center mb-10">
                    <ul className="flex flex-col divide-y divide-slate-200 gap-10">
                        { dataWork?.works.map((item: dataWorkPropType) =>
                            <motion.li
                                key={item.id}
                                className="flex flex-col lg:gap-10 gap-4 items-center justify-center h-full"

                                initial={{ opacity: 0, x: (item.id % 2 === 0 ) ? 20 : -20, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ type: "spring", duration:.5, ease:"easeIn", delay:.2 }}
                            >
                                <div className={`border border-slate-300 shadow-sm shadow-slate-200 rounded-2xl lg:pt-10 pt-0 lg:px-10 px-0 overflow-hidden w-full relative flex justify-center ${item.bgColor}`}>
                                    <Image
                                        src={`/uploads/${item.image}.webp`}
                                        alt={item.title}
                                        width={1440}
                                        height={700}
                                        quality={100}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="lg:w-2/3 w-full">
                                    <p className={`${montserrat.className} lg:text-xl text-lg font-semibold mb-2`}>{item.title}</p>
                                    <p className={`flex flex-col gap-2 text-slate-700 lg:text-md text-sm ${poppins.className}`}>
                                        {item.description}
                                        <span className="block">{item.content}</span>
                                    </p>
                                </div>

                                {item.done ?
                                    <ul className="flex flex-col gap-0 divide-y divide-slate-300 lg:w-2/3 w-full">
                                        {item.share.map(itemShare =>
                                            <li className={`lg:p-4 flex items-center gap-2 relative ${poppins.className} cursor-pointer group`}
                                                onClick={() => handleClick(itemShare.link, item.done)}
                                                key={item.id}
                                            >
                                                <span className="text-slate-700 group-hover:text-slate-500">{itemShare.icon}</span>
                                                <p className="text-sm text-slate-500 flex items-center">{itemShare.title}<span
                                                    className="text-slate-700 absolute right-3 border rounded-full p-1 group-hover:text-slate-500 group-hover:rotate-45 transition ease-in-out"><FiArrowUpRight/></span>
                                                </p>
                                            </li>
                                        )}
                                    </ul>
                                    :
                                    <div className="flex gap-2 items-center justify-between lg:w-2/3 w-full group">
                                        <p className={`${poppins.className} text-slate-500 text-sm`}>This project is not ready</p>
                                        <span className="text-slate-700 text-lg group-hover:animate-spin duration-1000"><FiSettings/></span>
                                    </div>
                                }
                            </motion.li>
                        )}
                    </ul>
                </div>

                <hr className="mb-10"/>

                <div className="flex items-center justify-center">
                    <Social />
                </div>
            </div>
        </article>
    )
}
