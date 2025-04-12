"use client"

import { useDictionary } from "@/context/DictionaryProvider"

export const Lists = () => {
    const { dictionary } = useDictionary();

    return (
        <>
            {
                dictionary?.termsofuse.lists.map(item =>
                    <li key={item.id}>
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="text-slate-500 text-sm">{item.content}</p>
                    </li>
                )   
            } 
        </>
        
    )
}