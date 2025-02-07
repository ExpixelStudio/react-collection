import { Link } from "react-router-dom"

Link

export default function RecipeItem({item}){
   return (
      <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2x1 border-white">
         <div key={item.id} className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={item?.image_url} alt="recipe image" className="block w-full"/>
         </div>
         <div>
            <span className="text-sm text-cyan-600 font-medium">{item?.publisher}</span>
         </div>
         <h3 className="font-bold text-2x1 truncate text-gray-700">{item?.title}</h3>
         
         <Link to ={`/recipe-item/${item?.id}`}
         className="text-sm text-center p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-amber-300"
         >Recipe Details </Link>
         </div>
   )
}