import React from "react";
import { Typography } from "@mui/material";
import { ScreenReaderTitle } from "./TitleStyles";

function Title({ variant, screenReaderOnly, title, sx }) {
  if (screenReaderOnly)
    return <ScreenReaderTitle variant={variant}>{title}</ScreenReaderTitle>;
  return (
    <Typography sx={sx} variant={variant}>
      {title}
    </Typography>
  );
}

export default Title;
