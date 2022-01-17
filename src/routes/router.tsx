import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../pages/productList';
import ProductDescription from '../pages/productDescription';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDescription />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
