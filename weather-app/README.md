# Dependancies
**This is just for documentation and review purposes of what i installed for future use/refrence.
npm install dotenv

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Learned
This learned or personally implemented for the first time during this project.

***Remember to add '.env' to .gitignore to prevent pushing to github.***

1. Use environmental variables to store sensitive information (mainly api endpoints in frontend).
- Insatll dotenv : npm install dotenv

2. Create .env file at root of project directory.

Eg of what is placed in an .env file:
* REACT_APP_API_URL=https://api.example.com
- VITE_API_KEY=124515 

In React, environment variables should be prefixed with REACT_APP_ for Create React App (CRA) or VITE_ for Vite.

3. How to call these variables within a component.
* Vite Environment
- console.log("API Key:", import.meta.env.VITE_API_KEY);
- {import.meta.env.VITE_API_KEY} (Can be assigned to a variable).
- const apiKey = import.meta.env.VITE_API_KEY;

* Create React App (CRA) Environment
- console.log("API URL:", process.env.REACT_APP_API_URL);
- {process.env.REACT_APP_API_URL} (Can be assigned to a variable).
- cont apiKey = process.env.REACT_APP_API_URL;

***Remember to add '.env' to .gitignore to prevent pushing to github.***