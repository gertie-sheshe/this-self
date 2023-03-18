import React from "react";
import { Grid, Typography } from "@mui/material";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
import {
  Section,
  SummarySection,
  ScreenReaderTitle,
  Divider,
  Break,
} from "./HomeStyles";

import { useTheme } from "@mui/material/styles";

import Avatar from "gertrudenyenyeshi/components/Avatar/Avatar";
import SizeContainer from "gertrudenyenyeshi/layout/SizeContainer";
import SocialMediaBar from "gertrudenyenyeshi/components/SocialMediaBar";

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
        <Section>
          <ScreenReaderTitle variant="h2">Work Summary</ScreenReaderTitle>
          <SizeContainer>
            <Grid
              container
              wrap="nowrap"
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "normal", lg: "center" }}
              alignItems={{ xs: "center", lg: "normal" }}
              sx={{ paddingTop: { lg: "100px", md: "50px", xs: "50px" } }}
            >
              <Avatar />
              <SummarySection>
                <Typography
                  sx={{
                    marginBottom: "10px",
                    textAlign: { xs: "center", lg: "left" },
                  }}
                >
                  Hi!
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "2.6rem", md: "1.5rem" },
                    fontWeight: 900,
                    textAlign: { xs: "center", lg: "left" },
                  }}
                >
                  I&apos;m Gertrude Nyenyeshi <Break /> Software Engineer
                  (Frontend) <Break /> Accessibility Advocate
                </Typography>
                <div>
                  <Divider />
                </div>
                <Grid>
                  <SocialMediaBar />
                </Grid>
              </SummarySection>
            </Grid>
          </SizeContainer>
        </Section>
      </Grid>
    </>
  );
}

export default Home;
