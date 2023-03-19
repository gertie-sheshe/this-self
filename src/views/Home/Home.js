import React from "react";
import { Grid } from "@mui/material";
import { ScreenReaderTitle } from "./HomeStyles";
import SummarySection from "gertrudenyenyeshi/layout/SummarySection";
import SizeContainer from "gertrudenyenyeshi/layout/SizeContainer";

import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();

  return (
    <>
      <ScreenReaderTitle varint="h1">Home</ScreenReaderTitle>
      <Grid
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <SizeContainer>
          <SummarySection />
        </SizeContainer>
      </Grid>
    </>
  );
}

export default Home;
