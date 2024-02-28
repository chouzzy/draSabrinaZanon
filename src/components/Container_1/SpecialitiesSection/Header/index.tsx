import { Flex, Text } from "@chakra-ui/react";
import { specialitiesSectionsData } from "../data";

export function Header() {



    return (

        <Flex
            flexDir={'column'}
            maxW='1920px'
            w='100%'
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
                    fontSize={'3rem'}
                    lineHeight={'3rem'}
                >
                    {specialitiesSectionsData.title}
                </Text>
            </Flex>
            {/* subtitle */}
            <Flex
                px={[8,8,8,12,12]}
                pt={12}
                w='100%'
            >
                <Text
                    color={'dark.400'}
                    fontFamily={'Montserrat'}
                    fontWeight={'300'}
                    fontSize={'1.25rem'}
                    lineHeight={'1.85rem'}
                    textAlign={['justify','justify','justify','center','center']}
                >
                    {specialitiesSectionsData.subTitle}
                </Text>
            </Flex>
        </Flex>

    )
}