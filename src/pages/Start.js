import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import {Button} from "@mui/material";
import blue from "@mui/material/colors/blue";
import { Link } from "react-router-dom";

class Start extends React.Component{
    render(){
        const headingColor=blue[700]
        const bodyColor=blue[600]
        const boxHeight= 'calc(100vh - 55px)'
        return (
            <Box sx={{height:"100vh",overflowY:'auto'}}>
                <Navbar sidebarHidden={true} />
                <Box className="start-showcase" sx={{height:boxHeight}} >
                    <Typography variant="h1" color={headingColor} className="start-showcase-heading" >
                        Buy on one-click
                    </Typography>
                    <Typography variant="h6" color={bodyColor} className="start-showcase-content" >
                        Everything on One-click, from phone to phone cover, laptop to lamp, car to accessories ,menwear to womenwears and many more.
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