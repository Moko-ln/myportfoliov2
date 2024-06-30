import {FiDisc} from "react-icons/fi";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

export const Brand = () => {
    return (
            <figure className={`w-16 h-16`}>
                <Image
                    src={Logo}
                    alt="logo du site"
                    width={150}
                    height={150}

                    className={`w-full h-full object-contain`}
                />
            </figure>
    )
}