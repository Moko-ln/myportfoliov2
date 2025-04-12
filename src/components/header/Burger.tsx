import { useDictionary } from "@/hooks/useDictionary";
import { useMenu } from "@/hooks/useMenu";

export const Burger = () => {

    const menuContext = useMenu();

    const { dictionary } = useDictionary();
    
    return (
        <button className="lg:hidden block text-slate-500" aria-label="Toggle menu" onClick={() => menuContext?.handleMenu()}>
            { menuContext?.open ? `${dictionary?.button.menu[1]}` : `${dictionary?.button.menu[0]}`}
        </button>
    );
};