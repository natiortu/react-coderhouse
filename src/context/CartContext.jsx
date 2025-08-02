import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart]= useState([])

    //funciones para modificar el carrito

    //agregar item
    const addItem = (item, qty) => {
        //item duplicado
        if (isInCart(item.id)) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {                    
                    //actualizar cantidad del producto
                    return {...prod, quantity: prod.quantity + qty};
                } else {
                    //devolver el producto como está
                    return prod;
                }
            })

            setCart(carritoActualizado);
        } else {
            //item nuevo
            setCart([...cart, {...item, quantity: qty}])
        }        
    }

    //borrar carrito
    const clear = ()=>{
        setCart([])
    }

    //eliminar item
    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //saber si un item está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //total a pagar
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity * prod.price, 0);        
    }

    //total de items
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0);
    }

    return(
        <CartContext.Provider value={{cart, clear, addItem, removeItem, isInCart, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}