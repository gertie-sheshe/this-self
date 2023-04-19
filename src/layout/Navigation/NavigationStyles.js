import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export const NavBar = styled("nav")(({ theme: { breakpoints, palette } }) => ({
  backgroundColor: palette.primary.main,
  minHeight: "80px",
  height: "80px",
  borderBottom: `1px solid ${palette.secondary.light}`,
  [breakpoints.up("md")]: {
    height: "120px",
  },
}));

export const BoxContainer = styled(Box)(({ theme: { palette } }) => ({
  backgroundColor: palette.primary.main,
  height: "100vh",
}));

export const MenuButton = styled(Button)(({ theme: { palette } }) => ({
  color: palette.secondary.main,
}));

export const StyledLink = styled(Link)(
  ({ theme: { palette, breakpoints }, textColor }) => ({
    color: textColor || palette.secondary.main,
    fontWeight: "bold",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "0 20px",
    margin: "10px",
    [breakpoints.up("sm")]: {
      margin: 0,
    },
    [breakpoints.up("lg")]: {
      fontSize: "inherit",
    },
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "5px",
    },
    "&.active": {
      textDecoration: "underline",
      textUnderlineOffset: "5px",
    },
  })
);
