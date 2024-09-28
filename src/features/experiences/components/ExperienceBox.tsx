import {montserrat} from "@/font/Fonts";
import {useState} from "react";
import {FiBell, FiBox, FiCommand, FiGitlab, FiHexagon} from "react-icons/fi";
import {useMediaQuery} from "react-responsive";
import {dataExperiencePropType} from "@/type";

export const ExperienceBox = () => {

    const [listNum, setListNum] = useState(0);

    const isMobile = useMediaQuery({ query: "(max-width: 868px)" });

    const handleClickChangeList = (index: any) => {
        setListNum(index);
    }

    return (
        <div id="section2" className={`flex flex-col gap-8`}>
            <div className="">
                <h3 className={`xl:text-2xl text-xl font-semibold tracking-wide lg:text-slate-800 text-slate-700 mb-4 ${montserrat.className}`}>
                    Relevant Experience
                </h3>

                <p className="text-slate-500 ml-4">Write modern, performant, and robust code for a diverse
                    array of client and internal projects</p>
            </div>

            <ul className="flex flex-col gap-8">
                {dataExperience.map((experience: dataExperiencePropType, index: number) =>
                    <li key={experience.id}
                        className={`border border-slate-200 p-4 lg:rounded-full transition rounded-sm bg-slate-50 flex flex-wrap lg:flex-nowrap items-center gap-8`}
                        onMouseEnter={ () => handleClickChangeList(index) }
                    >
                        <div className="w-1/8 flex items-center justify-center">
                            <span className="p-2 h-14 w-14 rounded-full flex items-center justify-center bg-blue-100 text-2xl text-blue-500">{experience.logo}</span>
                        </div>
                        <div className="w-3/5 grow">
                            <p className={`text-lg text-700 ${montserrat.className}`}>{experience.title}</p>
                            <p className="text-md text-slate-700 font-bold mb-4">@{experience.enterprise}</p>
                            <ul className="flex items-center lg:flex-nowrap flex-wrap gap-2 mb-10 lg:mb-0">
                                {experience.languages?.map((language: any, index: any) =>
                                    <li key={index + 1}>
                                        <span
                                            className="text-xs p-2 border border-slate-200 text-slate-500 rounded-full">{language}</span>
                                    </li>
                                )}
                            </ul>

                            { isMobile &&
                                <div>
                                    <p className="text-sm text-slate-500">{experience.periode}</p>
                                </div>
                            }
                        </div>

                        { !isMobile &&
                            <div className="w-2/5">
                                <p className="text-sm text-slate-700">{experience.periode}</p>
                            </div>
                        }

                    </li>
                )}
            </ul>

        </div>
    )
}

const dataExperience: any = [
    {
        id: 1,
        title: "FrontEnd developer",
        periode: "Sept 2023 - Present",
        enterprise: "CNRS",
        logo: <FiHexagon />,
        ville: "Nemours",
        languages:["ReactJS", "Javascript", "TailwindCSS"]
    },
    {
        id: 2,
        title: "FullStack developer",
        periode: "Avril 2023 - Sept 2023",
        enterprise: "Freelance",
        logo: <FiBox />,
        ville: "Melun",
        languages:["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]
    },
    {
        id: 3,
        title: "Front-End developer",
        periode: "Mars - Aout 2022",
        enterprise: "D\'or et de vin",
        logo: <FiBell />,
        ville: "Paris",
        languages:["Wordpress", "Oxygen"]
    }
]