import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {cart}=this.props;
        let itemCount=0;
        {cart.map((item)=>{
            itemCount+=item.count
        })}
        return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{display:{sm:'none'}, mr: 2 }}
                  onClick={this.props.toggleFunction}
                >
                  <MenuIcon />
                </IconButton>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Ecommerce
                </Typography>
                <Link to='/'  > 
                  <Button color="inherit" sx={{color:'white'}} >
                     Home
                  </Button>
                </Link>
                <Link to='/products'  > 
                  <Button color="inherit" sx={{color:'white'}} >
                     Products
                  </Button>
                </Link>
                <Link to ='/cart'>
                  
                  <Button color='inherit' sx={{color:'white'}} >
                    <Badge badgeContent={itemCount} color='error' >
                      <ShoppingCartIcon/>
                    </Badge>
                  </Button>
                </Link>
              </Toolbar>
            </AppBar>
        </Box>
        )
    }
}

const mapStateToProps=(state)=>{
  return {
    cart:state.cart
  }
}

export default connect(mapStateToProps)(Navbar)