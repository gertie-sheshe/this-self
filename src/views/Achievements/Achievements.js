import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { achievements } from "gertrudenyenyeshi/config";
import Title from "gertrudenyenyeshi/components/Title";
import AchievementsList from "gertrudenyenyeshi/layout/AchievementsList";

function Achievements() {
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
              title="Wins"
              variant="h1"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "140px !important",
                opacity: "3%",
                margin: "40px",
                writingMode: "vertical-rl",
              }}
            />
          ) : (
            <Title variant="h1" title="Talks" screenReaderOnly="true" />
          )}
        </Grid>
        <Grid sx={{ height: "100vh", overflow: "scroll" }}>
          <AchievementsList achievements={achievements} />
        </Grid>
      </Grid>
    </>
  );
}

export default Achievements;
