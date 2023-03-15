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

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "0 20px",
  "&:hover": {
    textDecoration: "underline",
  },
}));
