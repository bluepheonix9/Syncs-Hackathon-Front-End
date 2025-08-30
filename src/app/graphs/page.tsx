import Graph from "../components/graphs";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function GraphsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* collapsible sidebar */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Graph />
      </div>
    </div>
  );
}
