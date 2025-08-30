import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import DashboardContent from './components/dashboard_content';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Page;