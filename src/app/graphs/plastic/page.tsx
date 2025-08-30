// app/graphs/plastic/page.tsx
"use client";
import SidebarWrapper from "../../components1/sidebarWrapper";
import Navbar from "../../components1/navbar";
import ComingSoon from "../../components1/comingsoon";

export default function PlasticGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Plastic"
          description="Check back soon for insights on plastic reduction and recycling."
          emoji="🧴"
        />
      </SidebarWrapper>
    </>
  );
}
