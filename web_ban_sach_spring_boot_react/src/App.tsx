import React from 'react';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import HomePage from './layouts/homepage/Homepage';
import { getAllBooks } from './api/BookAPI';
import ListProduct from './layouts/product/ListProduct';

function App() {
 
  return (
    <div>
      <Navbar />

      <HomePage />
      <Footer />
    </div>

  
  );
}

export default App;
