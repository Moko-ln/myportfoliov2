import {poppins} from "@/font/Fonts";
import Image from "next/image";

interface ItemProps {
    item: {
        id:number;
        title: string;
        technologies: string[];
        image: string;
    },
}
export const Item = ( { item }:ItemProps ) => {
    return (
        <li className=" relative flex flex-col gap-4" key={item.id}>
            <h3 className={`text-2xl w-full leading-8 flex mb-4 ${poppins.className}`}> { item.title }</h3>
            {/*<p className="text-md text-slate-600">*/}
            {/*    { item.description}*/}
            {/*</p>*/}
            <div className="bg-blue-500 w-full rounded-lg order-first h-80 mb-4 overflow-hidden">
                <div className="h-80">
                    <figure className="h-80">
                        <Image src={`/uploads/image1.png`} alt="test" width={500} height={250}
                               style={{objectFit: "cover", height: "100%", width: "100%"}}/>
                    </figure>
                </div>
            </div>
        </li>
    )
}