import React from 'react';

export default function Education() {
  const eduData = [
    { 
      year: "Aug 2023 - May 2027", 
      degree: "Bachelors of Technology, Computer Science Engg.", 
      institution: "Manav Rachna University, Faridabad",
      desc: "Currently pursuing B.Tech with a CGPA of 7.89." 
    },
    { 
      year: "2023", 
      degree: "Senior Secondary", 
      institution: "Scholars Pride, Faridabad",
      desc: "Completed with an aggregate score of 80%." 
    },
    { 
      year: "2021", 
      degree: "Secondary", 
      institution: "Scholars Pride, Faridabad",
      desc: "Completed with an aggregate score of 89%." 
    }
  ];

  return (
    <section id="education" className="py-5 bg-white">
      <div className="container">
        {/* Centered Heading with Theme Underline */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold border-bottom border-warning border-4 d-inline-block pb-2">
            Education
          </h2>
        </div>

        <div className="timeline-container ps-4 position-relative">
          {eduData.map((item, index) => (
            <div key={index} className="timeline-item mb-5 position-relative">
              {/* Theme-colored Dot */}
              <div className="timeline-dot shadow-sm"></div>
              
              {/* Education Card with Real Data */}
              <div className="card edu-card border-0 shadow-sm p-4 bg-white">
                <span className="text-muted small fw-bold text-uppercase mb-2 d-block">
                  {item.year}
                </span>
                <h4 className="fw-bold mt-1" style={{ color: '#ff6b00' }}>{item.degree}</h4>
                <h6 className="fw-semibold text-secondary">{item.institution}</h6>
                <p className="text-muted mb-0 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}