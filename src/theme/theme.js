import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const FONT_FAMILY = '"Poppins", sans-serif';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2029",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
  },
});

export default theme;
