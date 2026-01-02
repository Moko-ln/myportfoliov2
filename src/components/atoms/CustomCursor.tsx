"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const CustomCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Animation spring (lissage)
  const smoothX = useSpring(x, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const moveCursor = (e:any) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="md:block md:visible hidden invisible w-4 h-4 bg-blue-500 dark:bg-green-500 rounded-full pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}