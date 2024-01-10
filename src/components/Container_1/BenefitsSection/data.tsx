import { Flex } from "@chakra-ui/react"


const benefitsSectionData = {
    benefits: [
        {
            id: 1,
            benefit_title: 'Invisibilidade Poderosa',
            benefit_details: 'Desfrute de um sorriso em transformação sem a presença visível de aparelhos tradicionais.',
        },
        {
            id: 2,
            benefit_title: 'Liberdade sem restrições',
            benefit_details: 'Removíveis para comer, escovar OS DENTES e passar fio dental, mantendo a sua rotina sem limitações.',

        },
        {
            id: 3,
            benefit_title: 'Conforto Inigualável',
            benefit_details: 'Alinhadores suaves e personalizados, proporcionando uma experiência de uso confortável.',
        },
        {
            id: 4,
            benefit_title: 'Eficiência rápida e precisa',
            benefit_details: 'Tecnologia avançada para resultados eficazes, guiando seu tratamento de forma rápida e precisa.',
        },
        {
            id: 5,
            benefit_title: 'Confiança inabalável',
            benefit_details: 'Transforme sua autoestima enquanto trabalhamos discretamente para criar o sorriso dos seus sonhos.'
        },

    ],
    title:
        <Flex display={'inline'}>
            Por que eu deveria escolher o
            <Flex display={'inline'} color={'teal.400'}>
                {" "} Invisalign? {" "}
            </Flex>
        </Flex>,
}



export { benefitsSectionData }