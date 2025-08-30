"use client";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(true); // default collapsed
  const [hovered, setHovered] = useState(false);   // hover state

  // Toggle hover state from Sidebar
  const handleHover = (isHovering: boolean) => setHovered(isHovering);

  const sidebarWidth = collapsed ? (hovered ? 256 : 64) : 256; // px
  const sidebarTailwindWidth = collapsed ? (hovered ? "w-64" : "w-16") : "w-64";

  return (
    <div className="flex">
      {/* Pass hover state handlers to Sidebar */}
      <Sidebar
        collapsed={collapsed}
        onHover={handleHover}
      />

      {/* Main content dynamically adjusts based on sidebar width */}
      <main
        className="transition-all duration-300 flex-1"
        style={{ marginLeft: sidebarWidth }}
      >
        {children}
      </main>
    </div>
  );
}
