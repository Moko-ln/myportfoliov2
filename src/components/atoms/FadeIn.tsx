import { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const FadeIn = ({ children, className }: { children: ReactNode, className?:string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, ease: "easeOut" }}
            className={twMerge("will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
};