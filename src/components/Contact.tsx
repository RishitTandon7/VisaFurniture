import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Show success message (in a real app)
    alert('Message sent successfully! We will contact you soon.');
  };

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
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-12 md:py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
          <span className="text-primary-300 font-medium mb-2 block uppercase tracking-wider">Contact Us</span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-secondary-800 mb-2 md:mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We're here to help with any questions about our products or services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-soft p-6 md:p-8">
              <h3 className="text-xl font-bold text-secondary-800 mb-4 md:mb-6">Send Us A Message</h3>
              
              <div className="mb-4 md:mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm md:text-base">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent text-sm md:text-base"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-4 md:mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm md:text-base">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent text-sm md:text-base"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              
              <div className="mb-4 md:mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm md:text-base">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent text-sm md:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm md:text-base">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent text-sm md:text-base"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-6 py-3 md:py-3 bg-secondary-800 text-white font-medium rounded-md hover:bg-primary-300 transition-colors uppercase tracking-wider text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.div className="bg-white rounded-lg shadow-soft p-6 md:p-8 mb-6 md:mb-8" variants={itemVariants}>
              <h3 className="text-xl font-bold text-secondary-800 mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary-300/20 p-2 md:p-3 rounded-full">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-secondary-800">Our Showroom</h4>
                    <p className="text-gray-600 text-sm md:text-base">123 Furniture District, Sector 18</p>
                    <p className="text-gray-600 text-sm md:text-base">Noida, Uttar Pradesh 201301</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary-300/20 p-2 md:p-3 rounded-full">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-secondary-800">Phone</h4>
                    <p className="text-gray-600 text-sm md:text-base">+91 98765 43210</p>
                    <p className="text-gray-600 text-sm md:text-base">+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary-300/20 p-2 md:p-3 rounded-full">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-secondary-800">Email</h4>
                    <p className="text-gray-600 text-sm md:text-base">info@visafurniture.com</p>
                    <p className="text-gray-600 text-sm md:text-base">sales@visafurniture.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-primary-300/20 p-2 md:p-3 rounded-full">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-secondary-800">Working Hours</h4>
                    <p className="text-gray-600 text-sm md:text-base">Monday - Saturday: 10am - 8pm</p>
                    <p className="text-gray-600 text-sm md:text-base">Sunday: 11am - 6pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="bg-white rounded-lg shadow-soft overflow-hidden h-48 md:h-64" variants={itemVariants}>
              {/* Replace with actual map or image */}
              <div className="h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm md:text-base">Interactive Map Coming Soon</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;