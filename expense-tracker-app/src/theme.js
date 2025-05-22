import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme ({
      colorMode: {
        initialColorMode : 'light',
        useSystemColorMode: true,
      },
}) 


export default theme;