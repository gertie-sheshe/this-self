import { styled } from "@mui/system";
import Link from "next/link";

export const NavBar = styled("nav")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "120px",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: "none",
  padding: "0 20px",
}));
