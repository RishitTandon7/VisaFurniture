import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from 'lucide-react';

// Sample wishlist items
const initialWishlistItems = [
  {
    id: 5,
    name: "Stockholm Accent Chair",
    price: 32999,
    image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg",
    category: "Living Room"
  },
  {
    id: 7,
    name: "Paris Coffee Table",
    price: 18999,
    image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
    category: "Living Room"
  },
  {
    id: 2,
    name: "Oslo Dining Table",
    price: 45999,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    category: "Dining"
  },
  {
    id: 4,
    name: "Madrid Executive Desk",
    price: 52999,
    image: "https://images.pexels.com/photos/3740982/pexels-photo-3740982.jpeg",
    category: "Office"
  },
  {
    id: 8,
    name: "Barcelona Wardrobe",
    price: 59999,
    image: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
    category: "Bedroom"
  }
];

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  
  const removeItem = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };
  
  const addToCart = (id: number) => {
    alert(`Added ${wishlistItems.find(item => item.id === id)?.name} to cart!`);
    // In a real app, this would dispatch to a cart state/context
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-6">Your Wishlist</h1>
        
        {wishlistItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => addToCart(item.id)}
                          className="p-2 bg-white rounded-full text-gray-700 hover:bg-[#E8C694] hover:text-white transition-colors"
                          aria-label="Add to cart"
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="p-2 bg-white rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition-colors"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link 
                      to={`/product/${item.id}`}
                      className="block font-medium text-[#3A3A3A] hover:text-[#E8C694] transition-colors mb-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#3A3A3A]">{formatPrice(item.price)}</span>
                      <Heart className="h-5 w-5 text-[#E8C694] fill-[#E8C694]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between">
              <Link
                to="/collection"
                className="flex items-center text-[#3A3A3A] hover:text-[#E8C694] transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
              <button 
                onClick={() => setWishlistItems([])}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Clear Wishlist
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-20 w-20 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-[#3A3A3A] mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">You haven't added any products to your wishlist yet.</p>
            <Link
              to="/collection"
              className="px-8 py-3 bg-[#3A3A3A] text-white font-medium rounded-md hover:bg-[#E8C694] transition-colors inline-block"
            >
              Discover Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;