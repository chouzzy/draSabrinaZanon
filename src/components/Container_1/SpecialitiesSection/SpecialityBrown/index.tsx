import { Flex } from "@chakra-ui/react";
import { specialitiesSectionsData } from "../data";


interface SpecialityBrownProps {
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export function SpecialityBrown({title, description}: SpecialityBrownProps) {

    return (
        <Flex
            flexDir={'column'}
            w='100%'
            py={12}
            alignItems={'center'}
            bgColor={'beige.100'}
            borderRadius={6}
        >
            {/* Title */}
            <Flex
                w='100%'
                px={[12,12,6,0]}
            >
                <Flex
                    bgColor={'#FEFEFEA6'}
                    mx='auto'
                >
                    <Flex
                        fontWeight={'600'}
                        color='brown.600'
                        fontSize={['1.25rem', '1.25rem', '1.5rem', '1.5rem']}
                        lineHeight={['1.5rem', '1.5rem', '2.25rem', '2.25rem']}
                        border={'2px solid #FEFEFE'}
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
                w='100%'
                fontWeight={'400'}
                color='backgroundLight'
                fontSize={['1rem', '1rem', '1.125rem', '1.125rem']}
                lineHeight={['1.5rem', '1.5rem', '1.875rem', '1.875rem']}
                p={'2.5rem'}
            >
                {description}
            </Flex>

        </Flex>
    )
}