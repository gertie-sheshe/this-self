import React from "react";
import PropTypes from "prop-types";
import { StyledImage } from "./AvatarStyles";

function Avatar({ alt, src }) {
  if (!alt && !src) return;

  return (
    <div>
      <StyledImage
        // priority="true"
        placeholder="blur"
        src={src}
        alt={alt}
      />
    </div>
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
