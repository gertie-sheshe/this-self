import * as React from "react";
import Navigation from "gertrudenyenyeshi/layout/Navigation";
import { Container, Typography, Button, Box } from "@mui/material";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography>Site under construction</Typography>
        <Button>Button</Button>
        <Navigation />
      </Box>
    </Container>
  );
}
