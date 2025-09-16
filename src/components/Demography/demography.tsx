import type React from "react";
import "./demography.css";

interface DemographicItem {
  icon: string;
  title: string;
  description: string;
  presentValue: string;
  futureValue: string;
  presentProgress: number;
  futureProgress: number;
}

const Demographics: React.FC = () => {
  const demographicData: DemographicItem[] = [
    {
      icon: "🏠",
      title: "HNI Population",
      description:
        "Vashi Boasts of High End and High Value Homes which translates to more High Net Worth Homebuyers Moving into Vashi, and Upcoming Projects and Further Migration of High Net Worth Individuals in to Vashi would make it one of the single Largest Aggregation of High Net Worth Individuals in One locality.",
      presentValue: "8000+",
      futureValue: "20000+",
      presentProgress: 40,
      futureProgress: 100,
    },
    {
      icon: "🏢",
      title: "UHNI Population",
      description: "",
      presentValue: "800+",
      futureValue: "4000+",
      presentProgress: 20,
      futureProgress: 100,
    },
    {
      icon: "👨‍⚕️",
      title: "DOCTORS",
      description: "",
      presentValue: "2500+",
      futureValue: "8000+",
      presentProgress: 31,
      futureProgress: 100,
    },
  ];

  return (
    <section className="demographics-section">
      <div className="demographics-container">
        <h2 className="demographics-title">DEMOGRAPHY</h2>
        <p className="demographics-subtitle">
          Vashi Boasts of High End and High Value Homes which translates to more
          High Net Worth Homebuyers Moving into Vashi, and Upcoming Projects and
          Further Migration of High Net Worth Individuals in to Vashi would make
          it one of the single Largest Aggregation of High Net Worth Individuals
          in One locality.
        </p>

        <div className="demographics-stats">
          {demographicData.map((item, index) => (
            <div key={index} className="demographic-item">
              <div className="demographic-icon">
                <span className="icon">{item.icon}</span>
              </div>

              <div className="demographic-content">
                <h3 className="demographic-title-item">{item.title}</h3>

                <div className="demographic-values">
                  <div className="value-badges">
                    <span className="badge present">Present</span>
                    <span className="present-value">{item.presentValue}</span>
                  </div>

                  <div className="values-display">
                    <span className="badge future">Near Future</span>

                    <span className="future-value">{item.futureValue}</span>
                  </div>
                </div>

                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill present-progress"
                      style={{ width: `${item.presentProgress}%` }}
                    ></div>
                    <div
                      className="progress-fill future-progress"
                      style={{
                        width: `${item.futureProgress - item.presentProgress}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* <div className="value-labels">
                  <div className="label-group">
                    <span className="label present-label">Present</span>
                    <span className="label future-label">Near Future</span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demographics;
