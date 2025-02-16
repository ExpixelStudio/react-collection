import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../../store/slices/cart-slice';  //payload actions

export default function ProductTile({product}) {

   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart);

   function handleAddToCart(){
      dispatch(addToCart(product));
   }

   function handleRemoveFromCart(){
      console.log('removed from cart');
      dispatch(removeFromCart(product.id));
   }

  return (
   <div key={product.id}>
      <div className="group flex flex-col items-center border-2 border-purple-900 gap-3 p-3 h-[360px] mt-8 ml-5 rounded-xl">
         <div className="h-[180px]">
            <img 
            src={product?.image}
            alt={product?.title} 
            className="object-cover h-full w-full"
            />
         </div>
         <div>
            <h1 className="w-40 truncate mt-3 text-gray-700 text-lg font-bold">{product.title}</h1>
            <span><p className='w-40 truncate mt-1 text-gray-700 text-center text-lg font-bold'>${product.price}</p></span>
         </div>
         <div className="flex items-center justify-center w-full mt-auto">
            <button onClick={ cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart} className="bg-purple-950 text-white border-2 rounded-lg font-bold p-4"
            >
               {
                  cart.some(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'
               }
            </button>

         </div>
      </div>
   </div>
  );
};



