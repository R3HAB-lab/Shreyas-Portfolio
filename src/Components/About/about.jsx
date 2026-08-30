import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import skills_img from '../../assets/skills.jpg'

const About = () => {
  // Experience data array - update with your own details
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      description: "Leading frontend development using React, optimizing web application performance, and mentoring junior developers."
    },
    {
      role: "Frontend Developer",
      company: "Digital Innovations Hub",
      duration: "2021 - 2023",
      description: "Built responsive, interactive user interfaces, integrated RESTful APIs, and collaborated with UI/UX designers."
    },
    {
      role: "Junior Web Developer",
      company: "Webcraft Studio",
      duration: "2020 - 2021",
      description: "Developed and maintained client websites using JavaScript, HTML/CSS, and modern web standards."
    }
  ];

  return (
    <div className='about'  id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-para">
          <p>
            Fully committed to the philosophy of life-long learning, I'm a software engineer with a deep passion for JavaScript, React and all things software development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I'm not at my computer I like to spend my time keeping fit and playing cricket.
          </p>
        </div>
        <div className="about-skills">
          <img src={skills_img} alt="My Skills" className="skills-img" />
        </div>
      </div>

      {/* Work Experience Section */}
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
              <p className="experience-company">{exp.company}</p>
              <p className="experience-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About