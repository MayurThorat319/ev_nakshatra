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
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<number | null>(null)

  const next = () => setIndex((i) => clampIndex(i + 1, images.length))
  const prev = () => setIndex((i) => clampIndex(i - 1, images.length))

  // Auto-advance
  useEffect(() => {
    if (!autoPlay || paused || images.length <= 1) return
    timerRef.current = window.setInterval(next, interval)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [autoPlay, paused, interval, images.length])

  // Pause when tab hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden)
    document.addEventListener("visibilitychange", onVis)
    return () => document.removeEventListener("visibilitychange", onVis)
  }, [])

  const current = images[clampIndex(index, images.length)]
  const back = images[clampIndex(index + 1, images.length)]

  const dots = useMemo(() => images.map((_, i) => i), [images])

  if (!images?.length) return null

  return (
    <div
      className={`cs ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Back card (peek) */}
      {back && (
        <div className="cs-card cs-card--back" aria-hidden="true">
          <img className="cs-img" src={back.src || "/placeholder.svg"} alt="" />
        </div>
      )}

      {/* Front card */}
      <div className="cs-card cs-card--front">
        <img className="cs-img" src={current.src || "/placeholder.svg"} alt={current.alt} />
      </div>

      {/* Controls */}
      {/* <button
        type="button"
        className="cs-nav cs-prev"
        aria-label="Previous image"
        onClick={prev}
      >
        ‹
      </button>
      <button
        type="button"
        className="cs-nav cs-next"
        aria-label="Next image"
        onClick={next}
      >
        ›
      </button> */}

      {/* Dots */}
      <div className="cs-dots" role="tablist" aria-label="Carousel indicators">
        {dots.map((d) => (
          <button
            key={d}
            role="tab"
            aria-selected={d === index}
            aria-label={`Go to slide ${d + 1}`}
            className={`cs-dot ${d === index ? "is-active" : ""}`}
            onClick={() => setIndex(d)}
          />
        ))}
      </div>
    </div>
  )
}

export default CarouselStack