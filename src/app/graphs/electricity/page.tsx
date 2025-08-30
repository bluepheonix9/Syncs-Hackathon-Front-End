"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import SidebarWrapper from "../../components/sidebarWrapper";


interface GraphsResponse {
  suburb: string;
  graphs: string[];
}

export default function ElectricityGraphsPage() {
  const [suburbs, setSuburbs] = useState<string[]>([]);
  const [selectedSuburb, setSelectedSuburb] = useState<string | null>(null);
  const [graphs, setGraphs] = useState<string[]>([]);
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null);

  // Fetch suburbs on page load
  useEffect(() => {
    fetch("http://127.0.0.1:8000/html_graphs/electricity")
      .then(res => res.json())
      .then(data => setSuburbs(data.suburbs))
      .catch(err => console.error("Failed to fetch suburbs:", err));
  }, []);

  // Fetch graphs when a suburb is selected
  useEffect(() => {
    if (!selectedSuburb) return;
    setSelectedGraph(null); // reset selected graph
    fetch(`http://127.0.0.1:8000/html_graphs/electricity/${selectedSuburb}`)
      .then(res => res.json())
      .then((data: GraphsResponse) => setGraphs(data.graphs))
      .catch(err => console.error("Failed to fetch graphs:", err));
  }, [selectedSuburb]);

  return (
  <div className="min-h-screen bg-white">
    <Navbar  />
    <SidebarWrapper>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Electricity Graphs</h1>

        {/* Suburb Selector */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Select a Suburb:</label>
          <select
            value={selectedSuburb ?? ""}
            onChange={(e) => setSelectedSuburb(e.target.value)}
            className="border p-2 rounded w-full md:w-1/2"
          >
            <option value="" disabled>
              -- Choose a suburb --
            </option>
            {suburbs.map((suburb) => (
              <option key={suburb} value={suburb}>
                {suburb}
              </option>
            ))}
          </select>
        </div>

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
        {selectedGraph && selectedSuburb && (
          <div className="flex justify-center mb-6">
            <div className="border rounded shadow p-4 w-full md:w-3/4 lg:w-2/3">
              <h2 className="text-xl font-semibold mb-2 text-center">
                {selectedGraph.replace(".html", "")}
              </h2>
              <iframe
                src={`http://127.0.0.1:8000/html_graphs/electricity/${selectedSuburb}/${selectedGraph}`}
                className="w-full h-[600px] border rounded"
              ></iframe>
            </div>
          </div>
        )}

        {!selectedSuburb && (
          <p className="text-gray-500">Select a suburb to view available graphs.</p>
        )}
      </div>
    </SidebarWrapper>
  </div>
);
}