import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./ListItemStyles";

function LinkWrapper({ href, children }) {
  if (!href && !children) return;
  return <StyledLink href={href}>{children}</StyledLink>;
}

LinkWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkWrapper;
