import useLangage from "@/hooks/useLangage"

export const useFetchAllProjects = () => {

    const data = useLangage();

    const dataWork = data?.dict?.dataWork;

    return dataWork;
    
}