import React from "react";
// import Products from "./pages/Products";
// import CartPage from "./pages/CartPage";
// import Start from "./pages/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from "react";

const Start=lazy(()=>import('./pages/Start'))
const Products=lazy(()=>import('./pages/Products'))
const CartPage=lazy(()=>import('./pages/CartPage'))

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Start />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
