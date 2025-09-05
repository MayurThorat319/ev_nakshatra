"use client";

import { useEffect, useRef, useState } from "react";
import "./TestimonialsSection.css";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  secondSliderTestimonials?: Testimonial[]
  thirdSliderTestimonials?: Testimonial[]
  speed?: "slow" | "fast";
  direction?: "up" | "down";
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "THE KAMAT'S",
    text: "The world-class amenities truly bring comfort and luxury to everyday living, making life easier and more enjoyable.",
    rating: 4,
    avatar: "images/kamat.png",
  },
  {
    id: 2,
    name: "THE BAFNA'S",
    text: "The location is prime, saving both time and travel hassle for daily needs.",
    rating: 4,
    avatar: "images/bafnas.jpg",
  },
  {
    id: 3,
    name: "THE JAIN'S",
    text: "Kids have their own fun and secure spaces.",
    rating: 5,
    avatar: "images/jains.jpg",
  },
  {
    id: 4,
    name: "THE KINGSLEY'S",
    text: "You can rely on them for honesty and on-time work.",
    rating: 4,
    avatar: "images/kingsley.jpeg",
  },
  {
    id: 5,
    name: "THE SALDUR'S",
    text: "Post-sales service is excellent, with quick response and helpful solutions for any issue.",
    rating: 5,
    avatar: "images/saldurs.png",
  },
];

const defaultSecondSliderTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "THE GUJAR'S",
    text: "The apartment is very spacious and it truly feels like our dream home come true.",
    rating: 5,
    avatar: "images/gujars.png",
  },
  {
    id: 2,
    name: "THE PEDNEKAR'S",
    text: "Construction is happening very quickly in Vashi than expected.",
    rating: 4,
    avatar: "images/pednekars.png",
  },
  {
    id: 3,
    name: "THE SOLASKAR'S",
    text: "Early possession with top-quality construction made the experience even better.",
    rating: 5,
    avatar: "images/solaskars.png",
  },
  {
    id: 4,
    name: "THE THAKUR'S",
    text: "The Marina Bay theme is superb and makes the place look very special.",
    rating: 4,
    avatar: "images/thakurs.png",
  },
  {
    id: 5,
    name: "THE KAR'S",
    text: "The view is amazing and the location is perfect, with everything we need close by.",
    rating: 5,
    avatar: "images/kars.png",
  },
];

const defaultThirdSliderTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "THE RAJMOHAN'S",
    text: "The commercial spaces are vastu-designed and were handed over right on time.",
    rating: 4,
    avatar: "images/rajmohan.png",
  },
  {
    id: 2,
    name: "THE SODHI'S",
    text: "Spacious offices with modern design, making it comfortable for both clients and employees.",
    rating: 5,
    avatar: "images/sodhi.jpeg",
  },
  {
    id: 3,
    name: "THE MEHTA'S",
    text: "The location is excellent, with easy connectivity and great visibility for business.",
    rating: 5,
    avatar: "images/mehta.webp",
  },
  {
    id: 4,
    name: "THE DESAI'S",
    text: "Got possession on time with good construction quality, which gave us peace of mind.",
    rating: 4,
    avatar: "images/desai.jpg",
  },
  {
    id: 5,
    name: "THE REDDY'S",
    text: "Perfect combination of location, design, and timely delivery – ideal for setting up offices or shops.",
    rating: 5,
    avatar: "images/reddy.jpg",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="testimonial-card">
      <StarRating rating={testimonial.rating} />
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="author-avatar"
        />
        <span className="author-name">{testimonial.name}</span>
      </div>
    </div>
  );
};

const TestimonialSlider = ({
  testimonials,
  speed = "slow",
  direction = "up",
  className = "",
}: {
  testimonials: Testimonial[]
  speed?: "slow" | "fast"
  direction?: "up" | "down"
  className?: string
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const hasInitialized = useRef(false)

  // Intersection Observer to detect when slider is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (scrollerRef.current) {
      observer.observe(scrollerRef.current)
    }

    return () => {
      if (scrollerRef.current) {
        observer.unobserve(scrollerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller || hasInitialized.current) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!prefersReducedMotion && isInView) {
      // Add animation attribute
      scroller.setAttribute("data-animated", "true")

      // Get the inner container
      const scrollerInner = scroller.querySelector(".scroller-inner") as HTMLElement
      if (!scrollerInner) return

      // Create testimonial cards
      const createTestimonialElement = (testimonial: Testimonial) => {
        const cardDiv = document.createElement("div")
        cardDiv.className = "testimonial-item";

        cardDiv.innerHTML = `
          <div class="testimonial-card">
            <div class="star-rating">
              ${[...Array(5)]
                .map(
                  (_, index) =>
                    `<span class="star ${
                      index < testimonial.rating ? "filled" : ""
                    }">★</span>`
                )
                .join("")}
            </div>
             <div class="testimonial-author">
              <span class="author-name">${testimonial.name}</span>
               <img src="${testimonial.avatar}" alt="${
          testimonial.name
        }" class="author-avatar" />
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
           
          </div>
        `;

        return cardDiv;
      };

      // Create original items
      testimonials.forEach((testimonial) => {
        scrollerInner.appendChild(createTestimonialElement(testimonial));
      });

      // Create duplicated items for seamless scrolling
      testimonials.forEach((testimonial) => {
        const duplicatedItem = createTestimonialElement(testimonial);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });

      hasInitialized.current = true;
    }
  }, [testimonials, isInView]);

return (
    <div className={`testimonials-slider-container ${className}`}>
      <div ref={scrollerRef} className="testimonials-scroller" data-direction={direction} data-speed={speed}>
        <div className="scroller-inner"></div>
      </div>
    </div>
  )
}

export function TestimonialsSection({
  testimonials = defaultTestimonials,
  secondSliderTestimonials = defaultSecondSliderTestimonials,
  thirdSliderTestimonials = defaultThirdSliderTestimonials,
  speed = "slow",
  direction = "up",
}: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <h2 className="testimonials-title">What Our Clients Say</h2> 
            <h3 className="testimonials-subtitle">Trusted by Many</h3>
            <h3 className="testimonials-subtitle">Loved by All</h3>
        
            <p className="testimonials-description">
              Our clients' success stories reflect our commitment to excellence. See how we've helped them find their
              dream homes, sustainable investments, and perfect getaways.
            </p>
          </div>
        </div>

        <div className="testimonials-sliders-wrapper">
          <TestimonialSlider testimonials={testimonials} speed={speed} direction={direction} className="first-slider" />
          <TestimonialSlider
            testimonials={secondSliderTestimonials}
            speed="fast"
            direction="down"
            className="second-slider"
          />
          <TestimonialSlider
            testimonials={thirdSliderTestimonials}
            speed="slow"
            direction="up"
            className="third-slider"
          />
        </div>
      </div>
    </section>
  )
}
