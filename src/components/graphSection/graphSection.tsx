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
  Line,
} from "recharts";
import useDimention from "../../hooks/useDimension";

const data = [
  { name: "2025", Price: 6000 },
  { name: "2026", Price: 12000 },
  { name: "2027", Price: 15000 },
  { name: "2028", Price: 20000 },
];

const CustomGraph: React.FC = () => {
  const dimn = useDimention();

  // Responsive settings based on device type
  const barSize = dimn === "mobile" ? 30 : dimn === "tablet" ? 40 : 80;
  const chartHeight = dimn === "mobile" ? 300 : dimn === "tablet" ? 400 : 400;
  const chartWidth =
    dimn === "mobile" ? "80%" : dimn === "tablet" ? "50%" : "50%";
  const tickFontSize = dimn === "mobile" ? 10 : 14;
  const categoryGap = dimn === "mobile" ? "15%" : "0%";

  const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#0d1b2a",
          border: "1px solid #00e0ee",
          borderRadius: "8px",
          padding: "8px",
          color: "#fff",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>Year: {label}</p>
        <p style={{ margin: 0, color: "#00e0ee" }}>
          Price: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};


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
          demand, with another 4 million sq ft of supply expected by FY2027–28.
        </p>

        <div
          className="chart-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ResponsiveContainer width={chartWidth} height={chartHeight} style={{margin:" 0 auto"}}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 50 }}
              barCategoryGap={categoryGap}
              barGap={0}
            >
              <CartesianGrid strokeDasharray="0 0" className="girdmain" />

              <XAxis
                dataKey="name"
                axisLine={{
                  stroke: "#fff",
                  markerEnd: "url(#arrowhead-right)",
                }}
                interval={0}
                tick={{ fill: "#fff", fontSize: tickFontSize }}
                label={{
                  value: "Year",
                  position: "insideBottom",
                  offset: -5,
                  style: { textAnchor: "middle", fill: "#fff", fontSize: 16 },
                }}
              />
              <defs>
                {/* Y axis arrow (up) */}
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

                {/* X axis arrow (right) */}
                <marker
                  id="arrowhead-right"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0,0 10,3.5 0,7" fill="white" />
                </marker>

                <linearGradient id="bar-gradient" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00e0ee" />
                  <stop offset="50%" stopColor="#0087a6" />
                  <stop offset="100%" stopColor="#005f85" />
                </linearGradient>
              </defs>

              <YAxis
                stroke="#fff"
                axisLine={{ stroke: "#fff", markerStart: "url(#arrowhead-up)" }}
                tick={{ fill: "#fff", fontSize: tickFontSize }}
                label={{
                  value: "Price per sq ft",
                  angle: -90,
                  dx: 0,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fill: "#fff", fontSize: 16 },
                }}
              />

              <Tooltip
                cursor={{ fill: "rgba(0, 224, 238, 0.2)" }}
             content={CustomTooltip}
              />

              <Bar
                dataKey="Price"
                fill="url(#bar-gradient)"
                radius={[6, 6, 0, 0]}
                barSize={barSize}
              />

              <Line
                type="monotone"
                dataKey="Price"
                stroke="#ffcc00"
                strokeWidth={2}
                dot={{ r: 5, fill: "#fff", stroke: "#ffcc00", strokeWidth: 2 }}
                activeDot={{
                  r: 7,
                  fill: "#ffcc00",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default CustomGraph;
