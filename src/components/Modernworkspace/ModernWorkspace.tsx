import React from "react";

import "./ModernWorkspace.css";
import type { CarouselImage } from "../CarouselStack/CarouselStack";
import CarouselStack from "../CarouselStack/CarouselStack";

const images: CarouselImage[] = [
  {
    src: "/images/modern_1.png", // file in public/images/rooftop.png
    alt: "Rooftop lounge at sunset with city views and fireworks in the sky",
  },
  {
    src: "/images/modern_2.png", // file in public/images/office.png
    alt: "Open modern office with large windows and desks",
  },
  {
    src: "/images/modern_4.jpeg",  // file in public/images/skyline.png
    alt: "Evening skyline with illuminated towers and glass facades",
  },
];

const ModernWorkspaceSection: React.FC = () => {
  return (
    <section className="mw" aria-labelledby="mw-title" id="about">
      <div className="mw__inner">
        <div className="mw__copy">
          <h2 id="mw-title" className="mw__title">
           <p>The<span style={{color: 
              '#1E576C'
            }}> Modern </span>Workspace </p>
            {/* <br /> */}
            
          </h2>

          <p className="mw__text">
            Big ideas need bold spaces. At <span style={{color: 
              '#1E576C'
            }}>CAPITOL 9</span>, every square foot is
            crafted for visionaries, leaders, and creators ready to turn
            ambition into action. Elegant layouts, curated amenities, and
            flexible design — all in one place. Whether you’re scaling up or
            settling in, this is <br />
            <a href="#" className="">
              <span style={{ color: "#1E576C" }}>
                where your next chapter begins.
              </span>
            </a>
          </p>

          <p className="mw__text_mob">
            Great ideas deserve striking environments. At CAPITOL 9, every inch
            is thoughtfully designed. Whether you're scaling up or settling in,
            this is <br />
              <span style={{ color: "#1E576C" }}>
                where your next chapter begins.
              </span>
            
          </p>
        </div>

        <div className="mw__media">
          <CarouselStack images={images} interval={3500} autoPlay />
        </div>
      </div>
    </section>
  );
};

export default ModernWorkspaceSection;
