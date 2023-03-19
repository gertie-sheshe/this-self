import React from "react";
import { List, ListItem, Typography, Grid } from "@mui/material";
import Title from "gertrudenyenyeshi/components/Title";
import SectionContainer from "../SectionContainer/SectionContainer";
import Divider from "gertrudenyenyeshi/components/Divider";

const experienceData = [
  {
    title: "Founder",
    company: "Accessibility Africa",
    location: "Africa",
    duration: "2022 - Present",
    description:
      "Provider of accessibility services, specializing in audits, training, workshops to help teams build a more accessible web.",
  },
  {
    title: "Senior Frontend Engineer",
    company: "Civic Tech Company",
    location: "Cape Town, South Africa",
    duration: "2020 - 2022",
    description:
      "Africa’s largest network of indigenous civic technology and open data laboratories.",
  },
  {
    title: "Software Consultant (Frontend)",
    company: "Anapanda",
    duration: "2020",
    location: "Nairobi",
    description:
      "Anapanda is a growth-centric company that helps professionals and organizations reach new levels of alignment, awareness and performance.",
  },
  {
    title: "Web Engineer",
    company: "BBC",
    duration: "2018 - 2019",
    location: "London, UK",
    description:
      "The BBC is the world leader in global breaking news, providing trusted, accurate, impartial and independent news ",
  },
  {
    title: "Software Engineer",
    company: "ShopKeep",
    duration: "2017",
    location: "New York",
    description:
      "Shopkeep is a cloud-based iPad point of sale featuring inventory management, detailed reporting and 25/7 support.",
  },
  {
    title: "Software Engineer",
    company: "Urbanstems",
    location: "Washington D.C",
    duration: "2016 - 2017",
    description:
      "Urbanstems is a flower delivery company based in Washington DC with offices in New York and Austin. ",
  },
];

function WorkExperienceSection() {
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

export default WorkExperienceSection;
