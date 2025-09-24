import { useEffect, useState } from "react";
import "./App.css";
import NakshatraSection from "./components/nakshatra-section/NakshatraSection";
import ModernWorkspace from "./components/Modernworkspace/ModernWorkspace";
import PremiumFacilities from "./components/PremiumFacilities/PremiumFacilities";
import { TestimonialsSection } from "./components/TestimonialsSection/TestimonialsSection";
import ViabilityMetrics from "./components/ViabilityMetrics/ViabilityMetrics";
import NakshatraNavbar from "./components/NavBar/NavBar";

import Demographics from "./components/Demography/demography";
import EventSignup from "./components/EventSignup/EventSignup";

import CustomGraph from "./components/graphSection/graphSection";

function App() {


  const [] = useState(0);
  const [showLive, setShowLive] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight * 0.2) {
      setShowLive(true);
    } else {
      setShowLive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="main-bg">
      <NakshatraNavbar />
       <div className="parallaxcontainer">
        <div className={`parallaxItem upcoming ${showLive ? "moveUp" : ""}`}>
          <NakshatraSection />
        </div>
        <div className={`parallaxItem liveproject ${showLive ? "showLive" : ""}`}>
          <ModernWorkspace />
        </div>

      </div>
             <ViabilityMetrics />
              <CustomGraph />
      {/* <NakshatraSection />
      <div className="parallaxcontainer">
        <div className={`parallaxItem upcoming ${showLive ? "moveUp" : ""}`}>
          <ModernWorkspace />
        </div>
        <div className={`parallaxItem liveproject ${showLive ? "showLive" : ""}`}>
          <ViabilityMetrics />
        </div>

      </div> */}

      <PremiumFacilities />
     
      {/* <ContactSection /> */}
       <Demographics />
        <TestimonialsSection />
       <EventSignup />
      
      <footer
        className="animate-fade-up"
        style={{
          // backgroundColor: "#273B6791",
          backgroundColor: "#01040ced",
          color: "#ffffff",
          padding: "60px 20px 40px",
          // marginTop: "60px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Header with logo and social icons */}
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div style={{ textAlign: "start" }}>
              <img
                src="images/ev_logos.png"
                alt="EV Homes Logo"
               width={151}
               height={35}
              />
            </div>
          </div>

          {/* Main footer content */}
          <div
          className="footer-grid-content"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            {/* Subscribe Section */}

            {/* Discover Section */}

            {/* Quick Links Section */}
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#ffffff",
                  fontFamily: "Jura, sans-serif",
                }}
              >
                Quick Links
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                <li
                  key="About"
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href="#about"
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.3s ease",
                      fontFamily: "Jura, sans-serif",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#f8dc87")
                    }
                    onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    About
                  </a>
                </li>
                <li
                  key="Contact"
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href="#contact"
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.3s ease",
                      fontFamily: "Jura, sans-serif",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#f8dc87")
                    }
                    onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    Contact
                  </a>
                </li>
                {["FAQ's", "Privacy Policy", "Terms & Conditions"].map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        marginBottom: "8px",
                      }}
                    >
                      <a
                        style={{
                          color: "#ccc",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          transition: "color 0.3s ease",
                          fontFamily: "Jura, sans-serif",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = "#f8dc87")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.color = "#ccc")
                        }
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#ffffff",
                  fontFamily: "Jura, sans-serif",
                }}
              >
                Contact Us
              </h3>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#ccc",
                  lineHeight: "1.6",
                }}
              >
                <a
                  href="https://evgroup.in/profile.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "block",
                    marginBottom: "8px",
                    transition: "color 0.3s ease",
                    fontFamily: "Jura, sans-serif",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#f8dc87")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                  www.evgroup.in
                </a>

                <a
                  href="https://wa.me/919867456777"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "block",
                    marginBottom: "8px",
                    transition: "color 0.3s ease",
                    fontFamily: "Jura, sans-serif",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#f8dc87")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                  +91 82916 68777
                </a>
              </div>
            </div>

            {/* Our Address Section */}
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#ffffff",
                  fontFamily: "Jura, sans-serif",
                }}
              >
                Our Address
              </h3>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#ccc",
                  lineHeight: "1.6",
                }}
              >
                <a href="https://www.google.com/maps/place/E.v+Homes/@19.069423,72.9989037,136m/data=!3m1!1e3!4m6!3m5!1s0x3be7c1495dbe19e9:0xefa01ea4da6478f2!8m2!3d19.0691641!4d72.9995863!16s%2Fg%2F1pp2txcmq?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "block",
                    marginBottom: "8px",
                    transition: "color 0.3s ease",
                    fontFamily: "Jura, sans-serif",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#f8dc87")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                    
                   <p>
                  212 A wing Vrindavan,
                  <br />
                  Chambers Above Axis Bank,
                  <br />
                  sector-17, Vashi Navi
                  <br />
                  Mumbai
                </p>
                </a>
               
              </div>
            </div>

            {/* Get the app Section */}
            {/* Get the app Section */}
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "white",
                  fontFamily: "Jura, sans-serif",
                }}
              >
                Get the app
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Google Play Button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(90deg, #2c2c2c, #1e1e1e)",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    maxWidth: "220px", // keeps button compact
                    width: "80%", // responsive width
                    margin: "0 auto", // center on mobile
                  }}
                  onClick={() => {
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.evhomes.ev_homes&hl=en",
                      "_blank"
                    );
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
                  }}
                >
                  {/* Google Play Badge */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "180px", // keeps it proportional
                    }}
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
