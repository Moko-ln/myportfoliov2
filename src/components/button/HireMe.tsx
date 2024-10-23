import React from 'react';
import {motion} from "framer-motion";
import {FiSend} from "react-icons/fi";

export const HireMe = () => {

    const email: string = "sergelema.web@gmail.com";

    const handleClickHireMe = () => {
        window.location.href = `mailto:${email}`;
    }


    return (
        <motion.button
            className="w-10 h-10 text-slate-50 rounded-full bg-slate-950 flex items-center justify-center"
            onClick={handleClickHireMe}

            whileHover={{scale: 1.035}}
            whileTap={{scale: .945}}
            title="Hire Me"
        ><FiSend /></motion.button>
    )
}