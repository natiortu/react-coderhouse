import "../css/CartIcon.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  
  const {cartQuantity} = useContext(CartContext);

  return (
    <div className="nav-icon-cart">
      <i className="fa-solid fa-cart-shopping nav-icon-cart"></i>
      <span className="cart-badge"> {cartQuantity()} </span>
    </div>
  );
};

export default CartIcon;