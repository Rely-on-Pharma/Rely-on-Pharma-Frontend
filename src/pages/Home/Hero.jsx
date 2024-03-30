"use client";
import { data } from "@/constants/CarousalData";
import { trendingProducts } from "@/constants/data/trendingData";
import { MemoizedSwiper } from "@/constants/SDK/CustomSwipper";
import { Box, Grid, Typography, styled, Avatar } from "@mui/material";
import heroBg from "../../../public/hero-bg.png";
import shopNowBg from "../../../public/shop-now-bg.png";
import aboutBg from "../../../public/mission-vision-bg.png";
import { FavoriteOutlined } from "@mui/icons-material";
import React from "react";
import { colors } from "@/constants/colors";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CustomHero = styled(Box)(({ theme }) => ({
  ".grid-container": {
    background: `url(${heroBg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "24px 30px 24px 40px",
  },
  ".grid_item-text": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".btn": {
    display: "inline",
    width: "max-content",
    borderRadius: "8px",
    boxShadow: "none",
    background: colors.secondaryBase,
    fontSize: "18px",
    "&:hover": {
      background: colors.secondaryDark,
    },
  },
  ".text": {
    textAlign: "left",
    fontSize: "42px",
    fontWeight: "700",
    letterSpacing: "1px",
    span: {
      color: colors?.primaryBase,
    },
  },
  ".card": {
    //boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    maxWidth: "320px",
    margin: "auto 1rem",
    textAlign: "center",
    fontFamily: "arial",
  },
  ".carousel": {
    padding: "20px",
    margin: "10px",
  },
  ".product--image": {
    width: "100%",
    height: "16em",
    objectFit: "cover",
  },
  ".mobileSwiper": {
    display: "none",
  },
  ".shop-now-box": {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "center",
    backgroundImage: `url(${shopNowBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px", // Adjust height as needed
    padding: "40px",
    marginTop: "20px",
    // Add margin top for spacing
  },
  ".about-us": {
    justifyContent: "center",
    display: "flex",
    flexDirection: "center",
    backgroundImage: `url(${aboutBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "1300px",
  },
  ".avatar": {
    width: "200px",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  [theme.breakpoints.down("md")]: {
    ".mobileSwiper": {
      display: "block",
    },
    ".grid-container": {
      display: "none",
    },
  },
  ".shop-now-text": {
    fontSize: "36px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  ".about-us-text": {
    justifyContent: "center",
    whiteSpace: "nowrap",
    color: "rgba(256, 256, 256, 0.6)",
    fontSize: "20em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5em",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5em",
    },
  },
}));
const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <CustomHero>
      <Grid container className="grid-container">
        <Grid item md={6} className="grid_item-text">
          <Typography variant="caption" className="text">
            <Typography variant="span">F</Typography>EEL
            <Typography variant="span"> B</Typography>ETTER <br />
            <Typography variant="span">R</Typography>EJUVANATE <br />
            <Typography variant="span">R</Typography>ECOVER
          </Typography>
          <MemoizedButton className={"btn"} content="Shop Now" />
        </Grid>
        <Grid item md={6} className="grid_item">
          <MemoizedSwiper
            data={data}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            delay={2500}
            id="hero-carousal"
          />
        </Grid>
      </Grid>
      <MemoizedSwiper
        className="mobileSwiper"
        data={data}
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        loop={true}
        delay={2500}
        id="hero-carousal"
      />
      <Typography variant="h2" mt={5} ml={5} color={colors?.secondaryDark}>
        Best Sellers
      </Typography>

      <Carousel className="caraousel" responsive={responsive}>
        {trendingProducts.map((product) => (
          <Box key={product.id} textAlign="center" p={2} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="product--image"
            />
            <Typography variant="body1" mt={1}>
              {product.name}
            </Typography>
            <Typography variant="body2" mt={1} mb={1}>
              {product.price}
            </Typography>
            <Box display="flex" justifyContent="space-around">
              <MemoizedButton className={"btn"} content="+" />
              <MemoizedButton
                className={"btn"}
                content={<FavoriteOutlined style={{ fontSize: "14px" }} />}
              />
            </Box>
          </Box>
        ))}
      </Carousel>
      <Box className="shop-now-box">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundColor: colors?.secondaryBase,
            borderRadius: "10px",
            padding: "20px 40px",
          }}
          md={8}
        >
          <Grid item md={6}>
            <Typography className="shop-now-text" mt={1} mb={1}>
              SIGN UP & REQUEST FOR A PRODUCT SAMPLE NOW !!
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xs={12} justifyContent={"center"}>
            <Avatar
              alt="User Avatar"
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D"
              className="avatar"
            />
          </Grid>
          <Grid item md={12} justifyContent={"flex-start"}>
            <MemoizedButton
              className="btn"
              content="SIGN UP NOW"
              style={{
                marginTop: "10px",
                backgroundColor: colors?.secondaryDark,
                outline: "none",
                color: colors?.white,
                "&:hover": {
                  background: colors.secondaryDark,
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="about-us">
        <Typography variant="h1" className="about-us-text" mt={2} mb={2}>
          ABOUT US
        </Typography>
        <Box justifyContent="flex-start">
          <Typography
            variant="h3"
            mt={2}
            mb={2}
            component="div"
            justifyContent="flex-start"
          >
            OUR MISSION
          </Typography>
        </Box>
      </Box>
    </CustomHero>
  );
};

export default Hero;
