"use client"

import { useState, useEffect } from "react"
import styles from "./NavBar.module.css"
import { Home, Briefcase, BarChart3, Building2, MessageCircle, PhoneCall, Menu, X } from "lucide-react"

function NakshatraNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

// useEffect(() => {
//   const handleScroll = () => {
//     const nakshatraSection = document.querySelector(".nakshatra") as HTMLElement | null
//     if (nakshatraSection) {
//       const sectionHeight = nakshatraSection.offsetHeight
//       const scrollPosition = window.scrollY
//       const threshold = sectionHeight * 0.5 // 50% of the section height

//       setIsVisible(scrollPosition > threshold)
//     }
//   }

//   window.addEventListener("scroll", handleScroll)
//   return () => window.removeEventListener("scroll", handleScroll)
// }, [])

useEffect(()=>{
  const handleScroll=()=>{
    setIsVisible(window.scrollY>50);

  };
  window.addEventListener("scroll",handleScroll);
  return ()=>window.removeEventListener("scroll", handleScroll)
},[]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className={`${styles.NavMain} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.NavContainer}>
          <div className={styles.leftSide}>
            <img src="/images/Capitol_9.png" alt="10 Marina Bay Vashi Logo" className={styles.Logo} />
          </div>

          <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>

          <div className={`${styles.centerSide} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
            <ul className={styles.NavLinks}>
              <li>
                <a href="#" className={`${styles.navLink} ${styles.cyberLink}`} onClick={closeMobileMenu}>
                  <Home className={styles.navIcon} />
                  <span className={styles.navText}>Home</span>
                </a>
                <div className={styles.cyberTooltip}>Navigate to homepage</div>
              </li>

              <li>
                <a href="#about" className={`${styles.navLink} ${styles.cyberLink}`} onClick={closeMobileMenu}>
                  <Briefcase className={styles.navIcon} />
                  <span className={styles.navText}>About</span>
                </a>
                <div className={styles.cyberTooltip}>Know more about us</div>
              </li>

              <li>
                <a href="#viability" className={`${styles.navLink} ${styles.cyberLink}`} onClick={closeMobileMenu}>
                  <BarChart3 className={styles.navIcon} />
                  <span className={styles.navText}>Viability</span>
                </a>
                <div className={styles.cyberTooltip}>Check our viability metrics</div>
              </li>

              <li>
                <a href="#facilities" className={`${styles.navLink} ${styles.cyberLink}`} onClick={closeMobileMenu}>
                  <Building2 className={styles.navIcon} />
                  <span className={styles.navText}>Facilities</span>
                </a>
                <div className={styles.cyberTooltip}>Explore facilities provided</div>
              </li>

              <li>
                <a href="#feedback" className={`${styles.navLink} ${styles.cyberLink}`} onClick={closeMobileMenu}>
                  <MessageCircle className={styles.navIcon} />
                  <span className={styles.navText}>Feedback</span>
                </a>
                <div className={styles.cyberTooltip}>Give us your feedback</div>
              </li>

              <li>
                <a href="#contact" className={`${styles.navLink} ${styles.cyberLink}`} onClick={closeMobileMenu}>
                  <PhoneCall className={styles.navIcon} />
                  <span className={styles.navText}>Contact Us</span>
                </a>
                <div className={styles.cyberTooltip}>Reach out to us</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NakshatraNavbar
