import React from "react";
import { Routes, Route } from "react-router-dom";

import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

import { Header } from "./Header";

// import pizzasList from "../assets/pizzas.json";
// https://62a09ad3202ceef70871ea61.mockapi.io/items

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
