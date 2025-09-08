// NakshatraSection.tsx
import type React from "react"
import { useState, useEffect } from "react"
import "./nakshatra-section.css"

const NakshatraSection: React.FC = () => {
  const [titleAnimation, setTitleAnimation] = useState("")
  const [logoAnimation, setLogoAnimation] = useState("")
  const [headerAnimation, setHeaderAnimation] = useState("")
  const [imageWrapAnimation, setImageWrapAnimation] = useState("")

  useEffect(() => {
    // After 1 second, add the slide up animation class to the title
    const timer1 = setTimeout(() => {
      setTitleAnimation("nakshatra__title--slide-up")
    }, 1000)
    
    // After 4 seconds, add the slide down animation to the title
    // and fade out the logo
    const timer2 = setTimeout(() => {
      setTitleAnimation("nakshatra__title--slide-down")
      setLogoAnimation("nakshatra__brand-logo--fade-out")
    }, 4000)
    
    // After 5 seconds, collapse the header and expand the image
    const timer3 = setTimeout(() => {
      setHeaderAnimation("nakshatra__header--collapse")
      setImageWrapAnimation("nakshatra__image-wrap--expand")
    }, 5000)

     return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <section className="nakshatra">
      <div className={`nakshatra__header ${headerAnimation}`}>
        <img 
          src="/images/logo.png" 
          alt="EVM Homes Logo" 
          className={`nakshatra__brand-logo ${logoAnimation}`} 
        />
        <h1 className={`nakshatra__title ${titleAnimation}`}>NAKSHATRA</h1>
      </div>

      <div className={`nakshatra__image-wrap ${imageWrapAnimation}`}>
        <img
          src="images/nakshatra.jpeg"
          alt="Modern high-rise towers of the Nakshatra project"
          className="nakshatra__image"
          loading="lazy"
        />
        <div className="nakshatra__labels">
          <div className="nakshatra__label nakshatra__label--nakshatra">Nakshatra</div>
          <div className="nakshatra__label nakshatra__label--elite">Elite</div>
          <div className="nakshatra__label nakshatra__label--edge">Edge</div>
          <div className="nakshatra__label nakshatra__label--epicenter">Epicenter</div>
        </div>
      </div>
    </section>
  )
}

export default NakshatraSection