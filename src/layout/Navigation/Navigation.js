import React from "react";
import { useTheme } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";
import { navLinks } from "gertrudenyenyeshi/config";
import { NavBar } from "./NavigationStyles";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

function Navigation() {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <NavBar>
      {lgScreen ? (
        <DesktopNavigation navLinks={navLinks} />
      ) : (
        <MobileNavigation navLinks={navLinks} />
      )}
    </NavBar>
  );
}

export default Navigation;
