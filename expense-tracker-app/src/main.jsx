/* import { StrictMode } from 'react' */
import { createRoot } from 'react-dom/client'

import { Provider } from './components/ui/provider';
import { defaultSystem } from "@chakra-ui/react"
/* import './index.css' */
import App from './App';

import GlobalState from './context';
import system from './theme';

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <Provider value={defaultSystem}>  
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode>, */}
    </Provider>
  </GlobalState>

);
