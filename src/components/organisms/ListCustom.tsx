import { dataPropType, itemPropType } from "@/type"
import { ItemCustom } from "../atoms/ItemCustom"

export const ListCustom = ({ data } : {data:dataPropType}) => {

    return (
        <ul className="flex items-center justify-center gap-4">
            { data?.map((item:itemPropType) => 
                <ItemCustom item={item} key={item.id} />
            )}
        </ul>
    )
}