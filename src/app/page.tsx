"use client"

import { ReactLenis } from 'lenis/react';
import Section from "@/components/Section";
import LangageProvider from "@/context/langageContext";

export default function Home() {
    return (
        <LangageProvider>
            <ReactLenis root>
                <Section />
            </ReactLenis>
        </LangageProvider>
    );
}
