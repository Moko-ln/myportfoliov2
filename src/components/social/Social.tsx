"use client"

import {FaGithub, FaInstagram} from "react-icons/fa";
import {FiLinkedin} from "react-icons/fi";
import {motion} from "framer-motion";
export const Social = () => {

    const handleClickPdf = (link: string) => {
        window.open(`${link}`, '_blank');
    }
    return (
        <div className="row-span-1 flex flex-col gap-4 items-start justify-center">
            <ul className="flex gap-4 items-center justify-around">
                {listSocial.map(item =>
                    <li key={item.id}>
                        <motion.button
                            className="rounded-full h-8 w-8 border border-solid border-slate-400 bg-transparent p-2 flex items-center justify-center"
                            whileHover={{ scale:1.145 }}
                            whileTap={{ scale:1.145 }}

                            transition={{ type:"spring", duration:.6, ease:"easeIn" }}

                            title={item.title}

                            onClick={ () => handleClickPdf(item.link) }
                        >
                            <span className="flex items-center justify-center text-slate-400 text-lg">{item.icon}</span>
                        </motion.button>
                    </li>
                )}
            </ul>
        </div>

    )
}

const listSocial = [
    {
        id: 1,
        title: "Github",
        icon: <FaGithub/>,
        link: "https://github.com/Moko-ln"

    },
    {
        id: 2,
        title: "LinkedIn",
        icon: <FiLinkedin/>,
        link: "https://www.linkedin.com/in/serge-lema-140953206/"

    },
    {
        id: 3,
        title: "Instagram",
        icon: <FaInstagram/>,
        link: "https://www.instagram.com/serges.codes/"

    }
]