import React from 'react';
import ProjectCard from './pcards/pcard';

export default function ProjectPage() {
  const projects = [
    { title: "Responsify", subtitle: "Breakpoint: 768px", details: "A simple tool which allows you to test your responsive websites." },
    { title: "Featured Image Notes", subtitle: "WordPress Plugin", details: "Adds notes to your Featured Image meta box for specific post types." },
    { title: "jQuery Fixed Header", subtitle: "Responsive UI", details: "A jQuery plugin to fix a header to the top of the window." },
    { title: "jQuery Floating Label", subtitle: "Form UI", details: "Turns an input placeholder into a floating form label." }
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold font-monospace italic">Projects</h1>
          <hr className="w-25 mx-auto" />
        </div>

        {/* Horizontal Tray */}
        <div className="row flex-nowrap overflow-auto pb-4 custom-scrollbar">
          {projects.map((proj, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProjectCard 
                image="https://via.placeholder.com/300x200" // Replace with your project screenshots
                title={proj.title}
                subtitle={proj.subtitle}
                details={proj.details}
              />
            </div>
          ))}
        </div>

        {/* Footer Button - Matching your reference */}
        <div className="text-center mt-4">
          <button className="btn btn-outline-dark px-4 py-2 shadow-sm">
            <i className="bi bi-github me-2"></i> See All Projects
          </button>
        </div>
      </div>
    </div>
  );
}