"use client"

import { ReactLenis } from 'lenis/react';
import Section from "@/components/Section";
import LangageProvider from "@/context/langageContext";
import {Header} from "@/components/partials/Header";
import {Footer} from "@/components/partials/Footer";

export default function Home() {
    return (
        <LangageProvider>
            <ReactLenis root>
                <Header />
                    <main className="w-full">
                        <Section />
                    </main>
                <Footer />
            </ReactLenis>
        </LangageProvider>
    );
}
