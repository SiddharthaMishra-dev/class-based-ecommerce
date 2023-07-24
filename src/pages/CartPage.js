import React from "react";
import Navbar from "../components/Navbar";
import EmptyCart from "../components/emptyCart";
import {connect} from 'react-redux'
import { removeItem,addItem } from "../store/actions";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import {grey,green} from '@mui/material/colors'
import DeleteIcon from '@mui/icons-material/Delete';


class CartPage extends React.Component{
    render(){
        const {cart}=this.props
        console.log('Cart:',cart)
        let totalPrice=0
        let totalDiscount=0
       
        {cart.map((item)=>{
            
            totalPrice=totalPrice+(item.count*item.price)
            let discount=(item.discountPercentage/100)*item.price*item.count
            discount=parseInt(discount)
            totalDiscount+=discount
        })}
        const color=grey[100]  
        const fontgreen=green[600]
        return (
            <>
                <Box  sx={{ backgroundColor:color}} >
                    <Navbar/>
                        { cart.length!=0?(<Box className="cart-container">
                                <List dense={true}>
                                    {cart.map((product,index)=>{
                                        return(
                                            <ListItem key={index}>
                                                <Card  sx={{ marginBottom:5,display:'flex'}} className="item-card">
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
                                                            <Button size="small"  onClick={()=>this.props.addItem(product)} >
                                                                <AddCircleIcon  />
                                                            </Button>
                                                            <Chip label={product.count}  />
                                                            <Button size="small"  onClick={()=>this.props.removeItem(product.id)}>
                                                                <RemoveCircleIcon  />
                                                            </Button>
                                                            {/* <Button size="small" onClick={()=>this.props.removeItem(product.id)} >
                                                                <DeleteIcon/>
                                                            </Button> */}
                                                        </CardActions>
                                                    </Box>
                                                </Card>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                <Card sx={{width:400, height:'fit-content', marginTop:10 }}>
                                    <CardContent sx={{display:"flex",flexDirection:'column',justifyContent:'center'}}>
                                        <Box >
                                            <Typography variant="h6" color="text.secondary">
                                                PRICE DETAILS
                                            </Typography>
                                            
                                        </Box>
                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                            <Typography variant="body1" color="text.secondary">
                                                Price
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                ${totalPrice}
                                            </Typography>
                                        </Box>
                                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                            <Typography variant="body1" color="text.secondary" sx={{color:fontgreen}} >
                                                Discount
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" sx={{color:fontgreen}}>
                                            - ${totalDiscount}
                                            </Typography>
                                        </Box>
                                        <hr></hr>
                                        <Box sx={{display:'flex',justifyContent:'space-between ', marginTop:2}}>
                                            <Typography variant="h5" color="text.secondary">
                                                Total Amount
                                            </Typography>
                                            <Typography variant="h5" color="text.secondary">
                                                ${totalPrice-totalDiscount}
                                            </Typography>
                                        </Box>
                                        <Button variant="contained" size="lg" sx={{marginTop:3}} >Place Order</Button>
                                    </CardContent>
                                </Card>
                            </Box>)
                            :
                            <EmptyCart/>}
                        </Box>
                {/* </Box> */}
            </>
        
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        cart:state.cart
    }
}
const mapDispatchToProps={
    addItem,
    removeItem,
}
export default connect(mapStateToProps,mapDispatchToProps)( CartPage)   