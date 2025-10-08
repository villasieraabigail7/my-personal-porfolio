import React from "react";
import { skills } from "../data/Skill";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
