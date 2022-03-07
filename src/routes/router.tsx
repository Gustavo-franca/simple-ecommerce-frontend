import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../pages/productList';
import ProductDescription from '../pages/productDescription';
import Checkout from '../pages/checkout';
import Success from '../pages/success';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDescription />} />
      <Route path="/checkout/" element={<Checkout />} />
      <Route path="/success/" element={<Success />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
