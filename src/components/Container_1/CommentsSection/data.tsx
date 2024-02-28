import { Flex } from "@chakra-ui/react";



const commentsSectionData = {
    title: <>Sorrisos <br></br> transformados</>,
    subtitle: 'De risos tímidos a sorrisos radiantes, testemunhe a transformação mágica dos sorrisos das crianças.',
    carrousel: [
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-1.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-2.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-3.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-4.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-5.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-6.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-7.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-8.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-9.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-10.png',
        },
        {
            image: 'static/img/container_1/commentsSection/carousel/carousel-11.png',
        },
    ],
    depoiments: [
        {
            image: 'static/img/container_1/commentsSection/depos/Camila-Bitencourt.png',
            name: 'Camila Bitencourt',
            label: 'mãe',
            depoiment: 'Essa dentista eu super recomendo!!! Gente não deixem de levar seus filhos em especialistas como a @dra.sabrinamzanon ela é além de ótima dentista o manejo com a criança é perfeito, uma habilidade, amor, paciência, carinho e estratégia sem igual! Dra.  você arrasa!!'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Eder-Zawaski.png',
            name: 'Éder Zawaski',
            label: 'pai',
            depoiment: 'A primeira ida do Arthur ao dentista foi com a Dra.Sabrina, foi a melhor escolha, ela nos recebeu com muita paciência, deixou ele se adaptar ao consultório, deixou ele tocar nos manequins explicando com linguagem lúdica, hoje ele não tem medo de ir ao dentista.'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Jordana-Vivan.png',
            name: 'Jordana Vivan Haake',
            label: 'mãe',
            depoiment: 'Oi Dra... tudo bem? Queria muito agradecer pela consulta com o Vicente. Obrigada pela paciência e carinho com seus pacientes.'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Mayra-Gomide.png',
            name: 'Mayra Gomide',
            label: 'mãe',
            depoiment: 'Dra. Sabrina , é uma verdadeira “encantadora” de crianças. Atendeu minha filha respeitando sua particularidade e vontades. Deixando tudo fluir da melhor forma possível. Lolo está encantada com a tia Sa!'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Thais-Pereira.png',
            name: 'Thaís T. Pereira',
            label: 'mãe',
            depoiment: 'Bom, primeiramente, a Dra Sabrina foi o nosso anjo, em um momento “difícil” ela conseguiu passar tranquilidade pra todos, a Chloe perguntava quando ia na Dra Sabrina, se arrumava toda e amava estar com a Dra. Fora isso, que pra mamãe e pra Chloe já é de grande importância, a Dra Sabrina é muito profissional, atenciosa e cuidadosa. Só coisas boas, uma excelente profissional.'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Fernanda-Pessi.png',
            name: 'Fernanda Pessi',
            label: 'mãe',
            depoiment: 'Quando você encontra a dentista dos sonhos tudo muda, o que era um desespero virou uma diversão. Só eu sei em quantas dentistas passamos não foi fácil lembro que uma vez paguei uma consulta e ela não abriu a boca nem um segundo e fazia ânsia quando o Dr. colocava a mão no queixo dela. Hoje estamos em ótimas mãos, parabéns Dra. Sabrina você é top.'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Jerusa-Polo.png',
            name: 'Jerusa Polo',
            label: 'mãe',
            depoiment: 'Samuel perdeu o medo de dentista, você é sensacional! Obrigada pelo serviço de qualidade e pelo carinho com meu tesouro.'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Raquel-Victor.png',
            name: 'Raquel Vitor',
            label: 'mãe',
            depoiment: 'Maravilhosa, e única a experiência que tive com o meu pequeno foi maravilhoso a confiança que vc passou pra ele, tornou o menino corajoso que ele é hoje.'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Sabrina-Mello.png',
            name: 'Sabrina Mello',
            label: 'mãe',
            depoiment: 'Essa dentista eu super recomendo!!! Gente não deixem de levar seus filhos em especialistas como a @dra.sabrinamzanon ela é além de ótima dentista o manejo com a criança é perfeito, uma habilidade, amor, paciência, carinho e estratégia sem igual! Dra.  você arrasa!!'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Aline-Xavier.png',
            name: 'Aline Xavier',
            label: 'mãe',
            depoiment: 'Oi Sabrina, td bem? Quero agradecer o seu ótimo atendimento para meu João. Ele tem autismo e sempre foi atendido com a maior paciência, usando o tigrao de forma lúdica. Obrigada por tanto ❤️'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Tatiane-Florencio.png',
            name: 'Tatiane Florêncio Burg',
            label: 'mãe',
            depoiment: 'Dra Sabrina admiro muito seu trabalho o carinho e cuidado que tem com as crianças, tornando uma consulta mais divertida e leve, quem dera se no meu tempo fosse assim rsrsrs. Uma pena que agora esta em outra cidade e não podemos mais cuidar dos dentinhos com você.'
        },
        {
            image: 'static/img/container_1/commentsSection/depos/Gabrielle-Novak.png',
            name: 'Gabrielle T. Novak Foés',
            label: 'mãe',
            depoiment: 'Dra. Sabrina é uma ótima profissional e sempre foi super atenciosa com meu filho! Paciente e com um jeitinho meigo, faz com que a visita ao dentista das nossas crianças seja mais leve! ❤️'
        }
    ],
    odonto: {
        title: 'O trabalho de uma Odontopediatra',
        image:'static/img/container_1/commentsSection/kid.png',
        description: <>
            Trabalhar com crianças é enriquecedor, pela pureza, pela ingenuidade e pelo lúdico que te faz acessar o mundo deles e deixar as consultas mais leves. 
            <br></br>
            <br></br>
            O principal eixo da Odontopediatria é a prevenção, sendo o objetivo ajudar as crianças a desenvolver hábitos saudáveis que promovam a sua saúde oral desde cedo, fazendo com que os pequenos se comprometam com os cuidados e a higiene da boca, que prefiram uma alimentação equilibrada e saudável e que consigam ter uma atitude positiva perante as visitas ao dentista.
            <br></br>
            <br></br>
            O Odontopediatra cuida do bebê desde o nascimento e o monitora durante a infância, adolescência e início da idade adulta. Nesse processo a família tem um papel ativo.Portanto, o cuidado no consultório inclui as crianças e seus cuidadores.
            <br></br>
            <br></br>
            Conseguir ajudar e fazer diferença na qualidade de vida das família é gratificante, porque quando você atende um paciente infantil você está atendendo a família como um todo.
        </>
    }

}

export { commentsSectionData }