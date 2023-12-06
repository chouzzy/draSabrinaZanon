import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { mainSectionData } from "./data";


export function MainMobileSection() {

    return (
            <Flex
                w='100%'
                h='100%'
            >
                <Flex
                    w='100%'
                >
                    <Flex
                        flexDir={'column'}
                        w='100%'
                        h='100%'
                        mt={4}
                        gap={[6, 12, 8, 8]}
                        p={[4, 2, 0, 0]}

                    >
                        <Flex
                            flexDir='column'
                            gap={[6, 12, 8, 8]}
                            h='100%'
                        >
                            <Flex
                                fontWeight={'700'}
                                fontSize={['2rem', '2rem', '2.5rem', '2.5rem']}
                                lineHeight={['2rem', '2.25rem', '3.75rem', '3.75rem']}
                                color='backgroundDark'
                            >
                                {mainSectionData.title}
                            </Flex>
                            <Text
                                fontWeight={'400'}
                                color='beige.700'
                                fontSize={['1.25rem', '1.25rem', '1.25rem', '1.25rem']}
                                lineHeight={['1.5rem', '1.25rem', '2rem', '2rem']}
                            >
                                {mainSectionData.subTitle}
                            </Text>
                            <Text
                                fontWeight={'500'}
                                fontSize={['1.25rem', '1.25rem', '1.25rem', '1.25rem']}
                                lineHeight={['1.25rem', '1.25rem', '2rem', '2rem']}
                                color='brown.600'
                                pr={8}
                                maxW={'75vw'}
                            >
                                {mainSectionData.subTitle2}
                            </Text>
                        </Flex>
                        
                        
                    </Flex>
                    <Flex w={['0%', '100%', '80%', '100%']} ></Flex>
                </Flex>
            </Flex>
    )
}