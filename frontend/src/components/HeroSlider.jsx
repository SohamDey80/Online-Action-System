// src/components/HeroSlider.jsx
import React, { useEffect, useState, useRef } from "react";
import "./HeroSlider.css";

const slides = [
  {
    image: process.env.PUBLIC_URL + "/images/hero1.jpg",
    title: "THROUGH HER EYES",
    subtitle: "Modern & Contemporary Art",
    date: "29 Sep - 30 Sep, 2025",
  },
  {
    image: process.env.PUBLIC_URL + "/images/hero2.jpg",
    title: "IMPERIAL TREASURES",
    subtitle: "Antiques, Silver & Furniture",
    date: "10 Sep - 11 Sep, 2025",
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function startAuto() {
    stopAuto();
    timer.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
  }

  function stopAuto() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }

  return (
    <div className="hero-container">
      <div className="hero-card">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            aria-hidden={i !== index}
          >
            <div className="hero-gradient">
              <div className="hero-inner">
                <div className="hero-box">
                  <h2 className="hero-title">{s.title}</h2>
                  <div className="hero-meta">
                    <div className="hero-sub">{s.subtitle}</div>
                    <div className="hero-date">{s.date}</div>
                  </div>
                  <button className="hero-btn">View Results</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-pagination">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
