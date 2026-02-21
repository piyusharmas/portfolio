import React from 'react';

export default function Education() {
  const eduData = [
    { year: "2018 - 2021", degree: "High School Degree", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { year: "2021 - 2024", degree: "Bachelor's Degree", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { year: "2024 - 2026", degree: "Master's Degree", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-success fw-bold mb-4">EDUCATION</h2>
      <div className="timeline-container ps-4">
        {eduData.map((item, index) => (
          <div key={index} className="timeline-item mb-4 position-relative">
            {/* The Dot */}
            <div className="timeline-dot"></div>
            
            {/* The Card */}
            <div className="card edu-card border-0 shadow-sm p-3">
              <span className="text-success small fw-bold">{item.year}</span>
              <h5 className="fw-bold mt-1">{item.degree}</h5>
              <p className="text-muted small mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}