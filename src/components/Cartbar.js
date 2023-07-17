import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

class Cartbar extends React.Component{
    render(){
        return (
            <>  
                <AppBar position='sticky' sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <h1>Cart Bar</h1>
                </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default Cartbar;
