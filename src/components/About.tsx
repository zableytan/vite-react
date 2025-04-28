import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content" data-testid="about-content">
        <div className="about-text">
          <p>
            Hi! I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
            I love creating efficient, scalable, and user-friendly applications that solve real-world problems.

          </p>
          <p>
            With experience in both front-end and back-end development, I bring a comprehensive approach
            to every project I work on. I'm always eager to learn new technologies and best practices
            to deliver the best possible solutions.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-item">
            <h3>Experience</h3>
            <p>5+ years in web development</p>
          </div>
          <div className="detail-item">
            <h3>Education</h3>
            <p>B.S. in Computer Science</p>
          </div>
          <div className="detail-item">
            <h3>Location</h3>
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;