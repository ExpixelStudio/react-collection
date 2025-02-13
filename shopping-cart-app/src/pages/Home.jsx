import { useEffect, useState } from "react";
import ProductTile from "../components/product-tile";

import 'ldrs/bouncy';

// export default function
export default function Home() {
  
   const [products, setProducts] = useState([]); 
   const [loading, setLoading] = useState(false);

   useEffect(()=>{
      async function fetchListOfProducts(){
         setLoading(true);
         const response = await fetch(`https://fakestoreapi.com/products?limit=10`)
         const data = await response.json();

         if(data) {
            setLoading(false);
            setProducts(data);
         }
         
         console.log(data);
      }
      fetchListOfProducts()
   },[]);
  
   return (
     <div>
         {
            loading ? ( 
               <div className="min-h-screen w-full flex justify-center items-center">
                  <l-bouncy
                    size="120"
                    speed="1.75"
                    color='rgb(120,79,196)' 
                  ></l-bouncy>
            </div> 
            ): (
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3 ">
               {
                  products && products.length ?(
                     products.map((item)=> <ProductTile product={item}/>)
                  ) : null   
               }
            </div>
            )            
         }
     </div>
  );
};




