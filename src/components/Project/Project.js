import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";
import { StyledLink } from "./ProjectStyles";

function Project({ title, description, href }) {
  return (
    <StyledLink href={href}>
      <ListItem>
        <Typography
          className="title"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </ListItem>
    </StyledLink>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};

export default Project;
