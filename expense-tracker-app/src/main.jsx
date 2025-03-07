import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './index.css' */
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalState from './context';
import theme from './theme';

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <ChakraProvider theme={theme}>  
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode>, */}
    </ChakraProvider>
  </GlobalState>
  
  
  
);
