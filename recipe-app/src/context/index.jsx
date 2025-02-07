import { createContext, useState } from "react";
//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// In this case a search bar that will appear on all pages.

export const GlobalContext = createContext(null);


export default function GlobalState({children}){

   const [searchParam, setSearchParam] = useState('');
   const [loading, setLoading] = useState(false);
   const [recipeList, setRecipeList] = useState([]);

   async function handleSubmit(event){
      event.preventDefault();
      setLoading(true);
      
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

      const data = await response.json();

      if (data?.data?.recipes){
         setRecipeList(data?.data?.recipes);
         setLoading(false);
         setSearchParam('');
      }

      console.log(data);

      try {
         
      } catch (error) {
         setLoading(false);
         setSearchParam('');
         console.log(error)
      }
   }
   console.log(loading, recipeList);

   return <GlobalContext.Provider value={{searchParam, loading, recipeList, setSearchParam, handleSubmit}}>{children}</GlobalContext.Provider>;
}






