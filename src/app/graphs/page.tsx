// app/graphs/page.tsx
"use client";
import Link from "next/link";
import SidebarWrapper from "../components/sidebarWrapper";
import Navbar from "../components/navbar";

const graphCategories = [
  { name: "Electricity", path: "/graphs/electricity" },
  { name: "Fuel", path: "/graphs/fuel" },
  { name: "Water", path: "/graphs/water" },
  { name: "Air Pollution", path: "/graphs/air" },
  { name: "Food", path: "/graphs/food" },
  { name: "Plastic", path: "/graphs/plastic" },
  { name: "Paper", path: "/graphs/paper" },
  { name: "Construction Materials", path: "/graphs/construction" },
  { name: "Non-used Land", path: "/graphs/land" },
];

export default function GraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <div className="min-h-screen p-6 flex flex-col space-y-6 bg-white">
          <h1 className="text-3xl font-bold text-gray-800">Graphs Dashboard</h1>
          <p className="text-gray-600">
            Select a category below to explore detailed graphs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            {graphCategories.map((cat) => (
              <Link
                key={cat.path}
                href={cat.path}
                className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition hover:bg-blue-50"
              >
                <h2 className="text-xl font-semibold text-blue-600">{cat.name}</h2>
                <p className="text-gray-500 text-sm mt-2">
                  View insights and data on {cat.name.toLowerCase()}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </SidebarWrapper>
    </>
  );
}
