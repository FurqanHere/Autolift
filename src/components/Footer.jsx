import React, { useState } from "react";
// import white_logo from "../assets/images/white-logo.png";
import googlePlay from "../assets/images/white-google.png";
import applePlay from "../assets/images/white-apple-logo.png";
import { Link, useLocation } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  // Function to handle navigation to homepage sections
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="footer" style={{ backgroundColor: "#3F85DE", marginTop: "100px", padding: "60px 0 0 0" }}>
      <div className="container pb-4">
        <div className="row">
          {/* Left Section - Brand Information */}
          <div className="col-md-4 col-sm-12 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              
              <h3 className="text-white fw-bold mb-0">AUTOLIFT</h3>
            </div>
            <p className="text-white mb-4" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <a
                href="https://apps.apple.com/ae/app/gear-hire-car/id6747331842"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={applePlay}
                  alt="Download on the App Store"
                  style={{ height: "40px", width: "auto" }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.devicebee.gear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlePlay}
                  alt="Download from Google Play"
                  style={{ height: "40px", width: "auto" }}
                />
              </a>
            </div>
          </div>

          {/* Middle Sections - Navigation Links */}
          <div className="col-md-4 col-sm-12 mb-4 mb-md-0">
            <div className="row">
              <div className="col-6">
                <h5 className="text-white fw-bold mb-3">Top Links</h5>
                <nav className="nav flex-column">
                  <Link to="/" className="nav-link text-white p-0 mb-2" style={{ fontSize: "14px" }}>
                    Home
                  </Link>
                  <button 
                    className="nav-link text-white p-0 mb-2 btn btn-link text-start"
                    onClick={() => handleSectionNavigation('aboutus')}
                    style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: "14px", color: "white" }}
                  >
                    About Us
                  </button>
                  <button 
                    className="nav-link text-white p-0 mb-2 btn btn-link text-start"
                    onClick={() => handleSectionNavigation('howitwork')}
                    style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: "14px", color: "white" }}
                  >
                    How It Works
                  </button>
                  <button 
                    className="nav-link text-white p-0 mb-2 btn btn-link text-start"
                    onClick={() => handleSectionNavigation('screenshot')}
                    style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: "14px", color: "white" }}
                  >
                    App Screenshots
                  </button>
                  <button 
                    className="nav-link text-white p-0 mb-2 btn btn-link text-start"
                    onClick={() => handleSectionNavigation('downloadApp')}
                    style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: "14px", color: "white" }}
                  >
                    Download App
                  </button>
                  <Link to="/Contact-us" className="nav-link text-white p-0 mb-2" style={{ fontSize: "14px" }}>
                    Contact Us
                  </Link>
                </nav>
              </div>
              <div className="col-6">
                <h5 className="text-white fw-bold mb-3">Our Terms</h5>
                <nav className="nav flex-column">
                  <Link to="/privacy" className="nav-link text-white p-0 mb-2" style={{ fontSize: "14px" }}>
                    Privacy policy
                  </Link>
                  <Link to="/terms" className="nav-link text-white p-0 mb-2" style={{ fontSize: "14px" }}>
                    Terms & Conditions
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Right Section - Stay Up To Date */}
          <div className="col-md-4 col-sm-12">
            <h5 className="text-white fw-bold mb-3">Stay Up To Date</h5>
            <p className="text-white mb-3" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Get updates about new features, job trends, and early access offers from Shiftly.
            </p>
            <p className="text-white mb-3" style={{ fontSize: "14px" }}>
              <a href="mailto:contact@shiftly.ae" className="text-white text-decoration-none">
                contact@shiftly.ae
              </a>
            </p>
            <form onSubmit={handleSubscribe} className="d-flex align-items-center">
              <div className="position-relative flex-grow-1 me-2">
                <i className="bi bi-envelope position-absolute text-white" style={{ left: "12px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}></i>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    paddingLeft: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "white",
                    borderRadius: "25px"
                  }}
                />
                <style>{`
                  input::placeholder {
                    color: rgba(255, 255, 255, 0.7) !important;
                  }
                `}</style>
              </div>
              <button
                type="submit"
                className="btn text-white fw-bold"
                style={{
                  backgroundColor: "#2563eb",
                  border: "none",
                  borderRadius: "25px",
                  padding: "8px 24px",
                  whiteSpace: "nowrap"
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="footer-bottom py-3"
        style={{ backgroundColor: "#3F85DE", borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="text-white mb-2 mb-md-0" style={{ fontSize: "14px" }}>
            All rights reserved. Shiftly LLC FZ © 2025 |{" "}
            <a href="mailto:contact@shiftly.ae" className="text-white text-decoration-none">
              contact@shiftly.ae
            </a>
          </div>
          <div className="d-flex gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
