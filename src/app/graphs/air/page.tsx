// app/graphs/air-pollution/page.tsx
"use client";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";
import ComingSoon from "../../components/comingsoon";

export default function AirPollutionGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Air Pollution"
          description="Check back soon for insights on air quality and pollution control."
          emoji="🌫️"
        />
      </SidebarWrapper>
    </>
  );
}
