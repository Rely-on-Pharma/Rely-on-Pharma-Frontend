"use client";
import AppContext from "@/constants/context/context";
import React, { useContext, useState } from "react";
import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";
import { Box, Grid, Typography, styled } from "@mui/material";
import { colors } from "@/constants/colors";
const CustomCartMain = styled(Box)(({ theme }) => ({
    padding:"4rem",
    ".heading":{
        fontSize:"2rem",
        fontWeight:"600",
        letterSpacing:"1px",
        textDecoration:"underline",
        color:colors?.primaryDark,
        margin:"2rem 0"
    },
    ".grid_container":{
        display:"flex",
        justifyContent:"space-between",
    },
    [theme.breakpoints.down("md")]:{
      padding:"1rem",
      ".heading":{
        fontSize:"1.5rem",
        margin:"0.8rem 0",
      }
    }
}));
const CartMain = () => {
  const { cart, incrementQty, decrementQty, removeItem } =
    useContext(AppContext);
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.selling_price * item.qty, 0);
  return (
    <CustomCartMain>
      <Typography className="heading">Order Overview</Typography>
      <Grid container spacing={2} className="grid_container">
        <Grid item xs={12} sm={6} md={8} className="grid-item" style={{display:"flex", flexDirection:"column", }}>
          {cart?.length > 0 ? (
            cart?.map((item) => (
              <ProductRow
                key={item.id}
                item={item}
                onDecrement={() => decrementQty(item.id)}
                onIncrement={() => incrementQty(item.id)}
                onRemove={() => removeItem(item.id)}
              />
            ))
          ) : (
            <Typography>Cart is Empty</Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="grid-item" >
          <CartSummary cart={cart} totalPrice={totalPrice} />
        </Grid>
      </Grid>

      {/* Right side: Order summary */}
    </CustomCartMain>
  );
};

export default CartMain;
