import React from "react";
import { Grid } from "@mui/material";
import Title from "gertrudenyenyeshi/components/Title";

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
        <Grid item xs={8}>
          List
        </Grid>
        <Grid item xs={2}>
          Summary
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
