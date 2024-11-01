import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewArrivals from "../pages/NewArrivals";
import Catalog from "../pages/Catalog";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Favorites from "../pages/Favorites"
import Cart from "../pages/Cart"
import Product from "../pages/product"

import '../styles/Contents.css'

function Contents() {
  return (
    <div className='contents'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new-arrivals' element={<NewArrivals />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default Contents;