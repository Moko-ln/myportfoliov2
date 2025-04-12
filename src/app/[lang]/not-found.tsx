import { Container } from "@/components/atoms/Container";
import { montserrat, poppins } from "@/font/Fonts";
import Link from "next/link";

export default function NotFound(){
    return (
        <article className="flex items-center w-full h-screen justify-center">
            <Container className="flex flex-col gap-2items-center justify-center text-center">
                <h2 className={`${montserrat.className} text-4xl tracking-tighter font-black text-slate-900`}>404</h2>
                <p className={`${poppins.className} text-base text-slate-700`}>Could not find requested resource</p>
                <Link href="/" className={`${poppins.className} text-base text-slate-200`}>Return Home</Link>
            </Container>
        </article>
    )
}