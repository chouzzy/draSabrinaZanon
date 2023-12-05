import { Button, Flex, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { InstagramLogo, WhatsappLogo, BookOpen, MapPin } from "phosphor-react";
import { BiMapPin } from "react-icons/bi";


export function Footer() {

    return (
        <Flex
            w='100%'
            bgColor={'beige.100'}
            flexDir={['column', 'column', 'column', 'column', 'row']}
            py={16}
            px={[6,4,16,16]}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={6}

        >

            <Flex
                flexDir={'column'}
                color='backgroundLight'
                gap={[4, 4, 12, 12]}
            >

                <Flex
                    flexDir={['column', 'column', 'row', 'row']}
                    alignItems={['center', 'center', 'left', 'left']}
                >
                    <Flex>
                        <Image src="static/img/container_1/footer/logo.png" alt="Logo" />
                    </Flex>
                    <Flex
                        flexDir={'column'}
                        px={[0, 0, 4, 4]}
                    >
                        <Flex
                            fontSize={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
                        >
                            Dra. Larissa Kuhnen
                        </Flex>

                        <Flex
                            fontWeight={'300'}
                            fontSize={'1.125rem'}
                        >
                            Ortodontista | Invisalign Doctor
                        </Flex>
                        <Flex>CRO 11995</Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex
                        gap={1}
                        textAlign={'center'}
                    >
                        <Flex display='inline'>Copyright © 2023 All rights reserved. Produzido por  <Flex display={'inline'} color='#F55F5E'>  awer.co </Flex> </Flex>
                    </Flex>
                </Flex>
            </Flex>


            {/* Contatos */}
            <Flex
                flexDir={['column', 'column', 'column', 'row']}
                textAlign='center'
                alignItems={'center'}
                justifyContent={'center'}

                px={[0, 0, 8, 8]}

                gap={6}

            >

                <Flex
                    flexDir={'column'}
                    fontSize={['1.25rem','1.25rem','1.5rem','1.5rem']}
                    lineHeight={'2.25rem'}
                    fontWeight={['700','700','700','700']}
                    color={'backgroundLight'}
                    
                    gap={6}
                >

                    <Flex
                        justify={'space-between'}
                        gap={12}
                    >
                        <VStack>
                            <Flex>
                                Contato
                            </Flex>
                            <Flex
                                gap={4}
                            >
                                <InstagramLogo size={48} />
                                <WhatsappLogo size={48} />
                            </Flex>
                        </VStack>

                        <VStack>
                            <Flex>
                                Portfólio digital
                            </Flex>
                            <Flex>
                                <BookOpen size={48} />
                            </Flex>
                        </VStack>
                    </Flex>

                    <Flex
                        flexDir={'column'}
                    >
                        <Flex>
                            Onde me encontrar?
                        </Flex>
                        <Flex
                            fontSize={'1.125rem'}
                            fontWeight={'300'}
                            gap={[0,0,12,12]}
                        >
                            <Flex alignItems={'center'}>
                                <MapPin size={48} />
                                <Text>THE U.NIQ CLINIC</Text>
                            </Flex>
                            <Flex alignItems={'center'}>
                                <MapPin size={48} />
                                <Text>AMAYA</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>

            </Flex>

        </Flex>
    )
}