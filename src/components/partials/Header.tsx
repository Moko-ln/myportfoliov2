import Link from "next/link";
import {Brand} from "@/components/header/Brand";

export const Header = () => {
    return (
        <header className="z-20 h-20 flex w-full items-center justify-center">
            <div className="container-root flex items-center w-full">
                <div className="xl:w-9/12 w-9/12 gap-10 flex flex-wrap mx-auto">
                    <h1 className="w-16 h-16">
                        <Link href="/" className={"w-16 h-16"}>
                            <Brand />
                        </Link>
                    </h1>
                </div>
            </div>
        </header>
    )
}

