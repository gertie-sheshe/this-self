import React from "react";
import { summarySectionProps } from "gertrudenyenyeshi/config";
import SummarySection from "gertrudenyenyeshi/layout/SummarySection";
import Title from "gertrudenyenyeshi/components/Title";

function Home() {
  return (
    <>
      <Title variant="h1" screenReaderOnly="true" title="Home" />
      <SummarySection {...summarySectionProps} />
    </>
  );
}

export default Home;
