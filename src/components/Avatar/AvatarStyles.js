import { styled } from "@mui/system";
import Image from "next/image";

export const StyledImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "center 25%",
  borderRadius: "50%",
}));
