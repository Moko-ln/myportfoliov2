"use client"

import useLangage from '@/useLangage';

const LangageBtn = () => {
    const data = useLangage();
    
    return (
        <button
            className=" text-slate-700 uppercase underline"
            onClick={ data?.toggleLangage }
        >{data?.langage}</button>
    );
};

export default LangageBtn;
