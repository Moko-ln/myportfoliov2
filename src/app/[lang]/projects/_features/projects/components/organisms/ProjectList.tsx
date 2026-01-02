"use client"

import { Itemproject } from "../atoms/Itemproject";
import { dictWorkPropType } from "@/type";
import { useDictionary } from "@/hooks/useDictionary";


export const Projectlist = () => {

    const { dictionary } = useDictionary()

    return (
        <ul className="h-screen w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar scroll-smooth">
            {dictionary?.projects?.map( (item: dictWorkPropType) => 
                <Itemproject key={item.id} data={item} />
            )}
        </ul>
    )
}