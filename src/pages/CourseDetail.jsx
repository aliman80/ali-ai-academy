import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data';
import { Clock, BookOpen, BarChart, CheckCircle2, Wrench } from 'lucide-react';
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = siteData.courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="section text-center">
        <h2>Course Not Found</h2>
        <Link to="/courses" className="btn btn-primary mt-4">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      {/* Header */}
      <section className="course-header">
        <div className="container">
          <h1>{course.title}</h1>
          <p className="course-subtitle">{course.shortDescription}</p>
          
          <div className="course-meta-large flex">
            <div className="meta-item"><Clock /> {course.duration}</div>
            <div className="meta-item"><BarChart /> {course.level}</div>
            <div className="meta-item"><BookOpen /> {course.mode}</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container course-layout">
          <div className="course-main">
            <h2>Course Overview</h2>
            <p>{course.overview}</p>

            <h2 className="mt-8">Who Should Join?</h2>
            <p>{course.whoShouldJoin}</p>

            <h2 className="mt-8">What You Will Learn</h2>
            <ul className="outcomes-list">
              {course.outcomes.map((outcome, idx) => (
                <li key={idx}><CheckCircle2 className="icon" size={20} /> {outcome}</li>
              ))}
            </ul>

            <h2 className="mt-8">Weekly Syllabus</h2>
            <div className="syllabus-list">
              {course.syllabus.map((week, idx) => (
                <div key={idx} className="syllabus-item">
                  {week}
                </div>
              ))}
            </div>
          </div>

          <div className="course-sidebar">
            <div className="card sticky-card">
              <h3 className="fee-title">Course Fee</h3>
              <p className="fee-amount">{course.fee}</p>
              
              <div className="tools-section mt-4 mb-4">
                <h4><Wrench size={18} /> Tools Used</h4>
                <div className="tools-tags">
                  {course.tools.map((tool, idx) => (
                    <span key={idx} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>

              <Link to={`/register?course=${course.id}`} className="btn btn-primary" style={{width: '100%', padding: '1rem', fontSize: '1.1rem'}}>
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
