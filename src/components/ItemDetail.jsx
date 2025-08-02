import '../css/ItemDetail.css'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ detalle }) => {

  const {addItem, cart}= useContext(CartContext)
  
  const agregarProductos = (cantidad) => {
    console.log(`Compraste ${cantidad} productos`)
    addItem(detalle, cantidad)
  }

  console.log("carrito: " + cart);

  return (
    <div className='div-item-detail'>
      <h1>{detalle.name}</h1>
      <img className='img-item-detail' alt={detalle.name} src={detalle.img} />
      <h3 className='p-5'>{detalle.description}</h3>
      <h5>Stock disponible: {detalle.stock}</h5>
      <h5>${detalle.price},00</h5>
      <ItemCount stock={detalle.stock} agregarProductos={agregarProductos} />
    </div>
  )
}

export default ItemDetail
