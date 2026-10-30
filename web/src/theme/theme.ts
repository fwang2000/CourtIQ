"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

// IBM Plex Mono is loaded via next/font in layout.tsx and exposed as this CSS var.
const mono = "var(--font-ibm-plex-mono), monospace";

// Ported from the Metaball CRA theme (client/src/App.js), typed for MUI v5.
let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 35,
          fontFamily: mono,
          fontWeight: 500,
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandColor": "#AAAAAA",
          "--TextField-brandHoverColor": "#888888",
          "--TextField-brandFocusedColor": "#FFFFFF",
          "& label.Mui-focused": {
            color: "var(--TextField-brandFocusedColor)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "var(--TextField-brandColor)",
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            color: "var(--TextField-brandHoverColor)",
          },
          "&.Mui-focused:after": {
            color: "var(--TextField-brandFocusedColor)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "var(--TextField-brandColor)",
          fontSize: "16px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandFocusedColor)",
          },
        },
        input: {
          color: "white",
          fontFamily: mono,
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: { main: "#693589" },
    secondary: { main: "#6A6A6A" },
    background: { default: "#191919", paper: "#191919" },
  },
  typography: {
    fontFamily: mono,
    h1: { fontFamily: mono, fontWeight: 700, fontSize: "50px" },
    h4: { fontFamily: mono, fontWeight: 600, fontSize: "14px" },
    subtitle1: {
      fontFamily: mono,
      fontWeight: 300,
      fontSize: "20px",
      letterSpacing: "0.1em",
    },
    body1: {
      fontFamily: mono,
      fontWeight: 400,
      fontSize: "16px",
      letterSpacing: "0.1em",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
