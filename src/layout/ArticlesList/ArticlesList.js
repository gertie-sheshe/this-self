import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import Article from "gertrudenyenyeshi/components/Article";

function ArticlesList({ articles }) {
  if (!articles) return;
  return (
    <List sx={{ marginTop: "50px" }}>
      {articles.map((project) => (
        <Article key={project.href} {...project} />
      ))}
    </List>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
};

export default ArticlesList;
