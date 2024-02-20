import { Flex, Text } from "@chakra-ui/react";
import { commentsSectionData } from "../data";


export function Header() {

    return (
        <Flex
            w='100%'
            px={[8, 8, 12, 16, 16]}
            py={16}
            gap={8}
            maxW='1080px'
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={['column', 'column', 'column', 'row', 'row']}
        >

            <Flex
                textAlign={['center','center','center','left','left']}
            >
                <Text
                    fontFamily={'Poppins'}
                    fontSize={['2.5rem', '3.75rem', '3.75rem', '3.75rem', '3.75rem']}
                    lineHeight={['2.5rem', '3.75rem', '3.75rem', '3.75rem', '3.75rem']}
                    color={'rose.400'}
                    fontWeight={'100'}
                >
                    {commentsSectionData.title}
                </Text>
            </Flex>
            <Flex w='100%'>
                <Text
                    fontFamily={'Montserrat'}
                    fontSize={['1.25rem','1.75rem','1.75rem','1.25rem','1.25rem']}
                    lineHeight={'1.75rem'}
                    color={'dark.400'}
                    fontWeight={'300'}
                    textAlign={['center','center','center','left','left']}
                >
                    {commentsSectionData.subtitle}
                </Text>
            </Flex>

        </Flex>
    )
}