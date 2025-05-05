import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../multiple-reducer/cartReducer";
import { useState } from "react";
import { addToWishlist, removeFromWishlist } from "../multiple-reducer/wishlistReducer";
 

export default function Product({productId,url,title,rating,price}){
    const dispatch = useDispatch()
    const wishList  = useSelector((state)=>state.wishlist) 
    const result = wishList.some((item)=> item.productId === productId) 
    
    
    
    const styleObj = {
        hover:{
            cursor:'pointer'
        }
    }

    return(
        <div className="product">
            <div className="heart-icon" style={{width:"20%",display:"block",marginLeft:"auto" }}>
                
                {result?(<img onClick={()=>dispatch(removeFromWishlist(productId))} style={{maxWidth:"100%",...styleObj.hover}} src="https://media.istockphoto.com/id/1901999999/vector/3d-red-heart-realistic-heart-on-a-transparent-background-a-symbol-of-love-and-affection.jpg?s=612x612&w=0&k=20&c=2_SKLq4zA641vIa5Si9pw-voH17S1hbtByqjO_73WSk="/>)
                :
                (<img onClick={()=>dispatch(addToWishlist(productId))}  style={{maxWidth:"100%",...styleObj.hover}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8n5vpWkDh69eXx07vhRLAPsC_hZomncLnlQ&s" alt="heart"/>)
                }
                </div>
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
             </div>
        </div>
    )
}