import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
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
import { Header } from "../Header";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCards]);

export function Carousel_1() {

    const slides = useBreakpointValue({
        base: 1,
        sm: 1,
        md: 1,
        lg: 2,
        xl: 3
    })

    const carouselRef_1 = useRef(null);


    return (
        <Flex
            flexDir='column'
        >
            <Header />
            < Flex
                w='100%'
                h='100%'

                zIndex="0"
                flexDir={'row'}

                alignItems={'center'}
                justifyContent={'center'}
            >

                <Flex
                    alignItems={'center'}
                >
                    <Flex
                        _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                        color="backgroundDark"
                        cursor={'pointer'}
                        onClick={() => carouselRef_1.current.slidePrev()}
                    >
                        <CaretCircleLeft
                            size={68}
                            weight="thin"
                        />
                    </Flex>
                </Flex>

                <Flex
                    // p={[0, 0, 2, 2]}
                    maxW={['64vw', '64vw', '64vw', '80vw', '1080px']}
                >
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={slides}
                        loop

                        cardsEffect={{
                            perSlideOffset: 8,
                            perSlideRotate: 2,
                            rotate: true,
                            slideShadows: true
                        }}
                        onSwiper={(swiper) => (carouselRef_1.current = swiper)}
                    >
                        {
                            commentsSectionData.carrousel.map(slide => {
                                return (
                                    <SwiperSlide key={1}>

                                        <Flex>

                                            <Flex
                                                flexDir={'column'}
                                                mx='auto'
                                            >
                                                <Image
                                                    src={slide.image}
                                                    h='29rem'
                                                    w='21rem'
                                                    objectFit={'cover'}
                                                    objectPosition={'center'}
                                                    borderRadius={'11rem'}
                                                />
                                            </Flex>

                                        </Flex>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </Flex>

                <Flex
                    alignItems={'center'}
                >
                    <Flex
                        _hover={{ color: "teal.400", transitionDuration: '500ms' }}
                        color="backgroundDark"
                        cursor={'pointer'}
                        onClick={() => carouselRef_1.current.slideNext()}
                    >
                        <CaretCircleRight
                            size={68}
                            weight="thin"
                        />
                    </Flex>
                </Flex>

            </Flex >
        </Flex>
    )
}