import React from "react";
import data from "../data.json";

const Experience = () => {
  return (
    <>
      <h1>Example 3</h1>
      {data.Experiences.map((info, index) => (
        <div key={index}>
          <img src={info.logo} alt={info.companyName} />
          <p>{info.companyName}</p>
          {info.roles.map((role, roleIndex) => (
            <div key={roleIndex}>
              <p>{role.title}</p>
              <p>
                {role.startDate}
                {role.location}
              </p>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Experience;
