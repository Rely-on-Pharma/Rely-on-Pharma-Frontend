"use client";
import { colors } from "@/constants/colors";
import {
  Box,
  Typography,
  styled,
  TextField,
  Grid,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import cartImage from "../../../public/login-cart.png";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
const CustomButton = styled(Button)({
  boxShadow: "none",
  border: "none",
  borderRadius: 10,
  color: colors.primaryLight,
  backgroundColor: colors.primaryDark,
  "&:hover": {
    backgroundColor: colors.primaryDark,
    color: colors.primaryLight,
  },
});
const CustomSignUp = styled(Box)(({ theme }) => ({
  ".cart-image": {},
  ".heading": {
    fontSize: "60px",
    fontWeight: "700",
    letterSpacing: "1px",
    padding: "12px",
    textAlign: "center",
    color: colors?.primaryDark,
  },
  ".section": {
    height: "80vh",
    width: "80%",
    margin: "40px auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".right-section": {
    height: "70vh",
    width: "100%",
    margin: "20px",
    padding: "20px",

    border: `2px solid ${colors.seaShellDark}`,
  },
  ".left-section": {
    height: "70vh",
    width: "100%",
    margin: "20px",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  ".subText": {
    fontSize: "15px", // You can adjust the font size as needed
    color: colors.white,
    textAlign: "left", // Assuming 'colors.white' is your white color
  },
  ".heading-sub": {
    fontSize: "30px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: colors.white, // Assuming 'colors.white' is your white color
    marginBottom: "10px", // Added margin bottom for spacing
  },
  ".underlineBold": {
    "& .MuiInput-underline:hover:before": {
      borderBottom: `2px solid ${colors.black}`, // Adjust thickness and color as needed
    },
    "& .MuiInput-underline:after": {
      borderBottom: `2px solid ${colors.black}`,
    },
  },

  ".buttonBox": {
    margin: "20px",
    width: "calc(100% - 40px)", // Width of the right box - left and right padding
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CustomSignUp>
      <Box className="section" style={{ background: colors.secondaryLight }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              className="left-section"
              style={{ background: colors.primaryDark }}
            >
              <Image
                style={{
                  marginInline: "8px",
                  width: "160px",
                  height: "140px",
                  objectFit: "contain",
                }}
                width={72}
                height={16}
                src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo.png"
                alt="logo"
              />
              <Typography variant="h1" className="heading-sub">
                CREATE YOUR ACCOUNT
              </Typography>
              <Typography variant="body1" className="subText">
                Ready to start your skincare journey ? Let's explore premium
                skincare together.
              </Typography>
              <Image
                style={{
                  marinInline: "8px",
                  width: "100px",
                  height: "200px",
                  objectFit: "contain",
                }}
                width="100%"
                height="40vh"
                src={cartImage}
                alt="cart-Image"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              className="right-section"
              style={{ background: colors.secondaryLight }}
            >
              <Typography
                variant="h1"
                className="heading-sub"
                style={{ color: colors?.black }}
              >
                SIGN UP
              </Typography>
              <Typography
                variant="body1"
                style={{ color: colors?.black, fontSize: "10px" }}
              >
                Please Fill You Information Below
              </Typography>
              <TextField
                label="FIRST NAME"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: false }}
                margin="dense"
                className="underlineBold"
              />
              <TextField
                label="LAST NAME"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: false }}
                margin="dense"
                className="underlineBold"
              />
              <TextField
                label="EMAIL ID"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: false }}
                margin="dense"
                className="underlineBold"
              />
              <TextField
                label="PHONE NUMBER"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: false }}
                margin="dense"
                className="underlineBold"
              />
              <TextField
                label="PASSWORD"
                variant="standard"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="dense"
                className="underlineBold"
                InputProps={{
                  disableUnderline: false,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box className="buttonBox">
                <CustomButton className="buttonBox" variant="contained">
                  Create an Account
                </CustomButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CustomSignUp>
  );
};

export default SignUp;
