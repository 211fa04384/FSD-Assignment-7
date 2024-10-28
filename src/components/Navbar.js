// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current route

  // Inline styles for the Navbar and links
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#007bff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '1rem',
    },
    links: {
      display: 'flex',
      gap: '30px', // Adjust gap for spacing between links
      border: '1px solid white',
      borderRadius: '20px',
      padding: '5px 15px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    link: {
      textDecoration: 'none',
      fontSize: '1.2rem',
      padding: '12px 25px',
      borderRadius: '8px',
      color: 'white',
      backgroundColor: '#0056b3',
      transition: 'all 0.3s ease',
      fontFamily: 'Arial, sans-serif',
    },
    linkHover: {
      backgroundColor: '#003d80',
      transform: 'scale(1.1)',
    },
    activeLink: {
      fontWeight: 'bold',
      backgroundColor: '#444',
    },
    hoverEffect: {
      cursor: 'pointer',
    },
  };

  // Function to handle hover effects dynamically
  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, styles.linkHover);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, styles.link);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.links}>
        <Link
          to="/"
          style={{
            ...styles.link,
            ...(location.pathname === '/' ? styles.activeLink : {}),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </Link>
        <Link
          to="/posts"
          style={{
            ...styles.link,
            ...(location.pathname === '/posts' ? styles.activeLink : {}),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
