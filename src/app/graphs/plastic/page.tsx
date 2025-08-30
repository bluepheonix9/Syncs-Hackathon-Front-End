// app/graphs/plastic/page.tsx
"use client";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";
import ComingSoon from "../../components/comingsoon";

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
