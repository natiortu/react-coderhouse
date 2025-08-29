import '../css/ItemDetail.css';
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import Swal from "sweetalert2"

const ItemDetail = ({ detalle }) => {
  const { addItem, itemQuantity } = useContext(CartContext)
  const [purchase, setPuchase] = useState(false)

  const agregarProductos = (cantidad) => {
    addItem(detalle, cantidad)
    setPuchase(true)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Agregaste ${detalle.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000
    })
  }

  const stockActualizado = detalle.stock - itemQuantity(detalle.id)

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1 className="my-4 fw-bold">{detalle.name}</h1>
      <p className="fs-6">{stockActualizado} unidades disponibles</p>
      <img className="img-item-detail" alt={detalle.name} src={detalle.img} />
      <p className="p-item-description">{detalle.description}</p>   
      <p className="fs-3">
        {new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS',
          minimumFractionDigits: 2
        }).format(detalle.price)
        }
      </p>
      {purchase
        ? <div className="div-cart-actions">
          <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
          <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
        </div>
        : <ItemCount stock={stockActualizado} agregarProductos={agregarProductos} />}
    </div>
  )
}

export default ItemDetail