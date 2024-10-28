// src/components/PostDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));

    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [postId]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}:</strong> {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
