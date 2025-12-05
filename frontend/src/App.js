// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import UpcomingSection from "./components/UpcomingSection";
import Departments from "./pages/Departments";
import AuthPage from "./pages/AuthPage";

import LiveAuctions from "./pages/Auctions/LiveAuctions";
import UpcomingAuctions from "./pages/Auctions/UpcomingAuctions";
import PastAuctions from "./pages/Auctions/PastAuctions"; // <- use PastAuctions

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <UpcomingSection />
            </>
          }
        />

        {/* Departments */}
        <Route path="/departments" element={<Departments />} />

        {/* Auctions tabs */}
        <Route path="/live" element={<LiveAuctions />} />
        <Route path="/upcoming" element={<UpcomingAuctions />} />
        <Route path="/results" element={<PastAuctions />} />

        {/* Auth */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
