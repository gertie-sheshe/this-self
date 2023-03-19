import React from "react";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Section, Profile, Break } from "./SummarySectionStyles";

import Avatar from "gertrudenyenyeshi/components/Avatar/Avatar";
import SocialMediaBar from "gertrudenyenyeshi/components/SocialMediaBar";
import Title from "gertrudenyenyeshi/components/Title";
import Divider from "gertrudenyenyeshi/components/Divider";

function SummarySection({ title, socials, description, avatar }) {
  if (!title) return; // title important for screen readers. Must be present

  return (
    <>
      <Section>
        <Title variant="h2" screenReaderOnly="true" title={title} />
        <Grid
          container
          wrap="nowrap"
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "normal", lg: "center" }}
          alignItems={{ xs: "center", lg: "normal" }}
          sx={{ paddingTop: { lg: "100px", md: "50px", xs: "50px" } }}
        >
          <Avatar {...avatar} />
          <Profile>
            <Typography
              sx={{
                marginBottom: "10px",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Hi!
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "2.6rem", md: "1.5rem" },
                fontWeight: 900,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              I&apos;m Gertrude Nyenyeshi <Break /> Software Engineer (Frontend){" "}
              <Break /> Accessibility Advocate
            </Typography>
            <Grid>
              <Divider sx={{ marginTop: "40px", marginBottom: "20px" }} />
            </Grid>
            <Grid>
              <SocialMediaBar socialData={socials} />
            </Grid>
            <Grid sx={{ display: { md: "none" } }}>
              <Divider
                sx={{ marginBottom: "40px", marginTop: { xs: "20px", lg: 0 } }}
              />
            </Grid>
          </Profile>
        </Grid>
        <div>
          <Typography
            sx={{
              lineHeight: "2.1",
              marginTop: { lg: "30px" },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            {description}
          </Typography>
        </div>
      </Section>
    </>
  );
}

SummarySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  socials: PropTypes.array,
};

export default SummarySection;
