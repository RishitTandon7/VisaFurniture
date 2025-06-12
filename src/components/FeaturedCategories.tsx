import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    name: "Living Room",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    count: 124,
    link: "/category/living-room"
  },
  {
    id: 2,
    name: "Bedroom",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    count: 97,
    link: "/category/bedroom"
  },
  {
    id: 3,
    name: "Dining",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    count: 58,
    link: "/category/dining"
  },
  {
    id: 4,
    name: "Office",
    image: "https://images.pexels.com/photos/3740982/pexels-photo-3740982.jpeg",
    count: 46,
    link: "/category/office"
  }
];

const FeaturedCategories: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-12 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-secondary-800 mb-2 md:mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our wide range of furniture categories and find the perfect pieces for your home
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden">
                <motion.img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity group-hover:opacity-90"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1 md:mb-2">{category.name}</h3>
                <p className="text-white/80 mb-4 text-sm md:text-base">{category.count} Products</p>
                <Link 
                  to={category.link}
                  className="px-5 py-2 md:px-6 md:py-2 bg-white text-secondary-800 text-xs md:text-sm font-medium rounded-md hover:bg-primary-300 transition-colors duration-300 uppercase tracking-wider transform group-hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedCategories;