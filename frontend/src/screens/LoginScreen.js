import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer.js';
import Message from '../components/MessageBox.js';
import Loader from '../components/LoadingBox.js';
import { signin } from '../actions/userActions.js';

export default function LoginScreen( { location, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin)
  const { loading, error, userInfo } = userSignin;
  
  //url query string
  const redirect = location.search ? location.search.split('=')[1] : '/';
  
  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(signin(email, password)) 
  }
  return (
    <FormContainer>
      <h1>Sign in</h1>
      { error && <Message variant='danger'> {error} </Message> }
      { loading && <Loader /> }
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type='email' 
            placeholder='Enter email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type='password' 
            placeholder='Enter password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}>
          </Form.Control>
        </Form.Group>
        {/* <Link to={redirect ? `/?redirect=${redirect}` : '/'}>
          <Button 
            type='submit' 
            variant='primary' 
            onClick={Success}
          >
            Sign in
          </Button>
        </Link> */}
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