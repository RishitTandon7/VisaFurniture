import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { productsData } from '../data/products';
import ProductCard from './ProductCard';
import { motion, useAnimation } from 'framer-motion';

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office'];

const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);
  
  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = isMobile ? -250 : -300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = isMobile ? 250 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [activeCategory, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      id="products" 
      className="py-12 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-secondary-800 mb-2 md:mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl text-sm md:text-base">
              Discover our handpicked selection of premium quality furniture designed to elevate your home
            </p>
          </motion.div>
          <motion.div 
            className="flex mt-4 md:mt-0 space-x-3 md:space-x-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button 
              onClick={scrollLeft}
              className="p-2 md:p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-primary-300 hover:border-primary-300 hover:text-white transition-all duration-300 mobile-touch-target"
              aria-label="Scroll left"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </motion.button>
            <motion.button 
              onClick={scrollRight}
              className="p-2 md:p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-primary-300 hover:border-primary-300 hover:text-white transition-all duration-300 mobile-touch-target"
              aria-label="Scroll right"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex overflow-x-auto hide-scrollbar py-2 md:flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap mx-1 md:mx-0 md:mr-2 ${
                  activeCategory === category
                    ? 'bg-primary-300 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          ref={sliderRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex space-x-4 md:space-x-6">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                className="min-w-[220px] sm:min-w-[280px] md:min-w-[320px] snap-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-6 md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            className="px-6 py-3 border border-secondary-800 text-secondary-800 font-medium rounded-md hover:bg-primary-300 hover:border-primary-300 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;