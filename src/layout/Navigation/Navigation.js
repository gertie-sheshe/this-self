import React from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { navLinks } from "gertrudenyenyeshi/config";
import { StyledLink, NavBar } from "./NavigationStyles";

function Navigation() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <NavBar>
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
    </NavBar>
  );
}

export default Navigation;
