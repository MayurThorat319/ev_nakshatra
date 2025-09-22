import type React from "react";
import "./demography.css";
import { IoHomeOutline } from "react-icons/io5";
import type { ReactNode } from "react";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";

interface DemographicItem {
  icon: ReactNode;
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
      icon: <IoHomeOutline />,
      title: "HNI Population",
      description:
        "Vashi Boasts of High End and High Value Homes which translates to more High Net Worth Homebuyers Moving into Vashi, and Upcoming Projects and Further Migration of High Net Worth Individuals in to Vashi would make it one of the single Largest Aggregation of High Net Worth Individuals in One locality.",
      presentValue: "8000+",
      futureValue: "20000+",
      presentProgress: 40,
      futureProgress: 100,
    },
    {
      icon: <BsBuildings />,
      title: "UHNI Population",
      description: "",
      presentValue: "800+",
      futureValue: "4000+",
      presentProgress: 20,
      futureProgress: 100,
    },
    {
      icon: <MdOutlineMedicalServices />,
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
          Vashi’s high-end, high-value homes are attracting a growing number of
          high-net-worth homebuyers. With new luxury projects and continued
          migration, it's set to become one of the largest concentrations of
          HNIs in a single locality.
        </p>

        <div className="demographics-stats">
          {demographicData.map((item, index) => (
            <div key={index} className="demographic-item">
              <div className="icon-text-main">
                <div className="demographic-icon">
                  <span className="icon">{item.icon}</span>
                </div>

                <div className="demographic-content">
                  <h3 className="demographic-title-item">{item.title}</h3>
                </div>
              </div>
              <div className="main-demographic-values">
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
              </div>

              {/* <div className="value-labels">
                  <div className="label-group">
                    <span className="label present-label">Present</span>
                    <span className="label future-label">Near Future</span>
                  </div>
                </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demographics;
