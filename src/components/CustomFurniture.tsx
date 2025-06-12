import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CustomFurniture: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: custom * 0.2,
        duration: 0.6, 
        ease: "easeOut" 
      }
    })
  };

  const checkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: custom * 0.1 + 0.4,
        duration: 0.4, 
        ease: "easeOut" 
      }
    })
  };

  return (
    <motion.section 
      className="py-16 md:py-24 bg-accent-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-lg">
              <motion.span 
                className="text-primary-300 font-medium mb-2 block uppercase tracking-wider"
                variants={itemVariants}
              >
                Custom Design
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-bold text-secondary-800 mb-6"
                variants={itemVariants}
              >
                Create Your Dream Furniture
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-8"
                variants={itemVariants}
              >
                Can't find exactly what you're looking for? Our expert craftsmen can create custom furniture tailored to your specific needs and preferences. From personalized dimensions to unique designs, we bring your vision to life with premium materials and superior craftsmanship.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                <motion.li 
                  className="flex items-start"
                  variants={checkVariants}
                  custom={0}
                >
                  <div className="flex-shrink-0 mt-1 bg-primary-300 rounded-full p-1">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Personalized design consultation</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={checkVariants}
                  custom={1}
                >
                  <div className="flex-shrink-0 mt-1 bg-primary-300 rounded-full p-1">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Premium quality materials</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={checkVariants}
                  custom={2}
                >
                  <div className="flex-shrink-0 mt-1 bg-primary-300 rounded-full p-1">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Expert craftsmanship</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={checkVariants}
                  custom={3}
                >
                  <div className="flex-shrink-0 mt-1 bg-primary-300 rounded-full p-1">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Perfect fit guarantee</p>
                </motion.li>
              </motion.ul>
              <motion.div
                variants={itemVariants}
              >
                <Link 
                  to="/custom-design"
                  className="inline-block px-8 py-3 bg-secondary-800 text-white font-medium rounded-md hover:bg-primary-300 transition-all duration-300 uppercase tracking-wider transform hover:-translate-y-1"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  variants={imageVariants}
                  custom={0}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-elegant"
                >
                  <img 
                    src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg" 
                    alt="Custom furniture craftsmanship" 
                    className="rounded-lg h-64 w-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  custom={1}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-elegant"
                >
                  <img 
                    src="https://images.pexels.com/photos/4112553/pexels-photo-4112553.jpeg" 
                    alt="Furniture workshop" 
                    className="rounded-lg h-40 w-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  variants={imageVariants}
                  custom={2}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-elegant"
                >
                  <img 
                    src="https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg" 
                    alt="Quality materials" 
                    className="rounded-lg h-40 w-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  custom={3}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-elegant"
                >
                  <img 
                    src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg" 
                    alt="Furniture design process" 
                    className="rounded-lg h-64 w-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CustomFurniture;