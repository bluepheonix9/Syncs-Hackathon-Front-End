// app/graphs/water/page.tsx
"use client";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";
import ComingSoon from "../../components/comingsoon";

export default function WaterGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Water"
          description="Check back soon for insights on water conservation and usage."
          emoji="💧"
        />
      </SidebarWrapper>
    </>
  );
}
