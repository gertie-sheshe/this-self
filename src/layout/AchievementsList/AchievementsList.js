import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function AchievementsList({ achievements }) {
  if (!achievements) return;
  return (
    <List sx={{ marginTop: "50px" }}>
      {achievements.map((achievement) => (
        <ListItem key={achievement.title} {...achievement} />
      ))}
    </List>
  );
}

AchievementsList.propTypes = {
  achievements: PropTypes.array,
};

export default AchievementsList;
