import Image from "next/image";
import AvatarImage from "@/assets/images/portrait.webp"
import { AvatarPropType } from "@/type";

export const Avatar = ({ className, size = "medium" } : AvatarPropType) => {

    const sizeImage = {
        small:"lg:h-8 lg:w-8 w-8 h-8",
        medium:"lg:h-40 lg:w-40 w-24 h-24",
        large:"lg:h-52 lg:w-52 w-42 h-42"
    }

    return (
        <div className={`${className}`}>
            <figure className={`${sizeImage[size]} overflow-hidden`}>
                <Image
                    src={AvatarImage}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-full"
                    alt={"avatar"}
                />
            </figure>
        </div>
    )
 }