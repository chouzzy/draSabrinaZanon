import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { mainSectionData } from "./data";


export function MainSection() {

    return (
        <Flex
            w='100%'
            h='100%'
            bgImage='static/img/container_1/mainSection/main-larissa.png'
            bgRepeat={'no-repeat'}
            bgPos={'bottom right'}
            bgSize={'contain'}
            mt={['0px', '2rem', '2rem', '2rem']}
        >
            <Flex
                w='100%'
                h='100%'
                bgImage='static/img/container_1/mainSection/main-waves.png'
                bgRepeat={'no-repeat'}
                bgPos={'bottom'}
                bgSize={'contain'}
            >
                <Flex
                    w='100%'
                    h={['100%', '100%', '100%', '50rem']}
                    ml={['0rem', '1rem', '1rem', '5rem']}
                    bgImage='static/img/container_1/mainSection/face-art-2.png'
                    bgRepeat={'no-repeat'}
                    bgPos={['right top', 'center top', 'center top', 'center top']}
                    bgSize={['0%', '72%', '42%', '36%']}
                >
                    <Flex
                        flexDir={'column'}
                        w='100%'
                        h='100%'
                        gap={[6, 12, 8, 8]}
                        p={[2, 2, 0, 0]}
                        justifyContent={'space-between'}

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
                                fontSize={['1rem', '1.25rem', '1.25rem', '1.25rem']}
                                lineHeight={['1rem', '1.25rem', '2rem', '2rem']}
                                w={['75%', '100%', '80%', '100%']}
                            >
                                {mainSectionData.subTitle}
                            </Text>
                            <Text
                                fontWeight={'500'}
                                fontSize={['1rem', '1.25rem', '1.25rem', '1.25rem']}
                                lineHeight={['1rem', '1.25rem', '2rem', '2rem']}
                                color='brown.600'
                                w={['75%', '100%', '80%', '100%']}
                                pr={8}
                            >
                                {mainSectionData.subTitle2}
                            </Text>
                        </Flex>

                        <Link
                            href={'https://wa.me/5547997596191?text=Olá, tudo bem? Acessei o site da Dra. Larissa Kuhnen e gostaria de mais informações!'}
                            target="_blank"
                            _hover={{ color: "#51ada8", textDecoration: "none" }}
                        >
                    
                        <Button
                            w={['18rem', '20rem', '30rem', '30rem']}
                            h={['4rem', '4rem', '5rem', '5rem']}
                            fontWeight={'600'}
                            fontSize={['1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                            lineHeight={'2.25rem'}
                            bgColor='teal.500'
                            color='backgroundLight'
                            borderRadius={8}
                            boxShadow={'0px 4px 4px 0 #00000044'}
                            mt={[0, 60, 60, 12]}
                            mb={[8, 12, 24, 12]}
                            mx='auto'

                            _hover={{ color: "teal.400", bg: 'backgroundLight' }}
                        >
                            {mainSectionData.buttonCallAction}
                        </Button>
                        </Link>
                    </Flex>
                    <Flex w={['0%', '100%', '80%', '100%']} ></Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}