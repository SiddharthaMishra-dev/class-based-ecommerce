import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {connect} from 'react-redux'
import { removeCart } from "../store/actions";
import {Button} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'

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
                    <Toolbar sx={{display:'flex' , justifyContent:'center'}} >
                        <Link to="/cart">
                            <Button color="inherit"  sx={{color:'white'}} component="div" >
                                <h2>Items :{total_count}</h2>
                            </Button>
                        </Link>
                        {/* <Button color="inherit" >
                            <DeleteIcon sx={{}} onClick={()=>this.props.removeCart()} />
                        </Button> */}
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

const mapDispatchToProps={
    removeCart,
}

export default connect(mapStateToProps,mapDispatchToProps)(Cartbar);
