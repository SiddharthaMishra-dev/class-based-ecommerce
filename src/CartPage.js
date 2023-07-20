import React from "react";
import {connect} from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';

class CartPage extends React.Component{
    render(){
        const {cart}=this.props
        let totalPrice=0
        let totalDiscount=0
        {cart.map((item)=>{
            totalPrice+=item.price
            let discount=(item.discountPercentage/100)*item.price
            totalDiscount+=discount
        })}
        return (
            <>
                <h1>Your Cart is Here</h1>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                { cart?
                    <List dense={true}>
                        {cart.map((product,index)=>{
                            return(
                                <ListItem key={index}>
                                    <Card sx={{ width:900, marginTop:5,display:'flex'}}>
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
                                            </CardActions>
                                        </Box>
                                    </Card>
                                </ListItem>
                            )
                        })}
                    </List>:""}
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
                                    {totalPrice}
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="body1" color="text.secondary">
                                    Discount
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {totalDiscount}
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="body1" color="text.secondary">
                                    Total Amount
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    $1200
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </>
        
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        cart:state.cart
    }
}
export default connect(mapStateToProps)( CartPage)