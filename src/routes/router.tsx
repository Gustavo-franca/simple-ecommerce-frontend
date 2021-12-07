import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import ProductList from "../pages/productList";

const Router = ()=> {
    return (
        <BrowserRouter>
                <Routes >
                    <Route path="/" element={<ProductList/>} />
                </Routes>
        </BrowserRouter>
    );
}
export default Router;
