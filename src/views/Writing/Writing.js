import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { projects } from "gertrudenyenyeshi/config";
import Title from "gertrudenyenyeshi/components/Title";
import ProjectsList from "gertrudenyenyeshi/layout/ProjectsList";

function Writing() {
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
              title="Writing"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "140px !important",
                opacity: "3%",
                writingMode: "vertical-rl",
              }}
            />
          ) : (
            <Title title="projects" screenReaderOnly="true" />
          )}
        </Grid>
        <Grid sx={{ height: "100vh", overflow: "scroll" }}>
          {/* <ProjectsList projects={projects} /> */}
        </Grid>
      </Grid>
    </>
  );
}

export default Writing;
