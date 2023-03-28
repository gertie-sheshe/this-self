import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";
import { StyledLink } from "./ArticleStyles";

function Article({ title, published, href }) {
  return (
    <StyledLink href={href}>
      <ListItem>
        <Typography className="title" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2">{published}</Typography>
      </ListItem>
    </StyledLink>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};

export default Article;
