import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {connect} from "react-redux";
import { addItem } from "../store/actions";

class Showcase extends React.Component{

    constructor(props){
        super(props);
        this.state={
            productList:[]
        }
    }

    fetchData=async()=>{
        const response=await fetch(`https://dummyjson.com/products/category/${this.props.category}`)
        const result=await response.json()
        this.setState({
            productList:result.products
        })
        // console.log(result)
    }

    componentDidMount(){
        this.fetchData();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.fetchData();
        }
      }

    render(){
        const {productList}=this.state
        // console.log(this.props.cart)
        // console.log(productList)
        return <>
            <h2>Your {this.props.category} Showcase</h2>
            {
                productList?
                <div>
                    <ul>
                        {productList.map((product,index)=>{
                            return(
                                <li key={index}>
                                    <Card sx={{ maxWidth: 400 , marginTop:10}} >
                                        <CardMedia
                                            sx={{ height: 400 }}
                                            image={product.thumbnail}
                                            title={product.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small"  >Share</Button>
                                            <Button size="small" onClick={()=>{
                                                this.props.addItem(product)
                                                console.log(this.props.cart)
                                            }}>Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                </li>
                            )
                        })}
                    </ul>
                </div>:<h1>Loading</h1>
            }
        </>
    }
}

const mapStatToProps=(state)=>{
    return {
        cart:state.cart
    }
}

const mapDispatchToProps={
    addItem,
}

export default connect(mapStatToProps, mapDispatchToProps)(Showcase)