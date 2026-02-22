import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Bluestock Fintech",
      role: "SDE Intern",
      duration: "Aug 2025 - Sep 2025",
      type: "Internship",
      details: [
        "Developed and maintained backend services and RESTful APIs using Node.js and Express.js for core fintech workflows.",
        "Designed and managed MongoDB schemas and queries with Mongoose to handle user and transactional data efficiently.",
        "Implemented and tested authentication and authorization logic, improving application security and reliability."
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-5 experience-bg">
      <div className="container py-4">
        {/* Centered Heading with Theme Underline */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold border-bottom border-warning border-4 d-inline-block pb-2">
            Work Experience
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="experience-list ps-4 position-relative">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item mb-5 position-relative">
                  {/* Theme-colored Dot */}
                  <div className="experience-dot shadow-sm"></div>
                  
                  {/* Content Card with subtle hover effect */}
                  <div className="card border-0 shadow-sm p-4 bg-white exp-card">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                        {exp.duration}
                      </span>
                      <span className="badge rounded-pill bg-light text-dark border px-3 py-2 small fw-normal">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h4 className="fw-bold mb-1" style={{ color: '#ff6b00' }}>{exp.company}</h4>
                    <h6 className="fw-semibold text-secondary mb-3">{exp.role}</h6>

                    <ul className="text-muted ps-3 mb-0">
                      {exp.details.map((detail, dIndex) => (
                        <li key={dIndex} className="mb-2">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}