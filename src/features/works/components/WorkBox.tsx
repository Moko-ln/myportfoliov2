"use client"

import {montserrat, poppins} from "@/font/Fonts";
import Image from "next/image";
import toast from "react-hot-toast";
import {dataWorkPropType} from "@/type";
import Image1 from "@/assets/images/portrait.webp";
import {HireMe} from "@/components/button/HireMe";
import {FiArrowUpRight, FiGlobe, FiSettings} from "react-icons/fi";
import {Social} from "@/components/social/Social";
import {motion} from "framer-motion";

export const WorkBox = () => {

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
                    <div className="xl:w-9/12 w-9/12 flex items-center ">
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
                                    <p className="flex gap-2 items-center text-blue-500 text-sm">
                                    <span className="relative flex h-3 w-3">
                                      <span
                                          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
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
                <div className="xl:w-9/12 w-9/12 mx-auto flex flex-col items-center">
                    <ul className="flex flex-col divide-y divide-slate-200 gap-10">
                        { dataWork.map(item =>
                            <motion.li
                                key={item.id}
                                className="flex flex-col lg:gap-10 gap-4 items-center justify-center h-full"

                                initial={{ opacity: 0, x: (item.id % 2 === 0 ) ? 20 : -20, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ type: "spring", duration:.5, ease:"easeIn", delay:.2 }}
                            >
                                <div className={`rounded-2xl pt-10 px-10 overflow-hidden w-full relative flex justify-center ${item.bgColor}`}>
                                    <Image
                                        src={`/uploads/${item.image}.webp`}
                                        alt={item.title}
                                        width={1440}
                                        height={700}
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

const dataWork: dataWorkPropType[] = [
    {
        id: 1,
        title: "Isia cnrs",
        description: "Here is the ISIA application. It is a platform developed using the Symfony framework for the backend and React for the frontend. We are currently working on version 3 of the application, which will improve the design and features.",
        content: "ISIA is designed to meet the needs of researchers, laboratory managers, and students by offering an intuitive interface and advanced functionalities. Our goal is to facilitate scientific work and enhance the productivity of our users.",
        image: "isia",
        done: false,
        private: false,
        bgColor: "bg-blue-200",
        share: [
            {
                id: 1,
                title: "See the website",
                icon: <FiGlobe/>,
                link: "https://test.isia.cnrs.fr/",
            },
        ]
    },

    {
        id: 1,
        title: "Cyberpunk: Edgerunners",
        description: "Welcome to the Cyberpunk: Edgerunners fan site. This project is built using the React framework for the frontend and TailwindCSS for styling. We aim to create an immersive experience for fans of the series.",
        content: "Cyberpunk: Edgerunners is designed to showcase the main characters and episodes from the Netflix series. The site offers an engaging interface and rich content to enhance the viewer's connection to the Cyberpunk universe.",
        image: "cyberpunk",
        done: true,
        private: false,
        bgColor: "bg-yellow-200",
        share: [
            {
                id: 1,
                title: "Visit the website",
                icon: <FiGlobe />,
                link: "https://cyberpunk-edgerunners.netlify.app/",
            },
        ],
    },
    {
        id: 2,
        title: "Lemiza  traiteur",
        description: "Here is a website designed for a client in the catering industry, developed using Next.js and incorporating TypeScript for a robust and secure development experience.",
        content: "This website features a user-friendly interface and a primary functionality: a contact form. The form allows visitors to easily contact the caterer for orders, inquiries, or special requests.",
        image: "lemiza",
        done: true,
        private: false,
        bgColor: "bg-green-200",
        share: [
            {
                id: 1,
                title: "See the website",
                icon: <FiGlobe/>,
                link: "https://www.lemiza.fr/",
            },
        ]
    },
    {
        id: 3,
        title: "Mobalicorp",
        description: "Here is an online news management web app, powered by the MERN stack (MongoDB, Express.js, React.js, Node.js). This app was designed for MobaliCorp, an influence agency.",
        content: "The app provides a user-friendly interface for efficiently managing online news, with advanced features such as user management and article publishing.",
        image: "mobaliold",
        done: true,
        private: true,
        bgColor: "bg-rose-200",
        share: [
            {
                id: 1,
                title: "See the website",
                icon: <FiGlobe/>,
                link: "https://mblcorps.com/",
            },
        ]
    },
]
