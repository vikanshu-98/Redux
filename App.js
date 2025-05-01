import Product from "./components/Product";
import { productsList } from "./multiple-reducer/productList";
 import './App.css'
import { useDispatch, useSelector } from "react-redux";
export default function App(){
   const products = useSelector((state)=>state.products)
    
    return(
        <div className="product-container">
            {
                products.map(({id,title,price,image,rating})=>
                <Product
                    key={id}
                    title={title}
                    url={image}
                    rating={rating.rate}
                    price={price}
                />
            )
            }
             
        </div>
    )
}