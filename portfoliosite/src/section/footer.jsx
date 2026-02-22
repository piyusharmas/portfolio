import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg py-5 border-top">
      <div className="container text-center">
        {/* Branding */}
        <div className="mb-4">
          <h3 className="fw-bold">
            Piyush <span style={{ color: '#ff6b00' }}>Sharma</span>
          </h3>
          <p className="text-muted">Specializing in MERN stack and Computer Vision.</p>
        </div>

        {/* Social Links - Matching Hero section style */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a href="https://www.linkedin.com/in/piyusharmas05/" className="footer-icon shadow-sm" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/piyusharmas" className="footer-icon shadow-sm" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:piyusharmas2005@gmail.com" className="footer-icon shadow-sm">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>

        {/* Back to Top */}
        <div className="mb-4">
          <a href="#" className="btn btn-outline-dark btn-sm rounded-pill px-3">
            <i className="bi bi-arrow-up me-2"></i> Back to Top
          </a>
        </div>

        {/* Copyright */}
        <div className="text-muted smaller-text">
          <p className="mb-0">&copy; {currentYear} Piyush Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}