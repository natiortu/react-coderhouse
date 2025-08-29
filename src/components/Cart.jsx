import { CartContext } from '../context/CartContext'
import CartView from './CartView';
import EmptyCar from './EmptyCar';
import React, { useContext } from 'react'

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
        {cart.length ? <CartView/> : <EmptyCar/>}
        </>
    )
}

export default Cart
