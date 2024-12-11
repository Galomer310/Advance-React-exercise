import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('./Data.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div>
      <h1>Hi This is a Title</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
