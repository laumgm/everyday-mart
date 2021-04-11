import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';
import products from '../products.js';

function HomeScreen() {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* components can take in props */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen