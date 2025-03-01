import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";


export default function CartTile({cartItem}) {

  const dispatch = useDispatch()

  function handleRemoveFromCart(){
    dispatch(removeFromCart(cartItem.id));
  }

  return (
     <>
      <div className="flex items-center p-5 justify-between bg-gray-100 shadow-lg shadow-purple-300/30 rounded-xl w-full max-w-4xl mx-auto space-x-4 mt-4">
        <img 
          src={cartItem?.image} 
          alt={cartItem?.title} 
          className="h-32 w-32 object-contain rounded-lg"
        />
        <div className="ml-4 flex-1 flex-wrap space-y-5"> {/* flex-1 allows container to grow and shrink as needed. */}
          <h1 className="text-xl text-gray-900 font-bold">{cartItem.title}</h1>
          <p className="text-gray-800 font-extrabold">${cartItem.price}</p>
        </div>
        <div>
        <button onClick={handleRemoveFromCart} 
          className="bg-purple-950 text-white border-2 rounded-lg font-bold px-4 py-2 hover:bg-red-700 transition" 
          >
            Remove From Cart
        </button>
        </div>
      </div>
     </>
  );
};
