import { Container, Divider, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { } from "react-icons/bi";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { commentsSectionData } from "../data";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards]);

export function Carousel_2() {

    const depos = commentsSectionData.depoiments

    const [currentSlide, setCurrentSlide] = useState(0)
    const [name, setName] = useState(depos[0].name)
    const [label, setLabel] = useState(depos[0].label)
    const [depoiment, setDepoiment] = useState(depos[0].depoiment)
    const [image, setImage] = useState(depos[0].image)

    async function setSlide(slide: number) {

        setName(depos[slide].name)
        setLabel(depos[slide].label)
        setDepoiment(depos[slide].depoiment)
        setImage(depos[slide].image)

        return
    }

    useEffect(() => {
        setSlide(currentSlide)
    }, [currentSlide])

    return (
        <Flex
            w='100%'
            h='100%'


            zIndex="0"
            flexDir={'row'}

            alignItems={'center'}
            justifyContent={'center'}
        >



            <Flex
                // p={[0, 0, 2, 2]}
                maxW={['100vw', '100vw', '100vw', '840px', '1080px']}
                position='relative'
            >

                {/* PETAL LEFT */}
                <Flex
                    w={['6rem', '6rem', '8rem', '10rem', '12rem']}
                    h={['6rem', '6rem', '8rem', '10rem', '12rem']}
                    position={'absolute'}
                    left={['1rem', '-2rem', '2rem', '-2rem', '-3rem']}
                    top={['-1rem', '-3rem', '-4rem', '-4rem', '0rem']}
                    bgColor={'rose.400'}
                    opacity={'32%'}
                    border={'6px solid #9E7E6F'}
                    borderRadius={'0px 95px  95px 95px'}
                    zIndex={0}

                >
                </Flex>

                <Flex
                    flexDir={['column', 'column', 'column', 'column', 'row']}
                    h='100%'
                    zIndex={1}
                >

                    {/* IMAGEM */}
                    <Flex
                        w='100%'
                    >
                        <Image
                            src={image}
                            h={['16rem', '20rem', '32rem', '32rem', '100%']}
                            w='100%'
                            px={[8, 8, 24, 8, 8]}
                            objectFit={'cover'}
                            objectPosition={'top'}
                            borderRadius={[
                                '64px',
                                '64px',
                                '64px',
                                '64px',
                                '240px 240px 0px 0px'
                            ]}
                        />
                    </Flex>

                    <Flex
                        flexDir={'column'}
                        w='100%'
                        px={[8, 8, 24, 4, 4]}
                        pt={16}
                    >
                        <Flex
                            flexDir={'column'}
                        >


                            <Flex>
                                <Text
                                    fontFamily={'Montserrat'}
                                    fontSize={['1.75rem', '1.75rem', '2rem', '2.5rem', '2.5rem']}
                                    fontWeight={'600'}
                                >
                                    {name}
                                </Text>
                            </Flex>

                            <Flex>
                                <Text
                                    fontFamily={'Montserrat'}
                                    fontSize={'1.25rem'}
                                    fontWeight={'300'}
                                >
                                    {label}
                                </Text>
                            </Flex>

                            <Flex
                                pb={2}
                            >
                                <Text
                                    fontFamily={'Montserrat'}
                                    fontSize={['0.875rem','1rem','1rem','1rem','1rem']}
                                    fontWeight={'400'}
                                    fontStyle={'italic'}
                                    py={8}
                                    h='100%'
                                    minH={['18rem','14rem','14rem','10rem','20rem']}
                                    borderBottom={'1px solid #00000033'}
                                >
                                    {depoiment}
                                </Text>
                            </Flex>
                        </Flex>
                        
                        <Flex
                            mt='auto'
                        >
                            <Flex
                                flexDir={'row'}
                            >
                                {/* SETA PRA ESQUERDA */}
                                <Flex
                                    _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                                    color="rose.400"
                                    fontWeight={'200'}
                                    cursor={'pointer'}
                                    onClick={() => {
                                        if (currentSlide > 0) {
                                            setCurrentSlide(currentSlide - 1)

                                        } else {
                                            setCurrentSlide(depos.length - 1)
                                        }

                                    }}
                                >
                                    <CaretCircleLeft
                                        size={68}
                                        weight="thin"
                                    />
                                </Flex>

                                {/* SETA PRA DIREITA */}
                                <Flex
                                    _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                                    color="rose.400"
                                    fontWeight={'200'}
                                    cursor={'pointer'}
                                    onClick={() => {
                                        if (depos.length - 1 > currentSlide) {
                                            setCurrentSlide(currentSlide + 1)

                                        } else {
                                            setCurrentSlide(0)
                                        }

                                    }}
                                >
                                    <CaretCircleRight
                                        size={68}
                                        weight="thin"
                                    />
                                </Flex>
                            </Flex>
                            <Flex
                                color={'beige.100'}
                                ml='auto'
                                gap={4}
                            >
                                <Image
                                    src='static/img/container_1/commentsSection/quote.png'
                                    // w={[24, 32, 32, 32, '100%']}
                                    h={[24, 32, 32, 32, 16]}
                                />
                                <Image
                                    src='static/img/container_1/commentsSection/quote.png'
                                    h={[24, 32, 32, 32, 16]}
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>



        </Flex>
    )
}