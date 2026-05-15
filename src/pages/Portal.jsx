import React, { useState } from 'react';
import { siteData } from '../data';
import { Folder, Video, FileText, Database, Lock } from 'lucide-react';
import './Portal.css';

const Portal = () => {
  const [selectedCourse, setSelectedCourse] = useState(siteData.courses[0].id);

  const getIcon = (type) => {
    switch(type) {
      case 'video': return <Video size={20} className="icon-video" />;
      case 'pdf': return <FileText size={20} className="icon-pdf" />;
      case 'colab': return <Database size={20} className="icon-colab" />;
      case 'dataset': return <Database size={20} className="icon-dataset" />;
      default: return <FileText size={20} />;
    }
  };

  return (
    <div className="portal-page section bg-light">
      <div className="container">
        <div className="portal-header flex mb-8">
          <div>
            <h1>Student Portal</h1>
            <p>Access your lecture materials, videos, and assignments.</p>
          </div>
          <div className="portal-auth">
            <span className="auth-badge"><Lock size={16} /> Currently Demo Mode</span>
          </div>
        </div>

        <div className="portal-layout">
          {/* Sidebar / Folders */}
          <div className="portal-sidebar card">
            <h3 className="mb-4">My Courses</h3>
            <ul className="course-folders">
              {siteData.courses.map(course => {
                // Only show if we have dummy data for it, or just show all
                const isActive = selectedCourse === course.id;
                return (
                  <li 
                    key={course.id} 
                    className={`folder-item ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCourse(course.id)}
                  >
                    <Folder size={18} className={isActive ? "icon-active" : "icon-inactive"} />
                    {course.title}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="portal-content card">
            <h2 className="mb-4">Course Materials</h2>
            
            <div className="material-list">
              {siteData.lectures[selectedCourse] ? (
                siteData.lectures[selectedCourse].map(lecture => (
                  <div key={lecture.id} className="material-item">
                    <div className="material-info">
                      {getIcon(lecture.type)}
                      <span className="material-title">{lecture.title}</span>
                    </div>
                    <a href={lecture.url} className="btn btn-outline btn-sm">Open</a>
                  </div>
                ))
              ) : (
                <div className="empty-state text-center">
                  <Folder size={48} className="mb-4" style={{color: 'var(--border-color)'}} />
                  <p>No materials uploaded for this course yet.</p>
                  <p className="text-light text-sm">Instructor: Check README on how to add materials.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
