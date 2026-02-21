import React from 'react';

export default function Positions() {
  const positions = [
    {
      role: "General Secretary",
      org: "Manav Rachna Centre for Peace & Sustainability",
      icon: "bi-globe-americas",
      color: "#ff6b00", // Theme Orange
      desc: "Directed end-to-end execution of sustainability projects and cross-functional team initiatives."
    },
    {
      role: "Clan Head",
      org: "Department of Student Welfare",
      icon: "bi-people-fill",
      color: "#0d6efd",
      desc: "Spearheaded department-wide engagement programs while resolving administrative and student bottlenecks."
    },
    {
      role: "Coordinator",
      org: "Music Society – Moksh",
      icon: "bi-music-note-beamed",
      color: "#6f42c1",
      desc: "Optimized event logistics and resource allocation for high-pressure cultural productions."
    }
  ];

  return (
    <section id="positions" className="py-5 position-bg">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold border-bottom border-warning border-4 d-inline-block pb-2">
            Positions of Responsibility
          </h2>
        </div>

        {/* Centering the entire timeline structure */}
        <div className="d-flex justify-content-center">
          <div className="timeline-wrapper pb-4">
            <div className="d-flex justify-content-between position-relative px-5">
              
              {/* Central connecting line */}
              <div className="position-line"></div>

              {positions.map((pos, index) => (
                <div key={index} className="position-item text-center">
                  <div className="icon-wrapper shadow mb-3" style={{ borderColor: pos.color }}>
                    <i className={`bi ${pos.icon}`} style={{ color: pos.color }}></i>
                  </div>
                  <h5 className="fw-bold mb-1">{pos.role}</h5>
                  <p className="fw-semibold text-secondary small mb-2">{pos.org}</p>
                  <p className="text-muted smaller-text">{pos.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}