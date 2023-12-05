import { Flex, Image, Text } from "@chakra-ui/react";
import { aboutSectionData } from "../data";


export function EducationImages() {

    return (
        <>
            <Flex flexDir={'column'} gap={2}>
                <Image src='static/img/container_1/aboutSection/portrait-3.png' alt='Foto da Dra Larissa em seu consultório ' />
                <Image src='static/img/container_1/aboutSection/wide-3.png' alt='Foto da Dra Larissa em seu consultório ' />
            </Flex>
            <Flex flexDir={'column'} gap={2}>
                <Image src='static/img/container_1/aboutSection/wide-4.png' alt='Foto da Dra Larissa em seu consultório ' />
                <Image src='static/img/container_1/aboutSection/portrait-4.png' alt='Foto da Dra Larissa em seu consultório ' />
            </Flex>

        </>
    )
}