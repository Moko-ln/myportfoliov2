import { montserrat, poppins } from "@/font/Fonts"


export const Profil = () => {
    return (
        <div className=" flex flex-col items-center gap-4 max-w-md mx-auto">
            <div className="flex flex-col gap-2">
                <p className={`text-lg text-slate-900 text-center font-semibold tracking-tighter ${montserrat.className}`}>Serge lema</p>
                <p className={`${poppins.className} text-center text-sm text-slate-700 `}>
                I&apos;m passionnate on build things for the web
                </p>
            </div>
            
            <button className={`${poppins.className} w-fit text-base bg-black h-12 px-4 rounded-full text-slate-50`}>Get in Touch</button>
        </div>
    )
}