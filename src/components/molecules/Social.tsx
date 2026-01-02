"use client"

import { socialList } from "@/utils/Data";
import { motion } from "framer-motion";

export const Social = () => {

    const handleClickPdf = (link: string) => {
        window.open(`${link}`, '_blank');
    }

    return (
        <div className="row-span-1 flex flex-col gap-4 items-start justify-center">
            <ul className="flex gap-4 items-center justify-around">
                {   socialList.map(item =>
                    <li key={item.id}>
                        <motion.button
                            className="rounded-full h-10 w-10 bg-slate-900 dark:bg-slate-50 p-2 flex items-center justify-center"
                            title={item.title}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            onClick={ () => handleClickPdf(item.link) }
                        >
                            <span className="flex items-center justify-center text-slate-50 dark:text-slate-700 text-xl">{item.icon}</span>
                        </motion.button>
                    </li>
                )}
            </ul>
        </div>

    )
}

