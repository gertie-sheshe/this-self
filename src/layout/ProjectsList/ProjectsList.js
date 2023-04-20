import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function ProjectsList({ projects, sx }) {
  if (!projects) return;
  return (
    <List sx={sx}>
      {projects.map((project) => (
        <ListItem key={project.title} {...project} />
      ))}
    </List>
  );
}

ProjectsList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectsList;
