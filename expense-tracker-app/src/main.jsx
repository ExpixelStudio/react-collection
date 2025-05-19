/* import { StrictMode } from 'react' */
import { createRoot } from 'react-dom/client'

//import { Provider } from '@/components/ui/provider';  This is placeholder to replace *Provider* with a provider.
import { defaultSystem , ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
/* import './index.css' */
import App from './App';

import GlobalState from './context';
import system from './theme';

createRoot(document.getElementById('root')).render(
  
  <GlobalState>
      
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    
  </GlobalState> 

);
