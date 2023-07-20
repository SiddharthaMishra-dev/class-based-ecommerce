import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import  Grid  from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from './components/Sidebar';
import Showcase from './components/Showcase';
import Cartbar from './components/Cartbar';
import {grey} from '@mui/material/colors'
import React from "react";
import { Box } from '@mui/material';

class Home extends React.Component{

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
    const color=grey[100]
    return (
      <Box sx={{backgroundColor:color}} >
        <h1>Ecommerce</h1>
          <Grid container spacing={1} sx={{width:'90%',margin:'auto'}}  >
            <Grid item xs={0} sm={2} >
              <Sidebar categories={categories} category={category} updateCategory={this.updateCategory} />
            </Grid>
            <Grid item xs={12} sm={10} >
              <Showcase category={category}/>
            </Grid>
          </Grid>
          <Cartbar/>
        
      </Box>
      )
  }
}

export default Home;
