import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
import { StyledLink } from "./SocialMediaStyles";

const socialData = [
  {
    name: "GitHub",
    component: <GitHub />,
    href: "https://github.com/gertie-sheshe",
    description: "GitHub Portfolio",
  },
  {
    name: "Twitter",
    component: <Twitter />,
    href: "https://twitter.com/gertiesheshe",
    description: "Twitter Account",
  },
  {
    name: "LinkedIn",
    component: <LinkedIn />,
    href: "https://www.linkedin.com/in/gertrudenyenyeshi",
    description: "LinkedIn Profile",
  },
];

function SocialMediaBar() {
  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "normal" },
          justifyContent: { sm: "center", lg: "normal" },
        }}
      >
        {socialData.map(({ name, component, href, description }) => (
          <ListItem key={name} sx={{ width: "fit-content" }}>
            <StyledLink
              href={href}
              sx={{ display: "flex", alignItems: "center", color: "#fff" }}
            >
              {component}
              <Typography
                variant="body2"
                sx={{ display: "inline", marginLeft: "10px" }}
              >
                {description}
              </Typography>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default SocialMediaBar;
