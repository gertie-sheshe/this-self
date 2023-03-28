import { styled } from "@mui/system";
import Link from "next/link";

export const StyledLink = styled(Link)(({ theme: { palette } }) => ({
  textDecoration: "none",
  color: palette.secondary.main,
  "&:hover": {
    "& .title": {
      textDecoration: "underline",
      textUnderlineOffset: "6px",
    },
  },
}));
