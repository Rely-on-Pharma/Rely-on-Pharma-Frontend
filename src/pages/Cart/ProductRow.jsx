"use client";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import { colors } from "@/constants/colors";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
    gap:"8px",
    ">p": {
      fontSize: "1.02rem",
      fontWeight: "700",
      letterSpacing: "1px",
    },
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
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
    gap: "0.8rem",
    ".img-box": {
      width: "5rem",
      height: "100%",
      objectFit: "contain",
    },
    ".btn": {
      padding: "6px 0",
      fontSize: "10px",
    },
    ".productDetail": {
      display: "flex",
      justifyContent: "space-between",

      ">p": {
        fontSize: "0.1rem",
        display: "block",
        fontWeight: "600",
        letterSpacing: "1px",
      },
    },
  },
}));
const ProductRow = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <CustomProductRow>
      <Box>
        <Image
          className="img-box"
          src={item?.image_url[0] || "https://loremflickr.com/640/480?lock=6586178289532928"}
          alt={item.name}
          priority
          width={160}
          style={{width:"200px", height:"160px", objectFit:"contain"}}
          height={160}
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
          <Typography variant="body1">{item?.name} </Typography>
          <Typography variant="body1">Rs. {item?.selling_price}/-</Typography>
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
            <MemoizedIconButton ariaLabel={"close"}
              className={"btn"}
              handleClick={onDecrement}
              icon={RemoveIcon}
            />
            <Typography>{item?.qty}</Typography>
            <MemoizedIconButton ariaLabel={"close"}
              className={"btn"}
              handleClick={onIncrement}
              icon={AddIcon}
            />
          </Box>

          <MemoizedIconButton ariaLabel={"close"}
            className={"btn"}
            handleClick={onRemove}
            icon={DeleteIcon}
            style={{ color: colors?.warning }}
          />
          <MemoizedIconButton ariaLabel={"close"}
            className={"btn"}
            handleClick={onIncrement}
            icon={FavoriteIcon}
          />
        </Box>
      </Box>
    </CustomProductRow>
  );
};

export default ProductRow;
