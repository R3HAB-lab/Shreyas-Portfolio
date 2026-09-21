import React, { useState } from 'react'
import './project.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Projects = () => {
  // State to manage modal visibility and active game
  const [activeGame, setActiveGame] = useState(null);

  const projectData = [
    {
      title: "HoloLens Mixed-Reality Visualization",
      subtitle: "MSc Dissertation",
      tech: ["Unity", "HoloToolkit", "C#", "Mixed Reality"],
      description:
        "Designed and built a 3D stereoscopic data visualization app; planned and executed a full test cycle including live user testing and QA sign-off for a mixed-reality application.",
      githubLink:
        "https://github.com/R3HAB-lab/Hololens_Project_Msc",
      playLink: null
    },

    {
      title: "SuperShooter",
      subtitle: "3D Wave-Based Shooter",
      tech: ["Unity", "C#"],
      description:
        "Game prototype focused on avoiding enemies and collecting health items with a little TPS (Third Person Shooter). Combat will consist of shooting projectiles at enemies and collecting required items.",
      playLink:
        "https://play.unity.com/api/v1/games/game/ee3d6a08-4a4f-487b-b003-52c5c8cad3c5/build/latest/frame",
      githubLink: null
    },

    {
      title: "Galactic Action",
      subtitle: "Action Game (Solo Developer)",
      tech: ["Unity", "C#"],
      description:
        "Survive. Clear the Wave. Become the ultimate Space Defender. Repeat.",
      playLink:
        "https://play.unity.com/api/v1/games/game/b78438c0-9f97-407c-b90d-da6ae8ee2bb1/build/latest/frame",
      githubLink: null
    },

    {
      title: "Game Design Document AI Assistant",
      subtitle: "AI Application",
      tech: [
        "Claude API",
        "RAG",
        "Prompt Engineering",
        "LLM Evaluation",
        "Python"
      ],
      description:
        "Built a Game Design Document AI Assistant using the Claude API and RAG over game design pattern references. It helps developers flesh out mechanics, balance ideas, and identify design gaps in rough game concepts, with prompts iteratively refined through automated evaluation.",
      githubLink:
        "https://github.com/R3HAB-lab/Game-design-assistant",
      playLink: null
    },

    {
      title: "MacroTracker",
      subtitle: "Nutrition Tracking App",
      tech: ["React", "JavaScript", "Vite", "Codex"],
      description:
        "A meal-tracking application for monitoring daily macro goals and calories intake.",
      liveLink:
        "https://macro-tracker-olive.vercel.app/"
    }
  ];

  const openGameModal = (game) => {
    setActiveGame(game);
  };

  const closeGameModal = () => {
    setActiveGame(null);
  };

  return (
    <div className="projects" id="projects">

      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="projects-container">

        {projectData.map((project, index) => (
          <div key={index} className="project-card">

            <div className="project-content">

              <div className="project-header">
                <h3>{project.title}</h3>

                {project.subtitle && (
                  <span className="project-subtitle">
                    {project.subtitle}
                  </span>
                )}
              </div>

              <div className="project-tech-stack">
                {project.tech.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="tech-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="project-desc">
                {project.description}
              </p>

            </div>

            {/* Show the relevant project action */}
            {project.playLink ? (

              <button
                onClick={() => openGameModal(project)}
                className="project-play-btn"
              >
                Click to play &rarr;
              </button>

            ) : project.liveLink ? (

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-play-btn"
                style={{
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Visit Website &rarr;
              </a>

            ) : project.githubLink ? (

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-play-btn"
                style={{
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                GitHub Repository &rarr;
              </a>

            ) : (

              <span className="project-no-link">
                Academic Project
              </span>

            )}

          </div>
        ))}

      </div>

      {/* --- Interactive Game Modal Overlay --- */}
      {activeGame && (
        <div
          className="game-modal-overlay"
          onClick={closeGameModal}
        >

          <div
            className="game-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="game-modal-header">

              <h2>{activeGame.title}</h2>

              <button
                className="game-modal-close"
                onClick={closeGameModal}
              >
                &times;
              </button>

            </div>

            <div className="iframe-container">

              <iframe
                src={activeGame.playLink}
                title={activeGame.title}
                allow="fullscreen; autoplay"
                frameBorder="0"
              ></iframe>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Projects