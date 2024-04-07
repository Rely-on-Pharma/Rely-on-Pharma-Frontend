"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colors } from "@/constants/colors.js";

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
    fontFamily: `${fontFamilyInfo} !important`,
  },
  components: {
    MuiPaper: {},
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        fontSize: { md: "24px", sm: "12px" },
        borderRadius: "16px",
        "&.Mui-focused": {
          backgroundColor: "transparent",
          boxShadow: ``,
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
          },
        },
        IconComponent: KeyboardArrowDownIcon,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "black",
          color: "white",
          margin: 16,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(themeMaster);
