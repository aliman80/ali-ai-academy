import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data';
import { CheckCircle } from 'lucide-react';
import './ResearchMentorship.css';

const ResearchMentorship = () => {
  return (
    <div className="research-page section bg-light">
      <div className="container">
        <div className="text-center mb-8">
          <h1>Research Mentorship & Thesis Guidance</h1>
          <p className="subtitle mx-auto" style={{maxWidth: '700px'}}>
            Accelerate your academic journey with expert guidance from a PhD scholar. Learn how to identify gaps, conduct robust experiments, and publish in high-impact venues.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8 align-items-center" style={{gap: '4rem'}}>
          <div className="services-list card">
            <h2 className="mb-4">My Mentorship Services</h2>
            <ul className="custom-list">
              {siteData.services.map((service, idx) => (
                <li key={idx} className="service-item">
                  <CheckCircle size={24} className="icon-accent" />
                  <div>
                    <h4>{service.title}</h4>
                    <p className="text-sm mt-2">{service.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mentorship-cta">
            <div className="card text-center" style={{backgroundColor: 'var(--primary-color)', color: 'white'}}>
              <h3 style={{color: 'white'}}>Ready to publish your first paper?</h3>
              <p style={{color: '#CBD5E1', marginBottom: '2rem'}}>
                Book a one-on-one session with Dr. Ali to discuss your research topic, methodology, or paper draft.
              </p>
              <Link to="/contact" className="btn btn-accent" style={{width: '100%'}}>Book Free Consultation</Link>
            </div>
            
            <div className="card mt-4">
              <h3 className="mb-2">Are you a beginner?</h3>
              <p className="mb-4">If you are new to research, I highly recommend taking my structured research course before booking a 1-on-1 session.</p>
              <Link to="/courses/research-writing" className="btn btn-outline" style={{width: '100%'}}>View Research Course</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchMentorship;
