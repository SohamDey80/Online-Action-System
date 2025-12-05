// src/pages/LiveAuctions.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./AuctionsPage.css";
import AuctionTabs from "./AuctionTabs";

export default function LiveAuctions() {
  return (
    <main className="auction-page">
      <div className="auction-inner">
        {/* breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Live Auctions</span>
        </nav>

        <div className="auction-header-row">
          <h1 className="auction-title">Live Auctions</h1>
          <AuctionTabs active="live" />
        </div>

        <section className="auction-content">
          <p className="no-auctions">No auctions available.</p>
        </section>
      </div>
    </main>
  );
}
