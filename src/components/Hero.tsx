import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    title: "Premium Quality Furniture",
    subtitle: "For Your Dream Home",
    description: "Discover our collection of handcrafted furniture designed to transform your living spaces.",
    buttonText: "Shop Now",
    buttonLink: "/collection"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    title: "Modern & Elegant",
    subtitle: "Interior Solutions",
    description: "Find the perfect pieces that blend style, comfort and functionality for your home.",
    buttonText: "Explore",
    buttonLink: "/collection"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    title: "Exclusive Designs",
    subtitle: "Crafted With Passion",
    description: "Each piece tells a story of dedication, creativity, and attention to detail.",
    buttonText: "View Collection",
    buttonLink: "/collection"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
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
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <section id="home" className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroSlides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-2xl font-medium text-white mb-2"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-base md:text-xl text-white/90 mb-8 max-w-md"
              >
                {heroSlides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Link 
                  to={heroSlides[currentSlide].buttonLink}
                  className="px-6 py-3 md:px-8 md:py-4 bg-primary-300 text-secondary-800 font-medium rounded-md hover:bg-primary-400 transition-all duration-300 text-sm uppercase tracking-wider inline-flex items-center group"
                >
                  <span>{heroSlides[currentSlide].buttonText}</span>
                  <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows - larger touch targets on mobile */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 md:p-3 rounded-full transition-colors z-10 backdrop-blur-sm mobile-touch-target"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 md:p-3 rounded-full transition-colors z-10 backdrop-blur-sm mobile-touch-target"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Slide indicators - larger for mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
              setIsAnimating(true);
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary-300 w-8 md:w-10' : 'bg-white/50 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;