// app/graphs/fuel/page.tsx
"use client";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";
import ComingSoon from "../../components/comingsoon";

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
