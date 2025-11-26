import React from "react";
import white_logo from "../assets/images/white-logo.png";
import googlePlay from "../assets/images/white-google.png";
import applePlay from "../assets/images/white-apple-logo.png";
import starMap from "../assets/images/starMap.png";
import { Link, useLocation } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  // Function to handle navigation to homepage sections
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // If already on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div className="footer" style={{ marginTop: "100px" }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-5 col-sm-5 text-white">
            <img
              alt="Logo"
              src={white_logo}
              className="footer-logo"
              width={"100px"}
            />
            {/* <h2 className="mt-5" style={{ fontSize: "25px" }}>
              Subscribe to our Newsletter
            </h2>
            <p className="fw-lighter">
              Be the first to receive all latest post in your inbox
            </p> */}
            {/* <div className="inp mt-5">
              <input type="text" name="" id="" placeholder="Enter your email" />
              <i class="bi bi-send-fill"></i>
            </div> */}
            {/* <p className="fw-lighter text-muted-50 mt-3">
              By clicking send link you agree to receive message.
            </p> */}
            {/* <p>
              <a
                href="mailto:business@gearapp.ae"
                className="text-white underline me-2"
              >
                business@gearapp.ae
              </a>
              |
              <a href="tel:+971561145454" className="text-white underline ms-2">
                +971 56 114 5454
              </a>
            </p> */}
          </div>
          <div className="col-md-4 col-12 col-sm-2 text-white mt-5">
            {/* <h4 className="fw-semibold text-center">Top Links</h4> */}
            <div className="d-flex justify-content-between">
              <nav className="nav footer-nav flex-column py-3 me-3">
                <Link to={"/"} className="nav-link text-white mb-3">
                  Home
                </Link>
                <button 
                  className="nav-link text-white mb-3 btn btn-link p-0 text-start"
                  onClick={() => handleSectionNavigation('howitwork')}
                  style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                >
                  How it Work!
                </button>
                <button 
                  className="nav-link text-white mb-3 btn btn-link p-0 text-start"
                  onClick={() => handleSectionNavigation('whyChooseUs')}
                  style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                >
                  Why Choose Us
                </button>
                <button 
                  className="nav-link text-white mb-3 btn btn-link p-0 text-start"
                  onClick={() => handleSectionNavigation('screenshot')}
                  style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                >
                  Screenshots
                </button>
                <button 
                  className="nav-link text-white mb-3 btn btn-link p-0 text-start"
                  onClick={() => handleSectionNavigation('downloadApp')}
                  style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                >
                  Download App
                </button>
              </nav>
              <nav className="nav footer-nav flex-column py-3">
                <Link to="/terms" className="nav-link text-white mb-3">
                  Terms and Condition
                </Link>
                <Link to="/privacy" className="nav-link text-white mb-3">
                  Privacy Policy
                </Link>
                <Link to="/cancellation-policy" className="nav-link text-white mb-3">
                  Cancellation Policy
                </Link>
                <Link to="/support" className="nav-link text-white mb-3">
                  Support
                </Link>
                <Link to="/Contact-us" className="nav-link text-white mb-3">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>

          <div className="col-md-3 col-12 text-white">
            <h6 className="fw-semibold text-white fs-4 fw-bolder mt-5">
              Download App
            </h6>
            <div className="footer-download-btn mt-4">
              <a
                href="https://apps.apple.com/ae/app/gear-hire-car/id6747331842"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={applePlay}
                  className="apple-pay-img"
                  alt="Download on Apple Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.devicebee.gear"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3"
              >
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="google-pay-img"
                />
              </a>
            </div>

            <ul className="footer-icons">
              <li className="icons-li">
                <a href="https://www.X.com/gearap_ae" target="_blank">
                  <i class="mx-3">
                    <FaXTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gearap_ae" target="_blank">
                  <i class="mx-3">
                    <FaInstagram />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedIn/gearap_ae" target="_blank">
                  <i class="mx-3">
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="footer-bottom p-3 mt-3"
        style={{ background: "rgba(39, 39, 39, 1)" }}
      >
        <div class="container my-auto d-flex justify-content-center align-items-center">
          <div class="copyright text-start my-auto text-white">
            <span style={{ fontSize: "15px" }}>
              © Copyrights 2025 FIRST GEAR AUTO USING ELECTRONIC MEDIA RENTING
              VEHICLES L.L.C. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
