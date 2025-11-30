// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import UpcomingSection from "./components/UpcomingSection";
import Departments from "./pages/Departments";

// NEW IMPORT 🔥
import AuthPage from "./pages/AuthPage";

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

        {/* Department page */}
        <Route path="/departments" element={<Departments />} />


        {/* Login + Signup animated page */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
      

      <Footer />
      </Routes>
    </>
  );
}

export default App;
