import { FaHandHoldingUsd, FaChartLine, FaEye } from "react-icons/fa";
import "./ViabilityMetrics.css";
import { ImLocation2 } from "react-icons/im";
import { GiProfit } from "react-icons/gi";
import { SiSyncthing } from "react-icons/si";
import { useState, useRef } from "react";

const ViabilityMetrics = () => {
  const metrics = [
    { id: "01", icon: <ImLocation2 color="#fff" />, title: "LOCATION", subtitle: "RATING", description: "Positioned in a high-growth commercial zone." },
    { id: "02", icon: <FaHandHoldingUsd color="#fff" />, title: "ROI", subtitle: "RATING", description: "Watch your investment work harder for you." },
    { id: "03", icon: <GiProfit color="#fff" />, title: "RENTAL YIELD", subtitle: "RATING", description: "Earn more, effortlessly, with premium yields." },
    { id: "04", icon: <FaChartLine color="#fff" />, title: "DEMAND", subtitle: "RATING", description: "Spaces here don’t stay empty for long." },
    { id: "05", icon: <FaEye color="#fff" />, title: "VISIBILITY", subtitle: "RATING", description: "Be seen where it matters most." },
    { id: "06", icon: <SiSyncthing color="#fff" />, title: "CONNECTION", subtitle: "RATING", description: "Plugged into everything roads, rails, and results." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartY = useRef(0);

  // Mouse wheel (desktop)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // stop page scroll
    e.stopPropagation();

    if (e.deltaY > 0) {
      setCurrentIndex((prev) => (prev + 1) % metrics.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + metrics.length) % metrics.length);
    }
  };

  // Swipe (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        setCurrentIndex((prev) => (prev + 1) % metrics.length); // swipe up → next
      } else {
        setCurrentIndex((prev) => (prev - 1 + metrics.length) % metrics.length); // swipe down → prev
      }
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + metrics.length) % metrics.length;
      cards.push({
        ...metrics[index],
        displayIndex: i,
        position: i === -1 ? "top" : i === 0 ? "center" : "bottom",
      });
    }
    return cards;
  };

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
      <div className="section-overlay" />

      <div className="cards-container">
        <h2 className="section-title">Viability Metrics</h2>

        <div
          className="carousel-wrapper"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleCards().map((card) => {
            const isCenter = card.position === "center";
            return (
              <div key={`${card.id}-${card.displayIndex}`} className={`metric-card ${card.position}`}>
                <div className="card-content">
                  <div className={`card-icon ${isCenter ? "center" : "small"}`}>{card.icon}</div>
                  <div className="card-text">
                    <h3 className={`card-title ${isCenter ? "center" : "small"}`}>{card.title}</h3>
                    <p className={`card-description ${isCenter ? "center" : "small"}`}>{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ViabilityMetrics;
