"use client";

import { montserrat, poppins } from "@/font/Fonts";
import { useDictionary } from "@/hooks/useDictionary";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type classPropType = {
    color: "dark" | "light";
    className?: string;
    link:string;
    title?:string;
    label?:string;
};

export const WatchProject = ({ color, className, link, title, label }: classPropType) => {
    const { dictionary } = useDictionary();

    const textColor = color === "dark" ? "text-slate-900" : "text-slate-50";
    const hoverColor = color === "dark" ? "hover:text-slate-800" : "hover:text-slate-200";

    return (
        <Link
            href={`${link}`}
            title={title ? title : "Visit project"}
            target="_blank"
            className={`w-fit anim_underline text-md inline-flex items-center gap-2 rounded-lg transition-colors tracking-tighter ${textColor} ${hoverColor} ${className} ${montserrat.className}`}
        >
            {dictionary?.button.work} <span><FiArrowUpRight /></span>
        </Link>
    );
};