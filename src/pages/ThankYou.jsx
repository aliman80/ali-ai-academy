import React from 'react';
import { siteData } from '../data';
import { CreditCard, Landmark, CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="section bg-light min-h-screen flex items-center justify-center">
      <div className="container" style={{maxWidth: '800px'}}>
        <div className="card text-center">
          <CheckCircle size={64} color="var(--primary-color)" className="mx-auto mb-4" />
          <h1 className="mb-4">Registration Received!</h1>
          <p className="mb-8" style={{fontSize: '1.1rem'}}>
            Thank you for registering. Your details have been sent to Dr. Ali successfully. 
            To officially secure your spot in the course, please complete your payment using one of the methods below.
          </p>

          <div className="grid grid-cols-2 text-left" style={{gap: '2rem'}}>
            {/* International Payment */}
            <div className="card" style={{border: '2px solid var(--gray-light)', boxShadow: 'none'}}>
              <div className="flex items-center mb-4" style={{gap: '10px'}}>
                <CreditCard size={28} color="var(--primary-color)" />
                <h3 className="m-0">International Students</h3>
              </div>
              <p className="mb-4 text-sm text-gray">Pay securely via Credit/Debit card using Stripe.</p>
              
              <a href="#" className="btn btn-primary" style={{display: 'block', textAlign: 'center'}} onClick={(e) => { e.preventDefault(); alert("Please provide your Stripe Payment Link to update this button."); }}>
                Pay via Stripe
              </a>
            </div>

            {/* Local Payment */}
            <div className="card" style={{border: '2px solid var(--gray-light)', boxShadow: 'none'}}>
              <div className="flex items-center mb-4" style={{gap: '10px'}}>
                <Landmark size={28} color="var(--secondary-color)" />
                <h3 className="m-0">Local Students (Pakistan)</h3>
              </div>
              <p className="mb-4 text-sm text-gray">Direct bank transfer details.</p>
              
              <div className="bg-light p-4 rounded" style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                <strong>Bank Name:</strong> [Your Bank Name]<br/>
                <strong>Account Title:</strong> Dr. Muhammad Ali<br/>
                <strong>Account No:</strong> [Your Account Number]<br/>
                <strong>IBAN:</strong> [Your IBAN]
              </div>
              
              <p className="mt-4 text-sm" style={{color: 'var(--primary-color)', fontWeight: '500'}}>
                After transferring, please share the receipt screenshot on our WhatsApp: {siteData.contact.whatsapp}
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray">
            Once payment is verified, you will receive an email with your Student Portal access credentials.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
