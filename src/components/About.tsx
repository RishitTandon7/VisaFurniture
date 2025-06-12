import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="absolute -bottom-6 -right-6 w-full h-full bg-primary-300/20 rounded-lg"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg" 
              alt="About Visa Furniture" 
              className="w-full h-[600px] object-cover rounded-lg shadow-elegant relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          
          <div>
            <motion.span 
              className="text-primary-300 font-medium mb-2 block uppercase tracking-wider"
              variants={itemVariants}
            >
              About Us
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-secondary-800 mb-6"
              variants={itemVariants}
            >
              We Create Furniture With Passion
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              Founded in 2010, Visa Furniture began with a simple vision: to create furniture that harmoniously blends artistry, 
              functionality, and sustainability. Our journey started in a small workshop where our founder, 
              Ashutosh Mittal, crafted his first piece – a minimalist oak dining table that would later become 
              our signature design.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8"
              variants={itemVariants}
            >
              Today, we collaborate with skilled artisans and innovative designers from around the world, 
              maintaining our commitment to exceptional craftsmanship while embracing modern aesthetics. 
              Each Visa Furniture piece tells a story of dedication, creativity, and respect for natural materials.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
              variants={containerVariants}
            >
              <motion.div variants={statsVariants} custom={0}>
                <div className="text-3xl font-bold text-primary-300 mb-2">12+</div>
                <p className="text-gray-700">Years of Experience</p>
              </motion.div>
              <motion.div variants={statsVariants} custom={1}>
                <div className="text-3xl font-bold text-primary-300 mb-2">15K+</div>
                <p className="text-gray-700">Happy Customers</p>
              </motion.div>
              <motion.div variants={statsVariants} custom={2}>
                <div className="text-3xl font-bold text-primary-300 mb-2">5K+</div>
                <p className="text-gray-700">Furniture Items</p>
              </motion.div>
              <motion.div variants={statsVariants} custom={3}>
                <div className="text-3xl font-bold text-primary-300 mb-2">25+</div>
                <p className="text-gray-700">Awards Won</p>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className="px-8 py-3 bg-secondary-800 text-white font-medium rounded-md hover:bg-primary-300 transition-all duration-300 uppercase tracking-wider transform hover:-translate-y-1"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;