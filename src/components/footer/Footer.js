import React from "react";
import "./Footer.css";
import SocialMedia from "../socialMedia/SocialMedia";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="footer-inner">
        {/* LEFT: Brand / profile */}
        <div className="footer-brand">
          <div className="footer-avatar">JC</div>
          <div className="footer-brand-text">
            <h3 className="footer-name">José Ignacio Contreras Raggio</h3>

            <p className="footer-role">
              Data-driven bioengineer specializing in imaging, bone tissue
              engineering & ML/AI-driven optimization.
            </p>

            {/* Availability + CTA */}
            <p className="footer-status">
              Open to research & industry opportunities
            </p>

            <Link to="/contact" className="footer-cta">
              Contact me · Book a call
            </Link>
          </div>
        </div>

        {/* MIDDLE: Quick links (use react-router) */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: Social / connect */}
        <div className="footer-column">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-socials">
            <SocialMedia />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} José Ignacio Contreras Raggio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
