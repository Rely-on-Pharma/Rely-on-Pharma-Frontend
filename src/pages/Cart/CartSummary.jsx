import { MemoizedButton } from '@/constants/SDK/CustomButton';
import { colors } from '@/constants/colors';
import { Box, Typography, styled } from '@mui/material';
import React from 'react';
const CustomCartSummary = styled(Box)(({theme})=>({
    display:"block",
    background:colors?.seaShellBase,
    padding:"1rem",
    ".btn":{
        display:"block",
        width:"100%"
    }
}))
const CartSummary = ({ cart, totalPrice }) => {
  return (
    <CustomCartSummary >
    <Typography variant="body1" sx={{display:"block"}}>{`Items(${cart?.length})`}</Typography>
      
      <Typography variant="body1" align='left' sx={{display:"block"}}>Subtotal <Typography align='right' variant="body1">Rs. {totalPrice}</Typography></Typography>
      <Typography variant="body1" sx={{display:"block"}}>Total Price: ${totalPrice}</Typography>
      <MemoizedButton className={"btn"}  content={"Checkout"}/>
      <MemoizedButton className={"btn"} content={"Continue Shopping"}/>
    </CustomCartSummary>
  );
};

export default CartSummary;
