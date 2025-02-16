# Packages/Dependancies
**This is just for documentation and review purposes of what i installed for future use/refrence.**

**Tailwind CSS**   
npm install tailwindcss @tailwindcss/vite

**Redux Toolkit**   
npm install @reduxjs/toolkit

**Other npms**   
npm install:   
react-redux    
react-icons    
react-router-dom    
ldrs - https://uiball.com/ldrs/
<!-- react-loader-spinner(not yet supported by react 19) -->

**React Router Dom**   
<!-- npm install react-router-dom 

**Tailwind Css (Using Vite)**   
npm install tailwindcss @tailwindcss/vite -->


# APIs Used
https://fakestoreapi.com/
<!-- https://forkify-api.herokuapp.com/v2 -->


# Learned
Things learned or personally implemented for the first time during this project.

**Redux**
- Folder structure
  - store 
    - index.js
  - slices
    - cart-slice.js
      - createslice
      - intialize initial state
      - slice -> name, maintain initial state, actions   
  - import {createSlice} from '@reduxjs/toolkit';
       
- useSelector and UseDispatch   
https://redux.js.org/tutorials/fundamentals/part-5-ui-react#dispatching-actions-with-usedispatch   

**Tailwind Css (Using Vite)**   
npm install tailwindcss @tailwindcss/vite   
https://tailwindcss.com/docs/installation/using-vite -->

# Recap Refrences  
   - Redux
   - Tailwind CSS
   - API handling 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
