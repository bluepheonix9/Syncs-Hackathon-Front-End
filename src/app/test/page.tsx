"use client";
import React from "react";
import Navbar from "../components/navbar";
import SidebarWrapper from "../components/sidebarWrapper";
import TestYourself from "../components/testContent";

const TestPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <TestYourself />
      </SidebarWrapper>
    </>
  );
};

export default TestPage;
