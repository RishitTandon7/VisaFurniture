import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import CustomFurniture from '../components/CustomFurniture';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import ContactUs from '../components/Contact';

const HomePage: React.FC = () => {
  // For scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <CustomFurniture />
      <About />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
      <ContactUs />
    </motion.div>
  );
};

export default HomePage;