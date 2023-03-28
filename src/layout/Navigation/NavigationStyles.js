import { styled } from "@mui/system";
import Link from "next/link";

export const NavBar = styled("nav")(({ theme: { breakpoints, palette } }) => ({
  backgroundColor: palette.primary.main,
  minHeight: "120px",
  borderBottom: `1px solid ${palette.secondary.light}`,
  [breakpoints.up("sm")]: {
    height: "120px",
  },
}));

export const StyledLink = styled(Link)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.secondary.main,
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
