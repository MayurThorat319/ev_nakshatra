// NakshatraSection.tsx
import React from "react"
import "./nakshatra-section.css"

const NakshatraSection: React.FC = () => {
  return (
    <section className="nakshatra">
         <img 
          src="/images/logo.png" 
          alt="EVM Homes Logo" 
          className="nakshatra__brand-logo" 
        />
      <div className="nakshatra__header">
       
        <h1 className="nakshatra__title">NAKSHATRA</h1>
      </div>

      <div className="nakshatra__image-wrap">
        <img
          src="/images/nakshatra.png"
          alt="Modern high-rise towers of the Nakshatra project"
          className="nakshatra__image"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default NakshatraSection