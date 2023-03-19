import React from "react";
import { Typography } from "@mui/material";
import { ScreenReaderTitle } from "./TitleStyles";

function Title({ variant, screenReaderOnly, title }) {
  if (screenReaderOnly)
    return <ScreenReaderTitle variant={variant}>{title}</ScreenReaderTitle>;
  return <Typography variant={variant}>{title}</Typography>;
}

export default Title;
