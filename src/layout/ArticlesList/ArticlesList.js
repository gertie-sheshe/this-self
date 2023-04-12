import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function ArticlesList({ articles }) {
  if (!articles) return;
  return (
    <List sx={{ marginTop: "50px" }}>
      {articles.map((project) => (
        <ListItem key={project.href} {...project} />
      ))}
    </List>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
};

export default ArticlesList;
