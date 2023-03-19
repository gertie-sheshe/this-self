import React from "react";
import { summarySectionProps } from "gertrudenyenyeshi/config";
import SummarySection from "gertrudenyenyeshi/layout/SummarySection";
import WorkExperienceSection from "gertrudenyenyeshi/layout/WorkExperienceSection";
import Title from "gertrudenyenyeshi/components/Title";

function Home() {
  return (
    <>
      <Title variant="h1" screenReaderOnly="true" title="Home" />
      <SummarySection {...summarySectionProps} />
      <WorkExperienceSection />
    </>
  );
}

export default Home;
