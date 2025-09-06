import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NakshatraSection from './components/NakshatraSection'
import ModernWorkspace from './components/Modernworkspace/ModernWorkspace'
import PremiumFacilities from './components/PremiumFacilities/PremiumFacilities'
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection'
import ViabilityMetrics from './components/ViabilityMetrics/ViabilityMetrics'
import ContactSection from './components/ContactSection/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <NakshatraSection />
       <ModernWorkspace />
       <ViabilityMetrics />
         <PremiumFacilities />
         <TestimonialsSection />
         <ContactSection />
          <footer
          className="animate-fade-up"
          id="contact"
          style={{
            backgroundColor: "#273B6791",
            color: "#ffffff",
            padding: "60px 20px 40px",
            marginTop: "60px",
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
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                EV HOMES
              </div>
             
            </div>

            {/* Main footer content */}
            <div
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
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#003261")
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
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#003261")
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
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color = "#003261")
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
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#003261")
                    }
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
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#003261")
                    }
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
                  <p>
                    212 A wing Vrindavan,
                    <br />
                    Chambers Above Axis Bank,
                    <br />
                    sector-17, Vashi Navi
                    <br />
                    Mumbai
                  </p>
                </div>
              </div>

              {/* Get the app Section */}
              <div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Get the app
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#333",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.evhomes.ev_homes&hl=en",
                        "_blank"
                      );
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#444")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#333")
                    }
                  >
                    <span style={{ marginRight: "8px", fontSize: "1.2rem" }}>
                      ▶️
                    </span>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "#aaa" }}>
                        Get it on
                      </div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        Google Play
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default App
