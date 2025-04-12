

import { useEffect, useState } from "react";
import { useDictionary } from "./useDictionary";

export const useFetchProjectBySlug = (slug: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<null | Error>(null);

    const { dictionary } = useDictionary();

    useEffect(() => {
        const fetchAllProjects = async () => {
            setIsLoading(true);
            try {
                const res = await dictionary.find((item: any) => item.slug === slug);

                if (!res) throw new Error("Oups ! Problème pour afficher les données par slug");

                setData(res);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllProjects();
    }, [slug, dictionary]);

    return { data, isLoading, error };
};