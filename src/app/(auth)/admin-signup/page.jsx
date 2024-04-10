"use client";
import useSignupForm from "@/common/Hooks/signupForm";
import { checkError } from "@/common/utils/validateHelpers";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { MemoizedNameField } from "@/constants/SDK/CustomTextField";
import { colors } from "@/constants/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Grid,
    IconButton,
    InputAdornment,
    Typography,
    styled
} from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import cartImage from "../../../../public/login-cart.png";

import Link from "next/link";
import logo from "../../../../public/logo.svg";
const CustomSignUp = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 2rem",
  ".cart-image": {},
  ".heading": {
    fontSize: "60px",
    fontWeight: "700",
    letterSpacing: "1px",
    textAlign: "center",
    color: colors?.primaryDark,
  },
  ".section": {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".right-section": {
    padding: "20px",
    margin: "auto",
  },
  ".left-section": {
    padding: "20px",
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  ".input-box": {
    width: "100%",
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
  ".btn": {
    boxShadow: "none",
    width: "100%",
    border: "none",
    borderRadius: 10,
    color: colors.primaryLight,
    backgroundColor: colors.primaryDark,
    "&:hover": {
      backgroundColor: colors.primaryDark,
      color: colors.primaryLight,
    },
  },
  [theme.breakpoints.down("sm")]:{
    padding:"1rem",
    ".section":{
      padding:"1rem"
    },
    ".right-section":{
      width:"100%",
      padding:"4px"
    },
    ".buttonBox": {
      margin: "20px",
      width: "100%", // Width of the right box - left and right padding
      display: "flex",
    },
  }
}));

const AdminSignUp = () => {
  const router = useRouter()
  
  const [showPassword, setShowPassword] = useState(false);
  const { form } = useSignupForm(router, true);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CustomSignUp>
        <Grid container spacing={2}  className="section"
        style={{ background: colors.secondaryLight }}>
          <Grid
            item
            xs={6}
            sm={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
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
                src={logo}
                alt="logo"
              />
              <Typography variant="h1" className="heading-sub">
                CREATE YOUR ACCOUNT
              </Typography>
              <Typography variant="body1" className="subText">
                Ready to start your skincare journey ? Let&lsquo;s explore
                premium skincare together.
              </Typography>
              <Image
                style={{
                  marinInline: "8px",
                  objectFit: "contain",
                }}
                width={360}
                height={360}
                src={cartImage}
                alt="cart-Image"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className="right-section"
            style={{ background: colors.secondaryLight }}
          >
            <form onSubmit={form?.handleSubmit}>
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
              <MemoizedNameField
    
                className="input-box"
                InputProps={{ disableUnderline: false }}
                margin="dense"
                required={true}
                name="firstName"
                label="First Name"
                variant="standard"
                error={!!checkError("firstName", form)}
                helperText={form?.errors?.firstName}
                placeholder="Enter First Name"
                value={form.values.firstName}
                onChange={(e) => form.handleChange(e)}
              />
              <MemoizedNameField
    
                className="input-box"
                InputProps={{ disableUnderline: false }}
                margin="dense"
                variant="standard"
                required={true}
                label="Last Name"
                name="lastName"
                error={!!checkError("lastName", form)}
                helperText={form?.errors?.lastName}
                placeholder="Enter Last Name"
                value={form.values.lastName}
                onChange={(e) => form.handleChange(e)}
              />
              <MemoizedNameField
    
                className="input-box"
                InputProps={{ disableUnderline: false }}
                margin="dense"
                required={true}
                variant="standard"
                label="Email"
                name="email"
                error={!!checkError("email", form)}
                helperText={form?.errors?.email}
                placeholder="Enter Email"
                value={form.values.email}
                onChange={(e) => form.handleChange(e)}
              />
            <MemoizedNameField
    
                className="input-box"
                margin="dense"
                required={true}
                variant="standard"
                label="Password"
                name="password"
                error={!!checkError("password", form)}
                helperText={form?.errors?.password}
                placeholder="Enter Password"
                value={form.values.password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => form.handleChange(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  disableUnderline: false 
                }}
              />
              <MemoizedNameField
    
                className="input-box"
                margin="dense"
                required={true}
                InputProps={{ disableUnderline: false }}

                variant="standard"
                label="Confirm Password"
                name="confirmPassword"
                error={!!checkError("password", form)}
                helperText={form?.errors?.confirmPassword}
                placeholder="Enter Password"
                value={form.values.confirmPassword}
                type="password"
                onChange={(e) => form.handleChange(e)}
                
              />
              
                <MemoizedButton
                  className={"btn"}
                  content={"Create an Account"}
                  handleClick={(e) => form.handleSubmit(e)}
                />
                 <Link href={`/login`} style={{fontWeight:"700", textAlign:"center", display:"block"}}>Already have an account? Login</Link>
                 <Link href={`/`} style={{fontWeight:"700", textAlign:"center", display:"block"}}>Home</Link>
            </form>
          </Grid>
        </Grid>

    </CustomSignUp>
  );
};

export default AdminSignUp;
