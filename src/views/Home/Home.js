import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  Section,
  SummarySection,
  ScreenReaderTitle,
  Divider,
} from "./HomeStyles";

import { useTheme } from "@mui/material/styles";

import Avatar from "gertrudenyenyeshi/components/Avatar/Avatar";
import SizeContainer from "gertrudenyenyeshi/layout/SizeContainer";

function Home() {
  const theme = useTheme();

  return (
    <>
      <ScreenReaderTitle varint="h1">Home</ScreenReaderTitle>
      <Grid
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Section>
          <ScreenReaderTitle variant="h2">Work Summary</ScreenReaderTitle>
          <SizeContainer>
            <Grid container wrap="nowrap" sx={{ paddingTop: "100px" }}>
              <Avatar />
              <SummarySection>
                <Typography sx={{ marginBottom: "10px" }}>Hi!</Typography>
                <Typography
                  sx={{
                    fontSize: "43px",
                    fontWeight: 900,
                    marginBottom: "10px",
                  }}
                >
                  I'm Gertrude Nyenyeshi
                </Typography>
                <Typography sx={{ fontSize: "43px", fontWeight: 900 }}>
                  Frontend Engineer. Accessibility Advocate
                </Typography>
                <Divider />
              </SummarySection>
            </Grid>
          </SizeContainer>
        </Section>
      </Grid>
    </>
  );
}

export default Home;
