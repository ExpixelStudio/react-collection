import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";


export default function Details(){

   const {id} = useParams();
   const {recipeDetailsData, setRecipeDetailsData, handleAddToFavourites, favouritesList} = useContext(GlobalContext);

   console.log({id});

   useEffect(()=>{
      async function getRecipeDetails(){
         const response = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`); //fetches specific item data by id
         const data = await response.json();

         console.log(data);
         

         if(data?.data){
            setRecipeDetailsData(data?.data)
         }
      }

      
      if(id) {
         getRecipeDetails();
         console.log("API called for ID:", id);
      }
      
   },[id]);

   console.log({recipeDetailsData});


   return (
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="row-start-2 lg:row-start-auto">
            <div className="h-56 md:h-96 overflow-hidden rounded-xl group">
               <img 
                  src={recipeDetailsData?.recipe.image_url}
                  className="w-full h-full object-fit block group-hover:scale-105 duration-300"
               />
            </div>
         </div>
         <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-600 font-medium">{recipeDetailsData?.recipe?.publisher}</span>
            <h3 className="font-bold text-2xl text-wrap text-gray-700">{recipeDetailsData?.recipe?.title}</h3>
            <div>
               <button onClick={()=> handleAddToFavourites(recipeDetailsData?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 mb-3 inline-block shadow-md bg-black text-cyan-400">
                 {
                  favouritesList &&  favouritesList.length > 0 && favouritesList.findIndex(item=> item.id === recipeDetailsData?.recipe?.id) !== -1 ? 'Remove from Favourites' : 'Save to Favourites'
                 }
               </button>
            </div>
            <div>
               <span className="text-2xl font-semibold text-black">Ingredients:</span>
               <ul className="flex flex-col gap-3 pt-3">
                  {
                     recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                     <li>
                        <span className="text-lg font-semibold text-orange-600">
                           {ingredient.quantity}<span className="text-orange-800">{ingredient.unit}</span>
                        </span>
                        <span className="text-lg font-semibold text-purple-950"> {ingredient.description}</span>
                     </li>
                     )) 
                  }

               </ul>
            </div>
         </div>
      </div>
   )
}