import React from 'react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-6">About Us</h1>
        <p className="text-gray-600 max-w-3xl">
          Learn more about our journey, mission, and the passionate team behind Visa Furniture.
        </p>
      </div>
      <About />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default AboutPage;