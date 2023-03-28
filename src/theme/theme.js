import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { red } from "@mui/material/colors";

const FONT_FAMILY = '"Poppins", sans-serif';

const breakpoints = {
  values: {
    xs: 0,
    sm: 768,
    md: 1152,
    lg: 1440,
    xl: 1920,
  },
};

// Create a theme instance.
const theme = createTheme({
  breakpoints,
  palette: {
    primary: {
      dark: "#1f2029",
      main: "#14151af5",
    },
    secondary: {
      main: "#fff",
      light: "#ffffff1a",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
    lineHeight: "2.1",
    letterSpacing: "1px",
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
      lineHeight: "2.1",
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
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle2: "p",
        },
      },
    },
  },
});

const customTheme = deepmerge(theme, {
  typography: {
    h2: {
      fontSize: "1.5rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "2.074rem",
      },
    },
    body1: {
      fontSize: "1.2rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.4rem",
      },
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "2",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
      },
    },
    subtitle2: {
      fontSize: "0.8rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
    },
  },
});

export default customTheme;
