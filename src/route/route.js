import React from "react";
import ProductListing from "../productListing/productListing";
import ProductDetail from "../productDetail/ProductDetail";
import AddProduct from "../component/AddProduct";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";

export default function RouteRole() {
  return (
    <Routes>
      <Route exact path="/product-listing" element={<ProductListing />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product-detail/:id" element={<ProductDetail />} />
      <Route exact path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}
