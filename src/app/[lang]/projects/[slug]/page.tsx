import { getProject } from "../_lib/getProject";
import { Suspense } from "react";
import { Project } from "./_components/Project";
import { Loader } from "@/components/atoms/Loader";
import NotFound from "../../not-found";
import { SmoothLenis } from "@/components/templates/SmoothLenis";

export default async function Page({ 
    params,
}: { 
    params: Promise<{ slug: string, lang:"fr" | "en" }>
}) {
    const { slug, lang } = await params;
    
    const project =  getProject(lang, slug);

    if (!project) return NotFound();

    return (
        <Suspense fallback={<Loader />}>
            <SmoothLenis>
                <Project project={project} />
            </SmoothLenis>
        </Suspense>
    );
}