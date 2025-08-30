"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import SidebarWrapper from "../components/sidebarWrapper";
import TestYourself from "../components/testContent";

const TestPage: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  return (
    <>
      <Navbar
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <SidebarWrapper>
        <TestYourself />
      </SidebarWrapper>
    </>
  );
};

export default TestPage;
