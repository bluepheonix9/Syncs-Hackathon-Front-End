"use client";
import React from "react";
import Link from "next/link";

const tips = [
  "Reduce single-use plastics wherever possible.",
  "Compost organic waste to reduce landfill contribution.",
  "Use digital documents instead of paper to minimize waste.",
  "Recycle electronics responsibly at certified centers.",
  "Plan meals to avoid food waste."
];

const HomePage: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Hero / Top Section */}
      <div className="bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to WasteWise!
          </h1>
          <p className="text-gray-600">
            Track, analyze, and reduce waste efficiently. Make smarter decisions with your data.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/graphs"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Graphs
            </Link>
            <Link
              href="/reports"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Generate Report
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-4 flex-wrap">
          <div className="bg-white shadow p-4 rounded-lg flex flex-col items-center w-32">
            <span className="text-2xl font-bold text-blue-600">24</span>
            <span className="text-gray-500 text-sm text-center">Reports This Month</span>
          </div>
          <div className="bg-white shadow p-4 rounded-lg flex flex-col items-center w-32">
            <span className="text-2xl font-bold text-green-600">12</span>
            <span className="text-gray-500 text-sm text-center">Projects Active</span>
          </div>
          <div className="bg-white shadow p-4 rounded-lg flex flex-col items-center w-32">
            <span className="text-2xl font-bold text-orange-600">8</span>
            <span className="text-gray-500 text-sm text-center">Alerts Pending</span>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-white rounded-lg p-6 shadow space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Tips to Reduce Waste</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        {/* View More Tips Button */}
        <div className="mt-4">
          <Link
            href="/tips"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
          >
            View More Tips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
