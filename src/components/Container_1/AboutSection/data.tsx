import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react"
import { Check } from "phosphor-react"


const aboutSectionData = {
    about: {
        paragraph_1: {
            text: 'A Odontologia começou a fazer parte da minha vida ainda na infância. Inspirada pela minha própria Ortodontista e o fato de passar um bom tempo com aparelhos nos dentes, fez despertar em mim a vontade pela profissão.',
        },
        paragraph_2: {
            text: 'Sou Dentista desde 2011 e especialista em Ortodontia e Ortopedia Funcional dos Maxilares. Desde então, dei sequência em outras duas Pós-Graduações, vários cursos e atualizações, sempre buscando o melhor e mais moderno que existe na Odontologia para os meus pacientes.',
        },
        paragraph_3: {
            text: 'Essa profissão me permite transformar vidas, através de um sorriso bonito e funcionalmente saudável, é possível resgatar a autoconfiança, a autoestima, a liberdade de sorrir e alcançar uma qualidade de vida que integra a saúde com o olha para o todo.',
        },
        title:
            <Flex display={'inline'}>
                Sobre a Dra.
                <Flex display={'inline'} color={'teal.400'}>
                    {" "} Larissa Kuhnen {" "}
                </Flex>
            </Flex>,
    },
    education: {
        title:
            <Flex display={'inline'}>
                Formação
                <Flex display={'inline'} color={'teal.400'}>
                    {" "} profissional {" "}
                </Flex>
            </Flex>,

        paragraph_1: {
            text: 'Dra. Larissa é uma profissional notável na área da saúde, moldou sua carreira com uma formação educacional robusta e especializações que refletem seu comprometimento com a excelência. É graduada em Odontologia e especialista em Ortodontia e Ortopedia Funcional dos maxilares.',
        },
        paragraph_2: {
            text: 'Possui pós-graduação em Redes de Atenção à Saúde e em Ortodontia com Alinhadores. Além disso, possui cursos e atualizações em diversas áreas, como:',
            topics:
                <List py={2}>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Resinas compostas
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Aparelhos ortopédicos e funcionais
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Ortodontia na técnica de Ricketts
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Preenchimento labial e toxina botulínica
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Credenciamento nos sistemas Invisalign e ClearCorrect
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Ozonioterapia na odontologia
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Terapia neural
                    </ListItem>
                    <ListItem>
                        <ListIcon as={Check} color='green.500' />
                        Odontologia neurofocal
                    </ListItem>
                </List>
        },
        paragraph_3: {
            text: 'Entre outras formações, ela personifica a excelência em educação continuada, proporcionando aos pacientes cuidados baseados nas últimas inovações e práticas. Sua trajetória reflete o compromisso com a qualidade e a busca incessante pela evolução profissional. Além disso, vive o seu propósito de vida auxiliando na formação de novos profissionais e transformando a vida dos seus pacientes através do cuidado genuíno e da responsabilidade em entregar os melhores e mais atuais serviços.',
        }

    },

}



export { aboutSectionData }