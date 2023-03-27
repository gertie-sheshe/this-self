import React from "react";
import { Grid } from "@mui/material";
import { projects } from "gertrudenyenyeshi/config";
import Title from "gertrudenyenyeshi/components/Title";
import ProjectsList from "gertrudenyenyeshi/layout/ProjectsList";

function Projects() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <Title
            title="Projects"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "140px !important",
              opacity: "3%",
              writingMode: "vertical-rl",
            }}
          />
        </Grid>
        <Grid item xs={10} sx={{ height: "100vh", overflow: "scroll" }}>
          <ProjectsList projects={projects} />
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
