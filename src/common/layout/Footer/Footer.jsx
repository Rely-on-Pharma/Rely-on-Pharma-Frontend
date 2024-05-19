"use client";
import React from "react";
import {
  styled,
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import footerImg from "../../../../public/footer-image.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { colors } from "@/constants/colors";
const CustomFooter = styled(Box)(({ theme }) => ({
  background: `url(${footerImg.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  padding: "24px",
  ".grid-item": {
    display: "flex",
    flexDirection: "column",
    color: colors?.MonochromeLight,
    marginTop: "30px",
  },
  ".footer-heading": {
    fontSize: "32px",
    fontWeight: "600",
    letterSpacing: "1px",
    marginBottom: "10px",
    color: colors?.MonochromeLight,
    textDecoration: "underline",
  },
}));
const Footer = () => {
  return (
    <CustomFooter>
      <Typography className="footer-heading">Glow With Healthy Skin</Typography>
      <Grid container className="grid_container" spacing={2}>
        <Grid
          item
          className="grid-item"
          xs={12}
          sm={6}
          lg={3}
          style={{ borderRight: "2px white solid" }}
        >
          <List style={{ display: "block" }}>
            <ListItem
              variant="h6"
              style={{ display: "block", fontWeight: "600", fontSize: "24px" }}
            >
              Support
            </ListItem>
            <ListItem>
              <Link href={"/contact"}>Contact Us</Link>
            </ListItem>
            <ListItem>
              <Link href={"/shipping-policy"}>Shipping Policy</Link>
            </ListItem>
            <ListItem>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link href={"/terms-of-service"}>Terms of Service</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item className="grid-item" xs={12} sm={6} lg={3}>
          <List style={{ display: "block" }}>
            <ListItem
              variant="h6"
              style={{ display: "block", fontWeight: "600", fontSize: "24px" }}
            >
              Explore
            </ListItem>
            <ListItem>
              <Link href={"/aboutus"}>About Us</Link>
            </ListItem>
            {/* <ListItem>FAQs</ListItem> */}
            <ListItem>
              <Link href="/refund-policy">Return & Refund Policy</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item className="grid-item" xs={12} md={12} lg={6}>
          <List>
            <ListItem
              variant="h6"
              style={{ display: "block", fontWeight: "600", fontSize: "24px" }}
            >
              Follow Us
            </ListItem>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start ",
                alignItems: "center",
              }}
            >
              <ListItem style={{ width: "max-content" }}>
                <Link href="https://www.facebook.com/p/Rely-On-Pharmaceuticals-100064139110369/">
                  <FacebookIcon />
                </Link>
              </ListItem>
              <ListItem style={{ width: "max-content" }}>
                <Link href="https://www.instagram.com/relyon_pharmaceuticals/?hl=en">
                  <InstagramIcon />
                </Link>
              </ListItem>
              <ListItem style={{ width: "max-content" }}>
                <Link href="https://www.linkedin.com/in/jayesh-ramji-thakkar-8a164664/">
                  <LinkedInIcon />
                </Link>
              </ListItem>
            </Box>
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Typography
        style={{
          color: colors?.MonochromeLight,
          fontWeight: "lighter",
          margin: "12px 8px",
        }}
      >
        © VayorTricks Pvt Ltd. All Rights Reserved
      </Typography>
    </CustomFooter>
  );
};

export default Footer;
