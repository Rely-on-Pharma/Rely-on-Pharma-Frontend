"use client";
import useLoginForm from "@/common/Hooks/loginForm";
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
  styled,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import cartImage from "../../../../public/login-cart.png";
import logo from "../../../../public/logo.svg";
import { useRouter } from 'next/navigation';
import AppContext from "@/constants/context/context";

const CustomLogin = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    ".section": {
      padding: "1rem",
    },
    ".right-section": {
      width: "100%",
      padding: "4px",
    },
    ".buttonBox": {
      margin: "20px",
      width: "100%", // Width of the right box - left and right padding
      display: "flex",
    },
  },
}));


const AdminLogin = () => {
  
    const router = useRouter()
    
  const [showPassword, setShowPassword] = useState(false);
  const { form } = useLoginForm(router, true);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CustomLogin>
      <Grid
        container
        className="section"
        spacing={2}
        style={{ background: colors.secondaryLight }}
        justifyContent="center"
      >
        <Grid item xs={6} sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
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
              WELCOME BACK !
            </Typography>
            <Typography variant="body1" className="subText">
             Admin Login
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
             Admin Log in
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
                disableUnderline: false,
              }}
            />
            <MemoizedButton
              className={"btn"}
              content={"Log In"}
              handleClick={(e) => form.handleSubmit(e)}
            />
            <Link
              href={`/signup`}
              style={{
                fontWeight: "700",
                textAlign: "center",
                display: "block",
              }}
            >
              Don&lsquo;t have an account? SignUp
            </Link>
            <Link
              href={`/`}
              style={{
                fontWeight: "700",
                textAlign: "center",
                display: "block",
              }}
            >
              Back Home
            </Link>
          </form>
        </Grid>
      </Grid>
    </CustomLogin>
  );
};

export default AdminLogin;
