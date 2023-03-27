import React from "react";
import PropTypes from "prop-types";
import { Typography, ListItem } from "@mui/material";
import Divider from "gertrudenyenyeshi/components/Divider";
import { StyledLink } from "./ProjectStyles";

function Project({ title, description, href }) {
  return (
    <StyledLink href={href}>
      <ListItem sx={{ display: "block" }}>
        <Typography
          className="title"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Divider sx={{ margin: "20px 0" }} />
      </ListItem>
    </StyledLink>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Project;
