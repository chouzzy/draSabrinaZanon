import { Button, Flex, Link, Text } from "@chakra-ui/react"
import { BsArrowRight } from "react-icons/bs"
import { AgendeUmaConsultaButtonData } from "./data"


interface AgendeUmaConsultaButtonProps {
    bgColor: string,
    fontColor: string
}

export function AgendeUmaConsultaButton({ bgColor = 'light.400', fontColor = 'rose.400' }: AgendeUmaConsultaButtonProps) {


    return (
        <Link
        _hover={{textDecor:'none'}}
        href={AgendeUmaConsultaButtonData.href}
        target="_blank"
        >

            <Button
                w='18rem'
                h='3.75rem'
                boxShadow={'0 4 4 0 #000000'}
                bgColor={bgColor}
                borderRadius={'2rem'}
                fontFamily={'Montserrat'}
                color={fontColor}

            >
                <Flex
                    alignItems={'center'}
                    justifyItems={'center'}
                    gap={'1rem'}
                >
                    <Text>
                        Agende uma consulta
                    </Text>
                    <BsArrowRight />

                </Flex>
            </Button >
        </Link>
    )
}