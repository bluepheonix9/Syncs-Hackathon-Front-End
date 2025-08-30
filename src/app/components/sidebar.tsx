"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BarChart3, FileText, Home, X } from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleCollapsed }) => {
  const [activeSection, setActiveSection] = useState("Home");

  const sidebarItems = [
    { id: "Home", label: "Home", icon: Home, href: "/" },
    { id: "Graphs", label: "Graphs", icon: BarChart3, href: "/graphs" },
    { id: "Reports", label: "Reports", icon: FileText, href: "/reports" },
  ];

  return (
    <div
      className={`bg-white shadow-lg transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } flex flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          {!collapsed && <span className="font-bold text-gray-800">PowerBI</span>}
        </div>
        {!collapsed && (
          <button
            onClick={toggleCollapsed}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                {!collapsed && (
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
