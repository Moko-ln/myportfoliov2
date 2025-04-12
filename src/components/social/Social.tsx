"use client"

import {motion} from "framer-motion";
import { socialList } from "@/utils/Data";

export const Social = () => {

    const handleClickPdf = (link: string) => {
        window.open(`${link}`, '_blank');
    }

    return (
        <div className="row-span-1 flex flex-col gap-4 items-start justify-center">
            <ul className="flex gap-4 items-center justify-around">
                {socialList.map(item =>
                    <li key={item.id}>
                        <motion.button
                            className="rounded-full h-10 w-10 bg-black p-2 flex items-center justify-center"
                            whileHover={{ scale:1.145 }}
                            whileTap={{ scale:1.145 }}

                            transition={{ type:"spring", duration:.6, ease:"easeIn" }}

                            title={item.title}

                            onClick={ () => handleClickPdf(item.link) }
                        >
                            <span className="flex items-center justify-center text-slate-50 text-xl">{item.icon}</span>
                        </motion.button>
                    </li>
                )}
            </ul>
        </div>

    )
}

