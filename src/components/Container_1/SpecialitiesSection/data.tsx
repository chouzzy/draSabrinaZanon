import { Box, Flex } from "@chakra-ui/react"
import { MdOutlinePregnantWoman } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { FaChild } from "react-icons/fa";
import { ImTongue } from "react-icons/im";



const specialitiesSectionsData = {
    title: 'Minhas especialidades',
    subTitle: 'Graduada em Odontologia pela Universidade de Passo Fundo (UPF), busquei me especializar em diferentes áreas para oferecer um atendimento completo. Realizei atualização em Endodontia pela IMED e Harmonização Orofacial pelo ORBIS',
    specs: [
        {
            name: 'Gestantes',
            icon: <MdOutlinePregnantWoman size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/gestante-selected.png',
            smart_description: 'A ausência de cuidados com a saúde bucal da paciente pode provocar um parto prematuro e/ou o nascimento do bebê com baixo peso.',
            title_description: <>O que é e como funciona?</>,
            complete_description: <>
                O Governo Federal, pelo Ministério da Saúde, instituiu uma Política Nacional de Saúde voltada para a Saúde Bucal das Gestantes, trazendo a necessidade do pré-natal odontológico, realizado por um Cirurgião-Dentista.
                <br></br>
                <br></br>
                Durante a gravidez, o corpo da mulher passa por diversas transformações, algumas delas podendo acarretar problemas na cavidade bucal, como alterações salivares, cáries e periodontite. A falta de intervenção médica no cuidado com as cáries e a gengivite pode causar o agravamento de ambas, gerando um quadro infeccioso de periodontite. Essa infecção bacteriana afeta os ossos e ligamentos da mandíbula, comprometendo a saúde dos dentes.
                <br></br>
                <br></br>
                Se esse quadro de periodontite não for solucionado, a infecção pode entrar na corrente sanguínea e causar problemas em outras partes do corpo, como no sistema cardiovascular. Além disso, estudos recentes apontam que se essas bactérias se instalarem no útero, o corpo produzirá um hormônio chamado prostaglandina, que, além de combater a infecção, pode induzir ao parto prematuro. Tais pesquisas também indicam que as gestantes que sofriam de gengivite davam à luz bebês com peso inferior ao esperado.
                <br></br>
                <br></br>
                A mulher vive a maternidade de forma intensa, pois há uma transformação total em sua anatomia que, por sua vez, se adapta a uma nova vida – isso sem contar os impactos emocionais gerados para a gestante. Nesse sentido, a mulher também adquire hábitos mais saudáveis durante a gravidez, uma vez que ela passa a ter mais preocupações com a saúde do bebê. O pré-natal tem como objetivo prevenir doenças e problemas bucais, identificar alterações e tratá-las antes que se agravem, orientar a paciente sobre os cuidados com a saúde bucal e sanar suas principais dúvidas.
                <br></br>
                <br></br>
                A tarefa do odontopediatra começa, idealmente, antes do nascimento da criança, através da orientação da mãe durante a gravidez.
            </>


        },
        {
            name: 'Bebês',
            icon: <LuBaby size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/bebe-selected.png',
            smart_description: 'Mesmo se os dentinhos do bebê não estejam ainda em boca, a odontologia para eles deve se iniciar ainda no primeiro ano de vida. Por isso é importante realizar a consulta preventiva.',
            title_description: <>Por que realizar uma consulta preventiva em seu bebê?</>,
            complete_description: <>
                - A primeira consulta é muito importante para criação do vínculo família/bebê/dentista.
                <br></br>
                <br></br>

                - São muitas informações para serem passadas aos pais e dúvidas para esclarecer para os mesmos.
                <br></br>
                <br></br>

                - Necessário entender a rotina e hábitos da família, a educação aos pais é a melhor maneira de iniciarmos a prevenção.
                <br></br>
                <br></br>

                - Orientação sobre dieta e higiene da boca do bebê.
                <br></br>
                <br></br>

                - Avaliação de toda cavidade oral do bebê (língua, lábios, freios, rodetes gengivais, bochechas, presença ou não de dentes…)
                <br></br>
                <br></br>

                - Explicar a necessidade das consultas de retorno e prevenção.
                <br></br>
                <br></br>

                A saúde bucal da criança precisa de cuidados constantes para conseguimos prevenir o aparecimento de doenças bucais.
            </>
        },
        {
            name: 'Profilaxia infantil',
            icon: <FaChild size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/profilaxia-selected.png',
            smart_description: 'A prática da profilaxia é essencial para manter a saúde bucal em adultos e crianças, sendo especialmente crucial na prevenção de problemas futuros na higiene bucal infantil.',
            title_description: <>O que é?</>,
            complete_description: <>
                A limpeza dental infantil, assim como nos adultos, é um procedimento simples e indolor, que deve ser realizado regularmente para manter a saúde bucal em dia.
                <br></br>
                <br></br>
                Para realizar a profilaxia infantil, são utilizados instrumentos específicos para remover a placa bacteriana e o tártaro dos dentes e gengivas da criança.
                <br></br>
                <br></br>
                Aqui na clínica é criado um ambiente acolhedor e tranquilo, envolvendo a criança no processo de cuidado com a saúde bucal, explicando de forma clara e simples os procedimentos que serão realizados!
            </>
        },
        {
            name: 'Frenotomia',
            icon: <ImTongue size={'2.5rem'} />,
            image: 'static/img/container_1/SpecialitiesSection/frenotomia-selected.png',
            smart_description: 'O freio lingual alterado no bebê pode atrapalhar várias funções, sendo a amamentação o maior impacto sentido pelas mães nos primeiros dias de vida dos recém-nascidos.',
            title_description: <>O que é e como funciona?</>,
            complete_description: <>
                <br></br>
                <br></br>
                O freio lingual é uma pequena membrana que fica abaixo da língua e que se estiver alterado, pode impedir os corretos movimentos linguais, a essa anomalia no freio dá-se o nome de anquiloglossia (língua presa).
                <br></br>
                <br></br>
                A anquiloglossia no bebê pode atrapalhar várias funções, sendo a amamentação o maior impacto sentido pelas mães nos primeiros dias de vida dos recém-nascidos.
                Embora, outras funções importantes também possam ser influenciadas, como al introdução alimentar e sua continuação, fonação, deglutição, dentre outros.
                Para que se evite principalmente nestes primeiros dias, a perda de peso, dificuldade com a pega e até o desmame precoce recomenda-se a Frenotomia.
                <br></br>
                <br></br>
                Frenotomia é o procedimento cirúrgico usado para corrigir o freio/frênulo lingual do bebê quando há alguma alteração do mesmo. Dessa forma, evita-se os impactos negativos supracitados na vida da criança.
                <br></br>
                <br></br>
                Apesar de ser um procedimento cirúrgico, a frenotomia é um procedimento rápido e simples, e deve ser realizado por um odontopediatra no próprio consultório, onde é realizado um corte da membrana com ou sem divulsão (abertura da membrana no ventre da língua).
                Em alguns casos, no futuro poderá ser necessário realizar a frenectomia que é uma técnica cirúrgica mais invasiva, que corta também pequenas fibras musculares.
                <br></br>
                <br></br>
                E por que isso tudo? Os estudos mais recentes têm mostrado a importância da liberação total da língua o quanto antes, para se evitar além do desmame precoce, um subdesenvolvimento ou desenvolvimento alterado do crescimento craniofacial.

            </>
        }
    ],
    darkColorScheme: {
        iconBg: 'light.400',
        fontColor: 'light.400',
        bgColor: 'rose.600',
        iconColor: 'brown.400'
    },
    lightColorScheme: {
        iconBg: 'brown.400',
        fontColor: 'dark.400',
        bgColor: 'light.400',
        iconColor: 'light.400'
    }
}



export { specialitiesSectionsData }

