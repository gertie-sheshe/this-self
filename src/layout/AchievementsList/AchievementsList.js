import React from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItem from "gertrudenyenyeshi/components/ListItem";

function AchievementsList({ achievements, sx }) {
  if (!achievements) return;
  return (
    <List sx={sx}>
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
