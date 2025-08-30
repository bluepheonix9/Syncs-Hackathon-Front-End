// app/graphs/food/page.tsx
"use client";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";
import ComingSoon from "../../components/comingsoon";

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
