import { Flex, Text } from "@chakra-ui/react";
import { aboutSectionData } from "../data";


export function EducationParagraphs() {

    return (
        <>
            <Flex
                fontWeight={'700'}
                fontSize={['2rem', '2em', '2.5rem', '2.5rem']}
                lineHeight={['2.25rem', '2.25rem', '3.75rem', '3.75rem']}
                color='backgroundDark'
            >
                <Flex
                    w='100%'
                    justifyContent={'start'}
                >
                    {aboutSectionData.education.title}
                </Flex>
            </Flex>
            <Flex
                fontWeight={'400'}
                color='backgroundDark'
                fontSize={['1rem', '1rem', '1.25rem', '1.25rem']}
                lineHeight={['1.5rem', '1.5rem', '1.5rem', '1.5rem']}
            >
                {aboutSectionData.education.paragraph_1.text}
            </Flex>
            <Flex
                fontWeight={'400'}
                color='backgroundDark'
                fontSize={['1rem', '1rem', '1.25rem', '1.25rem']}
                lineHeight={['1.5rem', '1.5rem', '1.5rem', '1.5rem']}
            >
                {aboutSectionData.education.paragraph_2.text}
            </Flex>
            <Flex
                fontWeight={'400'}
                color='backgroundDark'
                fontSize={['1rem', '1rem', '1.25rem', '1.25rem']}
                lineHeight={['1.5rem', '1.5rem', '1.5rem', '1.5rem']}
            >
                {aboutSectionData.education.paragraph_3.text}
            </Flex>
        </>
    )
}