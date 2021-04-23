import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { signout } from '../actions/userActions.js';

export default function Header(){
  
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  
  const signoutHandler = () => {
    dispatch(signout());
  };

  return(
    <header >
      <Navbar bg='primary' expand='lg' collapseOnSelect>
        <Container className='p-2'>
          <LinkContainer to='/'>
            <Navbar.Brand>Everyday Mart</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart mr-2'></i>Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.firstName} id='username'>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item className='dropdown-item'>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item className='dropdown-item' onClick={signoutHandler}>
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user mr-2'></i>Sign in
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
)};