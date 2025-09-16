import { FaHandHoldingUsd, FaChartLine, FaEye } from "react-icons/fa";
import "./ViabilityMetrics.css";
import { ImLocation2 } from "react-icons/im";
import { GiProfit } from "react-icons/gi";
import { SiSyncthing } from "react-icons/si";
import { useState, useRef, useEffect } from "react";

const ViabilityMetrics = () => {
  const metrics = [
    {
      id: "01",
      icon: <ImLocation2 color="#fff" />,
      title: "LOCATION",
      subtitle: "RATING",
      description: "Prime commercial hotspot",
    },
    {
      id: "02",
      icon: <FaHandHoldingUsd color="#fff" />,
      title: "ROI",
      subtitle: "RATING",
      description: "Power up your investment.",
    },
    {
      id: "03",
      icon: <GiProfit color="#fff" />,
      title: "RENTAL YIELD",
      subtitle: "RATING",
      description: "Premium yields. Effortless gains.",
    },
    {
      id: "04",
      icon: <FaChartLine color="#fff" />,
      title: "DEMAND",
      subtitle: "RATING",
      description: "High-occupancy zone.",
    },
    {
      id: "05",
      icon: <FaEye color="#fff" />,
      title: "VISIBILITY",
      subtitle: "RATING",
      description: "Right place. Right exposure.",
    },
    {
      id: "06",
      icon: <SiSyncthing color="#fff" />,
      title: "CONNECTION",
      subtitle: "RATING",
      description: "Tied to transit and triumph.",
    },
  ];

  const [] = useState(0);

   const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);


  return (
  <section
      ref={sectionRef}
      className={`viability-metrics fade-section ${isVisible ? "visible" : ""}`}
      id="viability"
    >
      <div className="metrics-container">
        <h2 className="metrics-title">Viability Metrics</h2>
        <div className="metrics-grid">
          {metrics.map((metric) => (
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

      <div className="location-section">
        <h2 className="section-title">Viability Metrics</h2>
        <div className="location-main">
          {metrics.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-icon-circle">
                <div className="location-icon">{location.icon}</div>
              </div>
             <div className="loction">
                <div className="location-text">
                  <h3 className="location-title">{location.title}</h3>
                  <p className="location-description">{location.description}</p>
                </div>
             </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViabilityMetrics;
