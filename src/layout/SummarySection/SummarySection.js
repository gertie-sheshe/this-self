import React from "react";
import { Grid, Typography } from "@mui/material";
import { Section, Profile, Break } from "./SummarySectionStyles";

import Avatar from "gertrudenyenyeshi/components/Avatar/Avatar";
import SocialMediaBar from "gertrudenyenyeshi/components/SocialMediaBar";
import Title from "gertrudenyenyeshi/components/Title";
import Divider from "gertrudenyenyeshi/components/Divider";

function SummarySection() {
  return (
    <>
      <Section>
        <Title
          variant="h2"
          screenReaderOnly="true"
          title="Work and Profile Summary"
        />
        <Grid
          container
          wrap="nowrap"
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "normal", lg: "center" }}
          alignItems={{ xs: "center", lg: "normal" }}
          sx={{ paddingTop: { lg: "100px", md: "50px", xs: "50px" } }}
        >
          <Avatar />
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
              <SocialMediaBar />
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
            sx={{ lineHeight: "2.1", textAlign: { xs: "center", lg: "left" } }}
          >
            As an Experienced Software Engineer with a specialization in
            Frontend, I possess expertise in architecting and maintaining
            scalable applications with a strong focus on performance, usability
            and accessibility. As an Accessibility Advocate, I founded
            Accessibility Africa to raise awareness and promote training and
            conversations around accessibility. I have a proven track record of
            building and managing developer communities, and I take pride in
            providing mentorship and guidance to junior engineers.
          </Typography>
        </div>
      </Section>
    </>
  );
}

export default SummarySection;
