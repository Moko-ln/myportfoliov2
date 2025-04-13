import Link from "next/link";
import { poppins } from "@/font/Fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useDictionary } from "@/hooks/useDictionary";
import { usePathname } from "next/navigation";
import { useMenu } from "@/hooks/useMenu";
import { FiXCircle } from "react-icons/fi";

export const Navbar = () => {
    const { dictionary } = useDictionary();
    const pathname = usePathname();

    const menuContext = useMenu();

    const handleCloseMenu = () => {
        menuContext?.setOpen(false)
    }
    
    // Extract just the path part after the locale
    const currentPath = pathname.split('/').slice(2).join('/');
    
    // Check if we're on root path
    const isRoot = currentPath === '';
    
    return (
        <>
            <nav className="lg:block hidden grow lg:w-[calc(100% - 6.25rem)]">
                <ul className="flex items-center gap-4 justify-around w-full">
                    { dictionary?.navbar?.map( (item:any) =>
                        (currentPath === item.link || (isRoot && item.link === '/')) ? (
                            <li key={item.id} className="relative">
                                <Link 
                                    className={`${poppins.className} ${item.id === 3 ? "opacity-25" : ""} text-slate-900 font-medium leading-snug text-base`}
                                    href={`/${item.link}`} 
                                    title={item.title}
                                >
                                    {item.title}
                                    <motion.span
                                        layoutId="activeCircle"
                                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-500 rounded-full"
                                        initial={{ opacity:0, scale: 0 }}
                                        animate={{ opacity:1, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                    />
                                </Link>
                            </li>
                        ) : (
                            <motion.li 
                                key={item.id}
                                whileHover={{ scale:.945 }}
                                whileTap={{ scale:1.045 }} 
                                transition={{ type:"spring", damping:10, stiffness:100 }}
                            >
                                <Link 
                                    className={`${poppins.className} ${item.id === 3 ? "opacity-25" : "hover:text-slate-500"} text-slate-500 font-medium leading-snug text-base transition ease-in-out duration-75`}
                                    href={`/${item.link}`} 
                                    title={item.title}
                                >
                                    {item.title}
                                </Link>
                            </motion.li>
                        )
                    )}
                </ul>
            </nav>
            <AnimatePresence>
                {menuContext?.open && (
                    <motion.nav 
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="lg:hidden shadow-lg shadow-slate-900 flex items-center justify-center bg-white fixed bottom-0 w-full left-0 h-[50vh] rounded-t-3xl"
                    >

                        <button onClick={handleCloseMenu} className="absolute top-2 text-2xl text-slate-500"><FiXCircle /></button>
                        <ul className="flex flex-col items-center gap-4 w-full">
                            { dictionary?.navbar?.map( (item:any) =>
                                (currentPath === item.link || (isRoot && item.link === '/')) ? (
                                    <li key={item.id} className="relative">
                                        <Link 
                                            className={`${poppins.className} ${item.id === 3 ? "opacity-25" : ""} text-slate-900 font-black leading-snug text-2xl`}
                                            href={`/${item.link}`} 
                                            title={item.title}

                                            onClick={handleCloseMenu}
                                        >
                                            {item.title}
                                            <motion.span
                                                layoutId="activeCircle"
                                                className="absolute top-1/2 -right-4 -translate-y-1/2 w-2 h-2 bg-slate-500 rounded-full"
                                                initial={{ opacity:0, scale: 0 }}
                                                animate={{ opacity:1, scale: 1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                            />
                                        </Link>
                                    </li>
                                ) : (
                                    <motion.li 
                                        key={item.id}
                                        whileHover={{ scale:.945 }}
                                        whileTap={{ scale:1.045 }} 
                                        transition={{ type:"spring", damping:10, stiffness:100 }}
                                    >
                                        <Link 
                                            className={`${poppins.className} ${item.id === 3 ? "opacity-25" : "hover:text-slate-500"} text-slate-900 font-black leading-snug text-2xl transition ease-in-out duration-75`}
                                            href={`/${item.link}`} 
                                            title={item.title}

                                            onClick={handleCloseMenu}
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.li>
                                )
                            )}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
            
        </>
    )
}
