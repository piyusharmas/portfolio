import React from 'react';

export default function ProjectCard({ image, title, subtitle, details }) {
  return (
    <div className="card h-100 shadow-sm border-0 overflow-hidden custom-card">
      {/* Image Container */}
      <div className="img-container">
        <img src={image} className="card-img-top hover-zoom" alt={title} />
      </div>
      
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted mb-0">{subtitle}</p>
        
        {/* This div is hidden by default and shown on hover */}
        <div className="detailed-text mt-3">
          <hr />
          <p className="small text-secondary">{details}</p>
          <button className="btn btn-sm btn-primary w-100">View Project</button>
        </div>
      </div>
    </div>
  );
}