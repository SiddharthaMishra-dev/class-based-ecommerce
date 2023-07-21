import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import {Button} from "@mui/material";
import blue from "@mui/material/colors/blue";
import { Link } from "react-router-dom";

class Start extends React.Component{
    render(){
        const headingColor=blue[700]
        const bodyColor=blue[600]
        return (
            <Box sx={{height:"100vh"}}>
                <Navbar/>
                <Box className="start-showcase" sx={{height:1}} >
                    <Typography variant="h1" color={headingColor} className="start-showcase-heading" >
                        Buy on one-click
                    </Typography>
                    <Typography variant="h6" color={bodyColor} className="start-showcase-content" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque.
                    </Typography>
                    <Link to="/products">
                        <Button variant="contained" size="large">Buy Now</Button>
                    </Link>
                </Box>
            </Box>
        )
    }
}
export default Start