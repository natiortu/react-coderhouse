import { Link } from 'react-router-dom'
import React from 'react'

const EmptyCart = () => {
  return (
    <div>
      <h2> El carrito de compras está vacío. </h2>
      <h4> Puedes ir a ver nuestros productos</h4>
      <Link className='btn btn-primary' to='/'> Ver productos</Link>
    </div>
  )
}

export default EmptyCart
