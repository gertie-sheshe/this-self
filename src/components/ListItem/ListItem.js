import React from "react";
import PropTypes from "prop-types";
import { ListItem as MuiListItem } from "@mui/material";
import Divider from "gertrudenyenyeshi/components/Divider";

function ListItem({ children }) {
  return (
    <MuiListItem sx={{ display: "block" }}>
      {children}
      <Divider sx={{ margin: "20px 0" }} />
    </MuiListItem>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
