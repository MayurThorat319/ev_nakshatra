import React, { useEffect, useMemo, useRef, useState } from "react"
import "./carousel-stack.css"

export type CarouselImage = { src: string; alt: string }

type CarouselStackProps = {
  images: CarouselImage[]
  interval?: number // ms
  autoPlay?: boolean
  className?: string
}

const clampIndex = (i: number, len: number) => {
  if (len === 0) return 0
  return (i + len) % len
}

const CarouselStack: React.FC<CarouselStackProps> = ({
  images,
  interval = 3500,
  autoPlay = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const timerRef = useRef<number | null>(null)

  // Function to handle next slide with animation
  const next = () => {
    if (isTransitioning || images.length <= 1) return
    
    setDirection('next')
    setIsTransitioning(true)
    setNextIndex(clampIndex(currentIndex + 1, images.length))
    
    // After transition completes, update current index
    setTimeout(() => {
      setCurrentIndex(clampIndex(currentIndex + 1, images.length))
      setIsTransitioning(false)
    }, 800) // Match this with CSS transition duration
  }

  // Function to handle previous slide with animation
  const prev = () => {
    if (isTransitioning || images.length <= 1) return
    
    setDirection('prev')
    setIsTransitioning(true)
    setNextIndex(clampIndex(currentIndex - 1, images.length))
    
    // After transition completes, update current index
    setTimeout(() => {
      setCurrentIndex(clampIndex(currentIndex - 1, images.length))
      setIsTransitioning(false)
    }, 800) // Match this with CSS transition duration
  }

  // Auto-advance
  useEffect(() => {
    if (!autoPlay || isTransitioning || images.length <= 1) return
    timerRef.current = window.setInterval(next, interval)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [autoPlay, isTransitioning, interval, images.length])

  // Pause when tab hidden
  useEffect(() => {
    const onVis = () => {
      if (document.hidden && timerRef.current) {
        window.clearInterval(timerRef.current)
      } else if (autoPlay && !isTransitioning && images.length > 1) {
        timerRef.current = window.setInterval(next, interval)
      }
    }
    document.addEventListener("visibilitychange", onVis)
    return () => document.removeEventListener("visibilitychange", onVis)
  }, [autoPlay, isTransitioning, interval, images.length])

  const current = images[clampIndex(currentIndex, images.length)]
  const nextImg = images[clampIndex(nextIndex, images.length)]

  const dots = useMemo(() => images.map((_, i) => i), [images])

  if (!images?.length) return null

  return (
    <div
      className={`cs ${className}`}
      onMouseEnter={() => {
        if (timerRef.current) window.clearInterval(timerRef.current)
      }}
      onMouseLeave={() => {
        if (autoPlay && !isTransitioning && images.length > 1) {
          timerRef.current = window.setInterval(next, interval)
        }
      }}
    >
      {/* Next card (for transition) */}
      {isTransitioning && (
        <div className={`cs-card cs-card--transition cs-card--${direction}`}>
          <img className="cs-img" src={nextImg.src || "/placeholder.svg"} alt="" />
        </div>
      )}
      
      {/* Back card (peek) */}
      {images.length > 1 && (
        <div className="cs-card cs-card--back" aria-hidden="true">
          <img 
            className="cs-img" 
            src={images[clampIndex(currentIndex + 1, images.length)].src || "/placeholder.svg"} 
            alt="" 
          />
        </div>
      )}

      {/* Front card */}
      <div className={`cs-card cs-card--front ${isTransitioning ? 'cs-card--exiting' : ''}`}>
        <img className="cs-img" src={current.src || "/placeholder.svg"} alt={current.alt} />
      </div>

      {/* Controls */}
      {/* <button
        type="button"
        className="cs-nav cs-prev"
        aria-label="Previous image"
        onClick={prev}
        disabled={isTransitioning}
      >
        ‹
      </button>
      <button
        type="button"
        className="cs-nav cs-next"
        aria-label="Next image"
        onClick={next}
        disabled={isTransitioning}
      >
        ›
      </button> */}

      {/* Dots */}
      {/* <div className="cs-dots" role="tablist" aria-label="Carousel indicators">
        {dots.map((d) => (
          <button
            key={d}
            role="tab"
            aria-selected={d === currentIndex}
            aria-label={`Go to slide ${d + 1}`}
            className={`cs-dot ${d === currentIndex ? "is-active" : ""}`}
            onClick={() => {
              if (d !== currentIndex && !isTransitioning) {
                setDirection(d > currentIndex ? 'next' : 'prev')
                setIsTransitioning(true)
                setNextIndex(d)
                
                setTimeout(() => {
                  setCurrentIndex(d)
                  setIsTransitioning(false)
                }, 800)
              }
            }}
            disabled={isTransitioning}
          />
        ))}
      </div> */}
    </div>
  )
}

export default CarouselStack