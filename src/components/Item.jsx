import React from 'react'
import '../css/Item.css';
import { Button, Card } from 'react-bootstrap'

const Item = ({prod}) => {

  return (
     <Card className='card-product'>
      <Card.Img variant="top" src={prod.img} className='card-product-img'/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        $ {prod.price},00
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item
