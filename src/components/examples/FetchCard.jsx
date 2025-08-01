import React from 'react'

const FetchCard = ({personaje}) => {
    return (
     <Card className='card-product'>
      <Card.Img variant="top" src={personaje.image} className='card-product-img'/>
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
        {personaje.status}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default FetchCard
