import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'

const CartView = () => {

  const {cart, clear, removeItem}= useContext(CartContext)
  return (
    <div>
      <h1>Carrito de compras</h1>
      <div>
      {cart.map((compra) => {
        <div key={compra.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}> 
          <img src= {compra.img} style={{width: '10rem'}}> </img>
          <span> {compra.name}</span>
          <span> $ {compra.price},00</span>
          <span> Cantidad: {compra.quantity}</span>
          <span> Precio final: {compra.price * compra.quantity},00 </span>
          <button className='btn btn-danger' onclick= { () => removeItem(compra.id) }> Eliminar</button>
        </div>
      })}
      </div>

      <span> Total a pagar: </span>

      <div>
        <button className='btn btn-danger' onclick={clear}> Vaciar carrito</button>
        <Link  className='btn btn-success'> Comprar carrito</Link>
      </div>
    </div>
  )
}

export default CartView
