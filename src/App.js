import React from "react";
import Home from "./Home";
import CartPage from "./CartPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;