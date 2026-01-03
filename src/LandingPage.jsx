import React from "react";
import "./LandingPage.css";

// LandingPage.jsx
// Single-file React component converted to normal CSS

export default function LandingPage() {
  return (
    <div className="landing">
      {/* Navbar */}
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img
              className="logo"
              src="/MEdiConnectLgo.jpeg"
              alt="MediConnect logo"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg'; }}
            />
            <span className="brand-name">MediConnect</span>
          </div>
          <nav className="nav-links">
            <button className="btn btn-primary">Get Started</button>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <main className="container main">
        <div className="hero-row">
          {/* Left */}
          <div className="left-col">
            <h1 className="hero-title">Connecting Patients and Dispensaries — In Real Time</h1>
            <p className="hero-sub">MediConnect is a smart digital healthcare solution designed to simplify how patients access medical services at local dispensaries. By providing real-time information on doctor availability, queue status, and estimated waiting times, MediConnect helps patients plan their visits efficiently and avoid unnecessary delays.</p>

          </div>

          {/* Right - phone mockup */}
          <div className="right-col">
            <div className="phone-mockup">
              <div className="phone-inner">
                <div className="phone-top">
                  <div className="signal-bar" />
                  <div className="time-label">2:16 PM</div>
                </div>

                <div className="phone-content">
                  <div className="doctor-row">
                    <div>
                      <div className="doctor-name">Dr. A. Mensah</div>
                      <div className="doctor-specialty">Cardiologist</div>
                    </div>
                    <div className="status-wrap">
                      <div className="status">In Clinic</div>
                      <div className="queue-count">Queue: 4</div>
                    </div>
                  </div>

                  <div className="position-box">
                    <div className="position-label">Your Position</div>
                    <div className="position-row">
                      <div className="position-number">#12</div>
                      <div className="position-wait">Est. wait: 25m</div>
                    </div>
                    <div className="progress">
                      <div className="progress-fill" />
                    </div>
                  </div>
                </div>

                <div className="phone-actions">
                  <button className="btn btn-primary btn-block">Join Queue</button>
                  <button className="btn btn-outline btn-block">Directions</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="features" id="features">
          <h2 className="section-title">Why choose MediConnect</h2>
          <p className="section-subtitle">Designed to help patients and dispensaries coordinate visits efficiently and safely.</p>

          <div className="features-grid">
            <FeatureCard emoji="🩺" title="Real-Time Availability" text="See when doctors are available so you only go when help is ready." />
            <FeatureCard emoji="📊" title="Live Queue Tracking" text="Monitor your position and watch the queue move in real time." />
            <FeatureCard emoji="🔔" title="Smart Notifications" text="Receive alerts when your turn is approaching so you can arrive on time." />
            <FeatureCard emoji="💚" title="Trusted Care" text="Local clinics and verified doctors" />

          </div>
        </section>

        {/* How it works */}
        <section className="how-it-works" id="how-it-works">
          <h3 className="section-title">How It Works</h3>
          <div className="steps-grid">
            <Step number={1} title="Search" desc="Find doctors or dispensaries nearby with live status." />
            <Step number={2} title="Join Queue" desc="Reserve a spot from your phone and get an ETA." />
            <Step number={3} title="Arrive on Time" desc="Get an alert and arrive when it's your turn." />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} MediConnect</div>
          <div className="footer-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ emoji, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-emoji">{emoji}</div>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-text">{text}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div>
        <div className="step-title">{title}</div>
        <div className="step-desc">{desc}</div>
      </div>
    </div>
  );
}
