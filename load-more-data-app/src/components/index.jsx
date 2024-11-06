import './style.css';
import { useState, useEffect, useRef } from "react"


export default function LoadMoreData(){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    
    // Ref to track if the initial fetch has already occurred
    const initialFetch = useRef(true); //future proof double fetch prevention, even tho only happens in dev with strictmode otherwise.


    async function fetchProducts(){
        try{
            /* if (loading) return; // Prevent double-fetch */
            setLoading(true);
            console.log({loading});
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) => {
                    // Filter out duplicate products by checking IDs
                    const newProducts = result.products.filter(
                        newProduct => !prevData.some(prevProduct => prevProduct.id === newProduct.id)
                    );
                    return [...prevData, ...newProducts];
                });
            }
            console.log(result);
           
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // Only fetch data on the initial load if it hasn't been fetched already
        if (initialFetch.current) {
            initialFetch.current = false;
            fetchProducts();
        } else if (count > 0) {
            fetchProducts();
        }
    }, [count]);

    if(initialFetch.current){ // only shows this msg on first load , to prevent display distuption when loading more
        console.log({loading});
        return <div className="Loading  data, Please wait."></div>
    }

    return (
        <div className="container">
            <div className= 'product-container'>
                {
                    products && products.length ?
                    products.map(item => <div className='product' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>)
                    :null
                }
            </div>

            <div className="button-container">
                <button onClick={() => setCount(count + 1)}>Load More Products</button>
            </div>

        </div>
    )
}