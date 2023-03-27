import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import Project from "gertrudenyenyeshi/components/Project";

function ProjectsList({ projects }) {
  if (!projects) return;
  return (
    <List sx={{ marginTop: "50px" }}>
      {projects.map((project) => (
        <Project key={project.href} {...project} />
      ))}
    </List>
  );
}

ProjectsList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectsList;
