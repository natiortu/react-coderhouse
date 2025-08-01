import '../css/ItemDetail.css'

const ItemDetail = ({detalle}) => {

  return (
    <div className='div-item-detail'>
      <h1>{detalle.name}</h1>
      <img className='img-item-detail' alt={detalle.name} src={detalle.img} />
      <h3>{detalle.description}</h3>
      <h5>Stock: {detalle.stock}</h5>
      <h5>Precio: ${detalle.price},00</h5>
    </div>
  )
}

export default ItemDetail
