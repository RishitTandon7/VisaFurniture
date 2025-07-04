import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, Heart, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const searchVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-soft py-2' : 'bg-white py-2 md:py-4'
    }`}>
      <motion.div 
        className="hidden lg:block bg-secondary-800 text-white py-2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+91 9807654321</span>
            </div>
            <span className="text-sm">|</span>
            <span className="text-sm">Free shipping on all orders over ₹20,000</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/track-order" className="text-sm hover:text-primary-300 transition-colors">Track Order</Link>
            <span className="text-sm">|</span>
            <Link to="/store-locator" className="text-sm hover:text-primary-300 transition-colors">Store Locator</Link>
          </div>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-xl sm:text-2xl font-bold text-secondary-800">
              VISA<span className="text-primary-300">FURNITURE</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-4 lg:space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="font-medium text-secondary-900 hover:text-primary-300 transition-colors">
              Home
            </Link>
            <Link to="/collection" className="font-medium text-secondary-900 hover:text-primary-300 transition-colors">
              Collection
            </Link>
            <Link to="/category/living-room" className="font-medium text-secondary-900 hover:text-primary-300 transition-colors">
              Living Room
            </Link>
            <Link to="/category/bedroom" className="font-medium text-secondary-900 hover:text-primary-300 transition-colors">
              Bedroom
            </Link>
            <Link to="/category/dining" className="font-medium text-secondary-900 hover:text-primary-300 transition-colors">
              Dining
            </Link>
            <Link to="/about" className="font-medium text-secondary-900 hover:text-primary-300 transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-secondary-900 hover:text-primary-300 transition-colors">
              Contact
            </Link>
          </motion.nav>

          <motion.div 
            className="hidden md:flex items-center space-x-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button 
              className="text-secondary-700 hover:text-primary-300 transition-colors mobile-touch-target"
              onClick={() => setSearchOpen(!searchOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/account" className="text-secondary-700 hover:text-primary-300 transition-colors mobile-touch-target">
                <User className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/wishlist" className="text-secondary-700 hover:text-primary-300 transition-colors relative mobile-touch-target">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <motion.span 
                    className="absolute -top-2 -right-2 bg-primary-300 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/cart" className="text-secondary-700 hover:text-primary-300 transition-colors relative mobile-touch-target">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <motion.span 
                    className="absolute -top-2 -right-2 bg-primary-300 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              className="text-secondary-700 hover:text-primary-300 transition-colors p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="text-secondary-700 hover:text-primary-300 transition-colors relative p-2">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-300 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-700 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Dropdown */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="absolute w-full bg-white shadow-md z-50 p-4"
            variants={searchVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-700 hover:text-primary-300">
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                <span className="text-gray-500 mb-2 sm:mb-0">Popular searches: Sofa, Dining Table, Bed</span>
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="text-primary-300 hover:text-primary-400"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-bold text-secondary-800">VISA<span className="text-primary-300">FURNITURE</span></span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-secondary-700"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-4 px-4 mobile-menu-height overflow-y-auto">
              <ul className="space-y-4">
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/collection"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Collection
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/category/living-room"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Living Room
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/category/bedroom"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Bedroom
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/category/dining"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Dining
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/about"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/contact"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/account"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    My Account
                  </Link>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <Link
                    to="/wishlist"
                    className="text-lg font-medium text-secondary-900 hover:text-primary-300 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Wishlist ({wishlistCount})
                  </Link>
                </motion.li>
              </ul>
              
              <motion.div 
                variants={menuItemVariants}
                className="mt-6 pt-6 border-t border-gray-100"
              >
                <p className="text-gray-500 mb-2">Contact Us</p>
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 text-primary-300 mr-2" />
                  <span className="text-secondary-800">+91 9807654321</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <a href="#" className="bg-primary-300/20 p-2 rounded-full text-primary-300 hover:bg-primary-300 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.4 19.6 18.57C21.16 16.74 22.01 14.39 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-300/20 p-2 rounded-full text-primary-300 hover:bg-primary-300 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.37C6.13 16.88 6.99 17.15 7.89 17.14C6.37 18.34 4.49 19 2.5 19C2.22 19 1.94 18.98 1.67 18.94C3.56 20.24 5.77 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-300/20 p-2 rounded-full text-primary-300 hover:bg-primary-300 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;