import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 0,
    };
  }
  handleCategorySelection = (selectedCategory, index) => {
    this.props.updateCategory(selectedCategory);
    this.setState({ selectedCategory: index });
  };
  render() {
    const { categories, category } = this.props;
    return (
      <Box sx={{ backgroundColor: "#ffff" }}>
        {categories ? (
          <>
            <List className="list-item">
              {categories.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    onClick={() => this.handleCategorySelection(item, index)}
                  >
                    <ListItemButton
                      selected={this.state.selectedCategory === index}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </>
        ) : (
            <CircularProgress size={55}/>
        )}
      </Box>
    );
  }
}

export default Sidebar;
