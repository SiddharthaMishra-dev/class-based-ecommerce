import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
class Loading extends React.Component{
    render(){
        return (
            <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={100} />
      </Box>
        )
    }
}
export default Loading;