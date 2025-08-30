// app/graphs/paper/page.tsx
"use client";
import SidebarWrapper from "../../components1/sidebarWrapper";
import Navbar from "../../components1/navbar";
import ComingSoon from "../../components1/comingsoon";

export default function PaperGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Paper"
          description="Check back soon for insights on paper recycling and usage."
          emoji="📄"
        />
      </SidebarWrapper>
    </>
  );
}
