import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Section = styled("section")(() => ({}));

export const SummarySection = styled("div")(() => ({
  marginLeft: "80px",
}));

export const ScreenReaderTitle = styled(Typography)(() => ({
  position: "absolute",
  top: "-9999px",
  left: "-9999px",
}));
