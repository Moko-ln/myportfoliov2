import Link from "next/link";
import { montserrat } from "@/font/Fonts";
import { useDictionary } from "@/hooks/useDictionary";
import { usePathname } from "next/navigation";

export const Navbar = () => {

    const { dictionary } = useDictionary();

    const pathname = usePathname();
    
    // Extract just the path part after the locale
    const currentPath = pathname.split('/').slice(2).join('/');
    
    // Check if we're on root path
    const isRoot = currentPath === '';

    return (
        <nav className="lg:block hidden grow lg:w-[calc(100% - 6.25rem)]">
            <ul className="flex items-center gap-4 justify-around w-full">
                {   dictionary?.navbar?.map( (item:any) =>
                    <li key={item.id}>
                        <Link 
                            className={` ${(currentPath === item.link) || (isRoot && item.link === '/') ? "text-blue-500 dark:text-green-500": "text-slate-500 dark:text-slate-100"} font-medium leading-snug text-base transition ease-in-out duration-75`}
                            href={`/${item.link}`} 
                            title={item.title}
                        >
                            {item.title}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
