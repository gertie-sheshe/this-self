import { styled } from "@mui/system";

export const StyledHeader = styled("header")(
  ({ theme: { palette, breakpoints } }) => ({
    // backgroundColor: palette.primary.main,
    [breakpoints.up("sm")]: {
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
  })
);
