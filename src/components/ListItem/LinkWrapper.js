import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./ListItemStyles";

function LinkWrapper({ href, children }) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

LinkWrapper.propTypes = {
  children: PropTypes.node,
};

export default LinkWrapper;
