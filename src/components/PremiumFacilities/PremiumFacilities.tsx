import { useEffect, useRef } from "react";
import "./PremiumFacilities.css";

const PremiumFacilities = () => {
      const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const image = entry.target.querySelector(".facility-image") as HTMLElement
          if (entry.isIntersecting) {
            image?.classList.add("in-view")
          } else {
            image?.classList.remove("in-view")
          }
        })
      },
      {
        threshold: 0.9, // Trigger when 50% of section is visible
        // rootMargin: "-10% 0px -10% 0px", // Add some margin for better timing
      },
    )

    // Observe all facility sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])
  return (
    <div className="premium-facilities" id="facilities">
      {/* Premium Facilities Header */}
      <div className="premium-facilities-header">
        <h2 className="premium-facilities-title">Premium Facilities</h2>
      </div>

      <div className="section-wrapper">
        {/* Parking Zone Section */}
        <div className="facility-section" ref={(el) => {sectionRefs.current[0] = el}}>
          <img
            src="/images/parking.png"
            alt="Modern parking garage"
            className="facility-image"
          />
          {/* Dark overlay */}
          <div className="overlay-parking"></div>

          {/* Content */}
          <div className="facility-content">
            <p className="facility-heading">
              <span className="heading-text">
                <span className="text-original">PARKING ZONE</span>
                <span className={`${"text-hover"} ${"text-animaated"} `} >PARKING ZONE</span>
              </span>
            </p>
            <div className="facility-divider loader"></div>
            <div className="facility-text-container">
              <p className="facility-description">
                Our multi-level parking offers secure and convenient access,
                featuring valet service and dedicated vehicle spaces.
              </p>
            </div>
            <p className="facility-tagline">
              Where Arrival Becomes an Experience
            </p>
          </div>
        </div>

        {/* Grand Arrival Lobby Section */}
        <div className="facility-section" ref={(el) => {sectionRefs.current[1] = el}}>
          <img
            src="/images/lobby.png"
            alt="Grand arrival lobby"
            className="facility-image"
          />
          {/* Dark overlay */}
          <div className="overlay-lobby"></div>

          {/* Content */}
          <div className="facility-content">
            <p className="facility-heading">
              <span className="heading-text">
                <span className="text-original-1">GRAND ARRIVAL LOBBY</span>
                <span className={`${"text-hover"} ${"text-animaated"} `}>GRAND ARRIVAL LOBBY</span>
              </span>
            </p>
            <div className="facility-divider loader"></div>
            <div className="facility-text-container">
              <p className="facility-description">
                This grand, light-filled lobby sets the tone with its soaring
                ceilings, premium finishes, and timeless architectural elegance.
              </p>
            </div>
            <p className="facility-tagline">
              An Entrance That Speaks for Itself
            </p>
          </div>
        </div>

        {/* Cafe Section */}
        <div className="facility-section" ref={(el) => {sectionRefs.current[2] = el}}>
          <img
            src="/images/cafe.png"
            alt="Curated cafeteria"
            className="facility-image"
          />
          {/* Dark overlay */}
          <div className="overlay-cafe"></div>

          {/* Content */}
          <div className="facility-content">
            <p className="facility-heading">
              <span className="heading-text">
                <span className="text-original-1">CURATED CAFETERIA</span>
                <span className={`${"text-hover"} ${"text-animaated"} `}>CURATED CAFETERIA</span>
              </span>
            </p>
            <div className="facility-divider loader"></div>
            <div className="facility-text-container">
              <p className="facility-description">
                Enjoy a curated menu in our cozy cafe lounge, perfect for dining
                and connecting.
              </p>
            </div>
            <p className="facility-tagline">
              Elevated Bites for Elevated Minds
            </p>
          </div>
        </div>

        {/* Security Section */}
        <div className="facility-section" ref={(el) => {sectionRefs.current[3] = el}}>
          <img
            src="/images/security.png"
            alt="Curated cafeteria"
            className="facility-image"
          />
          {/* Dark overlay */}
          <div className="overlay-security"></div>

          {/* Content */}
          <div className="facility-content">
            <p className="facility-heading">
             <span className="heading-text">
                <span className="text-original">24/7 SECURITY</span>
                <span className={`${"text-hover"} ${"text-animaated"} `}>24/7 SECURITY</span>
              </span>
            </p>
            <div className="facility-divider loader"></div>
            <div className="facility-text-container">
              <p className="facility-description">
                A robust security system featuring biometric access and CCTV
                guarantees safety around the clock.
              </p>
            </div>
            <p className="facility-tagline">Vigilance You Can Trust</p>
          </div>
        </div>

        {/* Lift Section */}
        <div className="facility-section" ref={(el) => {sectionRefs.current[4] = el}}>
          <img
            src="/images/maintainence.png"
            alt="Curated cafeteria"
            className="facility-image"
          />
          {/* Dark overlay */}
          <div className="overlay-lift"></div>

          {/* Content */}
          <div className="facility-content">
            <p className="facility-heading">
              <span className="heading-text">
                <span className="text-original-1">MEDICAL ACCESS LIFT</span>
                <span className={`${"text-hover"} ${"text-animaated"} `}>MEDICAL ACCESS LIFT</span>
              </span>
            </p>
            <div className="facility-divider loader"></div>
            <div className="facility-text-container">
              <p className="facility-description">
                The property includes a high-capacity stretcher lift to support
                emergency access and enhance operational safety.
              </p>
            </div>
            <p className="facility-tagline">Because Every Step Matters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFacilities;
