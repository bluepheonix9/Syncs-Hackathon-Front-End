import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import DashboardContent from './components/dashboard_content';
import SidebarWrapper from './components/sidebarWrapper';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
      <SidebarWrapper>
        <DashboardContent />
              </SidebarWrapper>
      </div>
    </div>
  );
};

export default Page;