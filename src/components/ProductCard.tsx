import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  const formattedOldPrice = product.oldPrice ? new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.oldPrice) : null;

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      alert(`Added ${product.name} to wishlist!`);
    } else {
      alert(`Removed ${product.name} from wishlist!`);
    }
  };

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`Added ${product.name} to cart!`);
  };

  const quickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/product/${product.id}`;
  };

  // For mobile devices
  const handleTouch = (e: React.TouchEvent) => {
    if (!isTouched) {
      e.preventDefault();
      setIsTouched(true);
      // Auto-reset touch state after 3 seconds
      setTimeout(() => setIsTouched(false), 3000);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <RouterLink 
        to={`/product/${product.id}`}
        className="group bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouch}
      >
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: (isHovered || isTouched) ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col space-y-2 absolute right-4 top-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ 
                x: (isHovered || isTouched) ? 0 : 20, 
                opacity: (isHovered || isTouched) ? 1 : 0 
              }}
              transition={{ duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 }}
            >
              <motion.button 
                className={`p-2 rounded-full transition-colors shadow-md ${
                  isFavorite 
                    ? 'bg-primary-300 text-white' 
                    : 'bg-white text-gray-700 hover:bg-primary-300 hover:text-white'
                }`}
                onClick={toggleFavorite}
                aria-label="Add to wishlist"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} />
              </motion.button>
              <motion.button 
                className="p-2 bg-white rounded-full text-gray-700 hover:bg-primary-300 hover:text-white transition-colors shadow-md"
                onClick={quickView}
                aria-label="Quick view"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="h-5 w-5" />
              </motion.button>
              <motion.button 
                className="p-2 bg-white rounded-full text-gray-700 hover:bg-primary-300 hover:text-white transition-colors shadow-md"
                onClick={addToCart}
                aria-label="Add to cart"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-primary-300 text-white text-xs font-medium px-3 py-1 rounded-sm shadow-md"
              >
                NEW
              </motion.span>
            )}
            {product.discount && (
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-secondary-800 text-white text-xs font-medium px-3 py-1 rounded-sm shadow-md"
              >
                {product.discount}% OFF
              </motion.span>
            )}
          </div>
        </div>
        <div className="p-3 md:p-4">
          <div className="flex items-center mb-1 md:mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 md:h-4 md:w-4 ${i < Math.floor(product.rating) ? 'text-primary-300 fill-primary-300' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-2">({product.reviewCount})</span>
          </div>
          <h3 className="text-sm md:text-base text-secondary-800 font-medium mb-1 truncate">{product.name}</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">{product.category}</p>
          <div className="flex items-center space-x-2">
            <span className="text-secondary-800 font-bold text-sm md:text-base">{formattedPrice}</span>
            {formattedOldPrice && (
              <span className="text-gray-400 text-xs md:text-sm line-through">
                {formattedOldPrice}
              </span>
            )}
          </div>
        </div>
      </RouterLink>
    </motion.div>
  );
};

export default ProductCard;