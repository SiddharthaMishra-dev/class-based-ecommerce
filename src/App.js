import React from "react";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import Start from "./pages/Start";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

class App extends React.Component{
  render(){
   
    return (
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path ="/products" element={<Products/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </BrowserRouter>
     
    )
  }
}

export default App;