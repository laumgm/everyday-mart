import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';

export default function Product( {product} ) {
 //const {product} = props; 
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h4'> ${product.price} </Card.Text>
      </Card.Body>
    </Card>
  ) 
}
