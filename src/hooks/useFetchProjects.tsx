import { useEffect, useState } from "react"
import { useDictionary } from "./useDictionary";


export const useFetchProjects = () => {

    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { dictionary } = useDictionary();
    console.log(dictionary);
    
    useEffect(() => {
        const handleFetchProject = async () => {
            setIsLoading(true);

            try {
                if (!dictionary) throw new Error("Ooops problem occur when display projects!");

                setData(dictionary);
                setError(null);
                setIsLoading(false);

            } catch (error:any) {
                setError(error);
                setIsLoading(false);                
            }
        }

        handleFetchProject();
    }, [dictionary])
    return { data, isLoading, error}
}