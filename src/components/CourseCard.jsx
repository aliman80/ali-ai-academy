import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="card course-card">
      <div className="course-card-content">
        <h3>{course.title}</h3>
        <p className="course-desc">{course.shortDescription}</p>
        
        <div className="course-meta">
          <div className="meta-item">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="meta-item">
            <BarChart size={16} />
            <span>{course.level}</span>
          </div>
          <div className="meta-item">
            <BookOpen size={16} />
            <span>{course.mode}</span>
          </div>
        </div>
      </div>
      
      <div className="course-card-actions">
        <Link to={`/courses/${course.id}`} className="btn btn-outline" style={{width: '100%'}}>View Details</Link>
      </div>
    </div>
  );
};

export default CourseCard;
