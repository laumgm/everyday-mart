import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer.js';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/MessageBox.js';
import Loader from '../components/LoadingBox.js';
import { register } from '../actions/userActions.js';

export default function RegisterScreen({ location, history }) {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userSignin)
  const { loading, error, userInfo } = userRegister;
  
  //url query string
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    } else {
      dispatch(register(firstName, lastName, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign up</h1>
      { message && <Message variant='danger'> {message} </Message> }
      { error && <Message variant='danger'> {error} </Message> }
      { loading && <Loader /> }
      <Form>
        <Form.Group controlId='firstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type='text' 
            placeholder='Enter first name' 
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='lastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type='text' 
            placeholder='Enter last name' 
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type='email' 
            placeholder='Enter email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type='password' 
            placeholder='Enter password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            type='password' 
            placeholder='Confirm password' 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}>
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' onClick={submitHandler}>Sign Up</Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an account? {' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}
