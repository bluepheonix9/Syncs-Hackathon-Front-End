"use client";
import React from "react";
import Link from "next/link";
import { BarChart2, Repeat, Droplet, Leaf, Eye, Book, Users } from "lucide-react";

const tips = [
  "Reduce single-use plastics wherever possible.",
  "Compost organic waste to reduce landfill contribution.",
  "Use digital documents instead of paper to minimize waste.",
  "Recycle electronics responsibly at certified centers.",
  "Plan meals to avoid food waste."
];

const HomePage: React.FC = () => {
  return (
    <div className="p-6  pr-20 space-y-12 bg-white">
      {/* Hero / Top Section */}
      <div className="bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4 space-y-2 md:space-y-0 pl-20">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              WasteWise
              <div className= "px-2">
              <img src="/wastewise.jpeg" alt="WasteWise Logo" className="h-20 w-20 object-contain" />
              </div>
            </h1>
            <p className="text-gray-600 mt-1">
              Track, analyze, and reduce waste efficiently. Make smarter decisions with your data.
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
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

        {/* Quick Stats */}
        <div className="flex gap-4 flex-wrap mt-4 md:mt-0">
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

      {/* What is a Resource Management Dashboard */}
      <div className="bg-white rounded-lg p-6 shadow space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">What is a Resource Management Dashboard?</h2>
        <p className="text-gray-600 mx-20 text-center">
          A Resource Management Dashboard is an interactive platform that consolidates public data related to waste production, recycling, energy consumption, and environmental impact.
          It helps users understand patterns, track improvements, and make informed decisions to reduce waste and promote sustainability. We construct interactive graphs using machine for users
          to visualize the data effectively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4">
            <BarChart2 className="h-12 w-12 text-blue-600 mb-2" />
            <p className="text-center text-gray-600">Track trends and patterns</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <Repeat className="h-12 w-12 text-green-600 mb-2" />
            <p className="text-center text-gray-600">Reduce waste efficiently</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <Droplet className="h-12 w-12 text-teal-600 mb-2" />
            <p className="text-center text-gray-600">Track water and energy use</p>
          </div>
        </div>
      </div>

      {/* Who Are We */}
      <div className="bg-white rounded-lg p-6 shadow space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Who Are We?</h2>
        <p className="text-gray-600 mx-20 text-center">
          Nano Pisedtasalsai and Jorge Lara Miño are two 3rd-year students in Computer Science and Electrical Engineering, respectively.
          We created this platform to promote sustainable habits, raise awareness about waste reduction, and provide actionable insights for individuals and communities.
        </p>

        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center justify-center mx-72 w-40 translate-x-4">
            <img src="Nano.jpg" alt="Nano" className=" h-48 w-48 mb-2" />
            <p className="text-gray-800 font-semibold">Nano Pisedtasalsai</p>
            <p className="text-gray-600 text-center text-sm">Computer Science</p>
          </div>
          <div className="flex flex-col items-center w-40">
            <img src="Jorge2.jpeg" alt="Jorge" className="h-48 w-48 mb-2" />
            <p className="text-gray-800 font-semibold">Jorge Lara Miño</p>
            <p className="text-gray-600 text-center text-sm">Electrical Engineering</p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white rounded-lg p-6 shadow space-y-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-16">
          <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center ">
            <Leaf className="h-10 w-10 mb-2 text-green-600" />
            <p className="text-center text-gray-600"><strong>Sustainability:</strong> Reduce environmental impact</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center">
            <Eye className="h-10 w-10 mb-2 text-blue-600" />
            <p className="text-center text-gray-600"><strong>Transparency:</strong> Open access to public data</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg flex flex-col items-center">
            <Book className="h-10 w-10 mb-2 text-yellow-600" />
            <p className="text-center text-gray-600"><strong>Education:</strong> Empower users with knowledge</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg flex flex-col items-center">
            <Users className="h-10 w-10 mb-2 text-orange-600" />
            <p className="text-center text-gray-600"><strong>Community:</strong> Support collective action</p>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-white rounded-lg p-6 shadow space-y-4 ">
        <h2 className="text-xl font-semibold text-gray-800 ">Tips to Reduce Waste</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
        <div className="mt-4">
          <Link
            href="/tips"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
          >
            View More Tips
          </Link>
        </div>
      </div>

      {/* Test Your Sustainability Habits Section */}
      <div className="bg-white rounded-lg p-6 shadow space-y-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Test Your Sustainability Habits</h2>
        <p className="text-gray-600">
          Take a quick quiz to see how sustainable your habits are and discover ways to improve!
        </p>
        <Link
          href="/test"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition inline-block"
        >
          Take the Test
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
