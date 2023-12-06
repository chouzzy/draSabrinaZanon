import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { videoSectionData } from "./data";


export function VideoSection() {

    return (
        <Flex
            w='100%'
            bgColor={'beige.100'}
            px={['1rem', '1rem', '3rem', '3rem']}
            flexDir={['column', 'column', 'column', 'column', 'row']}
            gap={[8, 8, 0, 0]}
            mt="-1px"
            pt={[12, 12, 12, 12, 0]}
            
        >
            <Flex
                w={['100%', '100%', '100%', '100%', '100%']}
                minH={['16rem', '16rem', '24rem', '24rem']}
                bgImage={'static/img/container_1/videoSection/video-background.png'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
            >

            </Flex>
            
            <Flex
                flexDir={['column']}
                w='100%'

                gap={[12, 12, 8, 8]}
                p={[2, 2, 2, 2, 0]}
                textAlign={['left', 'left', 'left', 'left', 'right']}
            >
                <Flex
                    fontWeight={'700'}
                    fontSize={['2rem', '2em', '2.5rem', '2.5rem']}
                    lineHeight={['2.25rem', '2.25rem', '3.75rem', '3.75rem']}
                    color='backgroundLight'
                >
                    {videoSectionData.title}
                </Flex>

                <Text
                    fontWeight={'400'}
                    color='backgroundLight'
                    fontSize={['1.25rem', '1.25rem', '1.25rem', '1.25rem']}
                    lineHeight={['1.25rem', '1.25rem', '2rem', '2rem']}
                >
                    {videoSectionData.subTitle}
                </Text>

                <Button
                    w={['18rem', '20rem', '20rem', '25rem', '32rem']}
                    h={['4rem', '4rem', '4rem', '4rem']}
                    ml={['0', '0', '0', '0', 'auto']}
                    mr={['auto', 'auto', '0', '0', '0']}
                    fontWeight={'600'}
                    fontSize={['1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                    lineHeight={'2.25rem'}
                    bgColor='teal.500'
                    color='backgroundLight'
                    borderRadius={8}
                    boxShadow={'0px 4px 4px 0 #00000044'}
                    _hover={{ color: "teal.400", bg: 'backgroundLight' }}

                >
                    {videoSectionData.buttonCallAction}
                </Button>
            </Flex>

        </Flex>
    )
}