// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import UpcomingSection from "./components/UpcomingSection";
import Departments from "./pages/Departments";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Header />

      <main>
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

          {/* Department page */}
          <Route path="/departments" element={<Departments />} />

          {/* Auth (login / signup share the same page component) */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />

          {/* optional: fallback route */}
          <Route
            path="*"
            element={
              <>
                <HeroSlider />
                <UpcomingSection />
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
