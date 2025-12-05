// src/pages/Auctions/PastAuctions.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./AuctionsPage.css";
import AuctionTabs from "./AuctionTabs";

// dummy data – replace images / numbers with real ones later
const pastAuctions = [
  {
    id: 1,
    title: "Iconic Masters",
    image: process.env.PUBLIC_URL + "/images/hero1.jpg",
    dates: "29 Sep – 30 Sep, 2025",
    totalSale: "₹ 56,50,75,769",
  },
  {
    id: 2,
    title: "Heirloom Jewellery, Silver",
    image: process.env.PUBLIC_URL + "/images/hero2.jpg",
    dates: "27 Oct – 28 Oct, 2025",
    totalSale: "₹ 4,83,34,388",
  },
  {
    id: 3,
    title: "Dream Spot",
    image: process.env.PUBLIC_URL + "/images/hero3.jpg",
    dates: "14 Oct - 15 Oct, 2025",
    totalSale: "₹ 10,83,34,388",

  }
];

export default function PastAuctions() {
  return (
    <main className="auction-page">
      <div className="auction-inner">
        {/* breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Past Auctions</span>
        </nav>

        {/* title + tabs */}
        <div className="auction-header-row">
          <h1 className="auction-title">Past Auctions</h1>
          {/* IMPORTANT: use "results" so this tab gets the black .active style */}
          <AuctionTabs active="results" />
        </div>

        {/* cards */}
        <section className="auction-content">
          <div className="auction-grid">
            {pastAuctions.map((a) => (
              <article key={a.id} className="auction-card past-card">
                <div className="auction-thumb">
                  <img src={a.image} alt={a.title} />
                </div>

                <div className="past-body">
                  <h3 className="past-title">{a.title}</h3>
                  <p className="past-dates">{a.dates}</p>

                  <div className="past-sale">
                    <span className="past-sale-label">Total Sale:</span>
                    <span className="past-sale-value">{a.totalSale}</span>
                  </div>

                  <button type="button" className="past-btn">
                    View Auction Result
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
