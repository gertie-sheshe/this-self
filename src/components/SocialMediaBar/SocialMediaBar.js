import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Typography } from "@mui/material";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
import { StyledLink } from "./SocialMediaStyles";

const componentMap = {
  GitHub: <GitHub />,
  Twitter: <Twitter />,
  LinkedIn: <LinkedIn />,
};

function SocialMediaBar({ socialData }) {
  if (!socialData.length) return;

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
        {socialData.map(({ name, href, description }) => (
          <ListItem key={name} sx={{ width: "fit-content" }}>
            <StyledLink
              href={href}
              sx={{ display: "flex", alignItems: "center", color: "#fff" }}
            >
              {componentMap[name]}
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

SocialMediaBar.propTypes = {
  socialData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default SocialMediaBar;
