// app/graphs/construction/page.tsx
"use client";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";
import ComingSoon from "../../components/comingsoon";

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
