"use client";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { colors } from "@/constants/colors";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
const CustomProductRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  gap: "3rem",
  margin: "0.5rem 0",
  padding: "8px",
  border: `2px solid ${colors?.primaryDark}`,
  borderRadius: "16px",
  ".img-box": {
    width: "10rem",
    height: "100%",
    objectFit: "contain",
  },
  ".prodDetail": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0.4rem 0",
    ">p":{
        fontSize:"1.02rem",
        fontWeight:"700",
        letterSpacing:"1px"
    }
  },
  ".btn": {
    background: "none",
    outline: "none",
    boxShadow: "none",
    border: "none",
    padding: "8px",
    color: colors?.primaryDark,
    fontWeight: "500",
    fontSize: "1rem",
    "&:hover": {
      background: "none",
      outline: "none",
      boxShadow: "none",
      border: "none",
      color: colors?.primaryDark,
    },
  },
}));
const ProductRow = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <CustomProductRow>
      <Box>
        <Image
          className="img-box"
          src={item.image}
          alt={item.name}
          width={40}
          height={40}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Box className="prodDetail">
          <Typography variant="body1">{item?.name}</Typography>
          <Typography variant="body1">Rs. {item?.price}/-</Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "2px solid grey",
              marginRight: "1rem",
            }}
          >
            <MemoizedButton
              className="btn"
              handleClick={onDecrement}
              content={"-"}
            />
            <Typography>{item?.qty}</Typography>
            <MemoizedButton
              className="btn"
              handleClick={onIncrement}
              content={"+"}
            />
          </Box>
          <MemoizedButton
            className="btn"
            handleClick={onRemove}
            content={"Remove"}
            style={{ color: colors?.warning }}
          />
          <MemoizedButton className="btn" content={"Move to Wishlist"} />
        </Box>
      </Box>
    </CustomProductRow>
  );
};

export default ProductRow;
