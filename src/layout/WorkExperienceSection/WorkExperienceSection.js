import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Typography, Grid } from "@mui/material";
import Title from "gertrudenyenyeshi/components/Title";
import SectionContainer from "../SectionContainer/SectionContainer";
import Divider from "gertrudenyenyeshi/components/Divider";

function WorkExperienceSection({ experienceData }) {
  if (!experienceData.length) return;

  return (
    <SectionContainer sx={{ marginTop: "100px" }}>
      <Title
        title="Work Experience"
        variant="h2"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      />
      <Divider sx={{ marginTop: "10px", marginBottom: "20px" }} />
      <List>
        <Grid container spacing={2}>
          {experienceData.map(
            ({ title, company, location, duration, description }) => (
              <Grid
                key={company}
                item
                xs={{ xs: 12, lg: 12 }}
                justifyContent="center"
                alignItems="center"
              >
                <ListItem
                  key={company}
                  sx={{
                    flexDirection: "column",
                    alignItems: "normal",
                    paddingLeft: 0,
                    marginBottom: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ marginBottom: "20px" }}
                    variant="body2"
                  >{`${company} | ${location} | ${duration}`}</Typography>
                  <Typography>{description}</Typography>
                </ListItem>
              </Grid>
            )
          )}
        </Grid>
      </List>
    </SectionContainer>
  );
}

WorkExperienceSection.propTypes = {
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      location: PropTypes.string,
      duration: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default WorkExperienceSection;
