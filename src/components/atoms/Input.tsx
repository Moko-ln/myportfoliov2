"use client";

import { inputTypeProps } from "@/type"

export const Input = ({ 
    name, 
    required, 
    placeholder, 
    register, 
    error, 
    error_message,
    invalidEmailMessage,
    className
}: inputTypeProps) => {

    const validationRules = {
        required: `${required}`,
        ...(name === "email" && {
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: invalidEmailMessage,
            }
        })
    };

    return (
        <input 
            placeholder={error ? error_message : placeholder}
            {...register(name, validationRules)}
            className={`${error 
                    ? "border-red-500 placeholder-red-500 placeholder:text-red-200 dark:placeholder:text-red-200" 
                    : "border-slate-500 dark:border-slate-300 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                } border w-full h-12 focus:outline-none rounded-full px-4 text-blue-300 dark:text-green-300 bg-transparent ${className}`}
        />
    )
}