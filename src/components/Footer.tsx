import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-secondary-800 text-white pt-12 md:pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6">VISA<span className="text-primary-300">FURNITURE</span></h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Premium furniture crafted with passion to transform your living spaces since 2010.
              </p>
              <div className="flex space-x-3 md:space-x-4 mb-6">
                <a href="#" className="bg-primary-300/20 p-2 rounded-full text-primary-300 hover:bg-primary-300 hover:text-white transition-colors">
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href="#" className="bg-primary-300/20 p-2 rounded-full text-primary-300 hover:bg-primary-300 hover:text-white transition-colors">
                  <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href="#" className="bg-primary-300/20 p-2 rounded-full text-primary-300 hover:bg-primary-300 hover:text-white transition-colors">
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href="#" className="bg-primary-300/20 p-2 rounded-full text-primary-300 hover:bg-primary-300 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">123 Furniture District, Noida, UP 201301</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">info@visafurniture.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4 md:mb-6">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/collection" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Blog
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-4 md:mb-6">Categories</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>
                  <Link to="/category/living-room" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Living Room
                  </Link>
                </li>
                <li>
                  <Link to="/category/bedroom" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Bedroom
                  </Link>
                </li>
                <li>
                  <Link to="/category/dining" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Dining
                  </Link>
                </li>
                <li>
                  <Link to="/category/office" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Office
                  </Link>
                </li>
                <li>
                  <Link to="/category/outdoor" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Outdoor
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-4 md:mb-6">Customer Service</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>
                  <Link to="/track-order" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-primary-300 transition-colors inline-block py-1">
                    FAQ
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
              &copy; {currentYear} Visa Furniture. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:space-x-4 text-xs md:text-sm text-gray-500">
              <a href="#" className="hover:text-primary-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;