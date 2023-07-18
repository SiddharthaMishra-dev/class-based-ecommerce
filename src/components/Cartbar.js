import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {connect} from 'react-redux'

class Cartbar extends React.Component{
    render(){
        const {cart}=this.props
        let total_count=0;
        {cart.map((item)=>{
            total_count+=item.count
        })}
        return (
            <>  
            {total_count===0?"":
                <AppBar position='sticky' sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <h1>Items :{total_count}</h1>
                    </Toolbar>
                </AppBar>
    }
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
