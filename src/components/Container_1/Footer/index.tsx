import { Button, Flex, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { InstagramLogo, WhatsappLogo, BookOpen, MapPin, FacebookLogo } from "phosphor-react";
import { BiMapPin } from "react-icons/bi";
import { footerData } from "./data";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

export function Footer() {

    return (
        <Flex
            w='100%'
            bgColor={'beige.100'}
            flexDir={['column', 'column', 'column', 'column', 'row']}
            py={16}
            px={[6, 4, 16, 16]}
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
                            {footerData.info.dr_name}
                        </Flex>

                        <Flex
                            fontWeight={'300'}
                            fontSize={'1.125rem'}
                        >
                            {footerData.info.dr_role}
                        </Flex>
                        <Flex>
                            {footerData.info.dr_code}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex
                        gap={1}
                        textAlign={'center'}
                    >
                        <Flex display='inline' gap={1}>
                            {footerData.info.copyright}
                            <Flex display={'inline'} color='#F55F5E'>
                                <Link href='https://awer.co' target="_blank" _hover={{ textDecoration: "none" }}>
                                    {" "}{footerData.info.awer}
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>


            {/* Contatos */}
            <Flex
                flexDir={['column', 'column', 'column', 'row']}
                textAlign='center'
                alignItems={['center', 'left', 'left', 'center']}
                justifyContent={['center', 'left', 'left', 'center']}
                w={['100%', '100%', '100%', "auto"]}

                px={[0, 0, 8, 8]}

                gap={6}

            >

                <Flex
                    flexDir={'column'}
                    fontSize={['1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                    lineHeight={'2.25rem'}
                    fontWeight={['700', '700', '700', '700']}
                    color={'backgroundLight'}

                    gap={6}
                >

                    <Flex
                        justify={'space-between'}
                        gap={12}
                    >
                        <VStack>
                            <Flex w='100%'>
                                {footerData.sideMenu.contact}
                            </Flex>
                            <Flex
                                gap={4}

                            >
                                <Link
                                    href={'https://www.instagram.com/dra.larissakuhnen/'}
                                    target="_blank"
                                    borderRadius={12}
                                    bgGradient={`linear(to-tr, #f9ce34,#ee2a7b ,#6228d7 )`}
                                    _hover={{
                                        color: '#e8af9c', // Inverte o gradiente no hover
                                        transition: '500ms',
                                    }}
                                >
                                    <FaInstagram size={48} />
                                </Link>
                                <Link
                                    href={'https://wa.me/5547997596191?text=Olá, tudo bem? Acessei o site da Dra. Larissa Kuhnen e gostaria de mais informações!'} target="_blank"
                                    color={'whatsapp'}
                                    bg='white'
                                    borderRadius={8}
                                    _hover={{ color: "#e8af9c", transition: '500ms' }}
                                >
                                    <FaWhatsappSquare size={48} />
                                </Link>
                                <Link
                                    href={'https://www.facebook.com/dralarissakuhnen/'} target="_blank"
                                    color='facebook'
                                    bg='white'
                                    borderRadius={8}
                                    _hover={{ color: "#e8af9c", transition: '500ms' }}
                                >
                                    <FaFacebookSquare size={48} />
                                </Link>
                            </Flex>
                        </VStack>
                    </Flex>

                    <Flex
                        flexDir={'column'}
                    >
                        <Flex>
                            {footerData.sideMenu.findMe}
                        </Flex>
                        <Flex
                            fontSize={'1.125rem'}
                            fontWeight={'300'}
                            gap={[0, 0, 12, 12]}

                        >
                            <Link
                                href={'https://www.google.com/maps/place/The+U.NIQ+Clinic+%26+Instituto/@-23.5752616,-46.6590215,15z/data=!4m2!3m1!1s0x0:0x8fd3d699e66e562?sa=X&ved=2ahUKEwirh6qmk_mCAxXflZUCHVQbAkIQ_BJ6BAg6EAA'}
                                target="_blank"
                                _hover={{ color: "#51ada8", textDecoration: "none" }}
                            >
                                <Flex alignItems={'center'}>
                                    <MapPin color='#e31d25aa' size={48} />
                                    <Text >{footerData.sideMenu.location_clinic}</Text>
                                </Flex>
                            </Link>
                            <Link
                                href={'https://www.google.com/maps/place/Amaya+Medicina,+Odontologia+e+Sa%C3%BAde+-+Dra+Mara+Lucia+Mafra+-+M%C3%A9dica+Nutr%C3%B3loga+e+Dra+Larissa+Kuhnen+-+Ortodontista/@-26.9533174,-48.6421676,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cb69c329fb87:0x7bfb7140e6b51005!8m2!3d-26.9533222!4d-48.6395927!16s%2Fg%2F11trrwr0_t?entry=ttu'}
                                target="_blank"
                                _hover={{ color: "#51ada8", textDecoration: "none" }}
                            >

                                <Flex alignItems={'center'}>
                                    <MapPin color='#e31d25aa' size={48} />
                                    <Text>{footerData.sideMenu.location_amaya}</Text>
                                </Flex>
                            </Link>
                        </Flex>
                    </Flex>

                </Flex>

            </Flex>

        </Flex>
    )
}