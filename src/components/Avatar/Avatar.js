import React from "react";
import avatarImg from "../../../public/avatar.png";
import { StyledImage } from "./AvatarStyles";

function Avatar() {
  return (
    <div>
      <StyledImage
        priority="true"
        placeholder="blur"
        src={avatarImg}
        alt="A portrait of Gertrude"
      />
    </div>
  );
}

export default Avatar;
