import React, {useState} from "react";
import githubLogo from './assets/GithubLogo.png';
import playButton from './assets/PlayButton.png';

const ProjectCard = ({ project }) => {
  const [hoverSide, setHoverSide] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x < rect.width / 2) {
      setHoverSide("left");
    } else {
      setHoverSide("right");
    }
  };

  const handleClick = () => {
    const url =
      hoverSide === "left"
        ? project.github_url
        : project.url;

    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <article
      className="project"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverSide(null)}
      onClick={handleClick}
    >
      {/* TOP LEFT */}
      <div
        className={`corner left ${hoverSide === "left" ? "active" : ""}`}
        aria-hidden="true"
      >
        <img
          src={githubLogo}
          alt=""
          aria-hidden="true"
        />
        <span>Repo</span>
      </div>

      {/* TOP RIGHT */}
      <div
        className={`corner right ${hoverSide === "right" ? "active" : ""}`}
        aria-hidden="true"
      >
        <img
          src={playButton}
          alt=""
          aria-hidden="true"
        />
        <span>Run</span>
      </div>

      <img
        src={project.image}
        alt={`${project.title} Icon`}
      />

      <h3>{project.title}</h3>
      <p>{project.text}</p>

      <div className="sr-only">
        <a
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source code for {project.title}
        </a>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Run {project.title}
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const projects = [
    {
      image: "https://static.thenounproject.com/png/grid-icon-6359842-512.png",
      title: "Wordle Game",
      text: "An interactive word game that uses a confetti CDN and remembers users.",
      github_url: "",
      url: ""
    },
    {
      image: "https://static.thenounproject.com/png/weather-icon-8021698-512.png",
      title: "Weather App",
      text: "A location-based weather app that uses API calls and displays results.",
      github_url: "",
      url: ""
    },
    {
      image: "https://static.thenounproject.com/png/circuit-icon-6562279-512.png",
      title: "Circuit Craft",
      text: "A circuit maker using HTML5 Canvas to allow users to model electronic designs.",
      github_url: "",
      url: ""
    },
    {
      image: "https://static.thenounproject.com/png/type-icon-5035764-512.png",
      title: "Typing Speed Test",
      text: "A typing practice website that handles typing and shows live statistics.",
      github_url: "",
      url: ""
    },
    {
      image: "https://static.thenounproject.com/png/to-do-icon-1628178-512.png",
      title: "Momentum List",
      text: "A to-do list app that organizes tasks and handles custom categories.",
      github_url: "",
      url: ""
    },
    {
      image: "https://static.thenounproject.com/png/stickman-fast-running-icon-5232770-512.png",
      title: "Stickman Hook",
      text: "A physics-based stickman game that lets you hook anchors and bounce through levels.",
      github_url: "",
      url: ""
    }
  ];

  return (
    <>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
