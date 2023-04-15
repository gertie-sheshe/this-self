import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { StyledLink } from "./NavigationStyles";

function DesktopNavigation({ navLinks }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  if (!navLinks) return;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction={{ xs: "column", sm: "row" }}
      sx={{
        height: "100%",
        padding: { xs: "20px 0", md: 0 },
      }}
    >
      {navLinks.map(({ href, name }) => (
        <StyledLink
          className={currentRoute === href ? "active" : ""}
          key={href}
          href={href}
        >
          {name}
        </StyledLink>
      ))}
    </Grid>
  );
}

DesktopNavigation.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default DesktopNavigation;
