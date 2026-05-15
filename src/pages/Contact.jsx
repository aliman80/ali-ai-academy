import React, { useState } from 'react';
import { siteData } from '../data';
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Standard form submission will be used

  return (
    <div className="contact-page section bg-light">
      <div className="container">
        <h1 className="text-center mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-2 contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="mb-8">Have questions about our courses or need research mentorship? Reach out to us directly or fill out the form.</p>
            
            <div className="info-item">
              <Mail className="icon" size={24} />
              <div>
                <h4>Email</h4>
                <p>{siteData.contact.email}</p>
              </div>
            </div>
            
            <div className="info-item mt-4">
              <Phone className="icon" size={24} />
              <div>
                <h4>WhatsApp</h4>
                <p>{siteData.contact.whatsapp}</p>
              </div>
            </div>
            
            <div className="info-item mt-4">
              <MapPin className="icon" size={24} />
              <div>
                <h4>Location</h4>
                <p>{siteData.contact.location}</p>
              </div>
            </div>

            <div className="info-item mt-4">
              <LinkIcon className="icon" size={24} />
              <div>
                <h4>LinkedIn</h4>
                <a href={siteData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{color: 'var(--secondary-color)', textDecoration: 'underline'}}>Dr. Muhammad Ali</a>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="mb-4">Send a Message</h3>
            <form action="https://formsubmit.co/aliman8@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New Message from Dr. Ali AI Academy Contact Form" />
              <input type="hidden" name="_next" value="https://aliman80.github.io/ali-ai-academy/#/contact" />
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" required className="form-control" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" required className="form-control" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" required className="form-control" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" required className="form-control" rows="5" onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
