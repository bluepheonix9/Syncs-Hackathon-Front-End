// app/graphs/construction/page.tsx
"use client";
import SidebarWrapper from "../../components1/sidebarWrapper";
import Navbar from "../../components1/navbar";
import ComingSoon from "../../components1/comingsoon";

export default function ConstructionGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Construction"
          description="Check back soon for insights on sustainable construction and materials."
          emoji="🚧"
        />
      </SidebarWrapper>
    </>
  );
}
