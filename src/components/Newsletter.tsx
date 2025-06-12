import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 500);
  };

  return (
    <motion.section 
      className="py-12 md:py-24 bg-gradient-to-r from-secondary-800 to-secondary-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary-300/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-300/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span 
            className="text-primary-300 font-medium mb-2 block uppercase tracking-wider text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Newsletter
          </motion.span>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Subscribe To Our Newsletter
          </motion.h2>
          
          <motion.p 
            className="text-white/80 mb-6 md:mb-8 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with our latest collections, exclusive offers, and interior design tips
          </motion.p>
          
          {isSubmitted ? (
            <motion.div 
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="text-white text-lg font-medium">Thank you for subscribing!</p>
                <p className="text-white/80 mt-2 text-sm md:text-base">
                  We've sent a confirmation email to your inbox. Please check your email to complete the subscription process.
                </p>
                <motion.button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-primary-300 underline hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe another email
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white/10 backdrop-blur-sm text-white border border-white/20 placeholder:text-white/60"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary-300 text-secondary-800 font-medium rounded-md hover:bg-primary-200 transition-all duration-300 sm:flex-shrink-0 uppercase tracking-wider text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          )}
          
          <motion.p 
            className="text-white/60 text-xs md:text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;