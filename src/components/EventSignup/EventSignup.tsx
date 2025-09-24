"use client";

import type React from "react";
import { useEffect, useState } from "react";
import "./EventSignup.css";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import SocialLink from "../SocialLink";


const EventSignup: React.FC = () => {
  // ✅ keep form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: send formData to backend/email API
  };

  // ✅ background skeleton
  const [bgLoaded, setBgLoaded] = useState(false);

  const bgUrl =
    "https://cdn.evhomes.tech/2da3da0d-c5ab-4147-9b3b-bfed991972d0-contact.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6IjJkYTNkYTBkLWM1YWItNDE0Ny05YjNiLWJmZWQ5OTE5NzJkMC1jb250YWN0LnBuZyIsImlhdCI6MTc1ODExOTI3Nn0.aH0qMH_bsK-yzXcodI4yLE7CrB9lBydifG0m6K7or3c";

  useEffect(() => {
    const img = new Image();
    img.src = bgUrl;
    img.onload = () => setBgLoaded(true);
  }, [bgUrl]);

  return (
    <section
      id="contact"
      className="event-signup"
      style={{
        background: bgLoaded
          ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgUrl}) center/cover no-repeat`
          : "none",
      }}
    >
      {/* Skeleton while background loads */}
      {!bgLoaded && <div className="event-signup__skeleton"></div>}
      <div className="event-signup__container">
        {/* Left Side - Event Details */}
        <div className="event-signup__left">
          <h1 className="event-signup__title" style={{ letterSpacing: 4 }}>
            CONTACT US
            {/* <br /> */}
          </h1>

          <div className="event-signup__session">
            {/* <h3>NEXT SESSION</h3> */}

            {/* <div className="event-signup__date">
              <div className="date-circle">
                <span className="date-number">23</span>
                <span className="date-month">SEPT 2019</span>
              </div>
              <div className="date-line"></div>
            </div> */}

            {/* <div className="event-signup__details">
              <p className="timing">
                <strong>TIMINGS</strong>
                <br />
                9AM - 12:30 AM
                <br />
                <span className="availability">* Limited Seats Available</span>
              </p>
            </div> */}

            <div className="event-signup__location">
              <div className="location-icon">
                <ImLocation2 />
              </div>
              <div>
                <a
                  href="https://maps.app.goo.gl/bNADbmbdJv7QffNH7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  <strong>
                    211&212, Vardhaman Chambers A Wing Plot No.84, Sector - 17
                    Vashi, Navi Mumbai - 400 703.
                  </strong>
                </a>
              </div>
            </div>

            <div className="event-signup__location">
              <div className="location-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <a
                  href="https://wa.me/918291668777" // WhatsApp link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="phone-link"
                >
                  <strong>+91 82916 68777</strong>
                </a>
              </div>
            </div>

            <div className="event-signup__location">
              <div className="location-icon">
                <MdEmail />
              </div>
              <div>
                <a
                  href="mailto:evhomes.operations@gmail.com"
                  className="email-link"
                >
               <strong>evhomes.operations@gmail.com</strong>   
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="event-signup__right">
          {/* <h2 className="event-signup__form-title">TRADE GROWTH</h2>
          <p className="event-signup__subtitle">
            Join us for a free breakfast to learn more about
            <br />
            how you can grow your business
          </p> */}

          <form className="event-signup__form" onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="fullName">NAME</label> */}
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="blue-input"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="email">EMAIL</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="phone">PHONE NO.</label> */}
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="event-signup__submit">
              SUBMIT
            </button>
          </form>

          <div className="social-icons">
            <div className="socialcontainer">
              <div className="icon social-icon-1-1">
                <SocialLink
                  href="https://www.facebook.com/evgindia"
                  label="Facebook"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  }
                />
              </div>

              <div className="social-icon-1">
                <a
                  href="https://www.facebook.com/evgindia?rdid=T5Y9xWn898Hd6XmZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19nwaBWiBf%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="socialcontainer">
              <div className="icon social-icon-2-2">
                <SocialLink
                  href="https://www.instagram.com/evhomesofficial/?igsh=MTRuZnA1MDd3Ymw0Mg%3D%3D#"
                  label="Instagram"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="instaGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#feda75" />
                          <stop offset="25%" stopColor="#fa7e1e" />
                          <stop offset="50%" stopColor="#d62976" />
                          <stop offset="75%" stopColor="#962fbf" />
                          <stop offset="100%" stopColor="#4f5bd5" />
                        </linearGradient>
                      </defs>

                      {/* Outer rounded square with gradient border */}
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                        fill="none"
                        stroke="url(#instaGradient)"
                        strokeWidth="2"
                      />

                      {/* Camera lens */}
                      <path
                        d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        fill="none"
                        stroke="url(#instaGradient)"
                        strokeWidth="2"
                      />

                      {/* Small circle (flash) */}
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="url(#instaGradient)"
                      />
                    </svg>
                  }
                />
              </div>

              <div className="social-icon-2">
                <a
                  href="https://www.instagram.com/evhomesofficial/?igsh=MTRuZnA1MDd3Ymw0Mg%3D%3D#"
                  aria-label="Instagram"
                >
                  <img src="images/insta_2.png" width={60} height={60}></img>
                  {/* <svg width="20" height="20" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2"/>
          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/>
        </svg> */}
                </a>
              </div>
            </div>

            <div className="socialcontainer">
              <div className="icon social-icon-3-3">
                <SocialLink
                  href="https://www.linkedin.com/company/ev-homes"
                  label="LinkedIn"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#0077B5"
                        d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.5h3.414v1.571h.049c.476-.9 1.637-1.852 3.367-1.852 3.6 0 4.266 2.37 4.266 5.455v6.326zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56v-11.5h3.554v11.5z"
                      />
                    </svg>
                  }
                />
              </div>
              <div className="social-icon-3">
                <a
                  href="https://www.linkedin.com/company/ev-homes"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSignup;
