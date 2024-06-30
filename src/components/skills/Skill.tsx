import {FaNodeJs, FaReact} from "react-icons/fa";
import {SiExpress, SiTypescript} from "react-icons/si";
import {DiMongodb} from "react-icons/di";
import {poppins} from "@/font/Fonts";


export const Skill = () => {
    return (
        <div className="row-span-4 gap-4 bg-blue-500 rounded-lg p-4 relative">

            <span
                className="animate-pulse delay-75 ease-in absolute top-10 w-16 h-16 flex items-center justify-center text-4xl text-blue-300 rounded-full border border-blue-400 border-solid"><FaReact/></span>
            <span
                className="animate-pulse delay-0 ease-in absolute top-28 left-24 w-16 h-16 flex items-center justify-center text-4xl text-blue-300 rounded-full border border-blue-400 border-solid"><FaNodeJs/></span>
            <span
                className="animate-pulse delay-100 ease-in absolute top-40 right-20 w-16 h-16 flex items-center justify-center text-4xl text-blue-300 rounded-full border border-blue-400 border-solid"><SiTypescript/></span>


            <span
                className="animate-pulse delay-0 ease-in absolute top-16 left-56 w-16 h-16 flex items-center justify-center text-4xl text-blue-300 rounded-full border border-blue-400 border-solid"><DiMongodb/></span>
            <span
                className="animate-pulse delay-75 ease-in absolute top-5 right-10 w-16 h-16 flex items-center justify-center text-4xl text-blue-300 rounded-full border border-blue-400 border-solid"><SiExpress/></span>

            <div className="content bottom-10 absolute max-w-[350px]">
                <p className={`${poppins.className} font-bold text-[1.5rem] text-white mb-2`}>My
                    skills</p>
                <p className="text-sm text-slate-50">I like to try new things and I worked with various
                    technologies in various positions from front-end development, designing in Photoshop
                    to backend development.
                </p>
            </div>
        </div>
    )
}