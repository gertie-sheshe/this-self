import React from "react";
import { Grid, ListItem, List, Typography } from "@mui/material";
import { projects } from "gertrudenyenyeshi/config";
import Title from "gertrudenyenyeshi/components/Title";
import Divider from "gertrudenyenyeshi/components/Divider";

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
          <List>
            {projects.map(({ title, description }) => (
              <>
                <ListItem sx={{ display: "block" }}>
                  <Typography
                    sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    {title}
                  </Typography>
                  <Typography>{description}</Typography>
                  <Divider sx={{ margin: "20px 0" }} />
                </ListItem>
              </>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
