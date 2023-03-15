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
    h1: {
      fontSize: "2.4rem",
    },
    h2: {
      fontSize: "2.074rem",
    },
    h3: {
      fontSize: "1.728rem",
    },
    h4: {
      fontSize: "1.44rem",
    },
    h5: {
      fontSize: "1.2rem",
    },
    h6: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.8rem",
    },
    body1: {
      fontSize: "1.4rem",
    },
    body2: {
      fontSize: "0.8rem",
    },
    button: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: "0.8rem",
    },
  },
});

export default theme;
