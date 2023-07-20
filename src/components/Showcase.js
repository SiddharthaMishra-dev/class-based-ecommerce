import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {connect} from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import { addItem } from "../store/actions";
import { removeCart } from "../store/actions";

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
        return (
        <Box sx={{backgroundColor:'#ffff'}}>
            {
                productList?
                    <List dense={true}>
                        {productList.map((product,index)=>{
                            return(
                                <ListItem key={index}>
                                    <Card sx={{width:1, marginBottom:5,display:'flex'}} className="item-card" >
                                        <CardMedia
                                            sx={{ width:400 , height:400 }}
                                            image={product.thumbnail}
                                            title={product.title}
                                        />
                                        <Box sx={{display:"flex",flexDirection:'column', justifyContent:'space-between' }}>
                                            <CardContent sx={{display:"flex",flexDirection:'column'}}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                {product.title}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                    {product.description}
                                                </Typography>
                                                <Typography variant="h5" color="teal" sx={{marginTop:2}}>
                                                    ${product.price}
                                                </Typography>
                                                <Rating
                                                    name="rating"
                                                    value={product.rating}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                    sx={{marginTop:2}}
                                                />
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small"  >
                                                    <ShareIcon/>
                                                </Button>
                                                <Button size="medium" variant="contained" onClick={()=>{
                                                    this.props.addItem(product)
                                                    console.log(this.props.cart)
                                                }}>Add to Cart</Button>
                                            </CardActions>
                                        </Box>
                                    </Card>
                                </ListItem>
                            )
                        })}
                    </List>
                :<h1>Loading</h1>
            }
        </Box>
        );
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