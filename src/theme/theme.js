"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Roboto } from "next/font/google";
import { colors } from "@/constants/colors.js";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const fontFamilyInfo = `'Poppins', sans-serif `;

const themeMaster = createTheme({
  palette: {
    mode: "light",
    primary: colors,
    background: {
      default: colors?.background,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiPaper: {
      defaultProps: {
        style: {
          fontFamily: `${fontFamilyInfo} !important`,
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        fontFamily: `${fontFamilyInfo} !important`,
        fontSize: { md: "24px", sm: "12px" },
        borderRadius: "16px",
        "&.Mui-focused": {
          backgroundColor: "transparent",
          boxShadow: `
          `,
          borderColor: colors.secondary,
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        display: "flex",
        alignItems: "stretch",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontFamily: `${fontFamilyInfo} !important`,
          borderRadius: "82px",
          textTransform: "none",
          color: colors.white,
          background: colors.main,
          fontWeight: "550",
          border: "1px solid #FFFFFF",
          boxShadow: "0px 4px 4px rgba(232, 52, 94, 0.7)",
          "&:hover": {
            color: colors.dark,
          },
        },
        sizeMedium: {
          fontSize: "16px",
          padding: "12px 30px 12px  30px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          fontFamily: `${fontFamilyInfo} !important`,
          minHeight: 48,
          "&.Mui-focused": {
            backgroundColor: "transparent",
            boxShadow: `${(colors.light, 0.25)} 0 0 0 2px`,
            borderColor: colors.secondary,
          },
        },
      },
    },

    MuiSelect: {
      defaultProps: {
        MenuProps: {
          style: {
            maxHeight: 400,
            fontFamily: `${fontFamilyInfo} !important`,
          },
        },
        IconComponent: KeyboardArrowDownIcon,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: `${fontFamilyInfo} !important`,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors,
          fontFamily: `${fontFamilyInfo} !important`,
          borderRadius: "16px 16px 0px 0px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: `${fontFamilyInfo} !important`,
          background: "black",
          color: "white",
          margin: 16,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          fontFamily: `${fontFamilyInfo} !important`,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          fontFamily: `${fontFamilyInfo} !important`,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(themeMaster);