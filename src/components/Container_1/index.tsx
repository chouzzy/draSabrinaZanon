import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { MainSection } from "./MainSection";
import { VideoSection } from "./VideoSection";
import { StepsSection } from "./StepsSection";
import { AboutSection } from "./AboutSection";
import { SpecialitiesSection } from "./SpecialitiesSection";
import { CommentsSection } from "./CommentsSection";
import { Footer } from "./Footer";
import { MainMobileSection } from "./MainMobileSection";
import { StepToStepSection } from "./StepToStepSection";


export function Container_1() {


    // Iphone, ipads mini and pro. Desktops not included
    const isMobileVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: true,
        xl: false,
    })

    return (
        <Container
            minW='100%'
            bg='backgroundLight'
            centerContent={true}
            p={0}
            m={0}
        >
            {isMobileVersion ?
                // Versão mobile
                <Flex flexDir={'column'} mx='auto'>
                    <MainMobileSection />
                </Flex>
                :
                // Versão desktop
                <Flex w='100%' flexDir={'column'} maxW='1920px'>
                    <MainSection />

                </Flex>
            }

            <VideoSection />

            <StepToStepSection />

            <AboutSection />

            <SpecialitiesSection />

            <CommentsSection />

            <Footer />
        </Container>
    )
}