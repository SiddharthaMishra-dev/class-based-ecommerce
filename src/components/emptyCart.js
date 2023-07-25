import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


class EmptyCart extends React.Component{
    render(){
        const boxHeight= 'calc(100vh - 55px)'
        return (
            <Box sx={{width:'100%',height:boxHeight,padding:'2%',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <Box sx={{width:'80%' ,display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png" className='vector-image' ></img>
                    <Typography variant='h6'>
                        Your Cart is Empty
                    </Typography>
                </Box>
            </Box>
        )
    }
}
export default EmptyCart

