// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(null); // desktop dropdown key
  const [mobileOpen, setMobileOpen] = useState(false); // mobile panel visible
  const [mobileSection, setMobileSection] = useState(null); // mobile group expanded
  const rootRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(null);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
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

  function toggleMobile() {
    setMobileOpen((s) => !s);
    setMobileSection(null);
  }

  function toggleMobileSection(section) {
    setMobileSection((cur) => (cur === section ? null : section));
  }

  return (
    <header className="plain-header" ref={rootRef}>
      <div className="plain-container">

        {/* BRAND (link uses .brand which matches your CSS) */}
        <Link to="/" className="brand" aria-label="Home">
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

        {/* NAV (desktop) */}
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
                <Link to="/upcoming" onClick={() => setOpen(null)}>Upcoming Auctions</Link>
                <Link to="/live" onClick={() => setOpen(null)}>Live Auctions</Link>
                <Link to="/results" onClick={() => setOpen(null)}>Auction Results</Link>
              </div>
            )}
          </div>

          {/* DEPARTMENTS */}
          <div className="nav-item">
            <Link className="nav-link" to="/departments">DEPARTMENTS</Link>
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
                <Link to="/valuation" onClick={() => setOpen(null)}>Valuation</Link>
                <Link to="/consign" onClick={() => setOpen(null)}>Consign</Link>
                <Link to="/shipping" onClick={() => setOpen(null)}>Shipping &amp; Insurance</Link>
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
                <Link to="/sell" onClick={() => setOpen(null)}>Sell</Link>
                <Link to="/buy" onClick={() => setOpen(null)}>Buy</Link>
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
                <Link to="/company" onClick={() => setOpen(null)}>Company</Link>
                <Link to="/team" onClick={() => setOpen(null)}>Team</Link>
                <Link to="/contact" onClick={() => setOpen(null)}>Contact</Link>
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
                <Link to="/currency/inr" onClick={() => setOpen(null)}>INR</Link>
                <Link to="/currency/usd" onClick={() => setOpen(null)}>USD</Link>
                <Link to="/currency/eur" onClick={() => setOpen(null)}>EUR</Link>
              </div>
            )}
          </div>

          {/* LOGIN */}
          <div className="nav-item login-wrap">
            <button
              className="nav-btn"
              aria-haspopup="menu"
              aria-expanded={open === "login"}
              onClick={() => toggle("login")}
              type="button"
            >
              LOGIN
              <span className={`arrow ${open === "login" ? "open" : ""}`} />
            </button>

            {open === "login" && (
              <div className="dropdown" role="menu" aria-label="Login menu">
                <Link to="/login" role="menuitem" onClick={() => setOpen(null)}>Login</Link>
                <Link to="/signup" role="menuitem" onClick={() => setOpen(null)}>Sign Up</Link>
              </div>
            )}
          </div>
        </nav>

        {/* SEARCH + HAMBURGER (mobile) */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="search-btn" title="Search" role="button" aria-label="Search">
            <span className="search-icon" />
          </div>

          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
            type="button"
          >
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-inner">
          <div className="mobile-top">
            <div style={{ fontWeight: 700 }}>IndiAuction</div>
            <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close">✕</button>
          </div>

          <ul className="mobile-list" role="menu">
            <li>
              <div className="mobile-group">
                <button className="mobile-group-btn" onClick={() => toggleMobileSection("auctions")} aria-expanded={mobileSection === "auctions"}>
                  <span>Auctions</span>
                  <span className={`arrow ${mobileSection === "auctions" ? "open" : ""}`} />
                </button>
                <ul className={`mobile-sublist ${mobileSection === "auctions" ? "open" : ""}`}>
                  <li><Link to="/upcoming" onClick={() => setMobileOpen(false)}>Upcoming Auctions</Link></li>
                  <li><Link to="/live" onClick={() => setMobileOpen(false)}>Live Auctions</Link></li>
                  <li><Link to="/results" onClick={() => setMobileOpen(false)}>Auction Results</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="mobile-group">
                <button className="mobile-group-btn" onClick={() => toggleMobileSection("departments")} aria-expanded={mobileSection === "departments"}>
                  <span>Departments</span>
                  <span className={`arrow ${mobileSection === "departments" ? "open" : ""}`} />
                </button>
                <ul className={`mobile-sublist ${mobileSection === "departments" ? "open" : ""}`}>
                  <li><Link to="/departments" onClick={() => setMobileOpen(false)}>All Departments</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="mobile-group">
                <button className="mobile-group-btn" onClick={() => toggleMobileSection("services")} aria-expanded={mobileSection === "services"}>
                  <span>Services</span>
                  <span className={`arrow ${mobileSection === "services" ? "open" : ""}`} />
                </button>
                <ul className={`mobile-sublist ${mobileSection === "services" ? "open" : ""}`}>
                  <li><Link to="/valuation" onClick={() => setMobileOpen(false)}>Valuation</Link></li>
                  <li><Link to="/consign" onClick={() => setMobileOpen(false)}>Consign</Link></li>
                  <li><Link to="/shipping" onClick={() => setMobileOpen(false)}>Shipping &amp; Insurance</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="mobile-group">
                <button className="mobile-group-btn" onClick={() => toggleMobileSection("trade")} aria-expanded={mobileSection === "trade"}>
                  <span>Trade</span>
                  <span className={`arrow ${mobileSection === "trade" ? "open" : ""}`} />
                </button>
                <ul className={`mobile-sublist ${mobileSection === "trade" ? "open" : ""}`}>
                  <li><Link to="/sell" onClick={() => setMobileOpen(false)}>Sell</Link></li>
                  <li><Link to="/buy" onClick={() => setMobileOpen(false)}>Buy</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="mobile-group">
                <button className="mobile-group-btn" onClick={() => toggleMobileSection("about")} aria-expanded={mobileSection === "about"}>
                  <span>About Us</span>
                  <span className={`arrow ${mobileSection === "about" ? "open" : ""}`} />
                </button>
                <ul className={`mobile-sublist ${mobileSection === "about" ? "open" : ""}`}>
                  <li><Link to="/company" onClick={() => setMobileOpen(false)}>Company</Link></li>
                  <li><Link to="/team" onClick={() => setMobileOpen(false)}>Team</Link></li>
                  <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="mobile-group mobile-currency">
                <div className="mobile-group-btn currency-head">Currency</div>
                <div className="mobile-currency-list">
                  <Link to="/currency/inr" onClick={() => setMobileOpen(false)}>INR</Link>
                  <Link to="/currency/usd" onClick={() => setMobileOpen(false)}>USD</Link>
                  <Link to="/currency/eur" onClick={() => setMobileOpen(false)}>EUR</Link>
                </div>
              </div>
            </li>
          </ul>

          <div className="mobile-cta">
            <Link to="/signup" onClick={() => setMobileOpen(false)} className="mobile-btn">Signup</Link>
            <Link to="/login" onClick={() => setMobileOpen(false)} className="mobile-btn alt">Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
