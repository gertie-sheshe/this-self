import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function ArticlesList({ articles }) {
  if (!articles) return;
  return (
    <List sx={{ marginTop: "50px" }}>
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
