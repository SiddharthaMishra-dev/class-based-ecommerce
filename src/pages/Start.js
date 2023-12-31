import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import blue from "@mui/material/colors/blue";
import { Link } from "react-router-dom";

class Start extends React.Component{
    render(){
        const headingColor=blue[900]
        const bodyColor=blue[600]
        return (
            <>
                <Box className="start-showcase" >
                    <Typography variant="h1" color={headingColor} className="start-showcase-heading" >
                        Buy on one-click
                    </Typography>
                    <Typography variant="h6" color={bodyColor} className="start-showcase-content" >
                        Everything on One-click, from phone to phone cover, laptop to lamp, car to accessories ,menwear to womenwears and many more.
                    </Typography>
                    <Link to="/products">
                        <Button variant="contained" size="large" sx={{fontSize:'1.2rem',fontWeight:'bold'}} >Buy Now</Button>
                    </Link>
                </Box>
            </>
          
        )
    }
}
export default Start