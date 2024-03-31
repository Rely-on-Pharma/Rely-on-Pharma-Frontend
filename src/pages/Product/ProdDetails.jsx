"use client";
import { Box, FormControlLabel, IconButton, Radio, RadioGroup, Typography, styled } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
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
const ProdDetails = ({ productData , productId}) => {
  const {addToCart} = useContext(AppContext)
  const [selectedOption, setSelectedOption] = useState("quantity");
  const [quantity, setQuantity] = useState(1); // Default quantity for the quantity option
  const [selectedPack, setSelectedPack] = useState("2"); // Default selected pack option
  const [discount, setDiscount] = useState(0); // Default selected pack option
  const [variants, setVariants] = useState([]); // Default selected pack option
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/variants/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setVariants(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code, if needed
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  
  const handleAddToCart = () => {
    addToCart(productData, quantity);
  };

  const calDisPrice = (price, discount) => {
    return (price - ((price*discount)/100))
  };
  const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Ensure quantity doesn't go below 1
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const returnPriceComponent = (price,discount) => {

      if(discount){

          return (
      <Typography style={{ marginBlock: "8px", fontSize:"20px",color:colors?.primaryDark, fontWeight:"700"}}>
        <Typography
          variant="span"
          style={{ textDecorationLine: discount && "line-through", marginRight: "12px", color:colors?.MonochromeMedium, fontWeight:"600", fontSize:"16px"}}
        >
         
          Rs. {price}
        </Typography>
        Rs. {calDisPrice(productData?.price,discount)}
      </Typography>
        )

    }
    else{
    return (
        <Typography style={{ marginBlock: "8px", fontSize:"20px",color:colors?.primaryDark, fontWeight:"700"}}>
          Rs. {price}
      </Typography>
    )

    }
}

 if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }      
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

      {returnPriceComponent(productData?.price,discount)}
    <RadioGroup
        aria-label="quantity-option"
        name="quantity-option"
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          if (e.target.value === "pack") {
            setQuantity(1); // Reset quantity to default if pack option is selected
          }
          else if(e.target.value == "quantity"){

              setDiscount(0);
              setQuantity(0);
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
            {console.log(variants)}
          {/* Your pack options */}
           { variants.map((variant) => {
               return <MemoizedButton
            key = {variant.variant_id}
            className={`btn favBtn ${selectedPack === "2" ? "active" : ""}`}
            content={variant.quantity}
            handleClick={() => {
              setQuantity(variant.quantity);
              setSelectedPack(variant.quantity.toString());
              setDiscount(variant.discount_percentage);
            }}
          />

            })
           }
          
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
