import { styled } from "@mui/system";
import Link from "next/link";

export const StyledLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));
