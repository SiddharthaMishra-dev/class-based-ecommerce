import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

class Sidebar extends React.Component{

    handleCategorySelection=(selectedCategory)=>{
        this.props.updateCategory(selectedCategory)
    }
    
    render(){
        const {categories,category}=this.props
        return (
            <>
                {
                    categories
                    ?(<div>
                        <List>
                        {categories.map((item,index)=>{
                            return <ListItem key={index} onClick={()=>this.handleCategorySelection(item)} ><ListItemButton><ListItemText primary={item}/></ListItemButton></ListItem>
                        })}
                        </List>
                    </div>):"loading"
                 }
            </>
        )
    }
}

export default Sidebar;