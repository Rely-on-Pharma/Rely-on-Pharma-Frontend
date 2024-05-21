"use client";
import { Box, Drawer, Grid, Typography, styled } from "@mui/material";
import React, { useState , useEffect } from "react";
//import { productData } from "../../../constants/data/productData.js";
import { MemoizedButton } from "@/constants/SDK/CustomButton.js";
import { colors } from "@/constants/colors.js";
import FilterListIcon from "@mui/icons-material/FilterList";
import ProductCard from "@/pages/shop/products.jsx";
import CircularProgress from '@mui/material/CircularProgress';

import Backdrop from '@mui/material/Backdrop';
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
  const [filteredData, setFilteredData] = useState([]);
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

  const applyFilters = (filters) => {
    let filteredProducts = productData;
  
    // Filter by category
    if (filters.category !== "All") {
      filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }
  
    // Filter by company
    if (filters.company.length > 0) {
      filteredProducts = filteredProducts.filter(product => filters.company.includes(product?.brand));
    }
  
    // Sorting by price
    if (filters.price === "Low to High") {
      filteredProducts.sort((a, b) => a.selling_price - b.selling_price);
    } else if (filters.price === "High to Low") {
      filteredProducts.sort((a, b) => b.selling_price - a.selling_price);
    }
    console.log('yash', filteredProducts)
    setFilteredData(filteredProducts);
  };
  

  const resetFilters = () => {
    // Reset the filteredData state or do any other reset operations
    setFilteredData([]);
  };

  if (loading) {
    return <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading}
   
  >
    <CircularProgress color="inherit" />
  </Backdrop>;
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
      {filteredData.length > 0 ? (
          filteredData.map((item, ind) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
              <ProductCard productData={item} />
            </Grid>
          ))
        ) : (
          productData.map((item, ind) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
              <ProductCard productData={item} />
            </Grid>
          ))
        )}
      </Grid>
      <FilterDrawer drawerClose={handleDrawerToggle} mobileOpen={mobileOpen} onApplyFilters={applyFilters} onResetFilters={resetFilters}/>
    </CustomShop>
  );
};

export default ShopPage;
