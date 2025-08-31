import '../css/Item.css';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => {

  return (
    <Link className="link-no-style" to={'/item/' + prod.id}>
      <Card className='card-product'>
        <Card.Img variant="top" src={prod.img} className='card-product-img' />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>
            {new Intl.NumberFormat('es-AR', {
              style: 'currency',
              currency: 'ARS',
              minimumFractionDigits: 2
            }).format(prod.price)
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Item