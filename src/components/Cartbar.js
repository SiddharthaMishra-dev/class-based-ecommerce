import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {connect} from 'react-redux'

class Cartbar extends React.Component{
    render(){
        const {cart}=this.props
        return (
            <>  
                <AppBar position='sticky' sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <h1>Cart Bar :{cart.length}</h1>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Cartbar);
