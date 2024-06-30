"use client"
import {poppins} from "../../font/Fonts";
import {List} from "@/features/works/components/List";
import Image from "next/image";
import {FiArrowLeft, FiArrowRight, FiCircle} from "react-icons/fi";
import {useEffect, useState} from "react";

export const Work = () => {
    const [activId, setActivId] = useState(1);

    const handleNext = () => {
        if(activId > 1 ) return
        setActivId(activId + 1)
    }

    const handleBack = () => {
        if(activId <= 1 ) return
        setActivId(activId -1 )
    }

    return (
        <div className="row-span-3 col-span-1 bg-slate-100 border border-solid border-slate-200 rounded-[55px] p-2 relative">
            <div className="bg-slate-50 h-full border border-solid border-slate-200 rounded-[55px] shadow-lg pt-20 px-4 flex flex-col items-center">

                {/*<List activId={activId} />*/}
                <div className="h-20 w-8/12 rounded-full absolute bottom-10">
                    <div
                        className="relative h-full w-full bg-slate-200 rounded-full flex justify-between items-center py-4 px-10">
                        <button className="text-2xl bg-transparent border-none" onClick={ handleBack }><FiArrowLeft/>
                        </button>
                        <button className="h-16 w-16 rounded-full shadow-md border-none drop-shadow-lg bg-black text-white text-[2.8em] flex items-center justify-center">
                            <FiCircle/>
                        </button>
                        <button className="text-2xl bg-transparent border-none" onClick={ handleNext }><FiArrowRight/>
                        </button>
                    </div>
                </div>
                <div className="phonetop bg-slate-100 w-20 h-10 rounded-b-3xl"></div>
            </div>
        </div>
    )
}