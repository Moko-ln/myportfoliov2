import { Container } from "@/components/atoms/Container"
import { Projectlist } from "./components/organisms/ProjectList"
import { Article } from "@/components/atoms/Article"

export const Work = () => {

    return (
        <Article className="relative">
            <Container>
                <Projectlist />
            </Container>
        </Article>
    )
}