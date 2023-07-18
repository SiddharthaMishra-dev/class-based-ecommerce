import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import  Grid  from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from './components/Sidebar';
import Showcase from './components/Showcase';
import Cartbar from './components/Cartbar';

import React from "react";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      categories:[],
      category:"smartphones"
    }
  }

  fetchData=async()=>{
    const response=await fetch("https://dummyjson.com/products/categories")
    const result = await response.json()
    this.setState({
      categories:result
    })
  }

  updateCategory=(selectedCategory)=>{
    this.setState({
      category:selectedCategory
    })
  }

  componentDidMount(){
    this.fetchData()
  }

  render(){
    const {categories,category}=this.state
    return (
      <>
        <h1>Ecommerce</h1>
        <Grid container spacing={0.5}>
          <Grid item xs={2} position='sticky' top={0} sx={{height:"100vh", overflow:"auto"}}>
            <Sidebar categories={categories} category={category} updateCategory={this.updateCategory} />
          </Grid>
          <Grid item xs={10}>
            <Showcase category={category}/>
          </Grid>
        </Grid>
        <Cartbar/>
      </>
      )
  }
}

export default App;
