import React from "react";
import { Divider as MuiDivider, useTheme } from "@mui/material";

function Divider({ sx }) {
  const theme = useTheme();
  const mergedSx = { borderColor: theme.palette.primary.light, ...sx };

  return <MuiDivider sx={mergedSx} />;
}

export default Divider;
