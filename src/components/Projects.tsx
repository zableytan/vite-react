import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather forecasting application that provides real-time weather data and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.imageUrl && (
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.projectUrl && (
                <a href={project.projectUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;