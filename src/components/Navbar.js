import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
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
                <Button color="inherit">Products</Button>
              </Toolbar>
            </AppBar>
        </Box>
        )
    }
}

export default Navbar