import {createSystem, defaultConfig} from '@chakra-ui/react';

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colorMode: {
        initialColorMode : 'light',
        useSystemColorMode: true,
      },
    },
  },
}) 
/*   initialColorMode : 'light',
  useSystemColorMode : true
})
 */
export default system;