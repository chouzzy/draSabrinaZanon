import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { mainSectionData } from "./data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { AgendeUmaConsultaButton } from "../../AgendeUmaConsultaButton";
import { AgendeUmaConsultaButtonData } from "../../AgendeUmaConsultaButton/data";


export function MainSection() {

    return (
        // CONTAINER PRINCIPAL
        <Flex
            h='90vh'
            bgColor={'rose.400'}
            borderRadius={'0px 0px 360px 0px'}
            position={'relative'}
        >
            {/* SEGUNDO CONTAINER */}
            <Flex
                w='100%'
            >
                {/* TEXTOS */}
                <Flex
                    flexDir={'column'}
                    w='100%'
                    h='auto'
                    gap={[6, 12, 8, 8]}
                    p={[2, 2, 0, 0]}

                >
                    <Flex
                        h='100%'
                        p={16}
                        flexDir='column'
                        justifyContent={'space-between'}
                    >
                        <Flex
                            flexDir={'column'}
                            gap={8}
                        >


                            {/* LOGO + TITLE */}
                            <Flex
                                fontWeight={'700'}
                                fontSize={['2rem', '2rem', '2.5rem', '2.5rem']}
                                lineHeight={['2rem', '2.25rem', '3.75rem', '3.75rem']}
                                maxW={'36rem'}

                            >
                                <Image
                                    src={"static/img/container_1/mainSection/main-logo.png"}
                                />

                                <Link
                                    _hover={{ textDecor: 'none' }}
                                    href={AgendeUmaConsultaButtonData.href}
                                    target="_blank"
                                >
                                    <Button
                                        w='10rem'

                                        position={'absolute'}
                                        top={48}
                                        right={0}
                                        left={0}
                                        mx='auto'

                                        _hover={{bgColor:'teal.400', color:'white'}}

                                        boxShadow={'0 4 4 0 #000000'}
                                        bgColor={'light.400'}
                                        borderRadius={'2rem'}

                                        fontFamily={'Montserrat'}
                                        color={'rose.400'}
                                        fontSize={'0.75rem'}
                                    >
                                        <Flex
                                            alignItems={'center'}
                                            justifyItems={'center'}
                                            gap={'1rem'}
                                        >
                                            <Text>
                                                {mainSectionData.buttonCallAction}
                                            </Text>

                                        </Flex>
                                    </Button>
                                </Link>
                            </Flex>

                            {/* SUBTITLE */}
                            <Text
                                fontWeight={'100'}
                                fontFamily={'Montserrat'}
                                fontSize={['1rem', '1.25rem', '1.25rem', '4rem']}
                                lineHeight={['1rem', '1.25rem', '2rem', '4.8rem']}
                                pr={8}
                                textAlign={'left'}
                                color='light.400'
                            >
                                {mainSectionData.subTitle}
                            </Text>
                        </Flex>

                        <Flex
                            flexDir={'column'}
                            gap={6}
                        >

                            {/* BUTTON TITLE */}
                            <Text
                                fontWeight={'300'}
                                fontFamily={'Montserrat'}
                                fontSize={['1rem', '1.25rem', '1.25rem', '1.25rem']}
                                lineHeight={['1rem', '1.25rem', '2rem', '2rem']}
                                color='light.400'
                                w={['75%', '100%', '80%', '100%']}
                                pr={8}
                            >
                                {mainSectionData.subTitle2}
                            </Text>

                            {/* BUTTON CALL TO ACTION */}
                            <AgendeUmaConsultaButton
                                bgColor={'light.400'}
                                fontColor={'rose.400'}
                            />
                        </Flex>

                    </Flex>

                    <Link
                        href={'https://wa.me/5547997596191?text=Olá, tudo bem? Acessei o site da Dra. Sabrina Zanon e gostaria de mais informações!'}
                        target="_blank"
                        _hover={{ color: "#51ada8", textDecoration: "none" }}
                    >
                    </Link>
                </Flex>

                {/* FOTO DE PERFIL SABRINA */}
                <Flex
                    w='100%'
                    h='auto'
                    bgImage={"static/img/container_1/mainSection/main-sabrina.png"}
                    bgPos={'top'}
                    bgSize={'cover'}
                    borderRadius={'0px 0px 360px 360px'}
                >
                </Flex>
            </Flex>
        </Flex>
    )
}