import { Flex } from "@chakra-ui/react"


const aboutSectionData = {
    about: {
        paragraph_1: {
            text: 'A Odontologia começou a fazer parte da minha vida ainda na infância. Inspirada pela minha própria Ortodontista e o fato de passar um bom tempo com aparelhos nos dentes, fez despertar em mim a vontade pela profissão.',
        },
        paragraph_2: {
            text: 'Sou Dentista desde 2011 e especialista em Ortodontia e Ortopedia Funcional dos Maxilares. Desde então, dei sequência em outras duas Pós-Graduações, vários cursos e atualizações, sempre buscando o melhor e mais moderno que existe na Odontologia para os meus pacientes.',
        },
        paragraph_3: {
            text: 'A odontologia me permite transformar vidas, através de um sorriso bonito e funcionalmente saudável, é possível resgatar a autoconfiança, a autoestima, a liberdade de sorrir e alcançar uma qualidade de vida que integra a saúde com o olha para o todo.',
        },
        paragraph_4: {
            text: 'A saúde bucal anda lado a lado com a saúde geral e uma vida plena é conquistada através do olhar físico - mental - espiritual.',
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
            text: 'Dra. Larissa é uma profissional notável na área da saúde, moldou sua carreira com uma formação educacional robusta e especializações que refletem seu comprometimento com a excelência. Graduada em Odontologia e especialista em Ortodontia e Ortopedia Funcional dos maxilares.',
        },
        paragraph_2: {
            text: 'Possui Pós-Graduação em Redes de Atenção à Saúde e em Ortodontia com Alinhadores. Cursos e Atualizações em diversas áreas como Resinas Compostas, Aparelhos Ortopédicos e Funcionais, Ortodontia na Técnica Ricketts, Preenchimento Labial e Toxina Botulínica, Credenciamento em Sistemas Invisalign e ClearCorrect, Ozonioterapia na Odontologia, Terapia Neural e Odontologia Neurofocal.',
        },
        paragraph_3: {
            text: 'Entre outras formações, ela personifica a excelência em educação continuada, proporcionando aos pacientes cuidados baseados nas últimas inovações e práticas. Sua trajetória reflete o compromisso com a qualidade e a busca incessante pela evolução profissional. Além disso, vive o seu propósito de vida auxiliando na formação de novos profissionais e transformando a vida dos seus pacientes através do cuidado genuíno e da responsabilidade em entregar os melhores e mais atuais serviços.',
        }

    },

}



export { aboutSectionData }