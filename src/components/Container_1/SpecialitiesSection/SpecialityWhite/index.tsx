import { Flex } from "@chakra-ui/react";


interface SpecialityWhiteProps {
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export function SpecialityWhite({ title, description }: SpecialityWhiteProps) {

    return (

        <Flex
            flexDir={'column'}
            w='100%'
            alignItems={'center'}
            py={12}
            borderRadius={6}
            boxShadow={'0px 4px 24px 0 #0000001A'}
        >
            {/* Title */}
            <Flex
                w='100%'
            >
                <Flex
                    bgColor={'#65BFBBA6'}
                    mx='auto'
                >
                    <Flex
                        fontWeight={'600'}
                        color='backgroundLight'
                        fontSize={['1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                        lineHeight={['1.5rem', '1.5rem', '2.25rem', '2.25rem']}
                        border={'2px solid #51ADA8'}
                        mt='-2'
                        ml='-2'
                        mb={2}
                        mr={2}
                        p={2}
                    >
                        {title}
                    </Flex>
                </Flex>
            </Flex>
            {/* Paragraph */}
            <Flex
                fontWeight={'400'}
                color='beige.700'
                fontSize={['1rem', '1rem', '1.25rem', '1.25rem']}
                lineHeight={['1.5rem', '1.5rem', '1.875rem', '1.875rem']}
                p={'2.5rem'}
            >
                {description}
            </Flex>

        </Flex>
    )
}