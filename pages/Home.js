import { useSelector } from "../react-redux"
import Product from "../components/Product"

const Home=()  => {
    const products = useSelector((state)=>state.products) 
    return(
        <div className="product-container">
            {
                products.map(({id,title,price,image,rating})=>
                <Product
                    key={id}
                    productId={id}
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


export default Home