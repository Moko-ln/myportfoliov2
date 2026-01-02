import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { Title } from "@/components/atoms/Title";

export default function NotFound() {

    return (

        <Article>
            <Container className="flex flex-col items-center justify-center h-screen relative">
                <Title type="notfound" />   
            </Container>
        </Article>
    )
}