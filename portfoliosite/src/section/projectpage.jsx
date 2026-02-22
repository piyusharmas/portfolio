import React from 'react';
import ProjectCard from './pcards/pcard';
import credonImg from '../assets/credon.png';
import bf from '../assets/bf.png';
import bys from '../assets/bys.png';

export default function ProjectPage() {
  const projects = [
    { 
      title: "Credon", 
      subtitle: "Full-Stack Trading Dashboard", 
      details: "High-performance MERN simulator featuring real-time market position simulation and interactive portfolio data visualization using Chart.js.",
      image: credonImg,
      link: "https://credondashboard.onrender.com/" // Your project link here
    },
    { 
      title: "Best Friend", 
      subtitle: "Safety-First AI Companion", 
      details: "AI tool with Groq LLM integration. Features real-time crisis detection and automated UI lock/tone-shift during high-risk triggers.",
      image: bf,
      link: "https://frontend-gvrx.onrender.com/"
    },
    { 
      title: "Book Your Stay", 
      subtitle: "Marketplace Platform", 
      details: "Airbnb-style engine with Node.js and MongoDB. Handles full CRUD, secure authentication, and Cloudinary image management.",
      image: bys,
      link: "https://book-your-stay-yv2q.onrender.com/"
    }
  ];

  return (
    <section id='projects' className="project-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold border-bottom border-warning border-4 d-inline-block pb-2">
            Featured Projects
          </h2>
        </div>

        <div className="row flex-nowrap overflow-auto pb-4 custom-scrollbar">
          {projects.map((proj, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-5 col-lg-4">
              <ProjectCard 
                image={proj.image} 
                title={proj.title}
                subtitle={proj.subtitle}
                details={proj.details}
                link={proj.link} // Passing the link to the card
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="https://github.com/piyusharmas" target="_blank" rel="noreferrer" className="btn btn-outline-dark rounded-pill px-5 py-2 shadow-sm fw-bold">
            <i className="bi bi-github me-2"></i> Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}