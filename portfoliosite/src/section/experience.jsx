import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Freelance Technical Writer",
      role: "Ramotion",
      duration: "May, 2022 - Present",
      type: "Freelance",
      details: [
        "Writing in-depth technical articles covering web technologies, design systems, and engineering best practices."
      ]
    },
  ];

  return (
    <section id="experience" className="py-5 bg-white text-dark">
      <div className="container">
        {/* Title matching your 'What I do' section */}
        <div className="mb-5">
          <h2 className="display-6 fw-bold border-bottom border-warning border-4 d-inline-block pb-2">
            Work Experience
          </h2>
        </div>

        <div className="experience-list ps-md-4">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item d-flex mb-5 position-relative">
              {/* Content Card */}
              <div className="flex-grow-1">
                <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                  <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                    {exp.duration}
                  </span>
                </div>
                
                <h4 className="fw-bold mb-0">{exp.company}</h4>
                
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="fw-semibold text-secondary">{exp.role}</span>
                  <span className="badge rounded-pill bg-light text-dark border px-3 py-2 small fw-normal">
                    {exp.type}
                  </span>
                </div>

                <ul className="text-muted ps-3">
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex} className="mb-2">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}