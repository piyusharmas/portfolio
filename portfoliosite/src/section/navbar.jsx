import React from 'react';

export default function Navbar() {
  const resumeUrl = "/resume.pdf"; 

  const handleResumeClick = (e) => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          Piyush <span style={{ color: '#ff6b00' }}>Portfolio</span>
        </a>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#portfolioNavbar" 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center fw-medium gap-lg-3">
            {/* Added Smooth Links matching your component IDs */}
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Technical Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            
            <li className="nav-item">
              <a 
                className="nav-link text-primary fw-bold" 
                href={resumeUrl} 
                download="Piyush_Sharma_Resume.pdf"
                onClick={handleResumeClick}
                style={{ cursor: 'pointer' }}
              >
                Resume
              </a>
            </li>

            <li className="nav-item ms-lg-2">
              <a 
                className="btn btn-dark rounded-pill px-4 shadow-sm text-white" 
                href="mailto:piyusharmas2005@gmail.com?subject=Portfolio Inquiry"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}