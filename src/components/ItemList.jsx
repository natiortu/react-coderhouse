import React from 'react'
import Item from '../components/Item';
import '../css/ItemList.css';

const ItemList = ({data}) => {
  return (
    <div className='div-products'>
      {data.map((prod) => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
