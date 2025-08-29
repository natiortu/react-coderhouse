import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import Swal from "sweetalert2"

const CartView = () => {

  const {cart, clear, removeItem, cartTotal}= useContext(CartContext)

  const preConfirm = () =>{
    Swal.fire({
      title: '¿Está seguro de vaciar el carrito?',
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      } else if (result.isDenied) {
        //to do
      }
    })
  }

  return (
    <div>
      <h1>Carrito</h1>
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

      <span> Total a pagar: ${cartTotal()}, 00</span>

      <div>
        <button className='btn btn-danger' onclick={preConfirm}> Vaciar carrito</button>
        <Link  className='btn btn-success' to='/checkout'> Comprar carrito</Link>
      </div>
    </div>
  )
}

export default CartView
