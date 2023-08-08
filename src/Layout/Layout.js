import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import Loading from "../components/Loading";
class Layout extends React.Component {
  render() {
    const theme = createTheme({
      palette: {
        primary: {
          main: "#0D1282",
          light: "#75C2F6",
        },
        secondary: {
          main: "#D71313",
        },
      },
      typography: {
        fontFamily: ['"Montserrat"'].join(","),
      },
    });
    const boxHeight = "calc(100vh - 55px)";
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100vh", overflowY: "auto" }}>
          <Navbar />
          <Box sx={{ height: boxHeight, overflow: "auto" }}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default Layout;
