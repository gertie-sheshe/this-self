import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { projects } from "gertrudenyenyeshi/config";
import Title from "gertrudenyenyeshi/components/Title";
import ProjectsList from "gertrudenyenyeshi/layout/ProjectsList";

function Projects() {
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
            title="Projects"
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
        <Grid sx={{ height: "100vh", overflow: "scroll" }}>
          <ProjectsList
            projects={projects}
            sx={{ marginTop: lgScreen ? "50px" : "0px" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
