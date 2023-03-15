import { styled } from "@mui/system";

export const Container = styled("div")(
  ({ theme: { breakpoints, typography } }) => ({
    padding: `0 ${typography.pxToRem(20)}`,
    [breakpoints.up("sm")]: {
      padding: `0 ${typography.pxToRem(200)}`,
    },
  })
);
