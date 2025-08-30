"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, FileText, Home, Lightbulb, Newspaper} from "lucide-react";

interface SidebarProps {
  collapsed: boolean; // initial collapsed state
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname(); // current URL path

  const sidebarItems = [
    { id: "Home", label: "Home", icon: Home, href: "/" },
    { id: "Graphs", label: "Graphs", icon: BarChart3, href: "/graphs" },
    { id: "Reports", label: "Reports", icon: FileText, href: "/reports" },
    { id: "Tips", label: "Tips", icon: Lightbulb, href: "/tips" },
    { id: "Test", label: "Test Yourself", icon: Newspaper, href: "/test" },
  ];

  const computedWidth = collapsed
    ? isHovered
      ? "w-64" // expand on hover
      : "w-16" // collapsed
    : "w-64";  // fully open

  return (
    <div
      className={`bg-white shadow-lg transition-all duration-300 flex flex-col ${computedWidth}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    {/* Header */}
    <div className="p-4 border-b border-gray-200 flex items-center space-x-2">
      {(isHovered || !collapsed) && (
        <div className="flex items-center space-x-2">
          <img src="/wastewise.jpeg" alt="Logo" className="w-13 h-9" />
        </div>
      )}
    </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href; // highlight based on URL

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-500"}`}
                  />
                  {(isHovered || !collapsed) && (
                    <span className="flex-1 text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};


export default Sidebar;
