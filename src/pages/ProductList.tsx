import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface ProductListProps {
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({ category: propCategory }) => {
  const { category: paramCategory } = useParams<{ category: string }>();
  const category = paramCategory || propCategory || 'all';
  
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    let filtered = productsData;
    
    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    if (sortBy === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(filtered);
  }, [category, priceRange, sortBy]);
  
  const categoryTitle = category === 'all' ? 'All Products' : 
    category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-2">{categoryTitle}</h1>
            <p className="text-gray-600">Showing {filteredProducts.length} products</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
              <select 
                id="sort" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E8C694] focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            
            <button 
              className="flex items-center space-x-2 px-4 py-2 bg-[#3A3A3A] text-white rounded-md md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-1/4 lg:w-1/5`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#3A3A3A]">Filters</h3>
                <SlidersHorizontal className="h-5 w-5 text-gray-600" />
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-[#3A3A3A] mb-3">Price Range</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">₹{priceRange[0].toLocaleString()}</span>
                  <span className="text-gray-600">₹{priceRange[1].toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100000" 
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#E8C694]"
                />
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-[#3A3A3A] mb-3">Categories</h4>
                <div className="space-y-2">
                  {['All', 'Living Room', 'Bedroom', 'Dining', 'Office'].map((cat) => (
                    <div key={cat} className="flex items-center">
                      <input 
                        type="radio"
                        id={cat}
                        name="category"
                        checked={category.toLowerCase() === cat.toLowerCase() || 
                                (cat === 'All' && category === 'all')}
                        onChange={() => {
                          // Would use navigate in a real app
                          window.history.pushState({}, '', 
                            cat.toLowerCase() === 'all' 
                              ? '/collection' 
                              : `/category/${cat.toLowerCase()}`
                          );
                          window.location.reload();
                        }}
                        className="mr-2 accent-[#E8C694]"
                      />
                      <label htmlFor={cat} className="text-gray-700">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full px-4 py-2 bg-[#E8C694] text-[#3A3A3A] font-medium rounded-md hover:bg-[#d4b178] transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-3/4 lg:w-4/5">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching your criteria.
                </p>
                <button 
                  onClick={() => {
                    setPriceRange([0, 100000]);
                    setSortBy('featured');
                  }}
                  className="px-6 py-2 bg-[#3A3A3A] text-white font-medium rounded-md hover:bg-[#E8C694] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;