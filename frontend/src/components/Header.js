import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container} from 'react-bootstrap';
export default function Header(){
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
            
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user mr-2'></i>Sign in
              </Nav.Link>
            </LinkContainer> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
)};