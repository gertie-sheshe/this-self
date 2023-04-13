import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function SessionsList({ sessions }) {
  if (!sessions) return;
  return (
    <List sx={{ marginTop: "50px" }}>
      {sessions.map((session) => (
        <ListItem key={session.title} {...session} />
      ))}
    </List>
  );
}

SessionsList.propTypes = {
  sessions: PropTypes.array,
};

export default SessionsList;
