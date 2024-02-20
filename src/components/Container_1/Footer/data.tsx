import { Flex } from "@chakra-ui/react"


const footerData = {
    info: {
        dr_name: "Dra. Sabrina Zanon",
        dr_role: "Ortodontista | Invisalign Doctor",
        dr_code: "CRO 11995",
        copyright: "Copyright © 2023 All rights reserved. Produzido por",
        awer: "awer.co",
    },
    title:
        <Flex display={'inline'}>
            Comece a transformação agora!
        </Flex>,
    mapsUrls: [
        {
            id:0,
            name:'Clinica 1',
            url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.092710569535!2d-46.72261432466864!3d-23.60100777877257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56c31b1fe649%3A0x7d134f4dfc6618c2!2sMorumbis!5e0!3m2!1spt-BR!2sbr!4v1708452084682!5m2!1spt-BR!2sbr",
        },
        {
            id:1,
            name:'Clinica 2',
            url:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14633.930168495335!2d-46.6849945!3d-23.5151408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef813d5a0e76d%3A0xc91f02336118f045!2sCT%20da%20Barra%20Funda%20(S%C3%A3o%20Paulo%20FC)!5e0!3m2!1spt-BR!2sbr!4v1708456029515!5m2!1spt-BR!2sbr",
        },
        {
            id:2,
            name:'Clinica 3',
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.749159683009!2d-47.792719623911616!3d-21.202121379181776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf333b5fe16b%3A0xc63bd09951f65379!2sEst%C3%A1dio%20Santa%20Cruz%20-%20Arena%20NicNet%20%7C%20Eurobike!5e0!3m2!1spt-BR!2sbr!4v1708456147542!5m2!1spt-BR!2sbr"
        }
    ]

}



export { footerData }