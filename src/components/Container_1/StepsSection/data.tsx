import { Flex } from "@chakra-ui/react"


const stepsSectionData = {
    steps: [
        {
            id: 1,
            step_number: '1',
            step_details: 'Agende sua consulta para uma avaliação detalhada do seu caso',
        },
        {
            id: 2,
            step_number: '2',
            step_details: 'Durante a consulta será criado um planejamento especial para você',
        },
        {
            id: 3,
            step_number: '3',
            step_details: 'Com o aceite do planejamento e do orçamento passado, iniciaremos o seu tratamento',
        },
        {
            id: 4,
            step_number: '4',
            step_details: 'Seu sorriso é a celebração de uma jornada dedicada à autenticidade e, agora radiante, é uma conquista incrível!',
        }

    ],
    title:
        <Flex display={'inline'}>
            Comece a transformação agora!
        </Flex>,
}



export { stepsSectionData }