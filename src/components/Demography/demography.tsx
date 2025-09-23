"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import "./demography.css"
import { IoHomeOutline } from "react-icons/io5"
import { BsBuildings } from "react-icons/bs"
import { MdOutlineMedicalServices } from "react-icons/md"
import type { ReactNode } from "react"

interface DemographicItem {
  icon: ReactNode
  title: string
  description: string
  presentValue: string
  futureValue: string
  presentProgress: number
  futureProgress: number
}

const Demographics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "-50px 0px", // Start animation slightly after section enters viewport
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`demographics-section ${isVisible ? "animate-in" : ""}`}>
      <div key={isVisible ? "visible" : "hidden"} className="demographics-container">
        <h2 className={`demographics-title ${isVisible ? "title-animate" : ""}`}>DEMOGRAPHY</h2>
        <p className={`demographics-subtitle ${isVisible ? "subtitle-animate" : ""}`}>
          Vashi's high-end, high-value homes are attracting a growing number of high-net-worth homebuyers. With new
          luxury projects and continued migration, it's set to become one of the largest concentrations of HNIs in a
          single locality.
        </p>

        <div className="demographics-stats">
          {demographicData.map((item, index) => (
            <div
              key={`${index}-${isVisible}`}
              className={`demographic-item ${isVisible ? "item-animate" : ""}`}
              style={{
                animationDelay: isVisible ? `${index * 0.3}s` : "0s",
              }}
            >
              <div className="icon-text-main">
                <div className={`demographic-icon ${isVisible ? "icon-animate" : ""}`}>
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
                    <span className={`present-value ${isVisible ? "value-animate" : ""}`}>{item.presentValue}</span>
                  </div>

                  <div className="values-display">
                    <span className="badge future">Near Future</span>
                    <span className={`future-value ${isVisible ? "value-animate" : ""}`}>{item.futureValue}</span>
                  </div>
                </div>

                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className={`progress-fill present-progress ${isVisible ? "progress-animate" : ""}`}
                      style={{
                        width: isVisible ? `${item.presentProgress}%` : "0%",
                        transitionDelay: `${index * 0.3 + 0.5}s`,
                      }}
                    ></div>
                    <div
                      className={`progress-fill future-progress ${isVisible ? "progress-animate" : ""}`}
                      style={{
                        width: isVisible ? `${item.futureProgress - item.presentProgress}%` : "0%",
                        transitionDelay: `${index * 0.3 + 0.7}s`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Demographics
