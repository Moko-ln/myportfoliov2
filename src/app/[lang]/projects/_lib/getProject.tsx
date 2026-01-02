import { getDictionary } from "@/utils/dictionaries"

export const getProject = async (lang: "fr"| "en" , slug:string) => {
    
    const dict = await getDictionary(lang);
    
    return dict?.projects.find((item:any) => item.slug === slug) || null;
}