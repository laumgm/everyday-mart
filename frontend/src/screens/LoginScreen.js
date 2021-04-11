import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer.js';
// import Message from '../components/Message.js';
// import Loader from '../components/Loader.js';
// import { login } from '../actions/userActions.js';

export default function LoginScreen( { location }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
  //url query string
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const submitHandler = (e) => {
      e.preventDefault()
      //Dispatch login
  }
  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type='email' 
            placeholder='Enter email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type='password' 
            placeholder='Enter password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>Sign in</Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? {' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              Create an account
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}