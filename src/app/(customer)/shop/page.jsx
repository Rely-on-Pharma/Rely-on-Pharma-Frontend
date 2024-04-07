"use client";
import { Box, Drawer, Grid, Typography, styled } from "@mui/material";
import React, { useState , useEffect } from "react";
//import { productData } from "../../../constants/data/productData.js";
import { MemoizedButton } from "@/constants/SDK/CustomButton.js";
import { colors } from "@/constants/colors.js";
import FilterListIcon from "@mui/icons-material/FilterList";
import ProductCard from "@/pages/shop/products.jsx";
import FilterDrawer from "@/pages/shop/FilterDrawer.jsx";
const CustomShop = styled(Box)(({ theme }) => ({
  padding: "4rem",
  ".shop-head": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin:"12px"
  },
  ".filter-btn": {
    background: "none !important",
    color: colors?.MonochromeDark,
    boxShadow: "none",
    outline: "none",
    padding: "8px",
  },

  [theme.breakpoints.down("md")]:{
    padding: "1rem",
  }
}));
const ShopPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [productData, setProductData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setProductData(jsonData);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CustomShop>
      <Box className="shop-head">
        <Typography variant="h3">Shop</Typography>
        <MemoizedButton
          content={"Filters"}
          className={"filter-btn"}
          startIcon={<FilterListIcon />}
          onClick={handleDrawerToggle}
        />
      </Box>
      <Grid container spacing={2}>
        {productData?.map((item, ind) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
              <ProductCard productData={item} />
            </Grid>
          );
        })}
      </Grid>
      <FilterDrawer drawerClose={handleDrawerToggle} mobileOpen={mobileOpen}/>
    </CustomShop>
  );
};

export default ShopPage;
