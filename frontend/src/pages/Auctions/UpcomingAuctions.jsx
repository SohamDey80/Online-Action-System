// src/pages/Auctions/UpcomingAuctions.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./AuctionsPage.css";
import AuctionTabs from "./AuctionTabs";

// Re-use the same card structure as the home page
function AuctionCard({ image, title, dateLabel, dateText }) {
  return (
    <article className="auction-card" aria-label={title}>
      <div className="auction-thumb">
        <img src={image} alt={title} />
      </div>

      <div className="auction-body">
        <h3 className="auction-title">{title}</h3>
        <button className="interest-btn" type="button">
          Show Interests
        </button>

        <div className="auction-meta">
          <div className="auction-dateLabel">{dateLabel}</div>
          <div className="auction-dateText">{dateText}</div>
        </div>
      </div>
    </article>
  );
}

const UPCOMING_AUCTIONS = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + "/images/section-art.jpg",
    title: "Historic Masterpieces",
    dateLabel: "December 2025",
    dateText: "Yet to be Announced",
  },
  // add more upcoming auctions here if you like
];

export default function UpcomingAuctions() {
  return (
    <main className="auction-page">
      <div className="auction-inner">
        {/* breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Upcoming Auctions</span>
        </nav>

        {/* title + tabs */}
        <div className="auction-header-row">
          <h1 className="auction-title">Upcoming Auctions</h1>
          <AuctionTabs active="upcoming" />
        </div>

        {/* content */}
        <section className="auction-content">
          {UPCOMING_AUCTIONS.length === 0 ? (
            <p className="no-auctions">No auctions available.</p>
          ) : (
            <div className="auction-grid">
              {UPCOMING_AUCTIONS.map((a) => (
                <AuctionCard key={a.id} {...a} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
