import React from "react";
import Image from "next/image";
import avatarImg from "../../../public/avatar.png";
import { StyledImage } from "./AvatarStyles";

function Avatar() {
  return (
    <div>
      <StyledImage src={avatarImg} height={400} width={400} />
    </div>
  );
}

export default Avatar;
