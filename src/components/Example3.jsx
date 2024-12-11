import React, { useState, useEffect } from 'react';

const Example3 = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/Data2.json')
      .then((res) => res.json())
      .then((data) => setExperiences(data.Experiences))
      .catch((error) => console.error('Error fetching Experiences:', error));
  }, []);

  return (
    <div>
      <h1>Experiences</h1>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h2>{experience.companyName}</h2>
          <img src={experience.logo} alt={`${experience.companyName} logo`} width="100" />
          <a href={experience.url} target="_blank" rel="noopener noreferrer">
            Visit Company
          </a>
          {experience.roles.map((role, idx) => (
            <div key={idx}>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <p>
                {role.startDate} 
              </p>
              <p>{role.location}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Example3;
