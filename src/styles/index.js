import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const ScreenReaderTitleStyles = styled(Typography)(() => ({
  position: "absolute",
  top: "-9999px",
  left: "-9999px",
}));
