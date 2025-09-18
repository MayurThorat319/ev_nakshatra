import type React from "react";
import "./graphSection.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BiColor } from "react-icons/bi";

const data = [
  { name: "2025", Price: 6000 },
  { name: "2026", Price: 12000 },
  { name: "2027", Price: 15000 },
  { name: "2028", Price: 20000 },
];

const CustomGraph: React.FC = () => {
  return (
    <section className="navi-mumbai-section">
      <div className="content-container">
        <h1 className="main-title">
          Navi Mumbai - India's Best Commercial Destination of the Future
        </h1>

        <p className="description">
          Navi Mumbai is rapidly establishing itself as a prime office hub, with
          23.8 million sq ft of Grade A stock — nearly 20% of MMR's total — and
          a healthy 87% occupancy rate. Competitive rentals, strong talent
          availability, and upcoming infrastructure like the Trans Harbour Link
          and Navi Mumbai International Airport are driving sustained corporate
          demand, with another 4 million sq ft of supply expected by FY2027–28
          (Hindustan Times, 2024).
        </p>

        <div className="chart-container">
          {/* <h2>Monthly Sales</h2> */}
          <ResponsiveContainer width="100%" height={500} >
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 50, bottom: 50 }}
              barCategoryGap="0%"
              barGap={0}
            >
              <CartesianGrid strokeDasharray="0 0" className="girdmain" />
              <XAxis
                dataKey="name"
                stroke="#fff"
                axisLine={{ markerEnd: "url(#arrowhead-right)" }}
                tick={{ fill: "#fff", fontSize: 14 }}
                label={{
                  value: "Year",
                  position: "insideBottom",
                  offset: -5,
                  style: { textAnchor: "middle", fill: "#fff", fontSize: 16 },
                }}
              />
              <YAxis
                stroke="#fff"
               
                axisLine={{
                  stroke: "#fff",
                  markerStart: "url(#arrowhead-up)", // 👈 same marker
                }}
                tick={{ fill: "#fff", fontSize: 14 }}
                label={{
                  value: "Price per sq ft",
                  angle: -90, // vertical,
                  dx: -30,
                  position: "insideLeft",

                  style: { textAnchor: "middle", fill: "#fff", fontSize: 16 },
                }}
              />

              <defs>
                {/* Right arrow for X axis */}
                <marker
                  id="arrowhead-right"
                  markerWidth="10"
                  markerHeight="7"
                  refX="5"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                {/* Up arrow for Y axis */}
                <marker
                  id="arrowhead-up"
                  markerWidth="10"
                  markerHeight="7"
                  refX="5"
                  refY="5"
                  orient="0"
                >
                  <polygon points="5,0 10,10 0,10" fill="white" />
                </marker>
<linearGradient id="bar-gradient" x1="1" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="#00e0ee" />
  <stop offset="50%" stopColor="#0087a6" />
  <stop offset="100%" stopColor="#005f85" />
</linearGradient>
 {/*#00e0ee #005f85 #0087a6  */}
       
    
              </defs>

              <Tooltip />
              <Bar
                dataKey="Price"
                fill="url(#bar-gradient)"
                radius={[6, 6, 0, 0]}
                barSize={100}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default CustomGraph;
