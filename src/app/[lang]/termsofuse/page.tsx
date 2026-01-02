import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { Title } from "@/components/atoms/Title";
import { InfosTermOfUse } from "./_components.tsx/InfosTermOfUse";


export default function Mentions() {

    return (
        <Article className="min-h-screen md:pb-24 pb-14 md:pt-52 pt-32">
            <Container className="flex items-center justify-center m-auto">
                <div className={`xl:w-6/12 lg:w-9/12 gap-10 flex flex-col`}>
                    <Title type="termsofuse" />
                    <InfosTermOfUse />
                </div>
            </Container>
        </Article>
    );
}