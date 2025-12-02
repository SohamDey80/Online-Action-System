import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // derive mode from URL; default to login if unknown
  const initialIsSignUp = location.pathname === "/signup";
  const [isSignUp, setIsSignUp] = useState(initialIsSignUp);
  const [showPassword, setShowPassword] = useState(false);

  // keep local state in sync with URL changes (e.g., user types /login)
  useEffect(() => {
    setIsSignUp(location.pathname === "/signup");
  }, [location.pathname]);

  // for sign in and sign up
  function goToSignIn() {
    navigate("/login", { replace: false });
    setIsSignUp(false);
  }
  function goToSignUp() {
    navigate("/signup", { replace: false });
    setIsSignUp(true);
  }

  return (
    <div className="auth-wrapper">
      <div className={`auth-card ${isSignUp ? "signup-mode" : ""}`}>
        {/* LEFT SIDE (Welcome Back / Login Promo) */}
        <div className="left-panel">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button
            className="white-btn"
            onClick={goToSignIn}
            aria-pressed={!isSignUp}
          >
            SIGN IN
          </button>
        </div>

        {/* RIGHT SIDE (forms area) */}
        <div className="right-panel">
          {/* SIGNUP FORM (visible when NOT signup-mode transformed) */}
          <div className="form-container signup" aria-hidden={isSignUp ? "false" : "true"}>
            <h2>Create Account</h2>

            <input type="text" placeholder="Name" aria-label="Name" />
            <input type="email" placeholder="Email" aria-label="Email" />
            
            <div className="password-wrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                aria-label="Password"
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                👁
              </button>
            </div>

            <div className="otp-row">
              <input type="text" placeholder="OTP" aria-label="OTP" />
              <button type="button" className="send-btn">Send</button>
            </div>

            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                // TODO: call signup API
                alert("Sign up clicked");
              }}
            >
              SIGN UP
            </button>

            <p className="switch-text" style={{ marginTop: 12 }}>
              Already have an account?{" "}
              <span onClick={goToSignIn} style={{ cursor: "pointer" }}>
                Sign In
              </span>
            </p>
          </div>

          {/* LOGIN FORM (slides in/out) */}
          <div className="form-container login" aria-hidden={!isSignUp ? "false" : "true"}>
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" aria-label="Login email" />
            <input type="password" placeholder="Password" aria-label="Login password" />
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                // TODO: call login API
                alert("Sign in clicked");
              }}
            >
              SIGN IN
            </button>

            <p className="switch-text">
              Don’t have an account?{" "}
              <span onClick={goToSignUp} style={{ cursor: "pointer" }}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


