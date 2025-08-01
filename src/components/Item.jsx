import React from 'react'
import '../css/Item.css';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {

  return (
     <Card className='card-product'>
      <Card.Img variant="top" src={prod.img} className='card-product-img'/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        $ {prod.price},00
        </Card.Text>
        <Link className='btn btn-primary' to={'/item/'+ prod.id}> Ver más </Link>
      </Card.Body>
    </Card>
  )
}

export default Item
