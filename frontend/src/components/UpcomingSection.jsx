// src/components/UpcomingSection.jsx
import React from "react";
import "./UpcomingSection.css";

function AuctionCard({ image, title, dateLabel, dateText }) {
  return (
    <article className="auction-card" aria-label={title}>
      <div className="auction-thumb">
        <img src={image} alt={title} />
      </div>

      <div className="auction-body">
        <h4 className="auction-title">{title}</h4>
        <button className="interest-btn" type="button">Show Interests</button>

        <div className="auction-meta">
          <div className="auction-dateLabel">{dateLabel}</div>
          <div className="auction-dateText">{dateText}</div>
        </div>
      </div>
    </article>
  );
}

export default function UpcomingSection() {
  return (
    <section className="upcoming-section">
      <div className="upcoming-inner">
        <div className="upcoming-left">
          <h2 className="upcoming-title">AUCTIONS DETAILS</h2>
          <p className="upcoming-desc">
            IndiAuction offers a diverse mix of upcoming online auctions, featuring art, luxury décor, rare collectibles and investment-worthy treasures. Each auction is carefully curated to ensure authenticity, quality and value. Browse what’s coming next and discover standout items waiting to find their new home.
          </p>

          <div className="upcoming-ctaWrap">
            <button className="upcoming-cta">SEE ALL UPCOMING AUCTIONS</button>
          </div>
        </div>

        <div className="upcoming-right">
          {/* Example card — replicate or map for multiple cards */}
          <AuctionCard
            image={process.env.PUBLIC_URL + "/images/section-art.jpg"}
            title="Historic Masterpieces"
            dateLabel="December 2025"
            dateText="Yet to be Announced"
          />
        </div>
      </div>
    </section>
  );
}
