import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// In this case a search bar that will appear on all pages.

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null); //called in Details component
  const [favouritesList, setFavouritesList] = useState([]);
  
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
    );

    const data = await response.json();

    if (data?.data?.recipes) {
      setRecipeList(data?.data?.recipes);
      setLoading(false);
      setSearchParam("");
      navigate('/'); //go to home page after searching. This is were searched data is shown.
      console.log('api called');
    }

    /* console.log(data); */

    try {
    } catch (error) {
      setLoading(false);
      setSearchParam("");
      console.log(error);
    }
  }

  function handleAddToFavourites(getCurrentItem) {
    console.log();
    let copyFavouritesList = [...favouritesList];
    const index = copyFavouritesList.findIndex(item => item.id === getCurrentItem.id);

    if(index === -1) { //if item is not present
      copyFavouritesList.push(getCurrentItem) //add item
    } else {
      copyFavouritesList.splice(index) //if already present remove
    }

    setFavouritesList(copyFavouritesList);
    
  }

  console.log(favouritesList, 'favouritesList');

  /* console.log(loading, recipeList); */

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        recipeDetailsData,
        setRecipeDetailsData,
        handleSubmit,
        handleAddToFavourites,
        favouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
