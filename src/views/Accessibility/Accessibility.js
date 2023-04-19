import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { sessions } from "gertrudenyenyeshi/config";
import Title from "gertrudenyenyeshi/components/Title";
import Divider from "gertrudenyenyeshi/components/Divider";
import SessionsList from "gertrudenyenyeshi/layout/SessionsList";
import { StyledLink } from "./AccessibilityStyles";

function Accessibility() {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid container flexWrap="nowrap">
        <Grid
          sx={{
            display: lgScreen ? "flex" : "none",
            alignItems: "center",
            height: "100vh",
            flexWrap: "nowrap",
          }}
        >
          {lgScreen ? (
            <Title
              title="A11y"
              variant="h1"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "140px !important",
                opacity: "3%",
                writingMode: "vertical-rl",
                margin: "40px",
              }}
            />
          ) : (
            <Title variant="h1" title="Accessibility" screenReaderOnly="true" />
          )}
        </Grid>
        <Grid sx={{ marginTop: "40px" }}>
          <section>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
              variant="h2"
            >
              Accessibility Africa
            </Typography>
            <Typography>
              As the Founder of Accessibility Africa, I am dedicated to
              advocating for a more accessible web. Through regular
              conversations hosted twice a month, we strive to increase
              awareness and understanding of the importance of accessibility.
            </Typography>
            <StyledLink href="https://twitter.com/a11yafrica">
              <Typography sx={{ marginTop: "20px" }} variant="subtitle2">
                Learn more about Accessibility Africa
              </Typography>
            </StyledLink>
          </section>
          <section>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                marginTop: "50px",
                marginBottom: "20px",
              }}
              variant="h2"
            >
              Accessibility Africa Conversations
            </Typography>
            <Divider />
            <div>
              <SessionsList sessions={sessions} />
            </div>
          </section>
        </Grid>
      </Grid>
    </>
  );
}

export default Accessibility;
