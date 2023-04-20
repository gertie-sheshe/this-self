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
      <Grid container flexWrap={lgScreen ? "nowrap" : "wrap"}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            height: lgScreen ? "100vh" : "auto",
          }}
        >
          <Title
            title={lgScreen ? "A11y" : "Accessibility"}
            variant="h1"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: lgScreen ? "8.7rem" : "3rem",
              opacity: "3%",
              writingMode: lgScreen ? "vertical-rl" : "horizontal-tb",
              margin: lgScreen ? "40px" : "10px 0 0 0",
            }}
          />
        </Grid>
        <Grid
          sx={{
            marginTop: lgScreen ? "40px" : "10px",
            height: "100vh",
            overflow: "scroll",
          }}
        >
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
              <SessionsList
                sessions={sessions}
                sx={{ marginTop: lgScreen ? "50px" : "0px" }}
              />
            </div>
          </section>
        </Grid>
      </Grid>
    </>
  );
}

export default Accessibility;
