import React from "react";
import { ChevronDown, Bell } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Resource Management Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Contact Us</span>
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
