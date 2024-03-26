"use client"
import { MemoizedButton } from '@/constants/SDK/CustomButton';
import { colors } from '@/constants/colors';
import { Box, Typography, styled } from '@mui/material';
import React from 'react';

const CustomCartSummary = styled(Box)(({ theme }) => ({
  display: "block",
  background: colors?.seaShellBase,
  padding: "1rem",
  height:"max-content",
  ".btn": {
    display: "block",
    width: "100%",
    background:colors?.primaryDark,
    padding:"4px",
    outline:"none",
    boxShadow:"none",
    margin:"0.4rem 0",
    "&:hover":{
      color:colors?.MonochromeDark,
      background:colors?.seaShellLight
    }
  },
  ".summary-line": {
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
    gap:"1.8rem",
    margin:"0.5rem 0"
  },
}));

const CartSummary = ({ cart, totalPrice }) => {
  const subtotal = totalPrice;
  const taxAmount = totalPrice * 1.12;

  return (
    <CustomCartSummary>
      <Typography variant="body1" sx={{ display: "block" }}>{`Items (${cart?.length})`}</Typography>
      <div className="summary-line">
        <Typography variant="body1" sx={{ display: "block" }}>Subtotal</Typography>
        <Typography variant="body1" sx={{ display: "block" }}>Rs. {subtotal.toFixed(2)}</Typography>
      </div>
      <div className="summary-line">
        <Typography variant="body1" sx={{ display: "block" }}>Taxes (12%)</Typography>
        <Typography variant="body1" sx={{ display: "block" }}>Rs. {taxAmount.toFixed(2)}</Typography>
      </div>
      <div className="summary-line">
        <Typography variant="body1" sx={{ display: "block" }}>Shipping Charge</Typography>
        <Typography variant="body1" sx={{ display: "block" }}>Calculated at next step</Typography>
      </div>
      <div className="summary-line">
        <Typography variant="body1" sx={{ display: "block", fontWeight:"600" }}>Total Price</Typography>
        <Typography variant="body1" sx={{ display: "block" }}>Rs. {totalPrice.toFixed(2)}</Typography>
      </div>
      <MemoizedButton className={"btn"} content={"Checkout"} />
      <MemoizedButton className={"btn"} content={"Continue Shopping"} />
    </CustomCartSummary>
  );
};

export default CartSummary;


