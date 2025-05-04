import { useDispatch } from "react-redux";
import { addToCart } from "../multiple-reducer/cartReducer";

export default function Product({productId,url,title,rating,price}){
    const dispatch = useDispatch()
    return(
        <div className="product">
            <div className="product-image">
                <img className="" src={url} alt={title}/>
            </div>
            <div className="title-container">
                <h3><a href="#">{title}</a></h3>
            </div>
            <div className="rating-container">
                <p className="rating">{rating} ★ ★ ★ ★</p>
                <p className="price">${price}</p> 
            </div>
            <div className="cta-container">
                <button onClick={()=>dispatch(addToCart({productId,title,rating,price,imageUrl:url}))}>Add to cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    )
}