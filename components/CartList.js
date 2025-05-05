import { useDispatch } from "../react-redux"
import { decreaseItemQunatity, increaseItemQunatity } from "../multiple-reducer/cartReducer"

const CartList  = ({
    productId,
    title,  
    price,
    imageUrl,
    rating,
    quantity,
})=>{
    const dispatch = useDispatch()
    console.log(productId);
    
    return(
        <div className="cart-item-container">
            <div className="cart-item">
                <img src={imageUrl} alt={title} /> 
             
                <div>
                    <h3>{title}</h3>
                    <p>{rating} ★ ★ ★ ★</p>
                </div>
            </div>
            <div className="item-price">${price} </div>
            <div className="item-quantity">
                <button onClick={()=>dispatch(decreaseItemQunatity(productId))}>-</button>
                <span>{quantity}</span>     
                <button onClick={()=>dispatch(increaseItemQunatity(productId))}>+</button>
            </div>
            <div className="total">${price * quantity}</div>
        </div>
    )
}


export default CartList