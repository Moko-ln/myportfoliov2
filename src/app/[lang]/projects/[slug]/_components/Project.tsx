"use client";

import { use } from "react";
import { HeroProject } from "../../_features/projects/components/HeroProject";
import { GaleryProject } from "../../_features/projects/components/GaleryProject";
import { NextPrevProject } from "../../_features/projects/components/NextPrevProject";
import { motion } from "framer-motion";

export const Project = ({
    project,
}:{
    project: Promise<any>
}) => {

    const oneProject = use(project);

    return (
        <motion.section 
            className="relative min-h-screen bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ type:"spring", stiffness: 100, damping: 20 }}
        >
            <HeroProject 
                projectName={oneProject?.nameproject}
                stacks={oneProject.stack}
                content={oneProject.content}
                mainImage={oneProject.mainImage}
                website={oneProject.website}    
            />

            <GaleryProject 
                nameproject={oneProject.nameproject}
                title={oneProject.title}
                design={oneProject.design}
                medias={oneProject.medias}
                customization={oneProject.customization}
            />
    
            <NextPrevProject />
        </motion.section>
       
    )
}