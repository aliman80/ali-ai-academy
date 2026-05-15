import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          {siteData.academyName}
        </Link>
        
        {/* Desktop Menu */}
        <nav className="navbar-links desktop-only">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/research">Research Mentorship</Link>
          <Link to="/portal">Student Portal</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="navbar-actions desktop-only">
          <Link to="/register" className="btn btn-primary">Register Now</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/courses" onClick={closeMenu}>Courses</Link>
          <Link to="/research" onClick={closeMenu}>Research Mentorship</Link>
          <Link to="/portal" onClick={closeMenu}>Student Portal</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/register" className="btn btn-primary mt-4" onClick={closeMenu}>Register Now</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
