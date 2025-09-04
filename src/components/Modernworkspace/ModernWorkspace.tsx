import React from "react"

import "./ModernWorkspace.css"
import type { CarouselImage } from "../CarouselStack/CarouselStack"
import CarouselStack from "../CarouselStack/CarouselStack"

const images: CarouselImage[] = [
  {
    src: "/images/Infinity_pool.jpeg",  // file in public/images/rooftop.png
    alt: "Rooftop lounge at sunset with city views and fireworks in the sky",
  },
  {
    src: "/images/jogging_track.jpeg",   // file in public/images/office.png
    alt: "Open modern office with large windows and desks",
  },
  {
    src: "/images/Kids_play_area.jpeg",  // file in public/images/skyline.png
    alt: "Evening skyline with illuminated towers and glass facades",
  },
]


const ModernWorkspaceSection: React.FC = () => {
  return (
    <section className="mw" aria-labelledby="mw-title">
      <div className="mw__inner">
        <div className="mw__copy">
          <h2 id="mw-title" className="mw__title">
            The <span style={{color: 
              '#1E576C'
            }}>Modern</span>
            <br />
            Workspace
          </h2>

          <p className="mw__text">
            Big ideas need bold spaces. At NAKSHATRA, every square foot is
            crafted for visionaries, leaders, and creators ready to turn
            ambition into action. Elegant layouts, curated amenities, and
            flexible design — all in one place. Whether you’re scaling up or
            settling in, this is
            {" "}
            <br />
            <a href="#" className="">
              <span style={{color: 
              '#1E576C'
            }}>where your next chapter begins.</span>
            </a>
          </p>
        </div>

        <div className="mw__media">
          <CarouselStack images={images} interval={3500} autoPlay />
        </div>
      </div>
    </section>
  )
}

export default ModernWorkspaceSection