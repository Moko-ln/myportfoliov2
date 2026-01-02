import React from 'react';
import { Ping } from '../atoms/Ping';
import { Article } from '../atoms/Article';

export const LoadingPage = () => {
    return (
        <Article className="absolute left-0 top-0 w-full h-screen flex justify-center items-center bg-slate-50 gap-4">
            <Ping />
        </Article>
    );
};
