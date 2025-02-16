import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router";
import ProductTile from "../components/product-tile";

export default function Cart(){
   const [totalCart, setTotalCart] = useState(0);

   const cart = useSelector(state => state.cart); //'state' here is mutable and can be named anything eg cartState, myState
   //const {cart} = useSelector(state => state) //another way this can be ddone.

   useEffect(() => {
      setTotalCart(cart.reduce((acc,curr)=> acc + curr.price, 0)) //acc-accumulator curr-current
   },[cart]) //the cart refrenced here is cart from the store reducer object cart :cartSlice.

   console.log({cart}, {totalCart}); 
   

   return (
      <div>
         {
           cart && cart.length ?
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3"> 
            {
               cart.map(item => <ProductTile product={item}/>)
            }
            </div>
            : <div className= "min-h-[80vh] flex flex-col items-center justify-center">
               <h1 className="text-gray-800 fond-bold text-3xl mb-5">
                  Your Cart Is Empty
               </h1>
               <Link to='/'>
                  <button className="bg-purple-950 text-white border-2 rounded-lg font-bold p-4">
                     SHOP NOW
                  </button>
               </Link>
            </div>              
         }
      </div>
   )
}