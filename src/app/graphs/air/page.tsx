// app/graphs/air-pollution/page.tsx
"use client";
import { useEffect, useState } from "react";
import SidebarWrapper from "../../components/sidebarWrapper";
import Navbar from "../../components/navbar";

export default function AirPollutionGraphsPage() {
  const [graphs, setGraphs] = useState<string[]>([]);
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null);

  // Fetch all pollution graphs on page load
  useEffect(() => {
    fetch("http://127.0.0.1:8000/html_graphs/pollution")
      .then(res => res.json())
      .then(data => setGraphs(data.graphs))
      .catch(err => console.error("Failed to fetch pollution graphs:", err));
  }, []);

  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <div className="p-6 min-h-screen bg-">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Air Pollution Graphs</h1>

          {/* Graph List */}
          {graphs.length > 0 && (
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Available Graphs:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {graphs.map((graph) => (
                  <button
                    key={graph}
                    onClick={() => setSelectedGraph(graph)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    {graph.replace(".html", "")}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Graph Preview */}
          {selectedGraph && (
            <div className="flex justify-center mb-6">
              <div className="border rounded shadow p-4 w-full md:w-3/4 lg:w-2/3">
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {selectedGraph.replace(".html", "")}
                </h2>
                <iframe
                  src={`http://127.0.0.1:8000/html_graphs/pollution/${selectedGraph}`}
                  className="w-full h-[600px] border rounded"
                ></iframe>
              </div>
            </div>
          )}

          {/* Placeholder if no graph selected */}
          {!selectedGraph && (
            <p className="text-gray-500 text-center">Select a graph to view details on air pollution.</p>
          )}
        </div>
      </SidebarWrapper>
    </>
  );
}
