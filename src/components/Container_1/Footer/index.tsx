import { Button, Flex, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { InstagramLogo, WhatsappLogo, BookOpen, MapPin, FacebookLogo, ArrowRight } from "phosphor-react";
import { BiMapPin } from "react-icons/bi";
import { footerData } from "./data";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { useState } from "react";
import { AgendeUmaConsultaButtonData } from "../../AgendeUmaConsultaButton/data";

export function Footer() {

    const mapsUrls = footerData.mapsUrls
    const [map, setMap] = useState(mapsUrls[0].url)
    const [active, setActive] = useState(0)

    return (
        <Flex
            w='100%'
            bgColor={'rose.400'}
            color={'light.400'}

            flexDir={['column', 'column', 'column', 'column', 'row']}
            justifyContent={'center'}
            alignItems={'center'}

            gap={6}
            p={12}
        >

            {/* LOGO */}
            <Flex
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={8}
            >

                <Flex
                    borderBottom={'1px solid #F4F1EE'}
                >
                    <Image
                        src='static/img/container_1/footer/logo.png'
                        maxW={['20rem', '25rem', '25rem', '25rem', '25rem']}
                    />
                </Flex>

                <Flex
                    fontSize={'3.5rem'}
                    gap={2}
                    borderBottom={'1px solid #F4F1EE'}
                >
                    <Link
                        _hover={{ textDecor: 'none' }}
                        href={AgendeUmaConsultaButtonData.href}
                        target="_blank"
                    >
                        <Flex
                            cursor={'pointer'}
                            _hover={{ color: 'teal.400', transition: '600ms' }}
                        >
                            <WhatsappLogo weight="thin" />
                        </Flex>
                    </Link>

                    <Link
                        _hover={{ textDecor: 'none' }}
                        href={AgendeUmaConsultaButtonData.instagram}
                        target="_blank"
                    >
                        <Flex
                            cursor={'pointer'}
                            _hover={{ color: 'teal.400', transition: '600ms' }}
                        >
                            <InstagramLogo weight="thin" />
                        </Flex>
                    </Link>
                </Flex>

            </Flex>

            {/* Menu */}
            <Flex
                flexDir={['column', 'row', 'row', 'row', 'column']}
                alignItems={'flex-start'}
                p={[2, 8, 8, 8, 8]}
                gap={2}
            >
                <Flex
                    alignItems={'center'}
                    my={['initial', 'auto', 'auto', 'auto', 'initial']}
                    textAlign={'center'}
                    px={[2, 12, 12, 12, 0]}
                >
                    <Text
                        fontWeight={'100'}
                        fontFamily={'Poppins'}
                        fontSize={'2rem'}
                    >
                        Onde me encontrar?
                    </Text>
                </Flex>

                <Flex
                    flexDir={'column'}
                    alignItems={'flex-end'}
                    justifyContent={'center'}
                    w={['100%', '100%', '100%', 'initial', '100%']}
                    gap={4}
                >

                    {mapsUrls.map((clinic, index) => {

                        return (

                            <Flex
                                key={clinic.id}
                                onClick={() => {
                                    setMap(mapsUrls[index].url)
                                    setActive(index)
                                }}
                                alignItems={'center'}
                                justifyContent={'flex-end'}
                                cursor={'pointer'}
                                _hover={{ fontWeight: '600' }}
                                fontWeight={active === index ? '600' : '300'}
                                w='100%'
                                gap={1}
                            >
                                {active === index ?
                                    <Flex>
                                        <Image
                                            src='static/img/container_1/footer/arrow-right.png'
                                        />

                                        {/* <ArrowRight weight={active === index ? 'regular' : 'thin'} size={32} /> */}
                                    </Flex>
                                    :
                                    ''
                                }

                                <Flex
                                // w='100%'
                                >
                                    <MapPin weight={active === index ? 'regular' : 'thin'} size={32} />
                                </Flex>

                                <Flex
                                    w='8rem'
                                >
                                    <Text
                                        fontSize={'1.5rem'}
                                    >
                                        {clinic.name}
                                    </Text>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Flex>

            </Flex>

            {/* MAPS */}
            <Flex>
                <Flex
                    w={['95vw', '90vw', '90vw', '90vw', '32rem']}
                    h='22rem'
                    p={4}
                >
                    <iframe src={map}
                        style={{ borderRadius: '80px 80px 80px 5px' }} width="100%" height="100%" loading="lazy" />
                </Flex>

            </Flex>


        </Flex>
    )
}