import { useSelector } from "../react-redux";
import CartItem from "../components/CartList";
import CartList from "../components/CartList";
import { Link } from "react-router";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems);
    return (
        <>


            <div className="cart-container"> 
                {cartItems.length === 0 ? (
                   <>
                        <h2 className="empty-cart">Your cart is empty</h2>
                        <Link to={'/'} className="empty-cart" style={{textAlign:'center',display:'block',marginInline:'auto',color:'blue'}}> Go To Home</Link>
                   </> 
 
                ) : (
                <>
                <h2> Items in your cart</h2>
                <div className="cart-items-container">
                    <div className="cart-header cart-item-container">
                        <div className="cart-item">Item</div>
                        <div className="item-price">price</div>
                        <div className="quantity">quantity</div>
                        <div className="total">Total </div>
                    </div>
                    {
                        cartItems.map(({ productId, title, price, imageUrl, rating, quantity }) =>
                            <CartList
                                key={productId}
                                productId={productId}
                                title={title}
                                imageUrl={imageUrl}
                                rating={rating}
                                price={price}
                                quantity={quantity} />)
                    }

                    <div className="cart-header cart-item-container">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="total">
                            $ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                        </div> 
                    </div> 
                </div>
                </>
                )}
            </div>
        </>
    )

}

export default Cart