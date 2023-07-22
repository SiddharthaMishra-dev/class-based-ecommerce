import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


class EmptyCart extends React.Component{
    render(){
        return (
            <Box>
                <Typography variant='h4' >
                    Your card is empty
                </Typography>
            </Box>
        )
    }
}
export default EmptyCart

