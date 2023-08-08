import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
class Layout extends React.Component {
  render() {
    const boxHeight="calc(100vh - 55px)"
    return (
      <Box sx={{ height: "100vh",overflowY:'auto' }}>
        <Navbar />
        <Box sx={{height:boxHeight,overflow:'auto'}}>
          <Outlet />
        </Box>
      </Box>
    );
  }
}

export default Layout;