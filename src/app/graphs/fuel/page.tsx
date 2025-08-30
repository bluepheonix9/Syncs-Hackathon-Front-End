// app/graphs/fuel/page.tsx
"use client";
import SidebarWrapper from "../../components1/sidebarWrapper";
import Navbar from "../../components1/navbar";
import ComingSoon from "../../components1/comingsoon";

export default function FuelGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Fuel"
          description="Check back soon for insights on fuel usage and emissions."
          emoji="⛽"
        />
      </SidebarWrapper>
    </>
  );
}
