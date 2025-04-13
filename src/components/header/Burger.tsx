import { useDictionary } from "@/hooks/useDictionary";
import { useMenu } from "@/hooks/useMenu";
import { useEffect } from "react";

export const Burger = () => {
    const menuContext = useMenu();
    const { dictionary } = useDictionary();
    
    // Texte par défaut en attendant le chargement du dictionnaire
    const defaultText = menuContext?.open ? "Fermer" : "Menu";

    useEffect(() => {
        if (menuContext?.open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuContext?.open]);
    
    return (
        <button 
            className="lg:hidden block text-slate-500 min-w-[60px]" 
            aria-label="Toggle menu" 
            onClick={() => menuContext?.handleMenu()}
        >
            {dictionary ? 
                (menuContext?.open ? `${dictionary?.button.menu[1]}` : `${dictionary?.button.menu[0]}`) 
                : defaultText
            }
        </button>
    );
};