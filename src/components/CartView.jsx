import '../css/CartView.css';
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Swal from "sweetalert2"

const CartView = () => {

  const { cart, clear, removeItem, cartTotal } = useContext(CartContext)

  const preConfirm = () => {
    Swal.fire({
      title: '¿Está seguro de vaciar el carrito?',
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Sí',
      customClass: {
        confirmButton: 'btn btn-primary',
        denyButton: 'btn btn-secondary'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      }
    })
  }

  return (
    <div className='m-5'>
      <h1 className="m-4 text-center">Carrito</h1>
      <div>
        {cart.map((compra) => (
          <div className="div-cart-items m-3" key={compra.id}>
            <img src={compra.img} style={{ width: '10rem' }} />
            <span className='fw-bold'> {compra.name}</span>
            <span> Precio: {new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS',
                minimumFractionDigits: 2
              }).format(compra.price)
              } </span>
            <span> Cantidad: {compra.quantity}</span>
            <span> Precio final: {new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS',
                minimumFractionDigits: 2
              }).format(compra.price * compra.quantity)
              } </span>
            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}> Eliminar</button>
          </div>
        ))}
      </div>

      <p className="m-4 fs-4 text-center">
        Total a pagar: {new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS',
          minimumFractionDigits: 2
        }).format(cartTotal())}
      </p>

      <div className="div-cart-actions-2">
        <button className='btn btn-danger' onClick={preConfirm}> Vaciar carrito</button>
        <Link className='btn btn-success m-2' to='/checkout'> Continuar compra</Link>
      </div>
    </div>
  )
}

export default CartView
