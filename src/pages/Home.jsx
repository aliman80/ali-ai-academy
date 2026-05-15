import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data';
import CourseCard from '../components/CourseCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>{siteData.tagline}</h1>
          <p className="hero-subtitle">
            Join Dr. Muhammad Ali's academy to master deep learning, computer vision, and research methodologies. Practical projects, expert mentorship, and industry-ready skills.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary">View Courses</Link>
            <Link to="/register" className="btn btn-accent">Register Now</Link>
            <Link to="/contact" className="btn btn-outline" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'white'}}>Book Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2>Why Choose Our Academy?</h2>
          <div className="grid grid-cols-3 mt-8">
            <div className="card">
              <h3>Live Classes</h3>
              <p>Interactive sessions with real-time Q&A. No pre-recorded boredom.</p>
            </div>
            <div className="card">
              <h3>Practical Coding</h3>
              <p>Build real-world projects with Python, PyTorch, and Scikit-Learn.</p>
            </div>
            <div className="card">
              <h3>Research Guidance</h3>
              <p>Learn how to read papers, design experiments, and publish your work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section">
        <div className="container">
          <div className="flex" style={{justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
            <h2>Featured Courses</h2>
            <Link to="/courses" className="btn btn-outline">View All</Link>
          </div>
          <div className="grid grid-cols-3">
            {siteData.courses.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
