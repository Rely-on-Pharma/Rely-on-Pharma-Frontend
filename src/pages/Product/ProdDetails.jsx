"use client";
import { Box, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { colors } from "@/constants/colors";
const CustomPRodDetails = styled(Box)(({ theme }) => ({
  padding: "2rem",
  ".prodName": {
    fontSize: "36px",
    fontWeight: "600",
    letterSpacing: "1px",
    textAlign: "left",
    textTransform: "capitalize",
  },
  ".btn":{
    textTransform:"capitalize",
    borderRadius:"8px",
    "&.addToBtn":{
      background:colors?.primaryDark,
      color:colors?.MonochromeLight,
      width:"40%",
      padding:"8px"
    },
    "&.favBtn":{
      background:colors?.secondaryMedium,
      color:colors?.white,
      width:"8%",
      padding:"10px"
    },
    "&.checkBtn":{
      background:colors?.secondaryMedium,
      color:colors?.white,
      padding:"8px",
      width:"50%",
    }
  },

  [theme.breakpoints.down("md")]:{
    padding: "0.5rem",
    ".prodName": {
      fontSize: "26px",
    },
    ".btn":{
      "&.addToBtn":{
        width:"80%",
      },
      "&.favBtn":{
        width:"16%",
      },
      "&.checkBtn":{
        width:"100%",
      }
    },
  }
}));
const ProdDetails = ({ productData }) => {
  const calDisPrice = (price, discount) => {
    return parseInt((discount / 100) * price);
  };
  return (
    <CustomPRodDetails>
      <Typography className="prodName">{productData?.name}</Typography>
      <Typography
        style={{
          fontSize: "16px",
          textTransform: "capitalize",
          marginBlock: "8px",
        }}
      >
        Company name:-{productData?.company}
      </Typography>
      <Typography style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <StarIcon /> 4.5
      </Typography>
      <Typography style={{ marginBlock: "8px", fontSize:"20px",color:colors?.primaryDark, fontWeight:"700"}}>
        <Typography
          variant="span"
          style={{ textDecorationLine: "line-through", marginRight: "12px", color:colors?.MonochromeMedium, fontWeight:"600", fontSize:"16px"}}
        >
          
          Rs. {productData?.price}
        </Typography>
        Rs. {calDisPrice(productData?.price, productData?.discount)}
      </Typography>
      <Box style={{ marginBlock: "16px", width:"100%", display:"flex",alignItems:"center", gap:"12px" }}>
        <MemoizedButton className={"btn addToBtn"} content={"Add to Cart"} />
        <IconButton className="btn favBtn"><FavoriteIcon  /></IconButton>
      </Box>
      <MemoizedButton className={"btn checkBtn"} content={"checkout"} />
    </CustomPRodDetails>
  );
};

export default ProdDetails;
