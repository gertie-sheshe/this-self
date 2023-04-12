import React from "react";
import PropTypes from "prop-types";
import PlainListItem from "./PlainListItem";
import LinkWrapper from "./LinkWrapper";

function ListItem({ href, ...props }) {
  return (
    <>
      {href ? (
        <LinkWrapper href={href}>
          <PlainListItem {...props} />
        </LinkWrapper>
      ) : (
        <PlainListItem {...props} />
      )}
    </>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
