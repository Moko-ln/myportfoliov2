
import Image from "next/image";
import AboutImage from "@/assets/images/about.jpg"
import {AboutBox} from "@/components/about/AboutBox";
import {ExperienceBox} from "@/features/experiences/components/ExperienceBox";
import {WorkBox} from "@/features/works/components/WorkBox";

export default function Page() {
    return (
        <></>
        // <article id="hero" className="min-h-screen flex items-center justify-center pt-24">
        //     <div className="container-root w-full flex items-center">
        //         <div className="wrapper flex flex-col items-center justify-start gap-16">
        //             <div className="flex flex-col justify-center items-center gap-6">
        //                 <h2 className={`${montserrat.className} font-extrabold text-center text-4xl text-slate-950`}>{Dictionary[dict][1]}</h2>
        //                 <p className={`text-lg text-slate-600 w-4/6 text-center text-slate-800`}>{Dictionary[dict][2]}</p>
        //                 <motion.button
        //                     className={`${montserrat.className} text-sm bg-slate-950 hover:bg-slate-900 text-white p-4 rounded-full`}
        //                     whileHover={{ scale:1.045 }}
        //                     whileTap={{ scale:1.145 }}
        //
        //                     transition={{ type:"spring", duration:.6, ease:"easeIn" }}
        //                 >
        //                     {Dictionary[dict][3]}
        //                 </motion.button>
        //             </div>
        //
        //             <ul className="flex items-center justify-center gap-10 w-full order-first">
        //                 {
        //                     data.map((item, index) =>
        //                         <li
        //                             key={item.id}
        //                             className={`w-1/4 h-[450px] relative overflow-hidden rounded-md ${index % 2 !== 0 ? 'mb-10' : ''} cursor-pointer`}
        //                             onClick={ () => handleClick(item.link) }
        //                         >
        //                             <div className="overflow-hidden">
        //                                 <h2 className={`${montserrat.className} font-bold text-2xl text-white text-center absolute -translate-x-1/2 left-1/2 top-1/2 z-10`}>{item.title}</h2>
        //                                 <div className="h-[450px]">
        //                                     <motion.figure
        //                                         className="h-[450px]"
        //                                         whileHover={{ scale:1.045 }}
        //                                         whileTap={{ scale:1.145 }}
        //
        //                                         transition={{ type:"spring", duration:.6, ease:"easeIn" }}
        //                                     >
        //                                         <Image
        //                                             src={item.image}
        //                                             alt={` description de l'image ${item.title}`}
        //                                             layout="fill"
        //                                             style={{width: "100%", height: "100%", objectFit: "cover"}}
        //                                         />
        //                                     </motion.figure>
        //                                 </div>
        //                             </div>
        //
        //                         </li>
        //                     )
        //                 }
        //             </ul>
        //
        //         </div>
        //     </div>
        // </article>
    )
}