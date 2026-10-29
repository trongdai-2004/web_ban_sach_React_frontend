import React, { useState } from 'react';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import HomePage from './layouts/homepage/Homepage';
import { getAllBooks } from './api/BookAPI';
import ListProduct from './layouts/product/ListProduct';

function App() {
  const  [searchKeywords, setsearchKeywords] = useState('');


  return (
    <div>
      <Navbar searchKeywords = {searchKeywords} setsearchKeywords = {setsearchKeywords}/>
      <HomePage searchKeywords = {searchKeywords} />
      <Footer />
    </div>

  
  );
}

export default App;
