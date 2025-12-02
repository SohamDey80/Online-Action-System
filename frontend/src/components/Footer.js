import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>© {new Date().getFullYear()} IndiAuction</span>
        <span>- Made it</span>
      </div>
    </footer>
  );
}

