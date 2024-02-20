import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { StepToStepSectionData } from "./data";
import { mainSectionData } from "../MainSection/data";


export function StepToStepSection() {

    return (
        <Flex
            w='100%'
            maxW='1920px'
            flexDir={'column'}

            color='light.400'
            bgColor={'rose.600'}
            borderRadius={'0 140px 0 140px'}
            gap={4}

            py={[32,12,24,12,12]}
            px={[12,12,32,12,12]}
            

            justifyContent={'center'}
            alignItems={'center'}
        >
            <Flex
                w='100%'
                justifyContent={'center'}
            >
                <Text
                    fontFamily={'Poppins'}
                    fontWeight={'100'}
                    fontSize={['2.5rem','2.5rem','3.25rem','3.25rem','3.25rem']}
                    textAlign={'center'}
                >
                    {StepToStepSectionData.title}
                </Text>
            </Flex>

            <Flex
                w='100%'
                justifyContent={'space-between'}
                flexDir={['column','column','column','row','row']}
            >
                {StepToStepSectionData.steps.map((step) => {

                    return (
                        <Flex
                            key={step.id}
                            flexDir={'column'}
                            justifyContent={'center'}
                            textAlign={'center'}
                            p={[8,16,12,16,16]}
                            gap={4}
                        >
                            <Image
                                src={step.image}
                                mx='auto'
                                maxW='4.5rem'
                            />

                            <Text
                                lineHeight={'1.5rem'}
                                fontSize={'1.125rem'}
                                fontWeight={'400'}
                            >
                                {step.description}
                            </Text>

                        </Flex>
                    )
                })}

            </Flex>
        </Flex>
    )
}