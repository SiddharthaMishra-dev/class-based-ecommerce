
import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';
import  Grid  from '@mui/material/Grid';
import {Hidden} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Showcase from '../components/Showcase';
import Cartbar from '../components/Cartbar';
import {grey} from '@mui/material/colors'
import React from "react";
import { Box } from '@mui/material';
import { Drawer, IconButton, List, ListItem, ListItemText, withWidth } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';


class Home extends React.Component{

  constructor(props){
    super(props);
    this.state={
      categories:[],
      category:"smartphones",
      open:false
    }
  }

  toggleDrawer=()=>{
    this.setState((prevState)=>{
     return { open:!prevState.open }
    })
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
    const {categories,category,open}=this.state
    const color=grey[100]    
    return (
      <Box sx={{backgroundColor:color}} >
        <Navbar toggleFunction={this.toggleDrawer} />
          <Box sx={{display:{sm:'none'}}}>
                <Drawer anchor="left" open={open} onClose={this.toggleDrawer}>
                  <Sidebar categories={categories} category={category} updateCategory={this.updateCategory} />
                </Drawer>
          </Box>
          <Grid spacing={1} container sx={{width:'90%',margin:'auto'}}  >
            <Hidden smDown>
            <Grid item  sm={2} >
              <Sidebar categories={categories} category={category} updateCategory={this.updateCategory} />
            </Grid>
            </Hidden>
            <Grid item  sm={10} className='' >
              <Showcase category={category}/>
            </Grid>
          </Grid>
      </Box>
      )
  }
}

export default Home;
