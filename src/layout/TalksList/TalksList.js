import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function TalksList({ talks, sx }) {
  if (!talks) return;
  return (
    <List sx={sx}>
      {talks.map((talk) => (
        <ListItem key={talk.title} {...talk} />
      ))}
    </List>
  );
}

TalksList.propTypes = {
  talks: PropTypes.array,
};

export default TalksList;
