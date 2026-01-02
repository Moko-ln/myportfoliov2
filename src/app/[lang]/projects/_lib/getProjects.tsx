import { getDictionary } from "@/utils/dictionaries"

export const getProjects = async (lang: string) => {
    
    const dict = await getDictionary(lang);
    
    return dict?.projects.map((item:any) => item).reverse() || [];
}