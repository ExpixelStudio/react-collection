import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router";
import CartTile from "../components/cart-tile";


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
           cart && cart.length ? (
            <>
            <div className="flex flex-wrap justify-start md:justify-center sm:justify-center">
            <div className="min-h-[80vh] flex justify-center max-w-6xl w-6xl mx-auto"> 
               <div className="flex flex-col justify-center items-center p-3">
            {
               cart.map(cartItem => <CartTile cartItem={cartItem}/>)
            }
               </div>
            </div>

            
               <div className="flex flex-col justify-center items-center p-5 space-y-5 mt-14 w-">
                  <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                  <p>
                     <span className="text-gray-800 font-bold">Total Items: </span>
                     <span>{cart.length}</span>
                  </p>
                  <p>
                     <span className="text-gray-800 font-bold">Total Amount: </span>
                     <span>${totalCart}</span>
                  </p>
               </div>
            </div>
            </>
            ) : ( 
               <div className= "min-h-[80vh] flex flex-col items-center justify-center">
                  <h1 className="text-gray-800 fond-bold text-3xl mb-5">
                     Your Cart Is Empty
                  </h1>
                  <Link to='/'>
                     <button className="bg-purple-950 text-white border-2 rounded-lg font-bold p-4">
                        SHOP NOW
                     </button>
                  </Link>
               </div>              
         )};
      </div>
   )
}