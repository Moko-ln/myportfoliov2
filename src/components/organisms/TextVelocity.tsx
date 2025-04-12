import { montserrat } from "@/font/Fonts";
import useLangage from "@/useLangage";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "framer-motion";
import { useRef } from "react";

interface TextVelocityProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

export const TextVelocity: React.FC<TextVelocityProps> = ({ children, baseVelocity = 100 }) => {

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden tracking-wider m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div style={{ x }} className={`${montserrat.className} font-black text-2xl text-slate-50 flex gap-20 whitespace-nowrap -tracking-wider flex-nowrap items-center`}>
        {[...Array(6)].map((_, i) => (
          <div key={i} aria-hidden={i !== 0}>
            {children}
          </div>
        ))}
        
      </motion.div>
    </div>
  );
};

export const ParallaxText: React.FC = () => {
  const data = useLangage();

  const dataVelocity = data?.dict?.dataVelocity;
  
  return (
    <div className="relative bg-black w-full h-24 py-4 flex items-center">
        <TextVelocity baseVelocity={1}>
                <ul className="flex items-center gap-20 list-disc">
                  { dataVelocity?.map( (item, index) => 

                    <li key={index+1}>{ item }</li>
                  )}
                </ul>
            
        </TextVelocity>

      <div className="absolute top-0 left-0 h-full lg:w-52 w-24 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute top-0 right-0 h-full lg:w-52 w-24 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};