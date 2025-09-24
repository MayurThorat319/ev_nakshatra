import React, { useEffect, useRef, useState } from "react";

import "./ModernWorkspace.css";
import type { CarouselImage } from "../CarouselStack/CarouselStack";
import CarouselStack from "../CarouselStack/CarouselStack";
import SkeletonLoader from "../SkeletonLoader";

const images: CarouselImage[] = [
  { src: "/images/carousel_4_1.png", alt: "Rooftop lounge at sunset with city views and fireworks in the sky" },
  { src: "/images/carousel_2.png", alt: "Open modern office with large windows and desks" },
  { src: "/images/carousel_5_1.png", alt: "Evening skyline with illuminated towers and glass facades" },
];

const ModernWorkspaceSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Track when images finish loading
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((img) => {
      const image = new Image();
      image.src = img.src;
      image.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mw" aria-labelledby="mw-title" id="about">
      <div
        ref={ref}
        className={`mw__inner mw__fade-in ${isVisible ? "visible" : ""}`}
      >
        <div className="mw__copy">
          <h2 id="mw-title" className="mw__title">
            <p>
              The<span style={{ color: "#1E576C" }}> Modern </span>Workspace
            </p>
          </h2>

          <p className="mw__text">
            Big ideas need bold spaces. At{" "}
            <span style={{ color: "#1E576C", WebkitTextStroke: "0.7px" }}>CAPITOL 9</span>, every square
            foot is crafted for visionaries, leaders, and creators ready to turn
            ambition into action. Elegant layouts, curated amenities, and
            flexible design — all in one place. Whether you’re scaling up or
            settling in, this is <br />
            <a href="#">
              <span style={{ color: "#1E576C", WebkitTextStroke: "0.7px" }}>
                where your next chapter begins.
              </span>
            </a>
          </p>

          <p className="mw__text_mob">
            Great ideas deserve striking environments. At CAPITOL 9, every inch
            is thoughtfully designed. Whether you're scaling up or settling in,
            this is <br />
            <span style={{ color: "#1E576C", WebkitTextStroke: "0.7px" }}>
              where your next chapter begins.
            </span>
          </p>
        </div>

        <div className="mw__media">
          {loading ? (
            <SkeletonLoader />
          ) : (
            <CarouselStack images={images} interval={3500} autoPlay />
          )}
        </div>
      </div>
    </section>
  );
};

export default ModernWorkspaceSection;