import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Section = styled("section")(() => ({}));

export const Divider = styled("hr")(({ theme: { palette } }) => ({
  marginTop: "40px",
  borderColor: palette.secondary.light,
}));

export const Break = styled("span")(() => ({
  marginBottom: "10px",
  display: "block",
}));

export const SummarySection = styled("div")(({ theme: { breakpoints } }) => ({
  margin: "20px 0 0 0",
  [breakpoints.up("md")]: {
    margin: "0 0 0 80px",
  },
}));

export const ScreenReaderTitle = styled(Typography)(() => ({
  position: "absolute",
  top: "-9999px",
  left: "-9999px",
}));
