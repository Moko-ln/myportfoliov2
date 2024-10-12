import React from 'react';
import {montserrat} from "@/font/Fonts";

const LoadingPage = () => {
    return (
        <div className="absolute left-0 top-0 w-full min-h-screen flex justify-center items-center bg-slate-50 gap-4">
            <span className={`animate-bounce text-slate-500 text-sm underline ${montserrat.className}`}>Moko</span>
        </div>
    );
};

export default LoadingPage;
