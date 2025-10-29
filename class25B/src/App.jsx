import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Fetch Posts</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <span className="id">{p.id} -</span>
            <span className="title">{p.title}</span> —
            <span className="body">{p.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App