import { Container, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { VideoSection } from "./VideoSection";
import { BenefitsSection } from "./BenefitsSection";
import { StepsSection } from "./StepsSection";
import { AboutSection } from "./AboutSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { CommentsSection } from "./CommentsSection";
import { Footer } from "./Footer";


export function Container_1() {
    return (
        <Container
            minW='100%'
            bg='backgroundLight'
            centerContent={true}
            p={0}
            m={0}
        >
            <Flex flexDir={'column'}>

                <Header />

                <MainSection />
            </Flex>

            <VideoSection />

            <BenefitsSection />

            <StepsSection />

            <AboutSection />

            <SpecialitiesSection />

            <CommentsSection />

            <Footer />
        </Container>
    )
}