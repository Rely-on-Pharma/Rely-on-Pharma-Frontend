"use client";
import { colors } from "@/constants/colors";
import {
  Box,
  Typography,
  styled,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import headerImg from "../../../public/contactus-image.png";
import React from "react";
import { Email, LocalPhone } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fjalla_One } from "next/font/google";

const theme = createTheme({
  typography: {
    fontFamily: "Fjalla One", // This should match the name of your imported font
  },
});

const CustomContact = styled(Box)(({ theme }) => ({
  ".heading": {
    fontSize: "60px",
    fontWeight: "700",
    letterSpacing: "1px",
    padding: "12px",
    textAlign: "center",
    color: colors?.white,
    background: `url(${headerImg.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "600px",
    padding: "24px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  ".subheading": {
    textAlign: "left",
    fontSize: "40px",
    margin: "8px auto",
    paddingLeft: "70px",
    fontWeight: "700",
    letterSpacing: "1.2px",
    color: colors?.secondaryDark,
  },
  ".section": {
    width: "100%",
    margin: "auto",
    padding: "30px",
  },

  ".columnContainer": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  ".contact-details": {
    display: "flex",
    flexDirection: "row",
    fontSize: "45px",
    ".phone-details": {
      background: colors?.primaryDark,
      height: "60vh",
      width: "100%",
      fontSize: "45px",
    },
    ".email-details": {
      background: colors?.primaryLight,
      height: "60vh",
      width: "100%",
    },
  },

  ".submit-button": {
    margin: "10px 75px",
    background: colors?.secondaryDark,
    opacity: "70%",
    boxShadow: "none",
    textTransform: "none",
    fontSize: "20px",
    padding: "6px 12px",
    border: "none",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: colors?.secondaryDark,
      boxShadow: "none",
    },
  },

  ".name-tf": {
    background: "white",
    borderRadius: "10px",
    border: "1px solid black",
    fontSize: "28px",
    width: "600px",
    margin: "20px auto",
    "& .MuiInputBase-root": {
      padding: "10px",
      fontSize: "20px",
    },
  },

  ".icon-decoration-1": {
    color: colors?.primaryLight,
    fontSize: 40,
    margin: "20px",
  },
  ".icon-decoration-2": {
    color: colors?.primaryDark,
    fontSize: 40,
    margin: "20px",
  },
}));

const ContactUs = () => {
  return (
    <CustomContact>
      <Typography className="heading" variant="h2">
        CONTACT US
      </Typography>
      <br />
      <Box>
        <Typography className="subheading">FEEDBACK</Typography>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <TextField
                className="name-tf"
                placeholder="Name"
                variant="standard"
              />
            </Box>
            <Box>
              <TextField
                className="name-tf"
                placeholder="Email"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              className="name-tf"
              placeholder="Feedback"
              variant="standard"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button className="submit-button">Submit</Button>
      </Box>
      <br />
      <Grid container className="contact-details">
        <Grid item xs={12} md={6} sm={6}>
          <Box className="phone-details">
            <Grid
              container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <LocalPhone className="icon-decoration-1" />
              <ThemeProvider theme={theme}>
                <Typography
                  style={{
                    color: colors?.primaryLight,
                    margin: "5px 0px",
                    fontSize: "45px",
                  }}
                >
                  WE ARE HER
                </Typography>
              </ThemeProvider>
            </Grid>
            <br />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 30,
                  fontStyle: "italic",
                  color: colors?.primaryLight,
                  fontWeight: "bold",
                }}
              >
                Phone Number
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize: 30,
                  fontStyle: "italic",
                  color: colors?.white,
                }}
              >
                +91 9765986466
              </Typography>
              <Typography
                sx={{
                  fontSize: 30,
                  fontStyle: "italic",
                  color: colors?.white,
                }}
              >
                +91 9765986466
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <Box className="email-details">
            <Grid
              container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  style={{
                    color: colors?.primaryDark,
                    margin: "5px 0px",
                    fontSize: "45px",
                  }}
                >
                  E FOR YOU
                </Typography>
              </ThemeProvider>
              <Email className="icon-decoration-2" />
            </Grid>
            <br />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 30,
                  fontStyle: "italic",
                  color: colors?.primaryDark,
                  fontWeight: "bold",
                }}
              >
                Email
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize: 30,
                  fontStyle: "italic",
                  color: colors?.black,
                  fontWeight: 100,
                }}
              >
                jatinthakkar1590@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CustomContact>
  );
};

export default ContactUs;
