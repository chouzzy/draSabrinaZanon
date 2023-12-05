import { Flex } from "@chakra-ui/react";



const commentsSectionData = {
    title:
        <Flex display={'inline'} >
            Sorrisos
            <Flex display={'inline'} color={'teal.400'}>
                {" "} transformados {" "}
            </Flex>
        </Flex>,
    carrousel: {
        title: 'Depoimentos',
        depositions: [
            {
                testimony: 'Lorem ipsum dolor sit amet consectetur. Cursus amet commodo quis in nam nam. Tincidunt laoreet vel pharetra feugiat fusce at. In enim pellentesque purus tempus erat tincidunt non scelerisque eleifend. Egestas vestibulum ac rhoncus blandit elementum. Ullamcorper auctor phasellus imperdiet lacinia hac metus vitae pulvinar morbi.',
                name: 'Laura Santos',
                role: 'Paciente de Ortodontia digital com Invisalign'
            },
            {
                testimony: 'Lorem ipsum dolor sit amet consectetur. Cursus amet commodo quis in nam nam. Tincidunt laoreet vel pharetra feugiat fusce at. In enim pellentesque purus tempus erat tincidunt non scelerisque eleifend. Egestas vestibulum ac rhoncus blandit elementum. Ullamcorper auctor phasellus imperdiet lacinia hac metus vitae pulvinar morbi.',
                name: 'Raí Souza Vieira de Oliveira',
                role: 'Paciente de Ortodontia digital com Invisalign'
            },
            {
                testimony: 'Lorem ipsum dolor sit amet consectetur. Cursus amet commodo quis in nam nam. Tincidunt laoreet vel pharetra feugiat fusce at. In enim pellentesque purus tempus erat tincidunt non scelerisque eleifend. Egestas vestibulum ac rhoncus blandit elementum. Ullamcorper auctor phasellus imperdiet lacinia hac metus vitae pulvinar morbi.',
                name: 'Telê Santana da Silva',
                role: 'Paciente de Ortodontia digital com Invisalign'
            }
        ]
    },

}

export { commentsSectionData }