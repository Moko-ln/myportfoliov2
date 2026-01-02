"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
    
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}

                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}