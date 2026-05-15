import React from 'react';
import { siteData } from '../data';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-page section bg-white">
      <div className="container">
        <h1 className="text-center mb-8">What Our Students Say</h1>
        
        <div className="grid grid-cols-3 mt-8">
          {siteData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card testimonial-card">
              <Quote size={32} className="quote-icon mb-4" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author mt-4">
                <h4>{testimonial.name}</h4>
                <span className="text-light text-sm">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
