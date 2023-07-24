import React from "react";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Start from "./pages/Start";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path ="/products" element={<Home/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;