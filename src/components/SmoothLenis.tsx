"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";

export const SmoothLenis = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }}>
      <main className={`z-10 w-full touch-auto relative overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>{children}</main>
    </ReactLenis>
  );
}