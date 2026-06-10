import React, { useState } from "react";

const ExperienceCard = ({
  exp,
  index,
  expanded,
  onToggle
}) => {
  return (
    <article
      className={`experience ${expanded ? "expanded" : ""} experience-${index + 1}`}
    >
      <button
        type="button"
        className={"experience-button"}
        onClick={onToggle}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${exp.title}`}
      >
        <h3>{exp.title}</h3>
        <p>{exp.text}</p>

        <div className="expand-hint">
          <span>
            {expanded ? "Click to collapse" : "Click to expand"}
          </span>

          <span
            className="expand-icon"
            aria-hidden="true"
          >
            ▼
          </span>
        </div>

        <div className="image-container">
          {exp.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${exp.alt}; screenshot ${i + 1}`}
            />
          ))}
        </div>
      </button>
    </article>
  );
};

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      title: "Getting Started",
      text: "I joined Mimo on November 2, 2024, and completed the Front-End Developer learning path. This included all lessons and practice projects in the course. I earned a certificate of completion after finishing the program.",
      images: [
        "https://vbeventstorage.blob.core.windows.net/cert-p4idc5hluuf40ouy-8q7a/cert_images/3919be2b-103b-4231-aa0c-be8cb5f137c6.png?732"
      ],
      alt: "Front-End Development Mimo Certificate"
    },
    {
      title: "Learning Path",
      text: "I reviewed what I learned between lessons and strengthened my skills by using map(), async/await, React Hooks, ect when needed.",
      images: [
        "https://i.imgur.com/BmZ9ZTH.jpeg",
        "https://i.imgur.com/B5Mvy6w.jpeg"
      ],
      alt: "Pokedex Guided Project Completion"
    },
    {
      title: "Using My Skills",
      text: "I completed multiple projects to apply what I learned. I also kept reviewing what i learned to build long-term knowledge.",
      images: [
        "https://i.imgur.com/9i02a4c.png",
        "https://i.imgur.com/wxSBXAO.png",
        "https://i.imgur.com/45mBidx.png"
      ],
      alt: "A Project"
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="section-title white-title">My Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          exp={exp}
          index={index}
          expanded={expandedIndex === index}
          onToggle={() => toggleExpand(index)}
        />
      ))}
    </>
  );
};

export default Experience;