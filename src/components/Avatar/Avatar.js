import React from "react";
import avatarImg from "../../../public/avatar.png";
import { StyledImage } from "./AvatarStyles";

function Avatar() {
  return (
    <div>
      <StyledImage src={avatarImg} alt="A portrait of Gertrude" />
    </div>
  );
}

export default Avatar;
