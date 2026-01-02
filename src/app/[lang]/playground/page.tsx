"use client";

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Title } from "@/components/atoms/Title";

export default function Page() {

    return (
        <Article className="flex items-center justify-center h-screen">
            <Container className="flex items-center justify-center">
                <FadeIn>
                    <Title type="playground" />
                </FadeIn>
            </Container>
        </Article>
    )
}