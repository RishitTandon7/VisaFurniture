import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { ChevronRight, Star, Truck, Shield, RotateCcw, Heart, Share2, Minus, Plus } from 'lucide-react';
import FeaturedProducts from '../components/FeaturedProducts';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '1');
  
  const product = productsData.find(p => p.id === productId) || productsData[0];
  
  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedColor, setSelectedColor] = useState('Natural');
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Additional product images (would come from product data in a real app)
  const productImages = [
    product.image,
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  
  const colors = ['Natural', 'Walnut', 'Oak', 'Black'];
  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);
  
  const formattedOldPrice = product.oldPrice 
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(product.oldPrice)
    : null;
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const addToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`);
    // In a real app, this would dispatch to a cart state/context
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      alert(`Added ${product.name} to wishlist!`);
    } else {
      alert(`Removed ${product.name} from wishlist!`);
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#E8C694] transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/collection" className="hover:text-[#E8C694] transition-colors">Collection</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-[#E8C694] transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-[#3A3A3A] font-medium">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                    mainImage === image ? 'border-[#E8C694]' : 'border-transparent'
                  }`}
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`} 
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            {(product.isNew || product.discount) && (
              <div className="flex space-x-3 mb-4">
                {product.isNew && (
                  <span className="bg-[#E8C694] text-white text-xs font-medium px-3 py-1 rounded-sm">
                    NEW
                  </span>
                )}
                {product.discount && (
                  <span className="bg-[#3A3A3A] text-white text-xs font-medium px-3 py-1 rounded-sm">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-[#E8C694] fill-[#E8C694]' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-500 ml-2">({product.reviewCount} reviews)</span>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-2xl font-bold text-[#3A3A3A] mr-3">{formattedPrice}</span>
              {formattedOldPrice && (
                <span className="text-gray-400 line-through">{formattedOldPrice}</span>
              )}
            </div>
            
            <p className="text-gray-600 mb-8">
              Elevate your space with this exquisite {product.name.toLowerCase()}, meticulously crafted from premium materials. The elegant design seamlessly blends contemporary style with timeless appeal, making it a perfect addition to your home.
            </p>
            
            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-medium text-[#3A3A3A] mb-3">Color</h3>
              <div className="flex space-x-4">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      selectedColor === color 
                        ? 'border-[#E8C694]' 
                        : 'border-gray-300'
                    }`}
                    title={color}
                  >
                    <span 
                      className={`w-8 h-8 rounded-full ${
                        color === 'Natural' ? 'bg-amber-200' :
                        color === 'Walnut' ? 'bg-amber-800' :
                        color === 'Oak' ? 'bg-amber-400' :
                        'bg-gray-900'
                      }`}
                    ></span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="font-medium text-[#3A3A3A] mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-md"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={addToCart}
                className="flex-1 px-6 py-3 bg-[#3A3A3A] text-white font-medium rounded-md hover:bg-[#E8C694] transition-colors flex items-center justify-center"
              >
                Add to Cart
              </button>
              <button 
                onClick={toggleFavorite}
                className={`w-12 h-12 rounded-md flex items-center justify-center ${
                  isFavorite 
                    ? 'bg-[#E8C694] text-white' 
                    : 'border border-gray-300 text-gray-600 hover:border-[#E8C694] hover:text-[#E8C694]'
                } transition-colors`}
              >
                <Heart className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center text-gray-600 hover:border-[#E8C694] hover:text-[#E8C694] transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
            
            {/* Product Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center p-3 border border-gray-200 rounded-md">
                <Truck className="h-5 w-5 text-[#E8C694] mr-3" />
                <span className="text-sm text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-md">
                <Shield className="h-5 w-5 text-[#E8C694] mr-3" />
                <span className="text-sm text-gray-700">5 Year Warranty</span>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-md">
                <RotateCcw className="h-5 w-5 text-[#E8C694] mr-3" />
                <span className="text-sm text-gray-700">30 Day Returns</span>
              </div>
            </div>
            
            {/* Delivery Estimate */}
            <div className="p-4 bg-gray-50 rounded-md mb-6">
              <p className="text-gray-700">
                <span className="font-medium">Estimated Delivery:</span> 7-10 business days
              </p>
            </div>
            
            {/* SKU and Categories */}
            <div className="text-sm text-gray-500">
              <p className="mb-1"><span className="font-medium">SKU:</span> VF-{product.id.toString().padStart(4, '0')}</p>
              <p><span className="font-medium">Category:</span> {product.category}</p>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mb-16">
          <div className="flex border-b border-gray-200 mb-6">
            <button 
              onClick={() => setActiveTab('description')}
              className={`py-3 px-6 font-medium ${
                activeTab === 'description' 
                  ? 'text-[#3A3A3A] border-b-2 border-[#E8C694]' 
                  : 'text-gray-500 hover:text-[#3A3A3A]'
              } transition-colors`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab('specifications')}
              className={`py-3 px-6 font-medium ${
                activeTab === 'specifications' 
                  ? 'text-[#3A3A3A] border-b-2 border-[#E8C694]' 
                  : 'text-gray-500 hover:text-[#3A3A3A]'
              } transition-colors`}
            >
              Specifications
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`py-3 px-6 font-medium ${
                activeTab === 'reviews' 
                  ? 'text-[#3A3A3A] border-b-2 border-[#E8C694]' 
                  : 'text-gray-500 hover:text-[#3A3A3A]'
              } transition-colors`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Product Description</h3>
                <p className="text-gray-600 mb-4">
                  The {product.name} represents the perfect blend of form and function. Each piece is meticulously crafted by skilled artisans using premium materials to ensure exceptional quality and longevity.
                </p>
                <p className="text-gray-600 mb-4">
                  The elegant design features clean lines and a sophisticated silhouette that complements a variety of interior styles, from contemporary to traditional. The {selectedColor.toLowerCase()} finish adds warmth and character, creating a welcoming atmosphere in any space.
                </p>
                <p className="text-gray-600">
                  Built with durability in mind, this piece features solid hardwood construction, reinforced joints, and premium upholstery to withstand the rigors of daily use. The thoughtful design includes practical features like ample storage and ergonomic comfort, making it as functional as it is beautiful.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[#3A3A3A] mb-3">Dimensions</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><span className="font-medium">Length:</span> 180 cm</li>
                      <li><span className="font-medium">Width:</span> 90 cm</li>
                      <li><span className="font-medium">Height:</span> 75 cm</li>
                      <li><span className="font-medium">Weight:</span> 45 kg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3A3A3A] mb-3">Materials</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><span className="font-medium">Frame:</span> Solid Oak/Walnut</li>
                      <li><span className="font-medium">Upholstery:</span> Premium Fabric/Leather</li>
                      <li><span className="font-medium">Finish:</span> Water-Based, Low VOC</li>
                      <li><span className="font-medium">Hardware:</span> Brass/Stainless Steel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3A3A3A] mb-3">Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Sustainably sourced materials</li>
                      <li>Hand-finished by skilled artisans</li>
                      <li>Stain and water-resistant treatment</li>
                      <li>Adjustable components</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#3A3A3A] mb-3">Care Instructions</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Dust regularly with a soft, dry cloth</li>
                      <li>Clean spills immediately with a damp cloth</li>
                      <li>Avoid direct sunlight and heat sources</li>
                      <li>Use recommended wood polish every 3-6 months</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">Customer Reviews</h3>
                <div className="flex items-center mb-6">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-[#E8C694] fill-[#E8C694]' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium text-[#3A3A3A]">{product.rating} out of 5</span>
                  <span className="text-gray-500 ml-2">({product.reviewCount} reviews)</span>
                </div>
                
                <div className="space-y-6 mb-8">
                  {/* Sample reviews - in a real app, these would come from an API */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <img 
                          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-[#3A3A3A]">Priya Sharma</h4>
                          <p className="text-sm text-gray-500">2 months ago</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? 'text-[#E8C694] fill-[#E8C694]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Absolutely love this piece! The craftsmanship is exceptional and it fits perfectly in my living room. The color is exactly as shown in the photos. Delivery was on time and the assembly was straightforward.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <img 
                          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-[#3A3A3A]">Rahul Kapoor</h4>
                          <p className="text-sm text-gray-500">1 month ago</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? 'text-[#E8C694] fill-[#E8C694]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Great quality for the price. The design is elegant and makes a statement in my home office. The only reason I'm giving 4 stars instead of 5 is that it took longer than expected to arrive. Otherwise, very satisfied with my purchase.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <img 
                          src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-[#3A3A3A]">Anjali Patel</h4>
                          <p className="text-sm text-gray-500">2 weeks ago</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? 'text-[#E8C694] fill-[#E8C694]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">
                      This exceeded my expectations! The attention to detail is impressive, and it's even more beautiful in person than in the photos. I'm already planning to purchase more pieces from this collection. Highly recommend!
                    </p>
                  </div>
                </div>
                
                <button className="px-6 py-3 border border-[#3A3A3A] text-[#3A3A3A] font-medium rounded-md hover:bg-[#E8C694] hover:border-[#E8C694] hover:text-white transition-colors">
                  Write a Review
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div>
          <h3 className="text-2xl font-bold text-[#3A3A3A] mb-8">You May Also Like</h3>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;