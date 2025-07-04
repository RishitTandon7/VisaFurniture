import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';

// Sample order data
const orders = [
  {
    id: '#ORD-9385',
    date: '2023-03-15',
    status: 'Delivered',
    total: 89999,
    items: 1
  },
  {
    id: '#ORD-8264',
    date: '2023-02-28',
    status: 'Processing',
    total: 45999,
    items: 1
  },
  {
    id: '#ORD-7103',
    date: '2023-01-10',
    status: 'Delivered',
    total: 142998,
    items: 2
  }
];

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
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
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#E8C694] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    AS
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[#3A3A3A]">Ankit Sharma</h3>
                    <p className="text-gray-500 text-sm">customer@example.com</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <nav>
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center p-3 rounded-md mb-2 ${
                      activeTab === 'dashboard' 
                        ? 'bg-[#E8C694]/10 text-[#E8C694]' 
                        : 'text-gray-600 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    <User className="h-5 w-5 mr-3" />
                    <span>Dashboard</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center p-3 rounded-md mb-2 ${
                      activeTab === 'orders' 
                        ? 'bg-[#E8C694]/10 text-[#E8C694]' 
                        : 'text-gray-600 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    <Package className="h-5 w-5 mr-3" />
                    <span>Orders</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full flex items-center p-3 rounded-md mb-2 ${
                      activeTab === 'wishlist' 
                        ? 'bg-[#E8C694]/10 text-[#E8C694]' 
                        : 'text-gray-600 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    <Heart className="h-5 w-5 mr-3" />
                    <span>Wishlist</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center p-3 rounded-md mb-2 ${
                      activeTab === 'settings' 
                        ? 'bg-[#E8C694]/10 text-[#E8C694]' 
                        : 'text-gray-600 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Account Settings</span>
                  </button>
                  
                  <button 
                    onClick={() => alert('Logged out successfully!')}
                    className="w-full flex items-center p-3 rounded-md text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    <span>Logout</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">Dashboard</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-3xl font-bold text-[#3A3A3A] mb-2">3</div>
                    <div className="text-gray-600">Total Orders</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-3xl font-bold text-[#3A3A3A] mb-2">5</div>
                    <div className="text-gray-600">Wishlist Items</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-3xl font-bold text-[#3A3A3A] mb-2">2</div>
                    <div className="text-gray-600">Reviews</div>
                  </div>
                </div>
                
                <h3 className="font-bold text-[#3A3A3A] mb-4">Recent Orders</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 text-sm">
                        <th className="pb-3 font-medium">Order</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Total</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={order.id} className={index < orders.length - 1 ? "border-b border-gray-200" : ""}>
                          <td className="py-4 font-medium text-[#3A3A3A]">{order.id}</td>
                          <td className="py-4 text-gray-600">{order.date}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : order.status === 'Processing'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 font-medium text-[#3A3A3A]">{formatPrice(order.total)}</td>
                          <td className="py-4">
                            <button className="text-[#E8C694] hover:underline">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6">
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className="text-[#E8C694] hover:underline"
                  >
                    View All Orders
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">My Orders</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 text-sm">
                        <th className="pb-3 font-medium">Order</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Total</th>
                        <th className="pb-3 font-medium">Items</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={order.id} className={index < orders.length - 1 ? "border-b border-gray-200" : ""}>
                          <td className="py-4 font-medium text-[#3A3A3A]">{order.id}</td>
                          <td className="py-4 text-gray-600">{order.date}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : order.status === 'Processing'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 font-medium text-[#3A3A3A]">{formatPrice(order.total)}</td>
                          <td className="py-4 text-gray-600">{order.items}</td>
                          <td className="py-4">
                            <button className="text-[#E8C694] hover:underline">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {orders.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                    <button 
                      onClick={() => window.location.href = '/collection'}
                      className="px-6 py-2 bg-[#3A3A3A] text-white rounded-md hover:bg-[#E8C694] transition-colors"
                    >
                      Start Shopping
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">My Wishlist</h2>
                
                <p className="text-gray-600 mb-4">You have 5 items in your wishlist.</p>
                <button 
                  onClick={() => window.location.href = '/wishlist'}
                  className="px-6 py-2 bg-[#3A3A3A] text-white rounded-md hover:bg-[#E8C694] transition-colors"
                >
                  View Wishlist
                </button>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#3A3A3A] mb-6">Account Settings</h2>
                
                <form>
                  <div className="mb-8">
                    <h3 className="font-medium text-[#3A3A3A] mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          defaultValue="Ankit"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          defaultValue="Sharma"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          defaultValue="customer@example.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          defaultValue="+91 98765 43210"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium text-[#3A3A3A] mb-4">Default Address</h3>
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                      <textarea
                        id="address"
                        rows={3}
                        defaultValue="123 Furniture District, Sector 18"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          id="city"
                          defaultValue="Noida"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-gray-700 mb-2">State</label>
                        <input
                          type="text"
                          id="state"
                          defaultValue="Uttar Pradesh"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-gray-700 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          id="zip"
                          defaultValue="201301"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium text-[#3A3A3A] mb-4">Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="currentPassword" className="block text-gray-700 mb-2">Current Password</label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="md:row-span-2"></div>
                      <div>
                        <label htmlFor="newPassword" className="block text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="px-6 py-2 mr-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#3A3A3A] text-white rounded-md hover:bg-[#E8C694] transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;