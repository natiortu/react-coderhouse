import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Swal from "sweetalert2"
import '../css/CartView.css';

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
    <div>
      <h1 className="m-4 text-center">Carrito</h1>
      <div>
        {cart.map((compra) => {
          <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <img src={compra.img} style={{ width: '10rem' }}> </img>
            <span> {compra.name}</span>
            <span> $ {compra.price},00</span>
            <span> Cantidad: {compra.quantity}</span>
            <span> Precio final: {compra.price * compra.quantity},00 </span>
            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}> Eliminar</button>
          </div>
        })}
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
        <Link className='btn btn-success m-2' to='/checkout'> Comprar carrito</Link>
      </div>
    </div>
  )
}

export default CartView
