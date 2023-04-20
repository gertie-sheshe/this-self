import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function ArticlesList({ articles, sx }) {
  if (!articles) return;
  return (
    <List sx={sx}>
      {articles.map((article) => (
        <ListItem key={article.title} {...article} />
      ))}
    </List>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
};

export default ArticlesList;
