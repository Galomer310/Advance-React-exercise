import React, { useState, useEffect } from 'react';

const Example1 = () => {
  const [socialMedias, setSocialMedias] = useState([]);

  useEffect(() => {
    fetch('/Data2.json')
      .then((res) => res.json())
      .then((data) => setSocialMedias(data.SocialMedias))
      .catch((error) => console.error('Error fetching SocialMedias:', error));
  }, []);

  return (
    <div>
      <h1>Social Media Links</h1>
      <ul>
        {socialMedias.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example1;
