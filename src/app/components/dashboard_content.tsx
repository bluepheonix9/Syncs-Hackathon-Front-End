import React from "react";
import { BarChart3, TrendingUp, Globe } from "lucide-react";

const DashboardContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 overflow-auto">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-1">
            OUR MOST SELL PRODUCT ACROSS ALL REGIONS
          </div>
          <div className="text-lg font-semibold text-gray-800">
            Sit purus rutrum magna enim
          </div>
          <div className="text-green-600 font-medium">200 000 SU ↗</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-1">LARGEST COMPETITOR DRINK</div>
          <div className="text-lg font-semibold text-gray-800">Id proin risus vitae quam</div>
          <div className="text-green-600 font-medium">20 000 SU ↗</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-1">LEAST COMPETITOR DRINK</div>
          <div className="text-lg font-semibold text-gray-800">Aliquam in dignissim aenean risus</div>
          <div className="text-gray-600 font-medium">20 000 SU</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-sm text-gray-600">GROSS SALES BY ALL THE PRODUCTS</div>
              <div className="text-2xl font-bold text-gray-800">982 323 434</div>
              <div className="text-green-600 text-sm">+1.5 % ↗</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">TOTAL NUMBER OF PRODUCTS</div>
              <div className="text-2xl font-bold text-gray-800">8</div>
              <div className="text-green-600 text-sm">+5 % ↗</div>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-2" />
              <p>Sales Distribution Chart</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-4">GROSS SALES TIMELINE</div>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              <p>Sales Timeline Chart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trends Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="text-sm text-gray-600 mb-4">GROSS SALES TRENDS OVER 5 YEARS</div>
        <div className="h-48 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-2" />
            <p>5-Year Trends Chart</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="text-sm text-gray-600 mb-4">
          SALES DATA BY CHAIN AROUND NORWAY LAST WEEK
        </div>
        <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <Globe className="w-12 h-12 mx-auto mb-2" />
            <p>Norway Sales Map</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
