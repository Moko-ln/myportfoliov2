import {montserrat} from "@/font/Fonts";
import {FiArrowUpRight} from "react-icons/fi";
import {Social} from "@/components/social/Social";
import {motion} from "framer-motion";
import {HireMe} from "@/components/button/HireMe";

export const AboutBox = () => {
    const handleClickPdf = () => {
        window.open('/resume.pdf', '_blank');
    }
    return (
        <div id="section1" className={`flex flex-col gap-8`}>
            <div className="">
                <motion.h3 className={`xl:text-2xl text-xl font-semibold lg:text-slate-800 text-slate-700 mb-4 ${montserrat.className}`}>
                    About me
                </motion.h3>
                <motion.p className="text-slate-500 text-md mb-2">
                    I can craft a complete website from scratch, specializing in HTML, CSS,
                    and JavaScript. I handle everything from planning to launch.
                </motion.p>
            </div>

            <div className="flex items-center gap-8">
                <HireMe />
                <button
                    className="flex items-center gap-2 text-slate-800"
                    onClick={ handleClickPdf }
                >My resume <span><FiArrowUpRight/></span></button>
            </div>

            <ul className="text-slate-500 text-sm flex gap-4">
                {
                    langages.map((item,index) =>
                        <li className="text-slate-500 border border-slate-200 rounded-full p-2 text-xs" key={index+1}>{item}</li>
                    )
                }
            </ul>

            <div className="border border-slate-300 p-4 rounded-lg lg:w-72 w-full flex flex-col items-center lg:items-start justify-center">
                <p className={`${montserrat.className} text-xl font-semibold mb-4 text-slate-700`}>Follow me</p>
                <Social/>
            </div>
        </div>
    )
}

const langages: string[] = ["NextJs", "ReactJs", "TypeScript", "TailWindCSS"]