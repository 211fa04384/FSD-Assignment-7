import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Posts from Public API</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
