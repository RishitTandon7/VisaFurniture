import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

// Sample cart items for demonstration
const initialCartItems = [
  {
    id: 1,
    name: "Vienna Sectional Sofa",
    price: 89999,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    quantity: 1,
    color: "Natural"
  },
  {
    id: 3,
    name: "Kyoto Queen Bed",
    price: 73999,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    quantity: 1,
    color: "Walnut"
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const subtotal = calculateSubtotal();
  const shipping = subtotal > 20000 ? 0 : 1500;
  const total = subtotal + shipping;
  
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
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-6">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 md:p-6 border-b last:border-b-0">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Product */}
                      <div className="md:col-span-6 flex items-center">
                        <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-4">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link 
                            to={`/product/${item.id}`}
                            className="font-medium text-[#3A3A3A] hover:text-[#E8C694] transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-500">Color: {item.color}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="md:col-span-2 flex md:block items-center justify-between">
                        <span className="md:hidden text-sm text-gray-500">Price:</span>
                        <span className="font-medium text-[#3A3A3A]">{formatPrice(item.price)}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="md:col-span-2 flex md:justify-center items-center">
                        <span className="md:hidden text-sm text-gray-500 mr-4">Quantity:</span>
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-l-md"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <input 
                            type="number" 
                            min="1" 
                            value={item.quantity} 
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-10 h-8 border-t border-b border-gray-300 text-center text-sm"
                          />
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-r-md"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Subtotal */}
                      <div className="md:col-span-2 flex md:justify-between items-center justify-between">
                        <span className="md:hidden text-sm text-gray-500">Subtotal:</span>
                        <span className="font-medium text-[#3A3A3A]">{formatPrice(item.price * item.quantity)}</span>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
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
                  onClick={() => setCartItems([])}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-[#3A3A3A]">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-[#3A3A3A]">
                      {shipping === 0 ? 'Free' : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-medium text-[#3A3A3A]">Total</span>
                      <span className="font-bold text-xl text-[#3A3A3A]">{formatPrice(total)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Including GST</p>
                  </div>
                </div>
                
                <Link
                  to="/checkout"
                  className="w-full px-6 py-3 bg-[#3A3A3A] text-white font-medium rounded-md hover:bg-[#E8C694] transition-colors flex items-center justify-center"
                >
                  Proceed to Checkout
                </Link>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-[#3A3A3A] mb-4">Have a coupon?</h3>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Enter coupon code" 
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-[#3A3A3A] text-white rounded-r-md hover:bg-[#E8C694] transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-20 w-20 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-[#3A3A3A] mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link
              to="/collection"
              className="px-8 py-3 bg-[#3A3A3A] text-white font-medium rounded-md hover:bg-[#E8C694] transition-colors inline-block"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;