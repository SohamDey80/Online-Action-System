// src/pages/Departments.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Departments.css";

const items = [
  { id: 1, title: "Modern Painting", img: "/images/dept1.jpg" },
  { id: 2, title: "Jewellery", img: "/images/dept2.jpg" },
  { id: 3, title: "Antiques & Furniture", img: "/images/dept3.jpg" },
  { id: 4, title: "Watches", img: "/images/dept4.jpg" },
  { id: 5, title: "Books & Manuscripts", img: "/images/dept5.jpg" },
  { id: 6, title: "Decor & Textiles", img: "/images/dept6.jpg" },
  { id: 7, title: "Photography", img: "/images/dept7.jpg" },
  { id: 8, title: "Collectables", img: "/images/dept8.jpg" }
];

export default function Departments() {
  return (
    <main className="dept-page">
      <div className="dept-container">
        <header className="dept-header">
          <h1>DEPARTMENTS</h1>
          <p className="dept-lead">
            IndiAuction is a leading art & luxury business. Browse our
            specialist departments for auctions, valuations and private sales.
          </p>
        </header>

        <section className="dept-gallery" aria-label="Departments gallery">
          {items.map((it) => (
            <article className="dept-card" key={it.id}>
              <Link to={`/departments/${it.id}`} className="dept-thumb-link" aria-label={it.title}>
                <div className="dept-thumb">
                  {/* image: use real images in /public/images/... or change to imported images */}
                  <img src={it.img} alt={it.title} />
                </div>
              </Link>

              <div className="dept-meta">
                <h3 className="dept-title">{it.title}</h3>
                <Link to={`/departments/${it.id}`} className="dept-cta">View</Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
