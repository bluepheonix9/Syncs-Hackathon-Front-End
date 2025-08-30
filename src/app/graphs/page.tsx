// app/graph/page.tsx
import React from "react";

const GraphPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", textAlign: "center" }}>
      <h1>Sine Wave Plot</h1>
      <iframe
        src="http://127.0.0.1:8000/plot/sine" // your FastAPI endpoint
        width="800"
        height="600"
        style={{ border: "1px solid #ccc", marginTop: "20px" }}
      ></iframe>
    </div>
  );
};

export default GraphPage;
