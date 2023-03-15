import React from "react";
import Header from "gertrudenyenyeshi/layout/Header";
import MainContainer from "gertrudenyenyeshi/layout/MainContainer";

function Page({ children }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}

export default Page;
