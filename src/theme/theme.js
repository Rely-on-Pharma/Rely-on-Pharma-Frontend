"use client";
import { createTheme } from "@mui/material/styles";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
    palette: {
        mode:"light",
        primary: {
          main: '#3f51b5', 
        },
        secondary: {
          main: '#f50057', 
        },
      },
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
});

export default theme;
