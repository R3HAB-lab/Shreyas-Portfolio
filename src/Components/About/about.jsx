import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {

  const experiences = [
    {
      role: "L1 Technical Support Engineer",
      company: "HP Inc.",
      location: "Bengaluru, India",
      duration: "2026 (Jan - Aug)",
      description:
        "Delivered L1.5 technical support for HP enterprise devices by diagnosing hardware and software issues, performing advanced BIOS/F2 diagnostics, OS recovery, and component-level troubleshooting while managing incidents throughout the service lifecycle."
    },
    {
      role: "Sales Representative",
      company: "Camino Trading Company Ltd",
      location: "London, United Kingdom",
      duration: "2023 - 2025",
      description:
        "Delivered high-quality customer service in a fast-paced environment. Resolved customer concerns while maintaining high satisfaction. Trained and mentored new team members."
    },
    {
      role: "Senior Technical Engineer",
      company: "DXC Technology",
      location: "Bengaluru, India",
      duration: "2021 - 2022",
      description:
        "Delivered enterprise application and technical support for a global user base by managing production incidents, troubleshooting hardware, software, authentication, and infrastructure issues while meeting strict SLA commitments."
    },
    {
      role: "OS Hardening Engineer",
      company: "Murata Vios Pvt Ltd",
      location: "Bengaluru, India",
      duration: "2020 (Aug - Oct)",
      description:
        "Developed Python and Bash automation scripts to streamline application migration, release management, and operational processes, reducing manual effort and improving deployment efficiency."
    }
  ];

  const skills = [
    "JavaScript",
    "React",
    "Java",
    "Python",
    "C#",
    "SQL",
    "Git",
    "API Testing",
    "RAG Framework",
    "LLMs",
    "ITIL Process",
    "Unity",
    "Game Development",
    "3D Game Development",
  ];

  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Side-by-Side Wrapper */}
      <div className="about-content-wrapper">
        
        {/* Left Column: About Paragraph */}
        <div className="about-section">
          <div className="about-para">
            <p>
              Fully committed to the philosophy of life-long learning, I'm a software engineer with a deep passion for JavaScript, React and all things software development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I'm not at my computer I like to spend my time keeping fit and playing cricket.
            </p>
          </div>
        </div>

        {/* Right Column: Technical Skills */}
        <div className="skills-section">
          <div className="skill-badges">
            {skills.map((skill, index) => (
              <span className="skill-badge" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Work Experience */}
      <div className="about-experience">

        <div className="experience-title">
          <h2>Work Experience</h2>
        </div>

        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">

              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="experience-duration">{exp.duration}</span>
              </div>

              <p className="experience-company">
                {exp.company} • {exp.location}
              </p>

              <p className="experience-desc">
                {exp.description}
              </p>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default About;