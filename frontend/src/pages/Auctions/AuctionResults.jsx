// src/pages/AuctionResults.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./AuctionsPage.css";
import AuctionTabs from "./AuctionTabs";

export default function AuctionResults() {
  return (
    <main className="auction-page">
      <div className="auction-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Past Auctions</span>
        </nav>

        <div className="auction-header-row">
          <h1 className="auction-title">Past Auctions</h1>
          <AuctionTabs active="results" />
        </div>

        <section className="auction-content">
          {/* later: list of completed auctions / results */}
          <p className="no-auctions">No auctions available.</p>
        </section>
      </div>
    </main>
  );
}
