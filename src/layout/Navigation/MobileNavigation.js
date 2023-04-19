import React, { useState } from "react";

import { Drawer, List, ListItem, Grid, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { StyledLink, BoxContainer, MenuButton } from "./NavigationStyles";

const MobileNavigation = ({ navLinks }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };
  return (
    <>
      <Grid container>
        <MenuButton aria-label="Menu" onClick={toggleDrawer(true)}>
          {<Menu fontSize="large" />}
        </MenuButton>
      </Grid>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <BoxContainer
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map(({ href, name }) => (
              <ListItem key={name}>
                <StyledLink href={href}>{name}</StyledLink>
              </ListItem>
            ))}
          </List>
        </BoxContainer>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
