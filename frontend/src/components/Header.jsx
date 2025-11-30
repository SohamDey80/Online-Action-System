// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(null);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function toggle(menu) {
    setOpen((cur) => (cur === menu ? null : menu));
  }

  return (
    <header className="plain-header" ref={rootRef}>
      <div className="plain-container">
        {/* BRAND */}
        <div className="brand">
          <Link to="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
              <svg
                className="brand-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                focusable="false"
              >
                <path d="M9 7l6 6" />
                <path d="M4 12l6 6" />
                <path d="M10 6l4-4 4 4-4 4-4-4z" />
                <rect x="2" y="18" width="20" height="3" rx="1" />
              </svg>

              <span className="brand-text">IndiAuction</span>
            </Link>

        </div>

        {/* NAVIGATION */}
        <nav className="nav" aria-label="Main navigation">
          {/* AUCTIONS */}
          <div className="nav-item">
            <button
              className="nav-btn"
              onClick={() => toggle("auctions")}
              aria-haspopup="menu"
              aria-expanded={open === "auctions"}
              type="button"
            >
              AUCTIONS
              <span className={`arrow ${open === "auctions" ? "open" : ""}`} />
            </button>

            {open === "auctions" && (
              <div className="dropdown" role="menu">
                <Link to="/upcoming" onClick={() => setOpen(null)}>
                  Upcoming Auctions
                </Link>
                <Link to="/live" onClick={() => setOpen(null)}>
                  Live Auctions
                </Link>
                <Link to="/results" onClick={() => setOpen(null)}>
                  Auction Results
                </Link>
              </div>
            )}
          </div>

          {/* DEPARTMENTS */}
          <div className="nav-item">
            <Link className="nav-link" to="/departments">
              DEPARTMENTS
            </Link>
          </div>

          {/* SERVICES */}
          <div className="nav-item">
            <button
              className="nav-btn"
              onClick={() => toggle("services")}
              aria-haspopup="menu"
              aria-expanded={open === "services"}
              type="button"
            >
              SERVICES
              <span className={`arrow ${open === "services" ? "open" : ""}`} />
            </button>

            {open === "services" && (
              <div className="dropdown" role="menu">
                <Link to="/valuation" onClick={() => setOpen(null)}>
                  Valuation
                </Link>
                <Link to="/consign" onClick={() => setOpen(null)}>
                  Consign
                </Link>
                <Link to="/shipping" onClick={() => setOpen(null)}>
                  Shipping &amp; Insurance
                </Link>
              </div>
            )}
          </div>

          {/* TRADE */}
          <div className="nav-item">
            <button
              className="nav-btn trade-btn"
              onClick={() => toggle("trade")}
              aria-haspopup="menu"
              aria-expanded={open === "trade"}
              type="button"
            >
              TRADE
              <span className={`arrow ${open === "trade" ? "open" : ""}`} />
            </button>

            {open === "trade" && (
              <div className="dropdown" role="menu">
                <Link to="/sell" onClick={() => setOpen(null)}>
                  Sell
                </Link>
                <Link to="/buy" onClick={() => setOpen(null)}>
                  Buy
                </Link>
              </div>
            )}
          </div>

          {/* ABOUT US */}
          <div className="nav-item">
            <button
              className="nav-btn"
              onClick={() => toggle("about")}
              aria-haspopup="menu"
              aria-expanded={open === "about"}
              type="button"
            >
              ABOUT US
              <span className={`arrow ${open === "about" ? "open" : ""}`} />
            </button>

            {open === "about" && (
              <div className="dropdown" role="menu">
                <Link to="/company" onClick={() => setOpen(null)}>
                  Company
                </Link>
                <Link to="/team" onClick={() => setOpen(null)}>
                  Team
                </Link>
                <Link to="/contact" onClick={() => setOpen(null)}>
                  Contact
                </Link>
              </div>
            )}
          </div>

          {/* CURRENCY */}
          <div className="nav-item">
            <button
              className="nav-btn"
              onClick={() => toggle("currency")}
              aria-haspopup="menu"
              aria-expanded={open === "currency"}
              type="button"
            >
              INR
              <span className={`arrow ${open === "currency" ? "open" : ""}`} />
            </button>

            {open === "currency" && (
              <div className="dropdown" role="menu">
                <Link to="/currency/inr" onClick={() => setOpen(null)}>
                  INR
                </Link>
                <Link to="/currency/usd" onClick={() => setOpen(null)}>
                  USD
                </Link>
                <Link to="/currency/eur" onClick={() => setOpen(null)}>
                  EUR
                </Link>
              </div>
            )}
          </div>

          {/* LOGIN (fixed & anchored) */}
          <div className="nav-item login-wrap">
            <div className="login-button">
              <Link
                to="/login"
                className="nav-link-login"
                onClick={() => setOpen(null)}
              >
                LOGIN
              </Link>

              <button
                type="button"
                className="login-caret"
                aria-haspopup="menu"
                aria-expanded={open === "login"}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle("login");
                }}
                aria-label="Open login menu"
              >
                <span className={`arrow ${open === "login" ? "open" : ""}`} />
              </button>

              {open === "login" && (
                <div className="dropdown" role="menu" aria-label="Login menu">
                  <Link to="/login" role="menuitem" onClick={() => setOpen(null)}>
                    Login
                  </Link>
                  <Link to="/signup" role="menuitem" onClick={() => setOpen(null)}>
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* SEARCH BUTTON */}
        <div className="search-btn" title="Search">
          <span className="search-icon" />
        </div>
      </div>
    </header>
  );
}
