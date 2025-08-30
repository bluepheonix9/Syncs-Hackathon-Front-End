// app/graphs/paper/page.tsx
"use client";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";
import ComingSoon from "../../components/comingsoon";

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
