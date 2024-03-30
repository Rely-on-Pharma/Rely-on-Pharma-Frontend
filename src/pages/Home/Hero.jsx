"use client";
import { data } from "@/constants/CarousalData";
import { MemoizedSwiper } from "@/constants/SDK/CustomSwipper";
import { Box, Grid, Typography, styled } from "@mui/material";
import heroBg from "../../../public/hero-bg.png";
import React from "react";
import { colors } from "@/constants/colors";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
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
    background: colors.secondaryDark,
    fontSize: "18px",
    "&:hover": {
      background: colors.seaShellLight,
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
  ".mobileSwiper": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    ".mobileSwiper": {
      display: "block",
    },
    ".grid-container": {
      display: "none",
    },
  },
}));
const Hero = () => {
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
    </CustomHero>
  );
};

export default Hero;
