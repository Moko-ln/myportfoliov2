import { ReactNode } from "react";
import { motion } from "framer-motion";

export const FadeIn = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div>
            {children}
        </motion.div>
    );
};