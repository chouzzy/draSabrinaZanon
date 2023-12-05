import { Flex, Image, Text } from "@chakra-ui/react";
import { aboutSectionData } from "../data";


export function AboutImages() {

    return (
        <>
            <Flex flexDir={'column'} gap={2}>
                <Image src='static/img/container_1/aboutSection/portrait-1.png' alt='Foto da Dra Larissa em seu consultório ' />
                <Image src='static/img/container_1/aboutSection/wide-1.png' alt='Foto da Dra Larissa em seu consultório ' />
            </Flex>
            <Flex flexDir={'column'} gap={2}>
                <Image src='static/img/container_1/aboutSection/wide-2.png' alt='Foto da Dra Larissa em seu consultório ' />
                <Image src='static/img/container_1/aboutSection/portrait-2.png' alt='Foto da Dra Larissa em seu consultório ' />
            </Flex>

        </>
    )
}