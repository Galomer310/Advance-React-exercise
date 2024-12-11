import React, { useState, useEffect } from 'react';

const Example2 = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/Data2.json')
      .then((res) => res.json())
      .then((data) => setSkills(data.Skills))
      .catch((error) => console.error('Error fetching Skills:', error));
  }, []);

  return (
    <div>
      <h1>Skills</h1>
      {skills.map((skillArea, index) => (
        <div key={index}>
          <h2>{skillArea.Area}</h2>
          <ul>
            {skillArea.SkillSet.map((skill, idx) => (
              <li key={idx}>
                {skill.Name} 
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Example2;
