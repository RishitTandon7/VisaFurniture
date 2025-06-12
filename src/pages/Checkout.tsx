import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample cart items
const cartItems = [
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

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    saveInfo: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
    // In a real app, this would submit order details to an API
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
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-gray-700 mb-2">State</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Gujarat">Gujarat</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">Payment Method</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === 'creditCard'}
                      onChange={handleChange}
                      className="mr-2 accent-[#E8C694]"
                    />
                    <label htmlFor="creditCard" className="text-gray-700">Credit/Debit Card</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="mr-2 accent-[#E8C694]"
                    />
                    <label htmlFor="upi" className="text-gray-700">UPI</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="mr-2 accent-[#E8C694]"
                    />
                    <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
                  </div>
                </div>
                
                {formData.paymentMethod === 'creditCard' && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        required={formData.paymentMethod === 'creditCard'}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                          required={formData.paymentMethod === 'creditCard'}
                        />
                      </div>
                      <div>
                        <label htmlFor="cardCvv" className="block text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          id="cardCvv"
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleChange}
                          placeholder="XXX"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                          required={formData.paymentMethod === 'creditCard'}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {formData.paymentMethod === 'upi' && (
                  <div>
                    <label htmlFor="upiId" className="block text-gray-700 mb-2">UPI ID</label>
                    <input
                      type="text"
                      id="upiId"
                      name="upiId"
                      placeholder="username@upi"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      required={formData.paymentMethod === 'upi'}
                    />
                  </div>
                )}
                
                <div className="mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="mr-2 accent-[#E8C694]"
                    />
                    <label htmlFor="saveInfo" className="text-gray-700">Save this information for next time</label>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Link
                  to="/cart"
                  className="text-[#3A3A3A] hover:text-[#E8C694] transition-colors"
                >
                  Return to Cart
                </Link>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#3A3A3A] text-white font-medium rounded-md hover:bg-[#E8C694] transition-colors"
                >
                  Complete Order
                </button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">Order Summary</h2>
              
              <div className="max-h-80 overflow-y-auto mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
                    <div className="w-16 h-16 rounded-md overflow-hidden mr-4 relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-[#E8C694] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-[#3A3A3A] text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">Color: {item.color}</p>
                    </div>
                    <div className="font-medium text-[#3A3A3A]">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
              
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
              
              <div className="pt-6 border-t border-gray-200">
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
      </div>
    </div>
  );
};

export default Checkout;