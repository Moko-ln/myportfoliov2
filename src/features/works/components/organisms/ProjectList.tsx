"use client"

import { Itemproject } from "../atoms/Itemproject";
import { dictWorkPropType } from "@/type";
import { useDictionary } from "@/hooks/useDictionary";


export const Projectlist = () => {

    const { dictionary } = useDictionary()

    return (
        <ul className="flex flex-col gap-20 w-full">
            {dictionary?.projects?.map( (item: dictWorkPropType) => 
                <Itemproject key={item.id} data={item} />
            )}
        </ul>
    )
}