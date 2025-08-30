// app/graphs/food/page.tsx
"use client";
import SidebarWrapper from "../../components1/sidebarWrapper";
import Navbar from "../../components1/navbar";
import ComingSoon from "../../components1/comingsoon";

export default function FoodGraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <ComingSoon
          title="Food"
          description="Check back soon for insights on food sustainability and waste."
          emoji="🍽️"
        />
      </SidebarWrapper>
    </>
  );
}
