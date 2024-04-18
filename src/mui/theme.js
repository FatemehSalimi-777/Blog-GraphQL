import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
  palette: {
    primary: {
      light: "#ed4b82",
      main: "#c2185b",
      dark: "#a31545",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bfcbd0",
      main: "#b0bec5",
      dark: "#7b8589",
      contrastText: "#000",
    },
  },
});

export default theme;
