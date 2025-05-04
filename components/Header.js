import { Link } from "react-router-dom";
import {CartIcon} from '../assets/cart-icon.svg'
import { useSelector } from "react-redux";
console.log(CartIcon);

const Header = () => { 
    const cartItem = useSelector((state)=>state.cartItems)
    return (
        <header>
            <div className="header-content">
                <h1 className="header-title">
                    <Link to="/">Redux Store</Link>
                </h1>
                <Link to="/cart" className="cart-icon">
                    <img src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg" alt="cart-icon" />
                    <div className="cart-items-count">
                        {cartItem.reduce((acc, item) => acc + item.quantity, 0)}
                    </div>
                </Link>
            </div>
            
        </header>
    ) 
}
export default Header;