import { Flex, Text } from "@chakra-ui/react";
import { aboutSectionData } from "../AboutSection/data";
import { specialitiesSectionsData } from "./data";
import { Header } from "./Header";
import { Menu } from "./Menu";

export function SpecialitiesSection() {



    return (
        <Flex
            w='100%'
            maxW='1920px'
            color='dark.400'

            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            py={12}
        >

            <Header />
            <Menu />

        </Flex>
    )
}