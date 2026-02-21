import React from 'react';
import profile from "../assets/pp.png";

export default function About() {
  return (
    <div className="container-fluid py-5 min-vh-100 d-flex align-items-center bg-white text-dark">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column: Content */}
          <div className="col-md-7 text-start">
            <h2 className="fw-bold mb-0">Hi There,</h2>
            <h1 className="display-3 fw-bold mb-3">
              I'm <span style={{ color: '#ff6b00' }}>Piyush Sharma</span>
            </h1>
            
            {/* Expanded Roles Section based on your AI/ML and Web skills */}
            <h4 className="mb-4 d-flex flex-wrap gap-2 align-items-center">
              I Am Into 
              <span className="text-danger fw-bold border-end border-danger border-3 pe-2 ms-2">
                FullStack Development | AI & ML Engineer | Deep Learning Specialist
              </span>
            </h4>

            <p className="lead text-secondary mb-5" style={{ maxWidth: '600px' }}>
              Specializing in the MERN stack and Computer Vision. I build intelligent web applications 
              using React, Node.js, and TensorFlow.
            </p>

            {/* Updated Social Icons with LeetCode, GFG, and Gmail */}
            <div className="d-flex gap-3 mt-4 flex-wrap">
              {/* LinkedIn */}
              <a href="#" className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
                <i className="bi bi-linkedin"></i>
              </a>
              {/* GitHub */}
              <a href="#" className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
                <i className="bi bi-github"></i>
              </a>
              {/* LeetCode (Using a custom icon or generic code icon) */}
              <a href="#" title="LeetCode" className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
                <i className="bi bi-code-slash"></i>
              </a>
              {/* GeeksforGeeks (Represented by terminal icon) */}
              <a href="#" title="GeeksforGeeks" className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
                <i className="bi bi-terminal-fill"></i>
              </a>
              {/* Gmail */}
              <a href="mailto:yourname@gmail.com" className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Image with Yellow Circle Background */}
          <div className="col-md-5 d-flex justify-content-center position-relative mt-5 mt-md-0">
            <div className="profile-container shadow-lg" style={{
              backgroundColor: '#ffc107',
              borderRadius: '50%',
              width: '380px',
              height: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '8px solid white'
            }}>
              <img 
                src={profile} 
                alt="Piyush Sharma Profile" 
                className="img-fluid" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}