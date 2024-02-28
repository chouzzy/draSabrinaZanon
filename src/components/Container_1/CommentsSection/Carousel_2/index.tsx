import { Container, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { } from "react-icons/bi";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { useRef } from "react";
import { commentsSectionData } from "../data";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards]);

export function Carousel_2() {

    const slides = useBreakpointValue({
        base: 1,
        sm: 1,
        md: 1,
        lg: 2,
        xl: 3
    })

    const carouselRef_2 = useRef(null);


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

                >
                </Flex>
            
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop

                    onSwiper={(swiper) => (carouselRef_2.current = swiper)}
                >
                    {
                        commentsSectionData.depoiments.map((slide, index) => {
                            return (
                                <SwiperSlide key={index}>

                                    <Flex
                                        flexDir={['column', 'column', 'column', 'column', 'row']}
                                        h='100%'
                                    >

                                        <Flex
                                            w='100%'
                                        >



                                            <Image
                                                src={slide.image}
                                                h={['100%', '100%', '32rem', '32rem', '100%']}
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
                                            <Flex>
                                                <Text
                                                    fontFamily={'Montserrat'}
                                                    fontSize={['2rem', '2rem', '2rem', '2.75rem', '2.75rem']}
                                                    fontWeight={'600'}
                                                >
                                                    {slide.name}
                                                </Text>
                                            </Flex>

                                            <Flex>
                                                <Text
                                                    fontFamily={'Montserrat'}
                                                    fontSize={'1.25rem'}
                                                    fontWeight={'300'}
                                                >
                                                    {slide.label}
                                                </Text>
                                            </Flex>

                                            <Flex>
                                                <Text
                                                    fontFamily={'Montserrat'}
                                                    fontSize={'1rem'}
                                                    fontWeight={'400'}
                                                    fontStyle={'italic'}
                                                    py={8}
                                                >
                                                    {slide.depoiment}
                                                </Text>
                                            </Flex>

                                            <Flex
                                                mt='auto'
                                            >
                                                <Flex
                                                    flexDir={'row'}
                                                >
                                                    <Flex
                                                        _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                                                        color="rose.400"
                                                        fontWeight={'200'}
                                                        cursor={'pointer'}
                                                        onClick={() => carouselRef_2.current.slidePrev()}
                                                    >
                                                        <CaretCircleLeft
                                                            size={68}
                                                            weight="thin"
                                                        />
                                                    </Flex>
                                                    <Flex
                                                        _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                                                        color="rose.400"
                                                        fontWeight={'200'}
                                                        cursor={'pointer'}
                                                        onClick={() => carouselRef_2.current.slideNext()}
                                                    >
                                                        <CaretCircleRight
                                                            size={68}
                                                            weight="thin"
                                                        />
                                                    </Flex>
                                                </Flex>
                                                <Flex
                                                    fontSize='16rem'
                                                    color={'beige.100'}
                                                    ml='auto'
                                                    gap={4}
                                                >
                                                    <Image
                                                        src='static/img/container_1/commentsSection/quote.png'
                                                        maxW={[24, 32, 32, 32, 32]}
                                                    />
                                                    <Image
                                                        src='static/img/container_1/commentsSection/quote.png'
                                                        maxW={[24, 32, 32, 32, 32]}
                                                    />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </Flex>



        </Flex>
    )
}