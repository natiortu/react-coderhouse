import { Link } from 'react-router-dom'
import '../css/EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className='div-cart'>
      <h2> El carrito de compras está vacío </h2>
      <Link className='btn btn-primary my-4' to='/'> Ver todos los productos</Link>
    </div>
  )
}

export default EmptyCart
