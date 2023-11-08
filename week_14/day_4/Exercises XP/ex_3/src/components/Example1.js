import React from "react";
import data from "../data.json";

const SocialMedias = () => {
  return (
    <>
      <h1>Example 1</h1>
      <ul>
        {data.SocialMedias.map((link, index) => (
          <li key={index}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialMedias;
