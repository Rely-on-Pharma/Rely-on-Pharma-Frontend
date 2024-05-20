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
import headerImg from "../../../../public/contactus-image.png";
import React from "react";
import { Email, LocalPhone } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fjalla_One } from "next/font/google";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { useState, useContext } from "react";
import AppContext from "@/constants/context/context";

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
  ".contact-details": {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    ".detail-header": {
      fontSize: "8rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ".phone-details": {
      fontSize: "8rem",
      background: colors?.primaryDark,
      width: "50%",
    },
    ".email-details": {
      fontSize: "8rem",
      background: colors?.primaryLight,
      width: "50%",
    },
  },

  ".submit-button": {
    background: colors?.secondaryDark,
    opacity: "70%",
    boxShadow: "none",
    textTransform: "capitalize",
    margin: "auto",
    display: "block",
    fontSize: "20px",
    width: "50%",
    padding: "6px 12px",
    border: "none",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: colors?.secondaryMedium,
      boxShadow: "none",
    },
  },
  ".heading-text": {
    margin: "5px 0px",
    fontSize: "2.5rem",
  },
  ".feedBack_container": {
    padding: "2rem",
  },
  ".name-tf": {
    background: "white",
    borderRadius: "10px",
    border: "1px solid black",
    fontSize: "28px",
    width: "100%",
    margin: "20px auto",
    "& .MuiInputBase-root": {
      padding: "10px",
      fontSize: "20px",
    },
  },

  ".icon-decoration-1": {
    color: colors?.primaryLight,
    fontSize: "4rem",
    margin: "20px",
  },
  ".icon-decoration-2": {
    color: colors?.primaryDark,
    fontSize: "4rem",
    margin: "20px",
  },

  [theme.breakpoints.down("md")]: {
    ".heading": {
      fontSize: "32px",
      height: "300px",
    },
    ".feedBack_container": {
      padding: "1rem",
    },
    ".subheading": {
      textAlign: "center",
      fontSize: "30px",
      margin: "auto",
      paddingLeft: "0",
    },
    ".icon-decoration-1": {
      fontSize: "2rem",
      margin: "4px",
    },
    ".icon-decoration-2": {
      fontSize: "2rem",
      margin: "4px",
    },
    ".heading-text": {
      margin: "5px 0px",
      fontSize: "1rem",
    },
  },
}));

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const { showSnackbar } = useContext(AppContext);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    // Validation
    if (!email || !feedback) {
      showSnackbar("Email and Feedback are required fields!", "error");
      return;
    }

    if (!validateEmail(email)) {
      showSnackbar("Please enter a valid email address!", "error");
      return;
    }

    // Set default name if not provided
    const feedbackName = name.trim() === "" ? "Anonymous" : name;

    // Data to be sent to the API
    const feedbackData = {
      name: feedbackName,
      email,
      feedback,
    };

    try {
      const response = await fetch("http://localhost:8000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      showSnackbar("Feedback submitted successfully!", "success");

      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setFeedback("");
    } catch (error) {
      showSnackbar(error.message || "Something went wrong!", "error");
    }
  };

  return (
    <CustomContact theme={theme}>
      <Typography className="heading" variant="h2">
        CONTACT US
      </Typography>
      <br />
      <Box className="feedBack_container">
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
            <TextField
              className="name-tf"
              placeholder="Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              className="name-tf"
              placeholder="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              className="name-tf"
              placeholder="Feedback"
              variant="standard"
              multiline
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Grid>
        </Grid>
        <MemoizedButton
          className="submit-button"
          content={"submit"}
          onClick={handleSubmit}
        />
      </Box>
      <br />
      <Box className="contact-details">
        <Box className="phone-details">
          <Box className="detail-header">
            <LocalPhone className="icon-decoration-1" />
            <Typography
              style={{
                color: colors?.primaryLight,
              }}
              className="heading-text"
            >
              WE ARE HER
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontStyle: "italic",
                color: colors?.primaryLight,
                fontWeight: "bold",
              }}
            >
              Phone Number
            </Typography>
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontStyle: "italic",
                color: colors?.white,
              }}
            >
              +91 9765986466
            </Typography>
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontStyle: "italic",
                color: colors?.white,
              }}
            >
              +91 9765986466
            </Typography>
          </Box>
        </Box>

        <Box className="email-details">
          <Box className="detail-header">
            <Typography
              style={{
                color: colors?.primaryDark,
              }}
              className="heading-text"
            >
              E FOR YOU
            </Typography>
            <Email className="icon-decoration-2" />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontStyle: "italic",
                color: colors?.primaryDark,
                fontWeight: "bold",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontStyle: "italic",
                color: colors?.black,
                fontWeight: 600,
              }}
            >
              jatinthakkar1590@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </CustomContact>
  );
};

export default ContactUs;
