import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";


export default function Details(){

   const {id} = useParams();
   const {recipeDetailsData, setRecipeDetailsData} = useContext(GlobalContext);

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

      getRecipeDetails();
   },[]);

   console.log(recipeDetailsData);


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
            <h3 className="font-bold text-2x1 text-wrap text-gray-700">{recipeDetailsData?.recipe?.title}</h3>
            <div>
               <button className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-pink-300">
                  Save to Favourites
               </button>
            </div>
            <div>
               <span className="text-2x1 font-semibold text-black">Ingredients:</span>
               <ul className="flex flex-col gap-3">
                  {
                     recipeDetailsData?.recipe?.ingredients.map((ingredient) => 
                     <li>
                        <span className="text-2x1 font-semibold text-black">
                           {ingredient.quantity}
                           {ingredient.unit}
                        </span>
                        <span className="text-2x1 font-semibold text-black">{ingredient.description}</span>
                     </li>
                     ) 
                  }

               </ul>
            </div>
         </div>
      </div>
   )
}