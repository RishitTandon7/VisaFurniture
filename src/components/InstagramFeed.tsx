import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    link: "https://instagram.com"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    link: "https://instagram.com"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg",
    link: "https://instagram.com"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg",
    link: "https://instagram.com"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/3740982/pexels-photo-3740982.jpeg",
    link: "https://instagram.com"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    link: "https://instagram.com"
  }
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#E8C694] font-medium mb-2 block uppercase tracking-wider">Instagram</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-4">Follow Us @visafurniture</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get inspired by our latest designs and customer showcases on Instagram
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={post.id}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={post.image} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <Instagram className="text-white h-8 w-8" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;