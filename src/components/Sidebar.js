import React from "react";
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
                        <ul>
                        {categories.map((item,index)=>{
                            return <li key={index} onClick={()=>this.handleCategorySelection(item)} >{item}</li>
                        })}
                        </ul>
                    </div>):"loading"
                 }
            </>
        )
    }
}

export default Sidebar;