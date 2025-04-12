import { itemPropType } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";

export const ItemCustom = ({ item, key }: { item: itemPropType, key: number}) => {

    const handleClick = (link?: string) => {
        if (!link) return;

        window.open(`${link}`, '_blank');
    }
    return (
        <li key={key}>
            <motion.button
                className={`${item.link && "rounded-full bg-black p-2 flex items-center justify-center"} h-10 w-10`}
                whileHover={{ scale:1.145 }}
                whileTap={{ scale:1.145 }}

                transition={{ type:"spring", duration:.6, ease:"easeIn" }}

                title={item.title}

                onClick={ () => handleClick(item.link) }
            >
                { item.icon && <span className="flex items-center justify-center text-slate-50 text-xl">{item.icon}</span> }
                { item.image && 
                    <Image 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                    />
                }
            </motion.button>
        </li>
    )
}