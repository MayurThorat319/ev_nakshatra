import { FaHandHoldingUsd, FaChartLine, FaEye } from "react-icons/fa"
import "./ViabilityMetrics.css"
import { ImLocation2 } from "react-icons/im"
import { GiProfit } from "react-icons/gi"
import { SiSyncthing } from "react-icons/si"

const ViabilityMetrics = () => {
  const metrics = [
    {
      id: "01",
      icon: <ImLocation2 />,
      title: "LOCATION",
      subtitle: "RATING",
      description: "In the spotlight of a fast-growing commercial corridor.",
    },
    {
      id: "02",
      icon: <FaHandHoldingUsd />,
      title: "ROI",
      subtitle: "RATING",
      description: "In the spotlight of a fast-growing commercial corridor.",
    },
    {
      id: "03",
      icon: <GiProfit />,
      title: "RENTAL YIELD",
      subtitle: "RATING",
      description: "In the spotlight of a fast-growing commercial corridor.",
    },
    {
      id: "04",
      icon: <FaChartLine />,
      title: "DEMAND",
      subtitle: "RATING",
      description: "In the spotlight of a fast-growing commercial corridor.",
    },
    {
      id: "05",
      icon: <FaEye />,
      title: "VISIBILITY",
      subtitle: "RATING",
      description: "In the spotlight of a fast-growing commercial corridor.",
    },
    {
      id: "06",
      icon: <SiSyncthing />,
      title: "CONNECTION",
      subtitle: "RATING",
      description: "In the spotlight of a fast-growing commercial corridor.",
    },
  ]

  return (
    <section className="viability-metrics">
      <div className="metrics-container">
        <h2 className="metrics-title">Viability Metrics</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={metric.id} className="metric-card">
              <div className="metric-icon">{metric.icon}</div>
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
  )
}

export default ViabilityMetrics
