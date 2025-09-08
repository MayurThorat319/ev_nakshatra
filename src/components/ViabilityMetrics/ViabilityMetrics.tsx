import { FaHandHoldingUsd, FaChartLine, FaEye } from "react-icons/fa";
import "./ViabilityMetrics.css";
import { ImLocation2 } from "react-icons/im";
import { GiProfit } from "react-icons/gi";
import { SiSyncthing } from "react-icons/si";

const ViabilityMetrics = () => {
  const metrics = [
    {
      id: "01",
      icon: <ImLocation2 color="#fff" />,
      title: "LOCATION",
      subtitle: "RATING",
      description: "Positioned in a high-growth commercial zone.",
    },
    {
      id: "02",
      icon: <FaHandHoldingUsd color="#fff" />,
      title: "ROI",
      subtitle: "RATING",
      description: "Watch your investment work harder for you.",
    },
    {
      id: "03",
      icon: <GiProfit color="#fff" />,
      title: "RENTAL YIELD",
      subtitle: "RATING",
      description: "Earn more, effortlessly, with premium yields.",
    },
    {
      id: "04",
      icon: <FaChartLine color="#fff" />,
      title: "DEMAND",
      subtitle: "RATING",
      description: "Spaces here don’t stay empty for long.",
    },
    {
      id: "05",
      icon: <FaEye color="#fff" />,
      title: "VISIBILITY",
      subtitle: "RATING",
      description: "Be seen where it matters most.",
    },
    {
      id: "06",
      icon: <SiSyncthing color="#fff" />,
      title: "CONNECTION",
      subtitle: "RATING",
      description: "Plugged into everything  roads, rails, and results.",
    },
  ];

  return (
    <section className="viability-metrics" id="viability">
      <div className="metrics-container">
        <h2 className="metrics-title">Viability Metrics</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={metric.id} className="metric-card">
              <div className="metric-wrapper">
                <div className="metric-icon">{metric.icon}</div>
              </div>
              <div className="metric-content">
                <h3 className="metric-title">{metric.title}</h3>
                {/* <p className="metric-subtitle">{metric.subtitle}</p> */}
                <p className="metric-description">{metric.description}</p>
              </div>
              <div className="metric-number">{metric.id}</div>
              {/* {index < metrics.length - 1 && <div className="metric-arrow">→</div>} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViabilityMetrics;
