import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteData } from '../data';

const Registration = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultCourse = queryParams.get('course') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    education: '',
    course: defaultCourse,
    experience: '',
    timing: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Standard HTML form submission

  return (
    <div className="registration-page section bg-light">
      <div className="container" style={{maxWidth: '800px'}}>
        <div className="card">
          <h2 className="text-center mb-8">Course Registration Form</h2>
          <p className="text-center mb-8">
            Please fill out this form to secure your spot. Our team will contact you regarding fee payment and schedule.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="240a4eb5-0c2c-4733-a618-f1af48cf3b6e" />
            <input type="hidden" name="subject" value="New Registration from Dr. Ali AI Academy" />
            <input type="hidden" name="redirect" value="https://aliman80.github.io/ali-ai-academy/#/register" />
            <div className="grid grid-cols-2">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input type="text" name="fullName" required className="form-control" onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input type="email" name="email" required className="form-control" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp Number *</label>
                <input type="tel" name="whatsapp" required className="form-control" onChange={handleChange} placeholder="+1234567890" />
              </div>

              <div className="form-group">
                <label className="form-label">Country / City *</label>
                <input type="text" name="country" required className="form-control" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label className="form-label">Highest Education Level *</label>
                <select name="education" required className="form-control" onChange={handleChange}>
                  <option value="">Select Level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelors Student</option>
                  <option value="masters">Masters Student</option>
                  <option value="phd">PhD Candidate</option>
                  <option value="professional">Working Professional</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Course of Interest *</label>
                <select name="course" required className="form-control" value={formData.course} onChange={handleChange}>
                  <option value="">Select a Course</option>
                  {siteData.courses.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Previous Coding Experience</label>
                <select name="experience" className="form-control" onChange={handleChange}>
                  <option value="">Select Level</option>
                  <option value="none">None</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Class Timing</label>
                <select name="timing" className="form-control" onChange={handleChange}>
                  <option value="">Select Timing</option>
                  <option value="weekdays-evening">Weekdays Evening (GMT)</option>
                  <option value="weekends">Weekends Only (GMT)</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-4">
              <label className="form-label">Additional Message / Questions</label>
              <textarea name="message" className="form-control" rows="4" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-4" style={{width: '100%'}}>
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
