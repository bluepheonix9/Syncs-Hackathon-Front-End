// graphs/page.tsx
import SidebarWrapper from "../components/sidebarWrapper";
import Graph from "../components/graphs";
import Navbar from "../components/navbar";

export default function GraphsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <Graph />
      </SidebarWrapper>
    </>
  );
}
