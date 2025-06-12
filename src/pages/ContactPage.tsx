import React from 'react';
import ContactUs from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-6">Contact Us</h1>
        <p className="text-gray-600 max-w-3xl">
          We're here to help with any questions or concerns about our products and services.
        </p>
      </div>
      <ContactUs />
    </div>
  );
};

export default ContactPage;