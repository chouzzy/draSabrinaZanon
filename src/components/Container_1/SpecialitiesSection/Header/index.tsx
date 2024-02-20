import { Flex, Text } from "@chakra-ui/react";
import { specialitiesSectionsData } from "../data";

export function Header() {



    return (

        <Flex
            flexDir={'column'}
            maxW='720px'
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={["center","center","center","left","left"]}
            py={12}
        >
            {/* title */}
            <Flex>
                <Text
                    color={'dark.400'}
                    fontFamily={'poppins'}
                    fontWeight={'100'}
                    fontSize={'2.75rem'}
                    lineHeight={'3rem'}
                >
                    {specialitiesSectionsData.title}
                </Text>
            </Flex>
            {/* subtitle */}
            <Flex>
                <Text
                    color={'dark.400'}
                    fontFamily={'Montserrat'}
                    fontWeight={'300'}
                    fontSize={'1.25rem'}
                    lineHeight={'1.75rem'}
                    textAlign={'center'}
                >
                    {specialitiesSectionsData.subTitle}
                </Text>
            </Flex>
        </Flex>

    )
}