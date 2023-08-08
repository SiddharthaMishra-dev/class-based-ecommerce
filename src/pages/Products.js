import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../components/Sidebar";
import Showcase from "../components/Showcase";
import Cartbar from "../components/Cartbar";
import { grey } from "@mui/material/colors";
import React from "react";
import { Box } from "@mui/material";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  withWidth,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: "smartphones",
      open: false,
    };
  }

  toggleDrawer = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  };

  fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const result = await response.json();
    this.setState({
      categories: result,
    });
  };

  updateCategory = (selectedCategory) => {
    this.setState({
      category: selectedCategory,
    });
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const Puller = styled(Box)(({ theme }) => ({
      height: 30,
      width: 6,
      backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
      borderRadius: 3,
      position: "absolute",
      right: 8,
      bottom: "calc(50% - 15px)",
    }));
    const StyledBox = styled(Box)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
    }));
    const { categories, category, open } = this.state;
    const color = grey[100];
    const drawerBleeding = 50;
    const drawerWidth = `calc(100% - ${drawerBleeding}% - 16px)`;
    const boxHeight = "calc(100vh - 55px)";
    return (
      <>
        <Box sx={{ display: { sm: "none" } }}>
          <Button onClick={this.toggleDrawer}>
            <ChevronRightIcon />
          </Button>
          <SwipeableDrawer
            anchor="left"
            open={open}
            onOpen={this.toggleDrawer}
            onClose={this.toggleDrawer}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Puller />
            <Sidebar
              categories={categories}
              category={category}
              updateCategory={this.updateCategory}
            />
          </SwipeableDrawer>
        </Box>
        <Grid spacing={1} container sx={{ width: "90%", margin: "auto" }}>
          <Hidden smDown>
            <Grid
              item
              sm={2}
              position="sticky"
              top={0}
              sx={{ height: boxHeight, overflowY: "auto" }}
            >
              <Sidebar
                categories={categories}
                category={category}
                updateCategory={this.updateCategory}
              />
            </Grid>
          </Hidden>
          <Grid item sm={10} className="">
            <Showcase category={category} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Products;
