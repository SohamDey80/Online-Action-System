// src/pages/Auctions/AuctionTabs.js
import React from "react";
import { Link } from "react-router-dom";
import "./AuctionsPage.css";

export default function AuctionTabs({ active }) {
  return (
    <div className="auction-tabs">
      <Link
        to="/live"
        className={`auction-tab ${active === "live" ? "active" : ""}`}
      >
        Live Auctions
      </Link>

      <Link
        to="/upcoming"
        className={`auction-tab ${active === "upcoming" ? "active" : ""}`}
      >
        Upcoming Auctions
      </Link>

      <Link
        to="/results"
        className={`auction-tab ${active === "results" ? "active" : ""}`}
      >
        Past Auctions
      </Link>
    </div>
  );
}
