/* import { StrictMode } from 'react' */
import { createRoot } from "react-dom/client";
//import { Provider } from '@/components/ui/provider';  //This is placeholder to replace *Provider* with a provider for v3*.
import { ChakraProvider } from "@chakra-ui/react";
/* import './index.css' */
import App from "./App";
import GlobalState from "./context";
import theme from "./theme";

createRoot(document.getElementById("root")).render(
  <GlobalState>
    <ChakraProvider value={theme}>
      <App />
    </ChakraProvider>
  </GlobalState>
);
