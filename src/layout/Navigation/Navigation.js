import React from "react";
import { Grid } from "@mui/material";
import { StyledLink, NavBar } from "./NavigationStyles";

function Navigation() {
  return (
    <NavBar>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/projects">Projects</StyledLink>
        <StyledLink href="/writing">Writing</StyledLink>
        <StyledLink href="/accessibility">Accessibility</StyledLink>
        <StyledLink href="/speaking">Speaking</StyledLink>
        <StyledLink href="/achievements">Achievements</StyledLink>
      </Grid>
    </NavBar>
  );
}

export default Navigation;
