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
            <AppBar position="sticky" className="navbar">
              <Toolbar variant="dense">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{display:{sm:'none'}, mr: 2 }}
                  onClick={this.props.toggleFunction}
                  className="cart-button"
                >
                  <MenuIcon />
                </IconButton>
                
                <Typography variant="h6" component="div" sx={{}} className="navbar-heading" >
                  ShopKaro
                </Typography>
                <Box sx={{marginLeft:'auto'}}  >
                <Link to='/'  > 
                  <Button color="inherit" sx={{color:'white'}} className="navbar-content" >
                     Home
                  </Button>
                </Link>
                <Link to='/products'  > 
                  <Button color="inherit" sx={{color:'white'}} className="navbar-content" >
                     Products
                  </Button>
                </Link>
                <Link to ='/cart'>
                  <Button color='inherit' sx={{color:'white'}} className="cart-button"  >
                    <Badge badgeContent={itemCount} color='error'  >
                      <ShoppingCartIcon className="cart-icon" />
                    </Badge>
                  </Button>
                </Link>
                </Box>
              </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps=(state)=>{
  return {
    cart:state.cart
  }
}

export default connect(mapStateToProps)(Navbar)