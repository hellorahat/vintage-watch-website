import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewArrivals from "../pages/NewArrivals";
import Catalog from "../pages/Catalog";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";


function Contents() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/new-arrivals' element={<NewArrivals />}></Route>
      <Route path='/catalog' element={<Catalog />}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/contact-us' element={<ContactUs />}></Route>
    </Routes>
  );
}

export default Contents;