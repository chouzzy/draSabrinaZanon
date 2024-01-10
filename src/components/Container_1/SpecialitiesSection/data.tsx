import { Box, Flex } from "@chakra-ui/react"


const specialitiesSectionsData = {
    title:
        <Flex display={'inline'} >
            Minhas
            <Flex display={'inline'} color={'teal.400'}>
                {" "} especialidades {" "}
            </Flex>
        </Flex>,

    specialities: {

        speciality_1: {
            title: 'Ortodondia',
            description: 'É a especialidade dedicada ao diagnóstico, prevenção e tratamento de irregularidades no posicionamento dos dentes e osso da face. O alinhamento da mordida e os dentes melhora a função mastigatória e a estética facial. Assim também contribuindo para a saúde bucal global, prevenindo problemas como cáries e doenças periodontais associadas a desalinhamentos dentários. A Ortodontia convencional é realizada através dos aparelhos fixos, podendo ser metálicos ou estéticos. São os famosos ‘’braquetes’’ colados nos dentes.',
        },

        speciality_2: {
            title: 'Ortodontia  digital e alinhadores Invisalign',
            description: "É o que existe de mais atual para os tratamentos ortodônticos. Uma ferramenta que representa a evolução dos ‘’braquetes’’. Tratam-se de aparelhos alinhadores estéticos, normalmente conhecido pelas marcas (Invisalign, Clear Correct...). Atualmente, realizo 70% dos tratamentos ortodônticos através desses sistemas. E não para aqui, temos também a evolução no diagnóstico, planejamento e acompanhamento dos casos. Utilizando scanners 3D e softwares avançados, que auxiliam no desenvolvimento dos alinhadores transparentes personalizados, oferecendo um caminho discreto, ágil e eficaz para corrigir o alinhamento dos dentes. Esta abordagem inovadora proporciona aos pacientes uma experiência confortável e resultados precisos.",
        },

        speciality_3: {
            title: 'Ortopedia funcional dos maxilares',
            description: 'Essa é a parte da especialidade que começa bem cedo, por volta dos 6/7 anos, acompanhando o desenvolvimento e crescimento das estruturas ósseas da face das crianças. A ortopedia busca corrigir desarmonias no desenvolvimento facial e na posição dos ossos da face. Nesse momento que problemas desenvolvidos por maus hábitos (sucção digital, chupeta, respiração bucal) são diagnosticados e tratados. A principal função é solucionar possíveis problemas que pioram com o avanço da idade, levando até mesmo à cirurgias. O fato de intervir cedo nos problemas, promove uma função mastigatória correta, permitindo o crescimento adequado e melhorando a estética facial.',
        },

        speciality_4: {
            title: 'Harmonização',
            description: 'Harmonização Orofacial é uma especialidade que visa aperfeiçoar a estética bucal, facial e funcionalidade. Erroneamente temos visto a Harmonização incluindo somente técnicas como preenchimentos, botox e outros tratamentos faciais. Porém, é importante ressaltar que ‘’harmonizar’’ diz respeito ao conjunto facial, incluindo, portanto, estética e saúde da boca. Correções ortodônticas não apenas aprimoram a estética da face, mas também contribuem para a saúde funcional e bem-estar sistêmico do paciente. Portanto, ao considerar a harmonização facial, é essencial reconhecer a parte odontológica no planejamento. Harmonizar é integrar, tornar harmônico, considerando a face como o todo. Garantindo estética, função oral saudável e o equilíbrio de todo o corpo.',
        },

        speciality_5: {
            title: 'Odontologia integrativa',
            description: 'A Odontologia Integrativa aborda a saúde bucal olhando para o ‘’todo’’, considerando a conexão entre a saúde oral, o bem-estar e saúde geral. Vai além do tratamento convencional, incorporando abordagens integradas para promover saúde física, mental e emocional, reconhecendo a interrelação entre a boca e o restante do corpo. Procedimentos como: terapia neural e ozonioterapia estão ligados as abordagens sistêmicas relacionadas aos tratamentos odontológicos.',
        },

        speciality_6: {
            title: 'Outras atuações',
            description:
                <Flex flexDir={'column'} mx='auto'>
                    <Box> Tratamento de Bruxismo e DTM; </Box>
                    <Box> Toxina Botulínica Terapêutica; </Box>
                    <Box> Prevenção em saúde bucal - Profilaxia; </Box>
                    <Box> Clareamento; </Box>
                    <Box> Restaurações; </Box>
                    <Box> Preenchimento Labial; </Box>
                    <Box> Ozonioterapia e Terapia neural. </Box>
                </Flex>
        },
    }
}



export { specialitiesSectionsData }

