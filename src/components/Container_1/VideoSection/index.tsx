import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { videoSectionData } from "./data";
import { AgendeUmaConsultaButton } from "../../AgendeUmaConsultaButton";


export function VideoSection() {

    return (
        <Flex
            w='100%'
            maxW='1920px'
            bgColor={'light.400'}
            flexDir={'column'}
            py={16}
            gap={12}
        >
            <Flex
                flexDir={'column'}
                maxW='76rem'
                px={[8,24,24,24,24]}
                py={4}
                mx='auto'
                gap={20}
            >



                {/* Container 1 */}
                <Flex
                    flexDir={'column'}
                    mx='auto'
                    w='100%'
                    gap={6}
                >


                    {/* TÍTULO */}
                    <Flex
                        justifyContent={'center'}
                    >
                        <Text
                            color={'rose.600'}
                            fontSize={['2.25rem','2.75rem','2.75rem','2.75rem','2.75rem']}
                            fontWeight={'600'}
                            lineHeight={['2.5rem','3.5rem','3.5rem','3.5rem','3.5rem']}
                            fontFamily={'Montserrat'}
                        >
                            {videoSectionData.title}
                        </Text>
                    </Flex>

                    {/* VIDEO */}
                    <Flex
                        position={'relative'}
                        w='100%'
                        p={0}
                    >

                        {/* CIRCLE 1 */}
                        <Flex
                            w={['6rem','6rem','8rem','10rem','12rem']}
                            h={['6rem','6rem','8rem','10rem','12rem']}
                            position={'absolute'}
                            left={['0rem','-3rem','-4rem','-5rem','-6rem']}
                            top={['-3rem','-3rem','-4rem','-5rem','-6rem']}
                            bgColor={'rose.400'}
                            opacity={'32%'}
                            border={'6px solid #9E7E6F'}
                            borderRadius={'95px 0px 95px 95px'}
                        >
                        </Flex>
                        {/* CIRCLE 2 */}
                        <Flex
                            w={['6rem','6rem','8rem','10rem','12rem']}
                            h={['6rem','6rem','8rem','10rem','12rem']}
                            position={'absolute'}
                            right={['0rem','-3rem','-4rem','-5rem','-6rem']}
                            bottom={['-3rem','-3rem','-4rem','-5rem','-6rem']}
                            bgColor={'rose.400'}
                            opacity={'32%'}
                            border={'6px solid #9E7E6F'}
                            borderRadius={'95px 95px 95px 95px'}
                        >

                        </Flex>

                        {/* BACKGROUND VIDEO */}
                        <Flex
                            w='100%'
                            h={['300px','300px','528px','528px','528px']}
                            zIndex={1}
                            bgSize={'cover'}
                            bgPos={'center'}
                            bgImage={'static/img/container_1/videoSection/video-background.png'}
                        >

                        </Flex>

                    </Flex>

                </Flex>






                {/* Container 2 */}
                <Flex
                    flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
                    w='100%'
                    alignItems={'center'}
                    gap={12}
                >

                    {/* Imagem mãe e filho */}
                    <Flex
                        bgImage={'static/img/container_1/videoSection/mom-kid-doctor.png'}
                        bgSize={'cover'}
                        bgPos={'center'}
                        h={['420px','420px','528px','528px','528px']}
                        borderRadius={'0px 0px 240px 240px'}
                        w='100%'
                    >
                    </Flex>


                    {/* Textos */}
                    <Flex
                        flexDirection={'column'}
                        w={'100%'}
                        p={[0,0,0,0,12]}
                        gap={8}
                    >

                        <Flex
                            color={'dark.400'}
                            fontFamily={'poppins'}
                            fontWeight={'100'}
                            fontSize={'2.75rem'}
                            lineHeight={'3rem'}
                        >
                            {videoSectionData.subTitle}
                        </Flex>

                        <Flex
                            color={'dark.400'}
                            fontFamily={'Montserrat'}
                            fontWeight={'300'}
                            fontSize={'1.25rem'}
                            lineHeight={'1.5rem'}
                        >
                            {videoSectionData.subTitle2}
                        </Flex>

                        <Flex
                        mx={['auto','auto','auto','auto','initial']}
                        >
                            <AgendeUmaConsultaButton
                                bgColor="brown.400"
                                fontColor="light.400"
                                
                        />
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}