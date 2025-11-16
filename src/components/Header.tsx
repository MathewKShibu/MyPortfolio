/**
 * Header component
 * Displays the navigation bar with links to different sections of the portfolio.
 * Uses React Router's NavLink for route-based styling.
 */
import { Link } from 'react-router-dom';
import profilepic from '../assets/profilepic_system.jpg';

function Header() {
  return (
    <header className='Header'>
      <nav className='navbar'>
        <div className='logoContainer'>
          <img src={profilepic} className="logo" alt="Profile" />
        </div>
        <ul className='navLinks'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;