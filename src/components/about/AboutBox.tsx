import {montserrat} from "@/font/Fonts";
import {FiArrowUpRight} from "react-icons/fi";
import {Social} from "@/components/social/Social";
import {motion} from "framer-motion";
import {HireMe} from "@/components/button/HireMe";
import useLangage from "@/useLangage";
import {dictAboutPropType} from "@/type";
import {langages} from "@/utils/Data";

export const AboutBox = () => {

    const data = useLangage();

    const dataAbout: dictAboutPropType | undefined = data?.dataAbout;

    const handleClickPdf = () => {
        window.open(`/${data?.lan === "fr" ? "resume-fr" : "resume-en"}.pdf`, '_blank');
    }

    return (
        <div id="section1" className={`flex flex-col gap-8`}>
            <div className="">
                <motion.h3 className={`xl:text-2xl text-xl font-semibold lg:text-slate-800 text-slate-700 mb-4 ${montserrat.className}`}>
                    {dataAbout?.title}
                </motion.h3>
                <motion.p className="text-slate-500 text-md mb-2">
                    {dataAbout?.text}
                </motion.p>
            </div>

            <div className="flex items-center gap-8">
                <HireMe />
                <button
                    className="flex items-center gap-2 text-slate-800 group hover:text-slate-500 transition ease-linear"
                    onClick={ handleClickPdf }
                >{dataAbout?.textbtn} <span className="group-hover:text-slate-300 group-hover:rotate-45 transition ease-linear"><FiArrowUpRight/></span></button>
            </div>

            <ul className="text-slate-500 text-sm flex gap-4">
                {
                    langages.map((item:string, index:number) =>
                        <li className="text-slate-500 border border-slate-200 rounded-sm p-2 text-xs" key={index+1}>{item}</li>
                    )
                }
            </ul>

            <div className="border border-slate-300 p-4 rounded-sm lg:w-72 w-full flex flex-col items-center lg:items-start justify-center">
                <p className={`${montserrat.className} text-xl font-semibold mb-4 text-slate-700`}>{dataAbout?.textfollow}</p>
                <Social/>
            </div>
        </div>
    )
}