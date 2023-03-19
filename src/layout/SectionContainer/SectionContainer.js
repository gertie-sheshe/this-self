import React from "react";
import { Grid } from "@mui/material";

function SectionContainer({ children, sx }) {
  return (
    <Grid component="section" sx={sx}>
      {children}
    </Grid>
  );
}

export default SectionContainer;
