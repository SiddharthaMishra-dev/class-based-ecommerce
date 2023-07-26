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
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import { addItem } from "../store/actions";
import TextField from '@mui/material/TextField';

class Showcase extends React.Component{

    constructor(props){
        super(props);
        this.state={
            productList:[],
            search:'',
        }
    }

    fetchData=async()=>{
        if(this.state.search===''){
            const response=await fetch(`https://dummyjson.com/products/category/${this.props.category}`)
            const result=await response.json()
            this.setState({
                productList:result.products
            })
        }
        else{
            const response=await fetch(`https://dummyjson.com/products/search?q=${this.state.search}`)
            const result=await response.json()
            this.setState({
                productList:result.products
            })
        }
        
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    componentDidMount(){
        this.fetchData();
    }
    
    componentDidUpdate(prevProps,prevState) {
        if (prevProps.category !== this.props.category) {
            this.fetchData();
        }
        if(prevState.search !== this.state.search){
            this.fetchData();
        }
      }

    render(){
        const {productList}=this.state
        return (
        <Box sx={{backgroundColor:'#ffff'}}>
            <Box sx={{width:'50%',marginLeft:'auto',marginRight:'auto'}}>
                <TextField id="outlined-search" label="Search field" type="search" sx={{margin:2,width:'100%'}} value={this.state.search} onChange={this.handleChange} />
            </Box>
            {
                productList?
                    <List dense={true}>
                        {productList.map((product,index)=>{
                            return(
                                <ListItem key={index}>
                                    <Card sx={{width:1, marginBottom:3,display:'flex'}} className="item-card" >
                                        <CardMedia
                                            sx={{ width:'100%' , height:300 }}
                                            image={product.thumbnail}
                                            title={product.title}
                                            className="product-image"
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