import { styled } from "@mui/system";

export const Section = styled("section")(() => ({}));

export const Divider = styled("hr")(({ theme: { palette } }) => ({
  marginTop: "40px",
  borderColor: palette.secondary.light,
}));

export const Break = styled("span")(() => ({
  marginBottom: "10px",
  display: "block",
}));

export const Profile = styled("div")(({ theme: { breakpoints } }) => ({
  margin: "20px 0 0 0",
  width: "100%",
  [breakpoints.up("md")]: {
    margin: "0 0 0 80px",
  },
}));
