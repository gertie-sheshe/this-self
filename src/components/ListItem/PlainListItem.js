import React from "react";
import PropTypes from "prop-types";
import { ListItem as MuiListItem, Typography } from "@mui/material";
import Divider from "gertrudenyenyeshi/components/Divider";

function PlainListItem({ title, description, location, published, host }) {
  if (!title) return;
  return (
    <MuiListItem sx={{ display: "block", padding: 0 }}>
      <Typography
        className="title"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      {published && (
        <Typography sx={{ margin: "10px 0" }} variant="subtitle2">
          {`Published ${published}`}
        </Typography>
      )}
      {host && (
        <Typography sx={{ margin: "10px 0" }} variant="subtitle2">
          {host}
        </Typography>
      )}
      {description && <Typography variant="body2">{description}</Typography>}
      <Divider sx={{ margin: "20px 0" }} />
    </MuiListItem>
  );
}

PlainListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.string,
  published: PropTypes.string,
};

export default PlainListItem;
