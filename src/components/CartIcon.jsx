import "../css/CartIcon.css"

const CartIcon = () => {
  return (
    <div className="nav-icon-cart">
      <i className="fa-solid fa-cart-shopping nav-icon-cart"></i>
      <span className="cart-badge"> 2</span>
    </div>
  );
};

export default CartIcon;