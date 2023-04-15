import React, { useState } from "react";

import { Drawer, List, ListItem, Box, Button } from "@mui/material";
import { StyledLink } from "./NavigationStyles";

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
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navLinks.map(({ href, name }) => (
              <ListItem>
                <StyledLink href={href}>{name}</StyledLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
