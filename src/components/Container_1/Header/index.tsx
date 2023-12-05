import { Flex, Image, Text } from "@chakra-ui/react";
import { headerData } from "./data";


export function Header() {
    return (
        <Flex
            w='100%'
            px={['0.5rem','1rem','3rem','5rem']}
        >
            <Flex
                w='100%'
                mt={['','','1rem','1rem']}
                justifyContent={'space-between'}
                borderBottom={'1px solid #96989A'}
            >

                <Flex
                    gap={4}
                >
                    <Flex>
                        <Image
                            src="static/img/container_1/header/logo.png"
                            maxH={['80%','100%','100%','100%']}
                            alt='logo-principal-dra.larissa'
                        />
                    </Flex>

                    <Flex
                        flexDir="column"
                        justifyContent={'center'}
                    >
                        <Text
                            fontSize={['0.875rem','2rem','2rem','2rem']}
                            color={'beige.700'}
                            fontWeight={'500'}
                        >
                            {headerData.drName}
                        </Text>
                        <Text
                            fontSize={['0.75rem','2rem','1.5rem','1.5rem']}
                            color={'brown.600'}
                            fontWeight={'300'}
                        >
                            {headerData.profession}
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    alignItems={'center'}
                    gap={[1,4,4,4]}
                >
                    <Text
                        color={'brown.300'}
                        fontSize={['0.5rem','1rem','1rem','1rem']}
                    >
                        {headerData.conselhoRegional}
                    </Text>
                    <Image
                        boxSize={['2rem','2rem','3rem','3rem']}
                        src='static/img/container_1/header/instagram-logo.png'
                        alt='logo-instagram'
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}