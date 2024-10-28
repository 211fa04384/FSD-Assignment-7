import Home from './components/Home';
import Posts from './components/Posts';


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={navStyle}>
            <li>
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/posts" style={linkStyle}>Posts</Link>
            </li>
          </ul>
        </nav>

        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

// Inline styles for navigation
const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#007bff',
  padding: '10px',
};

const linkStyle = {
  color: 'white',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '18px',
};

export default App;
