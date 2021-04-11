import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
/*
TO DO:
- login
- register
- homescreen
*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />  
          <Route path='/product/:id' component={ProductScreen} />  
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
