"use client";
import { colors } from "@/constants/colors.js";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { termsOfService } from "@/constants/data/TermsOfService";

const CustomTermsofService = styled(Box)(({ theme }) => ({
  ".heading": {
    padding: "4vh 0vh",
    fontSize: "10vh",
    color: colors?.primaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "6vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vh",
    },
  },
  ".date": {
    padding: "2vh 15vw",
    fontSize: "2.5vh",
    olor: colors?.primaryLight,
  },
  ".subheading": {
    padding: "2vh 15vw",
    fontSize: "2.5vh",
    fontWeight: "bold",
    color: colors?.secondaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
  },
  ".body": {
    padding: "2vh 15vw",
    fontSize: "2.5vh",
    fontWeight: "500",
    color: colors?.secondaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
  },
  ".bheading": {
    padding: "0.5vh 15vw",
    fontSize: "2.8vh",
    fontWeight: "bold",
    color: colors?.secondaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
  },
}));

const TermsofService = () => {
  return (
    <CustomTermsofService>
      <Typography className="heading" textAlign={"center"}>
        Terms of Service
      </Typography>
      <Typography className="date">
        Revised Date: {termsOfService[0]}
      </Typography>
      <Typography className="subheading" textAlign={"justify"}>
        {termsOfService[1]}
      </Typography>
      <Typography className="body" textAlign={"justify"}>
        {termsOfService[2].split("<br />").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
      </Typography>
      <Typography className="bheading">WEBSITE</Typography>
      <Typography className="body" textAlign={"justify"}></Typography>
    </CustomTermsofService>
  );
};

export default TermsofService;
