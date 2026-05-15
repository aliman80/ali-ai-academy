import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-3 footer-grid">
        <div className="footer-col">
          <h3>{siteData.academyName}</h3>
          <p>{siteData.tagline}</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Dr. Ali</Link></li>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/research">Research Mentorship</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: {siteData.contact.email}</li>
            <li>WhatsApp: {siteData.contact.whatsapp}</li>
            <li>Location: {siteData.contact.location}</li>
            <li><a href={siteData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {siteData.academyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
