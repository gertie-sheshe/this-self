import React, { useState } from "react";
import { Drawer, List, ListItem, Box, Button } from "@mui/material";

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
        ola
      </Drawer>
    </>
  );
};

export default MobileNavigation;
