import { motion } from "framer-motion";
import Image from "next/image";
import AvatarImage from "@/assets/images/portrait.webp"
import { AvatarPropType } from "@/type";

export const Avatar = ({ className, size = "medium" } : AvatarPropType) => {

    const sizeImage = {
        small:"lg:h-32 lg:w-32 w-32 h-32",
        medium:"lg:h-40 lg:w-40 w-40 h-40",
        large:"lg:h-52 lg:w-52 w-42 h-42"
    }
    return (
        <motion.div
            className={`${sizeImage[size]} ${className}`}
            initial={{ opacity: 1, scale:.95, y:5 }}
            animate={{ opacity: 1, scale: 1, y:0 }}
            transition={{ type: "spring", stiffness: 100, damping:25 }}
        >
            <figure className={`${sizeImage[size]} overflow-hidden`}>
                <Image
                    src={AvatarImage}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-full"
                    alt={"avatar"}
                />
            </figure>
        </motion.div>
    )
 }