"use client";

import { Container } from "@/components/atoms/Container"
import { Article } from "@/components/atoms/Article"
import { dictWorkPropType } from "@/type"
import { Itemproject } from "./components/atoms/Itemproject"
import { Section } from "@/components/atoms/Section";
import { useProjects } from "../../_hooks/allProjects";

export const Projects = () => {

    const allProjects = useProjects();
    
    return (
        <Section isSnap>
            {   allProjects?.map( (item: dictWorkPropType) => 
                <Article isSnap key={item.id} className="h-screen w-full  flex items-center justify-center relative">
                    <Container key={item.id} className="md:w-fit items-center flex justify-center">
                        <Itemproject data={item} />
                    </Container>
                </Article>
            )}
        </Section>
    )
}