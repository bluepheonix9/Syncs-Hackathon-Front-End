import React from "react";
import { ChevronDown, Bell, Menu } from "lucide-react";

interface NavbarProps {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarCollapsed, toggleSidebar }) => {
  return (
    <header className="bg-blue-600 text-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Waste Management Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Lara Mino Enterprises</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="p-2 hover:bg-blue-700 rounded">
            <Bell className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
