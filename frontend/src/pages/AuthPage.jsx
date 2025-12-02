import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // detect signup route
  const pathname = (location.pathname || "").toLowerCase().replace(/\/+$/, "");
  const isSignUp = pathname === "/signup";

  // If user visits root, send them to /login
  useEffect(() => {
    if (pathname === "" || pathname === "/") {
      navigate("/login", { replace: true });
    }
  }, [pathname, navigate]);

  const [showPassword, setShowPassword] = useState(false);

  function goToSignIn() {
    navigate("/login");
  }
  function goToSignUp() {
    navigate("/signup");
  }

  // We want the login page to show LEFT = ORANGE and RIGHT = WHITE,
  // so for the login route we add class "left-orange".
  // For signup route we use "signup-mode" (same visual result).
  const cardClass = isSignUp ? "auth-card signup-mode" : "auth-card left-orange";

  return (
    <div className="auth-wrapper">
      <div className={cardClass}>

        {/* LEFT PANEL - content switches depending on route */}
        <div className="left-panel">
          {isSignUp ? (
            <>
              <h1>Welcome Back!</h1>
              <p>Log in with your details to stay connected and continue bidding with us.</p>
              <button className="white-btn" onClick={goToSignIn}>
                Switch to Sign In
              </button>
            </>
          ) : (
            <>
              <h1>Ready to Bid?</h1>
              <p>Create your account and join the auction community today.</p>
              {/* On login page we do NOT show a separate SIGN IN button here —
                  the main form is on the right. Keep a switch to signup */}
              <button className="white-btn" onClick={goToSignUp}>
                Switch to Sign Up
              </button>
            </>
          )}
        </div>

        {/* RIGHT PANEL - holds the forms */}
        <div className="right-panel">
          {/* LOGIN FORM */}
          <div className={`form-container login ${isSignUp ? "hidden" : "visible"}`}>
            <h2>Sign in</h2>

            <input type="email" placeholder="Email" />
            <div className="password-wrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                👁
              </button>
            </div>

            <div className="form-links">
              <a href="#forgot">Forgot Password.</a>
              <br />
              <span>Are you an admin? <a href="#admin">Click here</a></span>
            </div>

            <button className="primary-btn">SIGN IN</button>
          </div>

          {/* SIGNUP FORM */}
          <div className={`form-container signup ${isSignUp ? "visible" : "hidden"}`}>
            <h2>Create Account</h2>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />

            <div className="password-wrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
              </button>
            </div>

            <div className="otp-row">
              <input className="otp-input" type="text" placeholder="OTP" />
              <button type="button" className="send-btn">Send</button>
            </div>

            <button className="primary-btn">SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

