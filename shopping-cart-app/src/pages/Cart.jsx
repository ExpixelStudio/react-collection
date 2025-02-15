import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export default function Cart(){
   const [totalCart, setTotalCart] = useState(0);

   const cart = useSelector(state => state.cart); //'state' here is mutable and can be named anything eg cartState, myState
   //const {cart} = useSelector(state => state) //another way this can be ddone.

   useEffect(() => {
      setTotalCart(cart.reduce((acc,curr)=> acc + curr.price, 0)) //acc-accumulator curr-current
   },[cart]) //the cart refrenced here is cart from the store reducer object cart :cartSlice.

   console.log({cart}, {totalCart}); 
   

   return (
      <div>Cart</div>
   )
}