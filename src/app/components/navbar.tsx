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
          {sidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-blue-700 rounded"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Martina Wolna</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Company name</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button className="p-2 hover:bg-blue-700 rounded">
            <Bell className="w-5 h-5" />
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
