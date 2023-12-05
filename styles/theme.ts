import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Poppins, Avenir, Heebo ',
      body:'Poppins, Avenir, Heebo'
   },
   colors: {
     backgroundLight:"#fefefe",
     backgroundDark:"#96989a",
     brown:{
      300: '#d0a288',
      400: '#e8af9c',
      600: '#ac5c53'
     },
     beige: {
      100: '#c3a897',
      700: '#a09080'
     },
     teal: {
      400: '#65bfbb',
      500: '#51ada8'
     }
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          color: 'gray.900',
          padding: 0,
          margin: 0
          
        },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })