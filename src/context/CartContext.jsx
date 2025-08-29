import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, qty) => {
        //item duplicado
        if (isInCart(item.id)) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    //actualizar cantidad del producto
                    return { ...prod, quantity: prod.quantity + qty };
                } else {
                    //devolver el producto como está
                    return prod;
                }
            })

            setCart(carritoActualizado);
        } else {
            //item nuevo
            setCart([...cart, { ...item, quantity: qty }])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity * prod.price, 0);
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0);
    }

    //to do
    const itemQuantity = (id) => {
        const itemInCart = cart.find((item) => item.id === id)
        if (itemInCart) {
            return itemInCart.quantity
        } else {
            return 0
        }
    }

    return (
        <CartContext.Provider value={{ cart, clear, addItem, removeItem, isInCart, cartQuantity, cartTotal, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}