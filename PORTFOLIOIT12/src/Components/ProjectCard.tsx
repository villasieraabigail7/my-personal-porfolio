import React from "react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
