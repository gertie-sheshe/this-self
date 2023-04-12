import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { talks } from "gertrudenyenyeshi/config";
import Title from "gertrudenyenyeshi/components/Title";
import TalksList from "gertrudenyenyeshi/layout/TalksList";

function Talks() {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid container flexWrap="nowrap">
        <Grid
          sx={{
            display: lgScreen ? "flex" : "none",
            alignItems: "center",
            height: "100vh",
            flexWrap: "nowrap",
          }}
        >
          {lgScreen ? (
            <Title
              title="Talks"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "140px !important",
                opacity: "3%",
                writingMode: "vertical-rl",
              }}
            />
          ) : (
            <Title title="talks" screenReaderOnly="true" />
          )}
        </Grid>
        <Grid sx={{ height: "100vh", overflow: "scroll" }}>
          <TalksList talks={talks} />
        </Grid>
      </Grid>
    </>
  );
}

export default Talks;
