import React from "react";
import { Grid, Typography } from "@mui/material";
import { Section, SummarySection, ScreenReaderTitle } from "./HomeStyles";

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
            <Grid
              container
              wrap="nowrap"
              // justifyContent="center"
              sx={{ paddingTop: "100px" }}
            >
              <Avatar />
              <SummarySection>
                <Typography>Hello, Everyone!</Typography>
                <Typography sx={{ fontSize: "43px" }}>
                  I'm Gertrude Nyenyeshi
                </Typography>
                <Typography sx={{ fontSize: "43px" }}>
                  I am an Experienced Frontend Engineer and Accessibility
                  Advocate
                </Typography>
              </SummarySection>
            </Grid>
          </SizeContainer>
        </Section>
      </Grid>
    </>
  );
}

export default Home;
