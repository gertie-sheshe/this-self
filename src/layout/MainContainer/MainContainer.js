import React from "react";
import { Grid } from "@mui/material";
import SizeContainer from "gertrudenyenyeshi/layout/SizeContainer";

import { useTheme } from "@mui/material/styles";

function MainContainer({ children }) {
  const theme = useTheme();

  return (
    <main>
      <Grid
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <SizeContainer>{children}</SizeContainer>
      </Grid>
    </main>
  );
}

export default MainContainer;
