// app/graphs/land/page.tsx
"use client";
import SidebarWrapper from "../../components1/sidebarWrapper";
import Navbar from "../../components1/navbar";
import ComingSoon from "../../components1/comingsoon";

export default function LandGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Non-used Land"
          description="Check back soon for insights on land sustainability and usage."
          emoji="🌱"
        />
      </SidebarWrapper>
    </>
  );
}
