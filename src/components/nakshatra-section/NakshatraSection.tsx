// NakshatraSection.tsx
import type React from "react"
import { useState, useEffect } from "react"
import "./nakshatra-section.css"

const NakshatraSection: React.FC = () => {
  const [titleAnimation, setTitleAnimation] = useState("")
  const [logoAnimation, setLogoAnimation] = useState("")
  const [headerAnimation, setHeaderAnimation] = useState("")
  const [imageWrapAnimation, setImageWrapAnimation] = useState("")
  const [imageSrc, setImageSrc] = useState("/images/Mains.png")

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual"
      window.scrollTo(0, 0)

      // initial check
      if (window.innerWidth <= 615) {
        setImageSrc("/images/Capitol_mobile.png")
      }

      // listener for resizing
      const handleResize = () => {
        if (window.innerWidth <= 615) {
          setImageSrc("/images/Capitol_mobile.png")
        } else {
          setImageSrc("/images/Mains.png")
        }
      }

      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
  // Title slide up
  const timer1 = setTimeout(() => {
    setTitleAnimation("nakshatra__title--slide-up")
  //   const timer3 = setTimeout(() => {
  // setTitleAnimation("nakshatra__title--slide-down")
  // }, 2000)

  }, 2000)

  //   const timer3 = setTimeout(() => {
  // setTitleAnimation("nakshatra__title--slide-down")
  // }, 2000)


  // Slide down title + fade logo + expand image together
  const timer2 = setTimeout(() => {
    // setTitleAnimation("nakshatra__title--slide-down")
    setLogoAnimation("nakshatra__brand-logo--fade-out")
    setHeaderAnimation("nakshatra__header--collapse")
    setImageWrapAnimation("nakshatra__image-wrap--expand")
  }, 5000) // all at same moment


  return () => {
    clearTimeout(timer1)
    clearTimeout(timer2)
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
        <h1 className={`nakshatra__title ${titleAnimation}`}>
  CAPITOL <span className="inria">9</span>
</h1>

      </div>

      <div className={`nakshatra__image-wrap ${imageWrapAnimation}`}>
        <img
          src={imageSrc}
          alt="Modern high-rise towers"
          className="nakshatra__image"
          loading="lazy"
        />
    
        <div className="nakshatra__label nakshatra__label--nakshatra">Capitol 9</div>
        <div className="nakshatra__label nakshatra__label--elite">Elite</div>
        <div className="nakshatra__label nakshatra__label--edge">Edge</div>
        <div className="nakshatra__label nakshatra__label--epicenter">Epicenter</div>
      </div>
    </section>
  )
}

export default NakshatraSection
