import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartView from './CartView';
import EmptyCar from './EmptyCart';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.length ? <CartView /> : <EmptyCar />}
        </>
    )
}

export default Cart
