import React from 'react';
import { siteData } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
  const { about } = siteData;
  
  return (
    <div className="about-page">
      <section className="section bg-white">
        <div className="container">
          <div className="about-header text-center mb-8">
            <h1>About {about.name}</h1>
            <p className="subtitle">{about.credentials}</p>
          </div>
          
          <div className="about-content grid grid-cols-2">
            <div className="about-image-container">
              {/* Placeholder for professional photo */}
              <div className="image-placeholder">
                <span className="placeholder-text">Professional Photo of Dr. Ali</span>
              </div>
            </div>
            
            <div className="about-text">
              <h2>My Journey in AI</h2>
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              
              <div className="highlights grid grid-cols-2 mt-4">
                <div className="highlight-item">
                  <GraduationCap className="icon" size={24} />
                  <span>PhD from MBZUAI</span>
                </div>
                <div className="highlight-item">
                  <BookOpen className="icon" size={24} />
                  <span>Research Publications</span>
                </div>
                <div className="highlight-item">
                  <Award className="icon" size={24} />
                  <span>Computer Vision Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
