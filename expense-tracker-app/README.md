# Packages/Dependancies
**This is just for documentation and review purposes of what i installed for future use/refrence.**

npm i @chakra-ui/react @emotion/react
https://chakra-ui.com/docs/get-started/installation

npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion react-icons react-apexcharts

Used an older version of Chakra UI in the end. v2.8.2
npm install @chakra-ui/react@2.8.2 @emotion/react@^11 @emotion/styled@^11 framer-motion@^7 apexcharts react-apexcharts --legacy-peer-deps
Why '--legacy-peer-deps'? Using React19 but framer-motion@7.x (required by Chakra UI v2.8.2) only supports React 18 officially.
--legacy peer-eps tells npm to ignore peer dependency mismatches.

Remove the unused packages: @emotion/styled and framer-motion. These packages are no longer required in Chakra UI.
npm uninstall @emotion/styled framer-motion

import { Provider } from '@/components/ui/provider';
according to chatgpt this is a place holder in the chakra UI documentation and not an antual import. ChakraProvider must still be used.
ChatGPT : 'This is not from Chakra at all — it's a placeholder for your own custom wrapper. This Provider is assumed to be a file you created in your own src/components/ui/provider.jsx or similar.

It's not part of Chakra UI — the docs just expect you to figure that out 😩.'

**React Router Dom**   
<!-- npm install react-router-dom 

**Tailwind Css (Using Vite)**   
npm install tailwindcss @tailwindcss/vite -->


# APIs Used
<!-- https://forkify-api.herokuapp.com/v2 -->


# Learned
Things learned or personally implemented for the first time during this project.
Chakra UI v2.8.2
UseDisclosure.. isOpen can be use to conditonally render anything in the UI, The Modal specifically in this app. 
passed the toggle state through multiple components to render modal from add transaction component.


<!-- Tailwind Css (Using Vite)   
npm install tailwindcss @tailwindcss/vite
https://tailwindcss.com/docs/installation/using-vite -->

# Recap Refrences  
  GlobalContext 
  Chakra UI
<!-- Example can delete
   - API handling 
   - React Router
-->




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
