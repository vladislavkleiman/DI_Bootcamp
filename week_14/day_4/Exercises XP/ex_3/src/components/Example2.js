import React from "react";
import data from "../data.json";

const Skills = () => {
  return (
    <>
      <h1>Example 2</h1>
      {data.Skills.map((skillCategory, index) => (
        <div key={index}>
          <h3>{skillCategory.Area}</h3>
          <ul>
            {skillCategory.SkillSet.map((skill, skillIndex) => (
              <li key={skillIndex}>
                {skill.Name} {skill.Hot ? "(Hot)" : ""}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Skills;
