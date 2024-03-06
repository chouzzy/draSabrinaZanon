import { Flex, Input, VStack, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, FormControl, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AgendeUmaConsultaButtonData } from "./AgendeUmaConsultaButton/data";


export default function WhatsButton() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [linkDisable, SetLinkDisable] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (name.length > 1 && number.length > 10) {
            SetLinkDisable(false)
        } else {
            SetLinkDisable(true)
        }
    }, [name, number])

    function RedirectContact(name, number) {

        if (typeof window !== "undefined") {
            router.push({
                pathname: "obrigado-whatsapp",
                query: {
                    name: name,
                    number: number
                }
            })
        }
        return
    }

    return (
        <>

            <Link
                _hover={{ textDecor: 'none' }}
                href={AgendeUmaConsultaButtonData.href}
                target="_blank"
            >

                <Flex bg='#25D366' color="#fffafa"
                    fontSize='1.8rem' borderRadius={'full'} p={4}
                    position='fixed' bottom={8} right={8}
                    _hover={{ transition: ' 400ms', fontSize: '2.4rem' }}
                    cursor='pointer'>
                    <Flex>
                        <BsWhatsapp />
                    </Flex>

                </Flex>
            </Link>
        </>
    )
}
