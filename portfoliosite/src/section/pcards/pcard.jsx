import React from 'react';

export default function ProjectCard({ image, title, subtitle, details, link }) {
  return (
    <div className="card h-100 border-0 shadow-sm p-2 bg-white project-hover-card d-flex flex-column">
      <img src={image} className="card-img-top rounded-3" alt={title} />
      <div className="card-body px-2 d-flex flex-column">
        <h5 className="fw-bold mb-1" style={{ color: '#ff6b00' }}>{title}</h5>
        <h6 className="text-secondary small fw-bold mb-3">{subtitle}</h6>
        <p className="text-muted flex-grow-1" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
          {details}
        </p>
        
        {/* Project Website Link */}
        <div className="mt-auto">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-sm w-100 mt-2 fw-bold d-flex align-items-center justify-content-center gap-2"
            style={{ 
              backgroundColor: '#fff', 
              color: '#ff6b00', 
              border: '1.5px solid #ff6b00',
              borderRadius: '8px' 
            }}
          >
            Live Demo <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}