import "../css/CartWidget.css"
import "../css/CartIcon.css"
import { CartContext } from "../context/CartContext";
import { useContext } from "react"

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext);

    return (
        <div className="nav-icon-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-badge"> {cartQuantity()} </span>
        </div>
    )
}

export default CartWidget