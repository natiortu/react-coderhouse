import '../css/ItemList.css';
import Item from '../components/Item';

const ItemList = ({data}) => {
  return (
    <div className='div-products'>
      {data.map((prod) => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
