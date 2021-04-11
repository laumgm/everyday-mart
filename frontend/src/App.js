import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import RegisterScreen from './screens/RegisterScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
/*
TO DO:
- login
- register
- navigate to homescreen
*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/product/:id' component={ProductScreen} />  
          <Route path='/' component={HomeScreen} exact />  
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
