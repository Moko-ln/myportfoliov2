"use cleint";

import { poppins } from "@/font/Fonts";
import { labelPropType } from "@/type";

export const Label = ({ name, label, error, className}:labelPropType) => {

    return (
        <label htmlFor={name} className={`${error ? "text-slate-400": "text-slate-500 dark:text-slate-500"} ${className}`}>{label}</label>
    )
}