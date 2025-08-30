"use client";
import React from "react";
import Navbar from "../components/navbar";
import { Sidebar } from "lucide-react";
import SidebarWrapper from "../components/sidebarWrapper";


const tipsData = {
  Electricity: [
    "Turn off lights when not in use.",
    "Use energy-efficient LED bulbs.",
    "Unplug devices when not in use.",
  ],
  Water: [
    "Fix leaking faucets promptly.",
    "Take shorter showers.",
    "Collect rainwater for gardening.",
  ],
  Waste: [
    "Recycle paper, plastics, and metals properly.",
    "Compost organic waste.",
    "Avoid single-use plastics.",
  ],
  "Additional Tips!": [
    "Educate your community about sustainability.",
    "Plant trees or support local green initiatives.",
    "Track your waste to see improvements over time.",
  ],
};

const TipsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <div className="p-6 space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">Tips to Reduce Waste & Save Resources</h1>

          {Object.entries(tipsData).map(([category, tips]) => (
            <div key={category} className="bg-white rounded-lg p-6 shadow space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SidebarWrapper>
    </>
  );
}
export default TipsPage;