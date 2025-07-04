import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "The craftsmanship is exceptional. Every detail of our dining set shows the care and skill that went into making it. It's not just furniture; it's the centerpiece of our home.",
    author: "Sarah Johnson",
    role: "Delhi",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    text: "We furnished our entire office with Visa Furniture pieces. The quality is outstanding, and the designs create exactly the professional yet welcoming atmosphere we wanted for our team.",
    author: "Michael Chen",
    role: "Mumbai",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    text: "I've been collecting Visa Furniture pieces for years. Their commitment to sustainable practices and timeless design makes each purchase feel like an investment in both my home and the planet.",
    author: "Emily Rodriguez",
    role: "Bangalore",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(-1);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <motion.section 
      className="py-16 md:py-24 bg-gradient-to-br from-secondary-50 to-primary-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-300 font-medium mb-2 block uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why our customers choose Visa Furniture for their homes and offices
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <div className="bg-white rounded-lg shadow-elegant p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                    <motion.img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-primary-100"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <motion.svg
                      className="text-primary-300 h-10 w-10 mb-4 opacity-30"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.3, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </motion.svg>
                    <motion.p 
                      className="text-gray-600 text-lg mb-6 italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {testimonials[currentIndex].text}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <p className="font-bold text-secondary-800">{testimonials[currentIndex].author}</p>
                      <p className="text-primary-400">{testimonials[currentIndex].role}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-300 w-10' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (isAnimating) return;
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAnimating(true);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white rounded-full p-3 shadow-elegant text-gray-700 hover:text-primary-300 transition-colors"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white rounded-full p-3 shadow-elegant text-gray-700 hover:text-primary-300 transition-colors"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;