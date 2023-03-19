import { styled } from "@mui/system";
import Image from "next/image";

export const StyledImage = styled(Image)(({ theme: { breakpoints } }) => ({
  objectFit: "cover",
  objectPosition: "center 25%",
  borderRadius: "50%",
  height: "200px",
  width: "200px",
  [breakpoints.up("md")]: {
    height: "400px",
    width: "400px",
  },
}));
