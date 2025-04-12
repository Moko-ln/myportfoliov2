import { Container } from "@/components/atoms/Container"
import { Projectlist } from "./components/organisms/ProjectList"
import { ScrollDown } from "@/components/atoms/button/Scroll"
import { Article } from "@/components/atoms/Article"

export const Work = () => {

    return (
        <Article>
            <Container>
                <Projectlist />
            </Container>
            {/* <ScrollDown /> */}
        </Article>
    )
}