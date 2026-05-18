"use client";

import { createTheme } from "@mui/material/styles";

const brandRed = "#C41E24";
const brandNavy = "#00234E";
const brandGold = "#8B6914";

export const theme = createTheme({
  palette: {
    primary: {
      main: brandRed,
      dark: "#9E181D",
      light: "#D94A4F",
      contrastText: "#ffffff",
    },
    secondary: {
      main: brandNavy,
      dark: "#001530",
      light: "#1A3A6B",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#F8F9FA",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#5A5A5A",
    },
  },
  typography: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(196, 30, 36, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 16px rgba(0, 35, 78, 0.08)",
        },
      },
    },
  },
});

export const brandColors = {
  red: brandRed,
  navy: brandNavy,
  gold: brandGold,
};
