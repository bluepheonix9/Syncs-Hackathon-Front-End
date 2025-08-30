// app/reports/page.tsx
"use client";
import React from "react";
import SidebarWrapper from "../components/sidebarWrapper";
import Navbar from "../components/navbar";
import { Download } from "lucide-react";

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <SidebarWrapper>
        <div className="p-6 min-h-screen bg-gray-50 space-y-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Report</h1>
          <p className="text-gray-700 leading-relaxed">
            One of the biggest challenges the modern urban cities will have to deal with will be climate change, resource scarcity, and an evolving economic landscape. Our goal is to develop predictive models that analyse multiple resource usage processes under certain conditions. The quantification of these methods will help us in the future to approach problems more effectively. By leveraging machine learning models like k-Nearest Neighbors (kNN), Random Forest, and Linear Regression, we can move from abstract questions to concrete, data-informed decisions, directly tackling the three pivotal questions for the cities of the future.
          </p>

          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Climate change demands resilient infrastructure:</strong> Our models help take justified solutions dynamically. For instance, a Random Forest model can analyze historical electricity usage data, correlating it with factors like temperature, humidity, building density, and green space. This allows city planners to simulate the impact of specific interventions.  
              <br /><br />
              Example: Increasing n% of green areas in a location may reduce m% of cooling energy during summer.  
              Data also helps identify power usage patterns by income; low-quality appliances in lower-income neighborhoods often lack energy-saving features, leading to higher electricity consumption. Targeted programs, such as replacing outdated bulbs with LEDs, can reduce bills and overall energy demand.
            </li>

            <li>
              <strong>Resource optimization for water and electricity:</strong> Linear Regression models are excellent for identifying primary drivers of consumption. By analyzing water usage against population density, industrial activity, and precipitation, inefficiencies can be pinpointed and future demand predicted accurately.  
              <br /><br />
              Example: Non-revenue water (leakage) accounts for higher usage in older districts. Models can guide targeted pipe replacements and conservation programs for small businesses, ensuring resources have maximum impact.
            </li>

            <li>
              <strong>Remote work and gig economy shifts:</strong> A kNN model can classify neighborhoods by usage patterns, identifying areas that behave similarly. This helps understand new work geographies.  
              <br /><br />
              Example: Suburban neighborhood "X" shows high daytime electricity and internet usage similar to a central business district. The city can invest in broadband infrastructure and shared workspaces to support remote workers, reduce commute needs, and stimulate local economies.
            </li>
          </ol>

          <p className="text-gray-700 leading-relaxed">
            In conclusion, our project quantifies resource usage processes that will help us take justified qualitative decisions about new policies and infrastructure investments. The future of urban living will be built on data.
          </p>
          <div className="mt-8 bg-white rounded-lg p-6 shadow space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Resources</h2>
                <p className="text-gray-600">
                    Download the full report and related resources to explore the data and models in detail.
                </p>

                <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
                    <a
                    href="/Full_Report.pdf"
                    download="Full_Report.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                    <Download className="h-5 w-5" />
                    <span>Full Report (PDF)</span>
                    </a>

                    <a
                    href="/A-L_Electricity-data.zip"
                    download="A-L_Electricity-data.zip"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                    <Download className="h-5 w-5" />
                    <span>A-L Electricity Data (ZIP)</span>
                    </a>

                    <a
                    href="/M-Z_Electricity-data.zip"
                    download="M-Z_Electricity-data.zip"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                    <Download className="h-5 w-5" />
                    <span>M-Z Electricity Data (ZIP)</span>
                    </a>
                </div>
                </div>
        </div>
      </SidebarWrapper>
    </>
  );
}
