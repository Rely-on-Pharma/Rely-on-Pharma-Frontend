"use client";
import { Box, FormControlLabel, IconButton, Radio, RadioGroup, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { colors } from "@/constants/colors";
import AppContext from "@/constants/context/context";
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
      padding:"10px",
      "&.active":{
        background:colors?.secondaryDark,
    color:colors?.white,
      }
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
  const {addToCart} = useContext(AppContext)
  const [selectedOption, setSelectedOption] = useState("quantity");
  const [quantity, setQuantity] = useState(1); // Default quantity for the quantity option
  const [selectedPack, setSelectedPack] = useState("2"); // Default selected pack option

  const handleAddToCart = () => {
    addToCart(productData, quantity);
  };

  const calDisPrice = (price, discount) => {
    return parseInt((discount / 100) * price);
  };
  const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Ensure quantity doesn't go below 1
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
   //understand the changes required to the products table.
   //Understand the discount mechanism. When should the discount appear?
   //Understand the rating feature. Add a field for rating.
   //Add description, how to use, and ingredients string
       
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
      by {productData?.brand}
      </Typography>
      {
          /* <Typography style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <StarIcon /> 4.5
       </Typography>
        */
      }
      <Typography style={{ marginBlock: "8px", fontSize:"20px",color:colors?.primaryDark, fontWeight:"700"}}>
        <Typography
          variant="span"
          style={{ textDecorationLine: "line-through", marginRight: "12px", color:colors?.MonochromeMedium, fontWeight:"600", fontSize:"16px"}}
        >
         
          Rs. {productData?.price}
        </Typography>
        Rs. {calDisPrice(productData?.price, productData?.discount)}
      </Typography>
      <RadioGroup
        aria-label="quantity-option"
        name="quantity-option"
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          if (e.target.value === "pack") {
            setQuantity(1); // Reset quantity to default if pack option is selected
          }
        }}
        style={{ marginBlock: "16px" }}
      >
        <FormControlLabel value="quantity" control={<Radio />} label="Select by quantity" /> 
        {selectedOption === "quantity" && (
        <Box style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Quantity counter */}
          <IconButton onClick={decrementQuantity} className="btn">
            -
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={incrementQuantity} className="btn">
            +
          </IconButton>
        </Box>
      )}
        <FormControlLabel value="pack" control={<Radio />} label="Select pack of" />
        {selectedOption === "pack" && (
        <Box style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Your pack options */}
          <MemoizedButton
            className={`btn favBtn ${selectedPack === "2" ? "active" : ""}`}
            content={"2"}
            handleClick={() => {
              setQuantity(2);
              setSelectedPack("2");
            }}
          />
          <MemoizedButton
            className={`btn favBtn ${selectedPack === "4" ? "active" : ""}`}
            content={"4"}
            handleClick={() => {
              setQuantity(4);
              setSelectedPack("4");
            }}
          />
          <MemoizedButton
            className={`btn favBtn ${selectedPack === "6" ? "active" : ""}`}
            content={"6"}
            handleClick={() => {
              setQuantity(6);
              setSelectedPack("6");
            }}
          />
        </Box>
      )}
      </RadioGroup>

      

     
      <Box style={{ marginBlock: "16px", width:"100%", display:"flex",alignItems:"center", gap:"12px" }}>
        <MemoizedButton className={"btn addToBtn"} content={"Add to Cart"} handleClick={handleAddToCart}/>
        <IconButton className="btn favBtn"><FavoriteIcon  /></IconButton>
      </Box>
      <MemoizedButton className={"btn checkBtn"} content={"checkout"} />
    </CustomPRodDetails>
  );
};

export default ProdDetails;
